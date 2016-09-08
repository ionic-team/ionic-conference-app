/*
 Copyright 2014 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

// While overkill for this specific sample in which there is only one cache,
// this is one best practice that can be followed in general to keep track of
// multiple caches used by a given service worker, and keep them all versioned.
// It maps a shorthand identifier for a cache to a specific, versioned cache name.

// Note that since global state is discarded in between service worker restarts, these
// variables will be reinitialized each time the service worker handles an event, and you
// should not attempt to change their values inside an event handler. (Treat them as constants.)

// If at any point you want to force pages that use this service worker to start using a fresh
// cache, then increment the CACHE_VERSION value. It will kick off the service worker update
// flow and the old cache(s) will be purged as part of the activate event handler when the
// updated service worker is activated.
var CACHE_VERSION = 2;
var CURRENT_CACHES = {
    'read-through': 'read-through-cache-v' + CACHE_VERSION
};

self.addEventListener('activate', function (event) {
    // Delete all caches that aren't named in CURRENT_CACHES.
    // While there is only one cache in this example, the same logic will handle the case where
    // there are multiple versioned caches.
    var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function (key) {
        return CURRENT_CACHES[key];
    });

    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (expectedCacheNames.indexOf(cacheName) === -1) {
                        // If this cache name isn't present in the array of "expected" cache names, then delete it.
                        console.log('Deleting out of date cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', function (event) {

    event.respondWith(
        caches.open(CURRENT_CACHES['read-through']).then(function (cache) {
            return cache.match(event.request).then(function (response) {
                if (response) {
                    // If there is an entry in the cache for event.request, then response will be defined
                    // and we can just return it.

                    return response;
                }

                // Otherwise, if there is no entry in the cache for event.request, response will be
                // undefined, and we need to fetch() the resource.
                console.log(' No response for %s found in cache. ' +
                    'About to fetch from network...', event.request.url);

                // We call .clone() on the request since we might use it in the call to cache.put() later on.
                // Both fetch() and cache.put() "consume" the request, so we need to make a copy.
                // (see https://fetch.spec.whatwg.org/#dom-request-clone)
                return fetch(event.request.clone()).then(function (response) {

                    // Modified here, added check for response.type == 'basic' to only cache local assets
                    if (response.status < 400 && response.type === 'basic') {
                        // We need to call .clone() on the response object to save a copy of it to the cache.
                        // (https://fetch.spec.whatwg.org/#dom-request-clone)
                        cache.put(event.request, response.clone());
                    }

                    // Return the original response object, which will be used to fulfill the resource request.
                    return response;
                });
            }).catch(function (error) {
                // This catch() will handle exceptions that arise from the match() or fetch() operations.
                // Note that a HTTP error response (e.g. 404) will NOT trigger an exception.
                // It will return a normal response object that has the appropriate error code set.
                console.error('  Read-through caching failed:', error);

                throw error;
            });
        })
    );
});