/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! styles/app.scss */ 1);

__webpack_require__(/*! ./main.js */ 2);

__webpack_require__(/*! ./tweens.js */ 3);

/***/ }),
/* 1 */
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// MAIN
// when hover over work-item, take it's data-src attr and set it as imgSrc's img attr
var workItem = $('.recent-work-list--is-home > li a');
var breakpoint = 800;
workItem.on({
  mouseenter: function mouseenter() {
    var imgContainer = $('.work-item-image img');
    var currentSrc = $(this).data('src');

    if ($(window).width() >= breakpoint) {
      imgContainer.attr('src', currentSrc);
      $(this).addClass('active');
      imgContainer.addClass('active');
    }
  }
});

/***/ }),
/* 3 */
/*!**************************!*\
  !*** ./src/js/tweens.js ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

//TimelineMax & ScrollMagic
//import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';   
//import { TweenMax, Power0 } from 'gsap';
// TweenMax
//tl.method(element, duration, vars), delay
var tl = new TimelineMax({});
var navItems = $('.nav-primary li');
var pageContent = $('.site-wrapper');
var workItems = $('.work-anim');
tl; // nav items

navItems.each(function () {
  tl.add(TweenMax.from($(this), 0.25, {
    autoAlpha: 0,
    x: 30,
    ease: Power1.easeOut
  }));
}); // page content

pageContent.each(function () {
  tl.add(TweenMax.from($(this), 0.25, {
    autoAlpha: 0,
    y: 5,
    ease: Power1.easeOut
  }));
}); // work items

workItems.each(function () {
  tl.add(TweenMax.staggerFrom($(this), 0.1, {
    autoAlpha: 0,
    y: 5,
    ease: Power0.easeOut
  }));
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmJhZGE0NzAzOTI5NjM4Y2MwMTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy90d2VlbnMuanMiXSwibmFtZXMiOlsid29ya0l0ZW0iLCIkIiwiYnJlYWtwb2ludCIsIm9uIiwibW91c2VlbnRlciIsImltZ0NvbnRhaW5lciIsImN1cnJlbnRTcmMiLCJkYXRhIiwid2luZG93Iiwid2lkdGgiLCJhdHRyIiwiYWRkQ2xhc3MiLCJ0bCIsIlRpbWVsaW5lTWF4IiwibmF2SXRlbXMiLCJwYWdlQ29udGVudCIsIndvcmtJdGVtcyIsImVhY2giLCJhZGQiLCJUd2Vlbk1heCIsImZyb20iLCJhdXRvQWxwaGEiLCJ4IiwiZWFzZSIsIlBvd2VyMSIsImVhc2VPdXQiLCJ5Iiwic3RhZ2dlckZyb20iLCJQb3dlcjAiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNURBOztBQUdBOztBQUNBLDBDOzs7Ozs7Ozs7OztBQ0xBLHlDOzs7Ozs7Ozs7OztBQ0FBO0FBRUE7QUFDQSxJQUFJQSxXQUFXQyxFQUFFLG1DQUFGLENBQWY7QUFDQSxJQUFJQyxhQUFhLEdBQWpCO0FBQ0FGLFNBQVNHLEVBQVQsQ0FBWTtBQUNYQyxjQUFZLHNCQUFZO0FBRXZCLFFBQUlDLGVBQWVKLEVBQUUsc0JBQUYsQ0FBbkI7QUFDQSxRQUFJSyxhQUFhTCxFQUFFLElBQUYsRUFBUU0sSUFBUixDQUFhLEtBQWIsQ0FBakI7O0FBQ0EsUUFBSU4sRUFBRU8sTUFBRixFQUFVQyxLQUFWLE1BQXFCUCxVQUF6QixFQUFxQztBQUNwQ0csbUJBQWFLLElBQWIsQ0FBa0IsS0FBbEIsRUFBeUJKLFVBQXpCO0FBQ0FMLFFBQUUsSUFBRixFQUFRVSxRQUFSLENBQWlCLFFBQWpCO0FBQ0FOLG1CQUFhTSxRQUFiLENBQXNCLFFBQXRCO0FBQ0E7QUFDRDtBQVZVLENBQVosRTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUMsS0FBSyxJQUFJQyxXQUFKLENBQWdCLEVBQWhCLENBQVQ7QUFDQSxJQUFJQyxXQUFXYixFQUFFLGlCQUFGLENBQWY7QUFDQSxJQUFJYyxjQUFjZCxFQUFFLGVBQUYsQ0FBbEI7QUFDQSxJQUFJZSxZQUFZZixFQUFFLFlBQUYsQ0FBaEI7QUFDQVcsRyxDQUNDOztBQUNBRSxTQUFTRyxJQUFULENBQWMsWUFBVztBQUN0QkwsS0FBR00sR0FBSCxDQUNFQyxTQUFTQyxJQUFULENBQWNuQixFQUFFLElBQUYsQ0FBZCxFQUF1QixJQUF2QixFQUE2QjtBQUMzQm9CLGVBQVcsQ0FEZ0I7QUFFM0JDLE9BQUcsRUFGd0I7QUFHM0JDLFVBQU1DLE9BQU9DO0FBSGMsR0FBN0IsQ0FERjtBQU9ELENBUkYsRSxDQVVDOztBQUNBVixZQUFZRSxJQUFaLENBQWlCLFlBQVc7QUFDMUJMLEtBQUdNLEdBQUgsQ0FDRUMsU0FBU0MsSUFBVCxDQUFjbkIsRUFBRSxJQUFGLENBQWQsRUFBdUIsSUFBdkIsRUFBNkI7QUFDM0JvQixlQUFXLENBRGdCO0FBRTNCSyxPQUFHLENBRndCO0FBRzNCSCxVQUFNQyxPQUFPQztBQUhjLEdBQTdCLENBREY7QUFPRCxDQVJELEUsQ0FVRDs7QUFDQVQsVUFBVUMsSUFBVixDQUFlLFlBQVc7QUFDdkJMLEtBQUdNLEdBQUgsQ0FDRUMsU0FBU1EsV0FBVCxDQUFxQjFCLEVBQUUsSUFBRixDQUFyQixFQUE4QixHQUE5QixFQUFtQztBQUNqQ29CLGVBQVcsQ0FEc0I7QUFFakNLLE9BQUcsQ0FGOEI7QUFHakNILFVBQU1LLE9BQU9IO0FBSG9CLEdBQW5DLENBREY7QUFPRixDQVJELEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmJhZGE0NzAzOTI5NjM4Y2MwMTQiLCIvLyBTdHlsZXNcbmltcG9ydCAnc3R5bGVzL2FwcC5zY3NzJzsgXG5cbi8vIFNjcmlwdHNcbmltcG9ydCAnLi9tYWluLmpzJztcbmltcG9ydCAnLi90d2VlbnMuanMnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBNQUlOXG5cbi8vIHdoZW4gaG92ZXIgb3ZlciB3b3JrLWl0ZW0sIHRha2UgaXQncyBkYXRhLXNyYyBhdHRyIGFuZCBzZXQgaXQgYXMgaW1nU3JjJ3MgaW1nIGF0dHJcbnZhciB3b3JrSXRlbSA9ICQoJy5yZWNlbnQtd29yay1saXN0LS1pcy1ob21lID4gbGkgYScpO1xudmFyIGJyZWFrcG9pbnQgPSA4MDA7XG53b3JrSXRlbS5vbih7XG5cdG1vdXNlZW50ZXI6IGZ1bmN0aW9uICgpIHtcblxuXHRcdHZhciBpbWdDb250YWluZXIgPSAkKCcud29yay1pdGVtLWltYWdlIGltZycpXG5cdFx0dmFyIGN1cnJlbnRTcmMgPSAkKHRoaXMpLmRhdGEoJ3NyYycpO1xuXHRcdGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSBicmVha3BvaW50KSB7XG5cdFx0XHRpbWdDb250YWluZXIuYXR0cignc3JjJywgY3VycmVudFNyYyk7XG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdGltZ0NvbnRhaW5lci5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0fVxuXHR9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbWFpbi5qcyIsIi8vVGltZWxpbmVNYXggJiBTY3JvbGxNYWdpY1xuLy9pbXBvcnQgU2Nyb2xsTWFnaWMgZnJvbSAnc2Nyb2xsbWFnaWMvc2Nyb2xsbWFnaWMvdW5jb21wcmVzc2VkL1Njcm9sbE1hZ2ljJzsgICBcbi8vaW1wb3J0IHsgVHdlZW5NYXgsIFBvd2VyMCB9IGZyb20gJ2dzYXAnO1xuLy8gVHdlZW5NYXhcbi8vdGwubWV0aG9kKGVsZW1lbnQsIGR1cmF0aW9uLCB2YXJzKSwgZGVsYXlcblxudmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KHt9KTtcbnZhciBuYXZJdGVtcyA9ICQoJy5uYXYtcHJpbWFyeSBsaScpO1xudmFyIHBhZ2VDb250ZW50ID0gJCgnLnNpdGUtd3JhcHBlcicpO1xudmFyIHdvcmtJdGVtcyA9ICQoJy53b3JrLWFuaW0nKTtcbnRsXG5cdC8vIG5hdiBpdGVtc1xuXHRuYXZJdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHRsLmFkZChcbiAgICAgIFR3ZWVuTWF4LmZyb20oJCh0aGlzKSwgMC4yNSwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIHg6IDMwLFxuICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZU91dFxuICAgICAgfSlcbiAgICApO1xuICB9KVxuICBcbiAgLy8gcGFnZSBjb250ZW50XG4gIHBhZ2VDb250ZW50LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdGwuYWRkKFxuICAgICAgVHdlZW5NYXguZnJvbSgkKHRoaXMpLCAwLjI1LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgeTogNSxcbiAgICAgICAgZWFzZTogUG93ZXIxLmVhc2VPdXRcbiAgICAgIH0pXG4gICAgKTtcbiAgfSlcbiAgXG5cdC8vIHdvcmsgaXRlbXNcblx0d29ya0l0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdGwuYWRkKFxuICAgICAgVHdlZW5NYXguc3RhZ2dlckZyb20oJCh0aGlzKSwgMC4xLCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgeTogNSxcbiAgICAgICAgZWFzZTogUG93ZXIwLmVhc2VPdXRcbiAgICAgIH0pXG4gICAgKTtcblx0fSlcblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy90d2VlbnMuanMiXSwic291cmNlUm9vdCI6IiJ9