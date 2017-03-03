// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

angular.module('mm', ['ionic', 'mm.core', 'ngCordova', 'angular-md5', 'pascalprecht.translate', 'ngAria', 'oc.lazyLoad', 'ckeditor',
            'ngMessages'])
.run(["$ionicPlatform", function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
            window.cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
}]);

angular.module('mm.core')

.constant('mmCoreConfigConstants', {
    "app_id" : "uk.ac.bath.moodlemobile",
    "appname": "University of Bath: Moodle",
    "versioncode" : "2017",
    "versionname" : "3.2.1",
    "cache_expiration_time" : 300000,
    "default_lang" : "en",
    "languages": {"ar": "عربي", "bg": "Български", "ca": "Català", "cs": "Čeština", "da": "Dansk", "de": "Deutsch","en": "English", "es": "Español", "es-mx": "Español - México", "eu": "Euskara", "fa": "فارسی", "fr" : "Français", "he" : "עברית", "hu": "magyar", "it": "Italiano", "ja": "日本語","nl": "Nederlands", "pl": "Polski", "pt-br": "Português - Brasil", "pt": "Português - Portugal", "ro": "Română", "ru": "Русский", "sv": "Svenska", "tr" : "Türkçe", "zh-cn" : "简体中文", "zh-tw" : "正體中文"},
    "wsservice" : "moodle_mobile_app",
    "wsextservice" : "local_mobile",
        "gcmpn": "570453131106",
    "customurlscheme": "moodlemobile",
    "siteurl": "http://moodle.bath.ac.uk",
    "skipssoconfirmation": "false",
    "forcedefaultlanguage": "false",
    "privacypolicy": "https://moodle.org/mod/page/view.php?id=8148"
}
);