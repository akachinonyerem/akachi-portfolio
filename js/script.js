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
var homeBtn = $(".header-btn-wrapper");
var homeTl = new TimelineMax();

TweenMax.from(".navbar", 0.5, {y: -5, opacity: 0, autoalpha: 0, ease:Power1.easeOut, delay: 0.5})
homeTl 
.from(homeBg, 0.8, {opacity: 0, autoalpha: 0, ease:Power1.easeOut, delay: 1})
.from(titleText, 0.8, {y: 50, opacity: 0, autoalpha: 0, ease:Power3.easeOut})
.from(bodyTxt, 0.8, {y:50, opacity: 0, autoalpha: 0, ease:Power4.easeOut})
.from(homeBtn, 0.6, {y: 30, opacity: 0, autoalpha: 0, ease:Power1.easeOut});


TweenMax.from(".process-bg", 0.8, {opacity: 0, autoalpha: 0, ease:Power1.easeOut, delay: 1});

TweenMax.from(".work-contact-main-con", 0.8, {opacity: 0, autoalpha: 0, ease:Power2.easeInOut, delay: 3.2});


TweenMax.from(".project-title", 0.8, {x: -80, opacity: 0, autoalpha: 0, ease:Power3.easeOut, delay: 0.8});
TweenMax.from(".work-type-box", 0.8, {x: 80, opacity: 0, autoalpha: 0, ease:Power3.easeInOut, delay: 1.2});
TweenMax.from(".work-type", 0.8, {x: -80, opacity: 0, autoalpha: 0, ease:Power3.easeOut, delay: 2.2});
TweenMax.from(".project-desc-box", 0.8, {y: 20, opacity: 0, autoalpha: 0, ease:Power3.easeOut, delay: 3.2});
TweenMax.from(".logo-process", 0.8, {y: 20, opacity: 0, autoalpha: 0, ease:Power3.easeOut, delay: 3.2});
TweenMax.from(".brand-work-section", 0.8, {y: 30, opacity: 0, autoalpha: 0, ease:Power3.easeOut, delay: 4});