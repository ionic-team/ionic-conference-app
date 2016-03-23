import { TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS} from 'angular2/platform/testing/browser';
import { setBaseTestProviders } from 'angular2/testing';

// this needs doing _once_ for the entire test suite, hence it's here
setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

export function main(): void {
    'use strict';

    describe('ConferenceApp', () => {

        beforeEach(() => {
          // TODO: initialise conferenceApp instance
        });


        it('hello world test', () => {
          expect('hello testing world').not.toBe(null);
        });

    });
}
