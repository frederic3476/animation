'use strict';

try {

    window.$ = window.jQuery = require('jquery');
    window.Vue = require('vue');
    //window.collect = require('collect.js');



    $(document).ready(function(){
        /** Add Support for Animate.css ES6 Promises & Delay **/
        $.fn.extend({
            animateCss: function (animationName, delay = 0) {
                let _root = $(this);
                return new Promise((resolve, reject) => {
                    setTimeout(function(){
                        let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                        if(!_root.length){
                            reject(
                                new Error(animationName + ' Element not found!')
                            );
                        }
                        console.info(animationName + ' Starting...');
                        console.info(_root);
                        if(_root.hasClass('hidden')){
                            _root.removeClass('hidden');
                        }

                        _root.addClass('animated ' + animationName)
                            .one(animationEnd, function() {
                                if(_root.removeClass('animated ' + animationName)){
                                    console.info(animationName + ' Complete!');
                                    resolve(_root);
                                }else{
                                    reject(
                                        new Error(animationName + ' Failed!'));
                                }
                            });
                    }, delay);
                });
            }
        });
    });
} catch (e) {
    console.log('JS Init Failed ' + e);
}
