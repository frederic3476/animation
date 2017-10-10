'use strict';
import "./style.scss";
require('./bootstrapper.js');


$(document).ready(function(){

    /** Animate **/
    $('#logo').animateCss('zoomInDown',0.5)
    .then(element=> {
        return element.animateCss('flash',1.5,1.0);
    })
    .then(element=> {
        return element.animateCss('flip',1.5,0.1);
    })
    .then(element=> {
        return element.animateCss('zoomOutDown',1.6,0.1);
    })
    .then(element=> {
        return element.animateCss('zoomInDown',0.5,0.1);
    });
});