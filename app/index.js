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

// var box = document.getElementById('box');
// let lastScrollTop = 0;
// let first = true;
// let tl = new TimelineLite();

// let handleScroll = () => {
//     var st = window.scrollY;
//     console.log(st);
//     // console.log('box '+box.scrollHeight + 'window ' +window.scrollY);
//     if (st > lastScrollTop && window.scrollY >= box.scrollHeight-(window.screen.height/2)) {        
//         if (first) {
//             console.log('first');
//             tl.from($('#box'), 1, {
//                 left:200, 
//                 opacity: 1, 
//                 height:100, 
//                 borderRadius: "50%",
//                 backgroundColor: "red"});            
//             first = false;
//         }
//         else {
//             tl.play();
//         }
//         //window.removeEventListener('scroll', () => console.log('remove'));
//     }
//     else if(st < lastScrollTop && window.scrollY <= box.scrollHeight-(window.screen.height/2)) 
//     {
//         tl.reverse();
//     }
//     lastScrollTop = st;
// }

// window.addEventListener('scroll', handleScroll);

var $box = $('#box');
// TweenLite.to($box, 0.7, {left: 0, x: 0});
// TweenLite.from($box, 2, {x: '-=200px', autoAlpha: 0});
// TweenLite.set($box, {x: '-=200px', scale: 0.3});
// TweenLite.set($box, {x: '+=100px', scale: 0.6, delay: 1});
// TweenLite.set($box, {x: '-50%', scale: 1, delay: 2});
// TweenLite.fromTo($box, 2, {x: '-=200px'}, {x: 150});
// TweenLite.fromTo($box, 2, {x: '-=200px'}, {x: 150, ease:Power4.easeInOut});
// TweenLite.to($box, 0.4, {top: '100%', y: '-100%', ease:Bounce.easeOut, delay: 2});
// TweenLite.to($box, 0.7, {x: '-=200px', y: '-100%', ease:Back.easeInOut, delay: 3});
// TweenLite.to($box, 0.8, {x: '-=200px', y: '-100%', ease:Back.easeInOut, delay: 4.2});
// TweenLite.to($box, 2.5, {top: '50%', y: '-50%', ease:Power0.easeNone, delay: 5});
// TweenLite.to($box, 2.5, {x: '+=400px', ease:Elastic.easeInOut, delay: 7.7});
// TweenLite.to($box, 2.5, {x: '-=400px', rotation: -720, ease: SlowMo.ease.config(0.1, 0.7, false), delay: 10.4});
// TweenLite.fromTo(
//     $box, 
//     2, {x: '-=200px'}, 
//     {
//         x: 150, 
//         rotation: 360,
//         ease:Power4.easeInOut, 
//         onStart: start,
//         onUpdate: update
//     }
// );

var tl = new TimelineMax({onComplete:myFunction});
tl.add(TweenLite.to("#banderole", 1, {height:200}, 0));
tl.staggerFrom(".msg", 1, {
    opacity: 0,
    cycle:{
      x:[-100, 100],
      ease: Elastic.easeOut
    }
  }, 0.8);

tl.add(TweenLite.fromTo("#smartphone", 1, {x:40,alpha: 0},{x:-100, alpha: 1}), "-=2.4");  

function myFunction(){
    tl.timeScale(3);
    tl.reverse();
}

$("#repeat").click(function(event) {
    tl.timeScale(1);
    tl.play();
});

//callback functions
function start(){
    console.log('start');
  }
  function update(){
    console.log('animating');
  }
  function complete(){
    console.log('end');
  }

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