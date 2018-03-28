'use strict';
//import style = require('./style.scss');

import bootstrapper = require('./bootstrapper.js');
import TweenLite from 'gsap';
import TimelineLite = require('gsap/TimelineLite');
// import {Pew} from './pew.js';
//import MyFrontEndComponent = require('./src/MyFrontEndComponent.js');
import {Greeter} from './greeter';

import Rx = require('rxjs/Rx');
import $  = require('jquery');

// let pew = new Pew();

// pew.addRegistryEntry(
//     {
//         classDef: 'MyFrontEndComponent', 
//         domSelector: '.test-component', 
//         key: 'myFrontEndComponentRegistryEntryKey'
//     }
// );

// pew.enhanceRegistry();

$(function() {

   
    /** Animate **/
    // $('#logo').animateCss('zoomInDown',0.5)
    // .then(element=> {
    //     return element.animateCss('flash',1.5,1.0);
    // })
    // .then(element=> {
    //     return element.animateCss('flip',1.5,0.1);
    // })
    // .then(element=> {
    //     return element.animateCss('zoomOutDown',1.6,0.1);
    // })
    // .then(element=> {
    //     return element.animateCss('zoomInDown',0.5,0.1);
    // });

    let myFunction = () => console.log('animate finish');
    var tl = new TimelineLite({onComplete:myFunction});
//add a tween
tl.add( TweenLite.to($('#logo'), 1, {left:200, top:100}) );
        
//add another tween at the end of the timeline (makes sequencing easy)
tl.add( TweenLite.to($('#logo'), 0.5, {opacity:0.5}) );
 
//append a tween using the convenience method (shorter syntax) and offset it by 0.5 seconds
tl.to($('#logo'), 1, {rotation:30}, "+=0.5");
         
//reverse anytime
tl.reverse();
//Add a "spin" label 3-seconds into the timeline
tl.addLabel("spin", 3);
//insert a rotation tween at the "spin" label (you could also define the insertion point as the time instead of a label)
tl.add( TweenLite.to($('#logo'), 2, {rotation:"+=360"}), "spin");
    
//go to the "spin" label and play the timeline from there
tl.play("spin");
//nest another TimelineLite inside your timeline...
var nested = new TimelineLite();
nested.to($('#logo'), 1, {left:400});
tl.append(nested);
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
