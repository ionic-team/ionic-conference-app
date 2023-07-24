import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bid.miningexpo',
  appName: 'Mining Expo',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    },
  },
  //cordova: {
    // preferences: {
      // ScrollEnabled: 'false',
      // BackupWebStorage: 'none',
      // SplashMaintainAspectRatio: 'true',
      // FadeSplashScreenDuration: '300',
      // SplashShowOnlyFirstTime: 'false',
      // SplashScreen: 'screen',
      // SplashScreenDelay: '3000'
    // }
  //}
};

export default config;
