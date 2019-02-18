// Menu toggle

document.getElementById('mobile-nav-trigger').addEventListener('click', function () {
    var spanElement = document.querySelector('.mobile-navbar-trigger');
    spanElement.classList.toggle('mobile-navbar-trigger__menu-active');

    var navMenu = document.getElementById('mobile-nav-menu');

    var mobileMenuAnimate = new TimelineMax();
    
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } 
    else {
        navMenu.style.display = 'block';
        
        mobileMenuAnimate.from("#mobile-nav-menu", 1.5, {
            y:-10,
            ease:Bounce.easeOut
        });
    }

});

//animations? i guess



var homeBg = $(".home-bg");
var titleText = $(".header-title-text");
var bodyTxt = $(".header-text");
var homeBtn = $(".header-btn");
var homeTl = new TimelineMax();

homeTl 
.from(homeBg, 1, {opacity: 0, autoalpha: 0, ease:Power1.easeOut, delay: 0.8})
.from(titleText, 1, {y: 800, opacity: 0, autoalpha: 0, ease:Power3.easeOut})
.from(bodyTxt, 1, {y:500, opacity: 0, autoalpha: 0, ease:Power4.easeOut})
.from(homeBtn, 1, {y: 500, opacity: 0, autoalpha: 0, ease:Power1.easeOut});


TweenMax.from(".process-bg", 1, {opacity: 0, autoalpha: 0, ease:Power1.easeOut, delay: 0.8})
TweenMax.from(".work-item-frame", 1, {opacity: 0, autoalpha: 0, ease:Power1.easeInOut, delay: 4});
TweenMax.from(".contact-item", 1, {opacity: 0, autoalpha: 0, ease:Power1.easeInOut, delay: 4});

TweenMax.from(".project-title", 1, {x: -800, opacity: 0, autoalpha: 0, ease:Power3.easeOut});
TweenMax.from(".work-type-box", 1, {x: 800, opacity: 0, autoalpha: 0, ease:Power3.easeInOut , delay: 1});
TweenMax.from(".work-type", 1, {x: -800, opacity: 0, autoalpha: 0, ease:Power3.easeOut, delay: 2});
TweenMax.from(".project-desc-box", 1, {y: 200, opacity: 0, autoalpha: 0, ease:Power3.easeOut, delay: 3});
TweenMax.from(".logo-process", 1, {y: 200, opacity: 0, autoalpha: 0, ease:Power3.easeOut, delay: 3});
TweenMax.from(".brand-work-section", 1, {y: 300, opacity: 0, autoalpha: 0, ease:Power3.easeOut, delay: 4.5});