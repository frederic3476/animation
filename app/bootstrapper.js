'use strict';

try {

    window.$ = window.jQuery = require('jquery');
    window.Vue = require('vue');
    window.collect = require('collect.js');
    require('./animateCssPromise.js');

} catch (e) {
    console.log('JS Init Failed ' + e);
}
