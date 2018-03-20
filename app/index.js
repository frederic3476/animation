'use strict';
require('./style.scss');
require('./bootstrapper.js');

var Rx = require('rxjs/Rx');

$(function() {

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

Rx.Observable.fromEvent(document.querySelector('#input'), 'keyup')
//.throttleTime(1000)
.map((event) => event.target.value)
.subscribe((value) => 
    {
        $('#logo').animateCss(value,0.5).then(function(){
            console.log('animated '+ value);
        });
    },
    (error) => console.log(error)
    );

    Rx.Observable.fromEvent(document.querySelector('#but'), 'click')
    .subscribe((event) => 
        {
            $('#logo').animateCss('zoomInDown',0.5).then(function(){
                console.log('test click');
            });
        },
        (error) => console.log(error)
        );
