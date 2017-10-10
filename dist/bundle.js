/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	// randomly using ES7 object rest spread because it currently raises
	// an error in all browsers, but can be transpiled by Babel
	// const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
	// const n = { x, y, ...z };
	// if (Object.keys(n).map((key) => n[key]).reduce((p,v) => p + v) === 10) {
	//   document.querySelector('#app').insertAdjacentHTML('afterbegin', '<h1>works.</h1>');
	// }


	/** Add Support for Animate.css ES6 Promises & Delay **/
	$.fn.extend({
	    animateCss: function animateCss(animationName) {
	        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	        var _root = $(this);
	        return new Promise(function (resolve, reject) {
	            setTimeout(function () {
	                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	                if (!_root.length) {
	                    reject(new Error(animationName + ' Element not found!'));
	                }
	                console.info(animationName + ' Starting...');
	                console.info(_root);
	                if (_root.hasClass('hidden')) {
	                    _root.removeClass('hidden');
	                }

	                _root.addClass('animated ' + animationName).one(animationEnd, function () {
	                    if (_root.removeClass('animated ' + animationName)) {
	                        console.info(animationName + ' Complete!');
	                        resolve(_root);
	                    } else {
	                        reject(new Error(animationName + ' Failed!'));
	                    }
	                });
	            }, delay);
	        });
	    }
	});

	$(document).ready(function () {
	    $('#logo').animateCss('fadeIn').then(function (element) {
	        return element.animateCss('flash');
	    }).then(function (element) {
	        return element.animateCss('fadeOut');
	    });
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);