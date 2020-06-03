var nav = ('.nav-open');
var btn = ('.btn');
var l = ('.img1');




var j = function(){
TweenMax.to(nav, 2,{onComplete:k});
} 

var f = function(){
  gsap.to(".foot", 3, {opacity:1, x:1500});
}

var k = function(){
  gsap.to(".me", 2, {opacity:1, x:500});
}

var h = function(){
  gsap.to(".s", 1, {opacity:1});
}

var l = function() {
 gsap.to(".ls" , 0.7, {opacity:1, rotation: 360, ease: "power1.out"});

}


TweenMax.to("me", 1, {onComplete:k});