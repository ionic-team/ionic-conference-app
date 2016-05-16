const CACHE_NAME = 'ionic-conf-site-v1';
const urlsToCache = [
    '/'
];

self.addEventListener('install', (event) => {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                console.log(urlsToCache);
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch',(event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }

                return fetch(event.request);
            }
            )
    );
});