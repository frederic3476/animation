'use strict';
import "./style.scss";
require('./bootstrapper.js');


$(document).ready(function(){


    /** Animate **/
    $('#logo').animateCss('zoomInDown')
    .then(element=> {
        return element.animateCss('flash');
    })
    .then(element=> {
        return element.animateCss('flip');
    })
    .then(element=> {
        return element.animateCss('zoomOutDown');
    })
    .then(element=> {
        return element.animateCss('zoomInDown');
    });
});