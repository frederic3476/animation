'use strict';
import "./style.scss";
require('./bootstrapper.js');


$(document).ready(function(){
    /** Animate **/
    $('#logo').animateCss('fadeIn')
    .then(element=> {
        return element.animateCss('flash');
    })
    .then(element=> {
        return element.animateCss('fadeOut');
    })
    .then(element=> {
        return element.addClass('hidden');
    });
});