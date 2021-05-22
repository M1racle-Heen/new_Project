//var tl = new TimelineMax({onUpdate:updatePercentage});

var tl1 = new TimelineMax({
    onUpdate: updatePercentage
});
var tl4 = new TimelineMax({
    onUpdate: updatePercentage
});
var tl5 = new TimelineMax({
    onUpdate: updatePercentage
});
var tl6 = new TimelineMax({
    onUpdate: updatePercentage
});
var tl7 = new TimelineMax({
    onUpdate: updatePercentage
});
var tl8 = new TimelineMax({
    onUpdate: updatePercentage
});
var tl2 = new TimelineMax();

const controller = new ScrollMagic.Controller();

tl1.from("#hTl1", .5, {
    x: -200,
    opacity: 0
});
tl1.from("#rTl1", 1, {
    y: -100,
    opacity: 0
}, "=-1");
tl4.from("#hTl2", .5, {
    x: 200,
    opacity: 0
});
tl4.from("#rTl2", 1, {
    y: 100,
    opacity: 0
}, "=-1");
tl5.from("#hTl3", .5, {
    x: -200,
    opacity: 0
});
tl5.from("#rTl3", 1, {
    y: -100,
    opacity: 0
}, "=-1");
tl6.from("#hTl4", .5, {
    x: -200,
    opacity: 0
});
tl6.from("#rTl4", 1, {
    y: 100,
    opacity: 0
}, "=-1");
tl7.from("#hTl5", .5, {
    x: -200,
    opacity: 0
});
tl7.from("#rTl5", 1, {
    y: 100,
    opacity: 0
}, "=-1");
tl8.from("#hTl6", .5, {
    x: 200,
    opacity: 0
});
tl8.from("#rTl6", 1, {
    y: -200,
    opacity: 0
}, "=-1");
/*
tl.from("blockquote",.5,{x:200,opacity: 0});
tl.from("span",1,{width:0},"=-.5");
tl.from("#image1",1,{x:-200,opacity: 0},"=-1");
tl.from("#image2",1,{x:200,opacity: 0},"=-.6");
*/
tl2.from("#box", 1, {
    opacity: 0,
    scale: 0
});
tl2.to("#box", .5, {
    left: "20%",
    top: "6%",
    scale: 1.3,
    borderColor: 'white',
    borderWidth: 12,
    boxShadow: '1px 1px 0px 0px rgba(0,0,0,.09)'
});
/*
const scene = new ScrollMagic.Scene({
    triggerElement: ".sticky",
    triggerHook: "onLeave",
    duration: "80%"
})
    .setPin(".sticky")
    .setTween(tl)
    .addTo(controller);
*/
const scene1 = new ScrollMagic.Scene({
        triggerElement: ".text-box-catcher",
        triggerHook: "onLeave"
    })
    .setTween(tl1)
    .addTo(controller);

const scene2 = new ScrollMagic.Scene({
        triggerElement: "blockquote"
    })
    .setTween(tl2)
    .addTo(controller);

const scene4 = new ScrollMagic.Scene({
        triggerElement: "#catch1",
        triggerHook: "onLeave",
    })
    .setTween(tl4)
    .addTo(controller);


const scene5 = new ScrollMagic.Scene({
        triggerElement: "#catch3",
        triggerHook: "onLeave"
    })
    .setTween(tl5)
    .addTo(controller);

const scene6 = new ScrollMagic.Scene({
        triggerElement: "#catch2",
        triggerHook: "onLeave"
    })
    .setTween(tl6)
    .addTo(controller);

const scene7 = new ScrollMagic.Scene({
        triggerElement: "#catch2",
        triggerHook: "onLeave"
    })
    .setTween(tl7)
    .addTo(controller);

const scene8 = new ScrollMagic.Scene({
        triggerElement: "#catch4",
        triggerHook: "onLeave"
    })
    .setTween(tl8)
    .addTo(controller);



/*
function updatePercentage(){
    tl.progress();
    console.log(tl.progress());
}
*/

function updatePercentage() {
    tl1.progress();
    console.log(tl1.progress());
}

function updatePercentage() {
    tl4.progress();
    console.log(tl4.progress());
}

function updatePercentage() {
    tl5.progress();
    console.log(tl5.progress());
}

function updatePercentage() {
    tl6.progress();
    console.log(tl6.progress());
}

function updatePercentage() {
    tl7.progress();
    console.log(tl7.progress());
}

function updatePercentage() {
    tl8.progress();
    console.log(tl8.progress());
}


const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [{
            x: 100,
            y: -20
        },
        {
            x: 300,
            y: 10
        },
        {
            x: 500,
            y: 100
        },
        {
            x: 750,
            y: -100
        },
        {
            x: 350,
            y: -50
        },
        {
            x: 600,
            y: 100
        },
        {
            x: 800,
            y: 0
        },
        {
            x: window.innerWidth,
            y: -250
        },
    ]
}

const tween = new TimelineMax();

tween.add(
    TweenLite.to('.paper-plane', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const scene3 = new ScrollMagic.Scene({
        triggerElement: '.animation',
        duration: 2000,
        triggerHook: "onLeave"
    })
    .setTween(tween)
    .setPin(".animation")
    .addTo(controller);


$(document).ready(function () {
    var parallaxSlider;
    var parallaxSliderOptions = {
        speed: 1000,
        autoplay: true,
        parallax: true,
        loop: true,
        grabCursor: true,
        centerSlides: true,
        pagination: {
            el: '.parallax-slider .swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.parallax-slider .next-ctrl',
            prevEl: '.parallax-slider .prev-ctrl'
        }
    };

    parallaxSlider = new Swiper('.parallax-slider', parallaxSliderOptions);
    $(window).on('resize', function () {
        parallaxSlider.destroy();
        parallaxSlider = new Swiper('.parallax-slider', parallaxSliderOptions);
    });
});

/*For toggle menu*/
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}