//TimelineMax & ScrollMagic
//import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';   
import { TweenMax, Power0 } from 'gsap';
// TweenMax
//tl.method(element, duration, vars), delay

var tl = new TimelineMax({});
var navItems = $('.nav-primary li');
var pageContent = $('.site-wrapper');
var workItems = $('.work-anim');
tl
	// nav items
	navItems.each(function() {
    tl.add(
      TweenMax.from($(this), 0.25, {
        autoAlpha: 0,
        x: 30,
        ease: Power1.easeOut
      })
    );
  })
  
  // page content
  pageContent.each(function() {
    tl.add(
      TweenMax.from($(this), 0.25, {
        autoAlpha: 0,
        y: 5,
        ease: Power1.easeOut
      })
    );
  })
  
	// work items
	workItems.each(function() {
    tl.add(
      TweenMax.staggerFrom($(this), 0.1, {
        autoAlpha: 0,
        y: -5,
        ease: Power0.easeOut
      })
    );
	})



