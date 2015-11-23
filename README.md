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
* Run `npm install --production` on project root.
* Install the ionic-cli if not already (`npm install -g ionic@alpha`)
* Run `ionic serve` in project root.
* Profit

## App Preview

### iPhone 6
<img src="resources/screenshots/iphone/1.png" alt="Sessions" width="360">
<img src="resources/screenshots/iphone/2.png" alt="Filter Sessions" width="360">
<img src="resources/screenshots/iphone/3.png" alt="Speakers" width="360">
<img src="resources/screenshots/iphone/4.png" alt="Speaker Detail" width="360">
<img src="resources/screenshots/iphone/5.png" alt="Map" width="360">
<img src="resources/screenshots/iphone/6.png" alt="About" width="360">

### Nexus 5

<img src="resources/screenshots/nexus/1.png" alt="Sessions" width="360">
<img src="resources/screenshots/nexus/2.png" alt="Filter Sessions" width="360">
<img src="resources/screenshots/nexus/3.png" alt="Speakers" width="360">
<img src="resources/screenshots/nexus/4.png" alt="Speaker Detail" width="360">
<img src="resources/screenshots/nexus/5.png" alt="Map" width="360">
<img src="resources/screenshots/nexus/6.png" alt="About" width="360">

## Use Cases

* Tabs - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/tabs/tabs.html) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/tabs/tabs.js) ]
* Segments - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/schedule/schedule.html#L3-L10) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/schedule/schedule.js#L18) ]
* Search bar - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/schedule/schedule.html#L17) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/schedule/schedule.js#L49-L67) ]
* Sliding items with buttons - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/session-list/session-list.html#L6-L21) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/session-list/session-list.js#L26-L82) ]
* Modals - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/session-filter/session-filter.html) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/schedule/schedule.js#L69-L71) ]
* Action Sheet - [ [template](https://github.com/3dd13/ionic-conference-app/blob/master/www/app/speaker-list/speaker-list.html#L33) | [code](https://github.com/3dd13/ionic-conference-app/blob/master/www/app/speaker-list/speaker-list.js#L60-L87) ]
* Toggle / switches - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/session-filter/session-filter.html#L16-L19) ]
* Cards - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/speaker-list/speaker-list.html#L7-L39) ]
* Sticky headers - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/session-list/session-list.html#L3-L5) ]
* Grid - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/login/login.html#L22-L29) ]
* Using Angular HTTP for JSON - [ [code](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/service/data.js#L22-L26) | [usage](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/schedule/schedule.js#L15-L17) ]
* Adding an attribute (no-lines) dynamically - [
[template](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/session-list/session-list.html#L1) |
[code](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/session-list/session-list.js#L23) ]
* Using Config - [ [code](https://github.com/driftyco/ionic-conference-app/blob/master/www/app/app.js#L9-L16) ]

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
│   │   │── data/                      * Contains all app data
│   │   │    ├── categories.json       * Category data
│   │   │    └── info.json             * Conference data
│   │   │    └── schedule.json         * Schedule data
│   │   │    └── speakers.json         * Speakers data
│   │   │
│   │   │── date-format/               * DateFormat component
│   │   │    └── date-format.js        * DateFormat component
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
│   │   │── pipes/                     * Contains all pipes
│   │   │    ├── convert-date.js       * ConvertDate pipe
│   │   │
│   │   │── schedule/                  * Schedule tab page
│   │   │    ├── schedule.html         * SchedulePage template
│   │   │    └── schedule.js           * SchedulePage code
│   │   │    └── schedule.scss         * SchedulePage stylesheet
│   │   │
│   │   │── service/                   * Contains all services
│   │   │    ├── data.js               * DataService code
│   │   │
│   │   │── session-detail/            * Session Detail page
│   │   │    ├── session-detail.html   * SessionDetailPage template
│   │   │    └── session-detail.js     * SessionDetailPage code
│   │   │    └── session-detail.scss   * SessionDetailPage stylesheet
│   │   │
│   │   │── session-filter/            * Session Filter page
│   │   │    ├── session-filter.html   * SessionFilterPage template
│   │   │    └── session-filter.js     * SessionFilterPage code
│   │   │    └── session-filter.scss   * SessionFilterPage stylesheet
│   │   │
│   │   │── session-list/              * Session List page
│   │   │    ├── session-list.html     * SessionListPage template
│   │   │    └── session-list.js       * SessionListPage code
│   │   │    └── session-list.scss     * SessionListPage stylesheet
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
│   │   │── tabs/              * Tabs page
│   │   │    ├── tabs.html     * TabsPage template
│   │   │    └── tabs.js       * TabsPage code
│   │   │
│   │   ├── app.html                   * Application template
│   │   ├── app.js                     * Main Application configuration
│   │   └── app.scss                   * Sass imports
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
├── .gitignore                         * Example git ignore file
├── package.json                       * Our javascript dependencies
├── README.md                          * This file
├── tsconfig.json                      * Configures the TypeScript compiler
├── config.xml                         * Cordova configuration file
├── ionic.config.js                    * Ionic configuration file
└── webpack.config.js                  * Webpack configuration file
```

## Coming Soon

We'll also be showing how to use native plugins:

- Camera access
- Geolocation
