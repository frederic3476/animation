'use strict';
require('./style.scss');
require('./bootstrapper.js');
require('gsap');

var Rx = require('rxjs/Rx');

// $(function() {

//     /** Animate **/
//     $('#logo').animateCss('zoomInDown',0.5)
//     .then(element=> {
//         return element.animateCss('flash',1.5,1.0);
//     })
//     .then(element=> {
//         return element.animateCss('flip',1.5,0.1);
//     })
//     .then(element=> {
//         return element.animateCss('zoomOutDown',1.6,0.1);
//     })
//     .then(element=> {
//         return element.animateCss('zoomInDown',0.5,0.1);
//     });

// });

var box = document.getElementById('box');
let lastScrollTop = 0;
let first = true;
let tl = new TimelineLite();

let handleScroll = () => {
    var st = window.scrollY;
    console.log(st);
    // console.log('box '+box.scrollHeight + 'window ' +window.scrollY);
    if (st > lastScrollTop && window.scrollY >= box.scrollHeight-(window.screen.height/2)) {        
        if (first) {
            console.log('first');
            tl.from($('#box'), 1, {
                left:200, 
                opacity: 1, 
                height:100, 
                borderRadius: "50%",
                backgroundColor: "red"});            
            first = false;
        }
        else {
            tl.play();
        }
        //window.removeEventListener('scroll', () => console.log('remove'));
    }
    else if(st < lastScrollTop && window.scrollY <= box.scrollHeight-(window.screen.height/2)) 
    {
        tl.reverse();
    }
    lastScrollTop = st;
}

window.addEventListener('scroll', handleScroll);

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

        document.querySelector('#input').addEventListener('focus', function(){
            console.log('merci de taper le nom d\'une animation');
        })