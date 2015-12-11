var ionic_1 = require('ionic/ionic');
function run() {
    it('should set activator setting to none for old Android Browser on a linux device', function () {
        var config = new ionic_1.Config();
        var platform = new ionic_1.Platform();
        platform.userAgent('Mozilla/5.0 (Linux; U; Android 4.2.2; nl-nl; GT-I9505 Build/JDQ39) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30');
        platform.navigatorPlatform('linux');
        platform.load();
        config.setPlatform(platform);
        expect(config.get('activator')).toEqual('none');
    });
    it('should set activator setting to ripple for Android dev tools simulation on a mac', function () {
        var config = new ionic_1.Config();
        var platform = new ionic_1.Platform();
        platform.userAgent('Mozilla/5.0 (Linux; U; Android 4.2.2; nl-nl; GT-I9505 Build/JDQ39) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30');
        platform.navigatorPlatform('MacIntel');
        platform.load();
        config.setPlatform(platform);
        expect(config.get('activator')).toEqual('ripple');
    });
    it('should set activator setting to none for Android Chrome versions below v36 on a linux device', function () {
        var config = new ionic_1.Config();
        var platform = new ionic_1.Platform();
        platform.userAgent('Mozilla/5.0 (Linux; Android 4.2.2; GT-I9505 Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1650.59 Mobile Safari/537.36');
        platform.navigatorPlatform('linux');
        platform.load();
        config.setPlatform(platform);
        expect(config.get('activator')).toEqual('none');
    });
    it('should set activator setting to ripple for Android Chrome v36 and above on a linux device', function () {
        var config = new ionic_1.Config();
        var platform = new ionic_1.Platform();
        platform.userAgent('Mozilla/5.0 (Linux; Android 4.2.2; GT-I9505 Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1650.59 Mobile Safari/537.36');
        platform.navigatorPlatform('linux');
        platform.load();
        config.setPlatform(platform);
        expect(config.get('activator')).toEqual('ripple');
    });
    it('should set activator setting to ripple for Android v5.0 and above on a linux device not using Chrome', function () {
        var config = new ionic_1.Config();
        var platform = new ionic_1.Platform();
        platform.userAgent('Mozilla/5.0 (Android 5.0; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0');
        platform.navigatorPlatform('linux');
        platform.load();
        config.setPlatform(platform);
        expect(config.get('activator')).toEqual('ripple');
    });
    it('should set activator setting to none for Android versions below v5.0 on a linux device not using Chrome', function () {
        var config = new ionic_1.Config();
        var platform = new ionic_1.Platform();
        platform.userAgent('Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0');
        platform.navigatorPlatform('linux');
        platform.load();
        config.setPlatform(platform);
        expect(config.get('activator')).toEqual('none');
    });
    it('should create a new Config instace when no confg passed in ionicProviders', function () {
        var providers = ionic_1.ionicProviders();
        var config = providers.find(function (provider) { return provider.useValue instanceof ionic_1.Config; }).useValue;
        expect(config.get('mode')).toEqual('ios');
    });
    it('should used passed in Config instance in ionicProviders', function () {
        var userConfig = new ionic_1.Config({
            mode: 'configInstance'
        });
        var providers = ionic_1.ionicProviders({ config: userConfig });
        var config = providers.find(function (provider) { return provider.useValue instanceof ionic_1.Config; }).useValue;
        expect(config.get('mode')).toEqual('configInstance');
    });
    it('should create new Config instance from config object in ionicProviders', function () {
        var providers = ionic_1.ionicProviders({ config: {
                mode: 'configObj'
            } });
        var config = providers.find(function (provider) { return provider.useValue instanceof ionic_1.Config; }).useValue;
        expect(config.get('mode')).toEqual('configObj');
    });
    it('should override mode settings', function () {
        var config = new ionic_1.Config({
            mode: 'md'
        });
        var platform = new ionic_1.Platform(['ios']);
        config.setPlatform(platform);
        expect(config.get('mode')).toEqual('md');
        expect(config.get('tabbarPlacement')).toEqual('top');
    });
    it('should override mode settings from platforms setting', function () {
        var config = new ionic_1.Config({
            platforms: {
                ios: {
                    mode: 'md'
                }
            }
        });
        var platform = new ionic_1.Platform(['ios']);
        config.setPlatform(platform);
        expect(config.get('mode')).toEqual('md');
        expect(config.get('tabbarPlacement')).toEqual('top');
    });
    it('should get boolean value from querystring', function () {
        var config = new ionic_1.Config();
        var platform = new ionic_1.Platform();
        platform.url('http://biff.com/?ionicanimate=true');
        config.setPlatform(platform);
        expect(config.get('animate')).toEqual(true);
        config = new ionic_1.Config();
        platform = new ionic_1.Platform();
        platform.url('http://biff.com/?ionicanimate=false');
        config.setPlatform(platform);
        expect(config.get('animate')).toEqual(false);
    });
    it('should get value from case insensitive querystring key', function () {
        var config = new ionic_1.Config({
            mode: 'a'
        });
        var platform = new ionic_1.Platform();
        platform.url('http://biff.com/?ionicConfigKey=b');
        config.setPlatform(platform);
        expect(config.get('configKey')).toEqual('b');
    });
    it('should get value from querystring', function () {
        var config = new ionic_1.Config({
            mode: 'modeA'
        });
        var platform = new ionic_1.Platform();
        platform.url('http://biff.com/?ionicmode=modeB');
        config.setPlatform(platform);
        expect(config.get('mode')).toEqual('modeB');
    });
    it('should override mode platform', function () {
        var config = new ionic_1.Config({
            mode: 'modeA',
            platforms: {
                mobile: {
                    mode: 'modeB'
                },
                ios: {
                    mode: 'modeC'
                }
            }
        });
        var platform = new ionic_1.Platform(['mobile']);
        config.setPlatform(platform);
        expect(config.get('mode')).toEqual('modeB');
    });
    it('should override mode', function () {
        var config = new ionic_1.Config({
            mode: 'modeA'
        });
        var platform = new ionic_1.Platform(['core']);
        config.setPlatform(platform);
        expect(config.get('mode')).toEqual('modeA');
    });
    it('should get user settings after user platform settings', function () {
        var config = new ionic_1.Config({
            hoverCSS: true
        });
        var platform = new ionic_1.Platform(['ios']);
        config.setPlatform(platform);
        expect(config.get('hoverCSS')).toEqual(true);
    });
    it('should get ios mode for core platform', function () {
        var config = new ionic_1.Config();
        var platform = new ionic_1.Platform(['core']);
        config.setPlatform(platform);
        expect(config.get('mode')).toEqual('ios');
    });
    it('should get ios mode for ipad platform', function () {
        var config = new ionic_1.Config();
        var platform = new ionic_1.Platform(['mobile', 'ios', 'ipad', 'tablet']);
        config.setPlatform(platform);
        expect(config.get('mode')).toEqual('ios');
    });
    it('should get md mode for windowsphone platform', function () {
        var config = new ionic_1.Config();
        var platform = new ionic_1.Platform(['mobile', 'windowsphone']);
        config.setPlatform(platform);
        expect(config.get('mode')).toEqual('md');
    });
    it('should get md mode for android platform', function () {
        var config = new ionic_1.Config();
        var platform = new ionic_1.Platform(['mobile', 'android']);
        config.setPlatform(platform);
        expect(config.get('mode')).toEqual('md');
    });
    it('should override ios mode config with user platform setting', function () {
        var config = new ionic_1.Config({
            tabbarPlacement: 'hide',
            platforms: {
                ios: {
                    tabbarPlacement: 'top'
                }
            }
        });
        var platform = new ionic_1.Platform(['ios']);
        config.setPlatform(platform);
        expect(config.get('tabbarPlacement')).toEqual('top');
    });
    it('should override ios mode config with user setting', function () {
        var config = new ionic_1.Config({
            tabbarPlacement: 'top'
        });
        var platform = new ionic_1.Platform(['ios']);
        config.setPlatform(platform);
        expect(config.get('tabbarPlacement')).toEqual('top');
    });
    it('should get setting from md mode', function () {
        var config = new ionic_1.Config();
        var platform = new ionic_1.Platform(['android']);
        config.setPlatform(platform);
        expect(config.get('tabbarPlacement')).toEqual('top');
    });
    it('should get setting from ios mode', function () {
        var config = new ionic_1.Config();
        var platform = new ionic_1.Platform(['ios']);
        config.setPlatform(platform);
        expect(config.get('tabbarPlacement')).toEqual('bottom');
    });
    it('should set/get platform setting from set()', function () {
        var config = new ionic_1.Config();
        var platform = new ionic_1.Platform(['ios']);
        config.setPlatform(platform);
        config.set('tabbarPlacement', 'bottom');
        config.set('ios', 'tabbarPlacement', 'top');
        expect(config.get('tabbarPlacement')).toEqual('top');
    });
    it('should set/get setting from set()', function () {
        var config = new ionic_1.Config();
        var platform = new ionic_1.Platform(['ios']);
        config.setPlatform(platform);
        config.set('tabbarPlacement', 'top');
        expect(config.get('tabbarPlacement')).toEqual('top');
    });
    it('should set ios platform settings from settings()', function () {
        var config = new ionic_1.Config();
        var platform = new ionic_1.Platform(['ios']);
        config.setPlatform(platform);
        config.settings('ios', {
            key: 'iosValue'
        });
        expect(config.get('key')).toEqual('iosValue');
    });
    it('should set/get mobile setting even w/ higher priority ios', function () {
        var config = new ionic_1.Config();
        var platform = new ionic_1.Platform(['mobile', 'ios']);
        config.setPlatform(platform);
        config.settings({
            key: 'defaultValue',
            platforms: {
                mobile: {
                    key: 'mobileValue'
                }
            }
        });
        expect(config.get('key')).toEqual('mobileValue');
    });
    it('should set/get mobile setting even w/ higher priority ios', function () {
        var config = new ionic_1.Config();
        var platform = new ionic_1.Platform(['mobile', 'ios']);
        config.setPlatform(platform);
        config.settings({
            key: 'defaultValue',
            platforms: {
                mobile: {
                    key: 'mobileValue'
                }
            }
        });
        expect(config.get('key')).toEqual('mobileValue');
    });
    it('should set/get android setting w/ higher priority than mobile', function () {
        var config = new ionic_1.Config();
        var platform = new ionic_1.Platform(['mobile', 'android']);
        config.setPlatform(platform);
        config.settings({
            key: 'defaultValue',
            platforms: {
                mobile: {
                    key: 'mobileValue'
                },
                android: {
                    key: 'androidValue'
                }
            }
        });
        expect(config.get('key')).toEqual('androidValue');
    });
    it('should set/get ios setting w/ platforms set', function () {
        var config = new ionic_1.Config();
        var platform = new ionic_1.Platform(['ios']);
        config.setPlatform(platform);
        config.settings({
            key: 'defaultValue',
            platforms: {
                ios: {
                    key: 'iosValue'
                },
                android: {
                    key: 'androidValue'
                }
            }
        });
        expect(config.get('key')).toEqual('iosValue');
    });
    it('should set/get default setting w/ platforms set, but no platform match', function () {
        var config = new ionic_1.Config();
        config.settings({
            key: 'defaultValue',
            platforms: {
                ios: {
                    key: 'iosValue'
                },
                android: {
                    key: 'androidValue'
                }
            }
        });
        expect(config.get('key')).toEqual('defaultValue');
    });
    it('should set setting object', function () {
        var config = new ionic_1.Config();
        config.settings({
            name: 'Doc Brown',
            occupation: 'Weather Man'
        });
        expect(config.get('name')).toEqual('Doc Brown');
        expect(config.get('name')).toEqual('Doc Brown');
        expect(config.get('occupation')).toEqual('Weather Man');
        expect(config.get('occupation')).toEqual('Weather Man');
    });
    it('should get null setting', function () {
        var config = new ionic_1.Config();
        expect(config.get('name')).toEqual(null);
        expect(config.get('name')).toEqual(null);
        expect(config.get('occupation')).toEqual(null);
        expect(config.get('occupation')).toEqual(null);
    });
    it('should set/get single setting', function () {
        var config = new ionic_1.Config();
        config.set('name', 'Doc Brown');
        config.set('occupation', 'Weather Man');
        expect(config.get('name')).toEqual('Doc Brown');
        expect(config.get('name')).toEqual('Doc Brown');
        expect(config.get('occupation')).toEqual('Weather Man');
        expect(config.get('occupation')).toEqual('Weather Man');
    });
    it('should init w/ given config settings', function () {
        var config = new ionic_1.Config({
            name: 'Doc Brown',
            occupation: 'Weather Man'
        });
        expect(config.get('name')).toEqual('Doc Brown');
        expect(config.get('occupation')).toEqual('Weather Man');
    });
    it('should get settings object', function () {
        var config = new ionic_1.Config({
            name: 'Doc Brown',
            occupation: 'Weather Man'
        });
        expect(config.settings()).toEqual({
            name: 'Doc Brown',
            occupation: 'Weather Man'
        });
    });
    it('should create default config w/ bad settings value', function () {
        var config = new ionic_1.Config(null);
        expect(config.settings()).toEqual({});
        config = new ionic_1.Config(undefined);
        expect(config.settings()).toEqual({});
        config = new ionic_1.Config();
        expect(config.settings()).toEqual({});
        config = new ionic_1.Config([1, 2, 3]);
        expect(config.settings()).toEqual({});
        config = new ionic_1.Config('im bad, you know it');
        expect(config.settings()).toEqual({});
        config = new ionic_1.Config(8675309);
        expect(config.settings()).toEqual({});
        config = new ionic_1.Config(true);
        expect(config.settings()).toEqual({});
        config = new ionic_1.Config(false);
        expect(config.settings()).toEqual({});
        config = new ionic_1.Config(1);
        expect(config.settings()).toEqual({});
        config = new ionic_1.Config(function () { });
        expect(config.settings()).toEqual({});
    });
}
exports.run = run;