/** Add Support for Animate.css ES6 Promises **/
$.fn.extend({
    animateCss: function (animationName, duration = 1.0, delay = 0) {
        let _root = $(this);
        return new Promise((resolve, reject) => {

            //Animation Event Definitions
            let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

            //Reject Elements Not Found
            if(!_root.length){
                reject(
                    new Error(animationName + ' Element not found!')
                );
            }

            console.info(animationName + ' Starting...');
            console.info(_root);

            //Remove Hidden Class
            if(_root.hasClass('hidden')){
                _root.removeClass('hidden');
            }

            //Apply Animation Class and Override Timing
            _root.addClass(animationName).css({
                '-webkit-animation-delay': delay + 's',
                '-moz-animation-delay': delay + 's',
                '-ms-animation-delay': delay + 's',
                '-o-animation-delay': delay + 's',
                'animation-delay': delay + 's',
                '-webkit-animation-duration': duration + 's',
                '-moz-animation-duration': duration + 's',
                '-ms-animation-duration': duration + 's',
                '-o-animation-duration': duration + 's',
                'animation-duration': duration + 's',
            });

            //Create Animation & Resolve when Done
            _root.addClass('animated').one(animationEnd, function() {
                if(_root.removeClass('animated ' + animationName)){
                    console.info(animationName + ' Complete!');
                    resolve(_root);
                }else{
                    reject(new Error(animationName + ' Failed!'));
                }
            });
        });
    }
});