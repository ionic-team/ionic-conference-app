# Ionic 2 Conference Application

This is purely a demo of Ionic v2.0 alpha and is still in development. **There is not an actual Ionic Conference at this time.**


## Table of Contents
 - [Getting Started](#getting-started)
 - [App Preview](#app-preview)
  - [iPhone 6](#iphone-6)
  - [Nexus 5](#nexus-5)
 - [Use Cases](#use-cases)
 - [File Structure of App](#file-structure-of-app)
 - [Coming Soon](#coming-soon)


## Getting Started

* Clone this repository.
* Run `npm install` from the project root.
* Install the ionic CLI (`npm install -g ionic@beta`)
* Run `ionic serve` in a terminal from the project root.
* Profit


## Use Cases

* Menu - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/app.html#L3-L21) |
[code](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/app.js#L23-L30) ]
* Tabs - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/tabs/tabs.html) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/tabs/tabs.js) ]
* Segments - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/schedule/schedule.html#L6-L13) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/schedule/schedule.js#L24) ]
* Search bar - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/schedule/schedule.html#L24-L29) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/schedule/schedule.js#L36-L41) ]
* Sliding items with buttons - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/schedule/schedule.html#L40-L57) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/schedule/schedule.js#L60-L85) ]
* Modals - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/session-filter/session-filter.html) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/schedule/schedule.js#L43-L52) ]
* Action Sheet - [ [template](https://github.com/3dd13/ionic-conference-app/blob/master/www/app/speaker-list/speaker-list.html#L33) | [code](https://github.com/3dd13/ionic-conference-app/blob/master/www/app/speaker-list/speaker-list.js#L60-L87) ]
* Toggle / switches - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/schedule-filter/schedule-filter.html#L22-L25) ]
* Slides - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/tutorial/tutorial.html#L8-L40) |
[code](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/tutorial/tutorial.js#L17-L23) ]
* Cards - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/speaker-list/speaker-list.html#L9-L42) ]
* Sticky headers - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/schedule/schedule.html#L36-L38) ]
* Grid - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/login/login.html#L24-L31) ]
* Using Angular HTTP for JSON - [ [code](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/providers/conference-data.js#L25-L30) | [usage](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/schedule/schedule.js#L36-L41) ]


## App Preview

### iPhone 6
*Scroll to the right to see all of the images.*

<div class="image-slider">
  <div class="images">
    <!-- GIF of iOS app -->
    <img src="resources/gifs/ios.gif" alt="iOS">
    <!-- images of iOS app -->
    <img src="resources/screenshots/iphone/1.png" alt="Sessions">
    <img src="resources/screenshots/iphone/2.png" alt="Filter Sessions">
    <img src="resources/screenshots/iphone/3.png" alt="Speakers">
    <img src="resources/screenshots/iphone/4.png" alt="Speaker Detail">
    <img src="resources/screenshots/iphone/5.png" alt="Map">
    <img src="resources/screenshots/iphone/6.png" alt="About">
  </div>
</div>


### Nexus 5
*Scroll to the right to see all of the images.*

<div class="image-slider">
  <div class="images">
    <!-- GIF of MD app -->
    <img src="resources/gifs/nexus.gif" alt="MD">
    <!-- GIF of MD app -->
    <img src="resources/screenshots/nexus/1.png" alt="Sessions">
    <img src="resources/screenshots/nexus/2.png" alt="Filter Sessions">
    <img src="resources/screenshots/nexus/3.png" alt="Speakers">
    <img src="resources/screenshots/nexus/4.png" alt="Speaker Detail">
    <img src="resources/screenshots/nexus/5.png" alt="Map">
    <img src="resources/screenshots/nexus/6.png" alt="About">
  </div>
</div>

<style>
  .image-slider {
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
  }

  .images img {
    display: inline;
    height: 800px;
  }

</style>


## File Structure of App

```
ionic-conference-app/
├── node_modules/                      * Node dependencies
|
├── platforms/                         * Cordova generated native platform code
|
├── plugins/                           * Cordova native plugins go
|
├── resources/                         * Images for splash screens and icons
|
├── www/                               * Folder that is copied over to platforms www directory
│   ├── app/                           * Contains our application code
│   │   ├── about/                     * About tab page
│   │   │    ├── about.html            * AboutPage template
│   │   │    └── about.js              * AboutPage code
│   │   │    └── about.scss            * AboutPage stylesheet
│   │   │
│   │   │── data/                      * Contains json files
│   │   │    ├── data.json             * App data
│   │   │
│   │   │── login/                     * Login page
│   │   │    ├── login.html            * LoginPage template
│   │   │    └── login.js              * LoginPage code
│   │   │    └── login.scss            * LoginPage stylesheet
│   │   │
│   │   │── map/                       * Map tab page
│   │   │    ├── map.html              * MapPage template
│   │   │    └── map.js                * MapPage code
│   │   │    └── map.scss              * MapPage stylesheet
│   │   │
│   │   │── providers/                 * Contains all injectables
│   │   │    ├── conference-data.js    * ConferenceData code
│   │   │    └── user-data.js          * UserData code
│   │   │
│   │   │── schedule/                  * Schedule tab page
│   │   │    ├── schedule.html         * SchedulePage template
│   │   │    └── schedule.js           * SchedulePage code
│   │   │    └── schedule.scss         * SchedulePage stylesheet
│   │   │
│   │   │── schedule-filter/           * Schedule Filter page
│   │   │    ├── schedule-filter.html  * ScheduleFilterPage template
│   │   │    └── schedule-filter.js    * ScheduleFilterPage code
│   │   │    └── schedule-filter.scss  * ScheduleFilterPage stylesheet
│   │   │
│   │   │── session-detail/            * Session Detail page
│   │   │    ├── session-detail.html   * SessionDetailPage template
│   │   │    └── session-detail.js     * SessionDetailPage code
│   │   │
│   │   │── signup/                    * Signup page
│   │   │    ├── signup.html           * SignupPage template
│   │   │    └── signup.js             * SignupPage code
│   │   │
│   │   │── speaker-detail/            * Speaker Detail page
│   │   │    ├── speaker-detail.html   * SpeakerDetailPage template
│   │   │    └── speaker-detail.js     * SpeakerDetailPage code
│   │   │    └── speaker-detail.scss   * SpeakerDetailPage stylesheet
│   │   │
│   │   │── speaker-list/              * Speakers tab page
│   │   │    ├── speaker-list.html     * SpeakerListPage template
│   │   │    └── speaker-list.js       * SpeakerListPage code
│   │   │    └── speaker-list.scss     * SpeakerListPage stylesheet
│   │   │
│   │   │── tabs/                      * Tabs page
│   │   │    ├── tabs.html             * TabsPage template
│   │   │    └── tabs.js               * TabsPage code
│   │   │
│   │   │── tutorial/                  * Tutorial Intro page
│   │   │    ├── tutorial.html         * TutorialPage template
│   │   │    └── tutorial.js           * TutorialPage code
│   │   │    └── tutorial.scss         * TutorialPage stylesheet
│   │   │
│   │   ├── app.html                   * Application template
│   │   ├── app.js                     * Main Application configuration
│   │   ├── app.core.scss              * Shared Sass imports
│   │   ├── app.variables.scss         * Shared Sass variables
│   │   ├── app.ios.scss               * iOS specific Sass
│   │   └── app.md.scss                * MD specific Sass
│   │   
│   ├── build/                         * Contains compiled content
│   │     ├── css                      * Compiled CSS
│   │     ├── fonts                    * Copied Fonts
│   │     └── js                       * ES5 compiled JavaScript
│   │
│   ├── img/                           * App images
│   │
│   └── index.html                     * Main entry point
|
├── .editorconfig                      * Defines coding styles between editors
├── .gitignore                         * Example git ignore file
├── config.xml                         * Cordova configuration file
├── gulpfile.js                        * Gulp file
├── ionic.config.js                    * Ionic configuration file
├── LICENSE                            * Apache License
├── package.json                       * Our javascript dependencies
├── README.md                          * This file
├── tsconfig.json                      * Configures the TypeScript compiler
└── webpack.config.js                  * Webpack configuration file
```
