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
// Mobile nav
var trigger = $('#js-nav-toggle');
trigger.on('click', function () {
  $('#js-nav-mobile').toggleClass('nav-open');
  $('body').toggleClass('nav-open');
  $('#js-nav-toggle').toggleClass('active');
}); // scroll on click of anchor link (a href="#")

$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 900);
        return false;
      }
    }
  });
}); // when hover over work-item, take it's data-src attr and set it as imgSrc's img attr

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
}); // validate on formsubmit

var formSubmit = $('#js-form-submit');
formSubmit.click(function () {
  validateForm();
  return false;
}); // form validation

function validateForm() {
  var email, atpos, dotpos, username;
  name = $('#name').val();
  email = $('#email').val();
  atpos = email.indexOf('@');
  dotpos = email.lastIndexOf('.');
  message = $('#message').val();

  if (name == null || name == '') {
    $('#js-form-message').addClass('text-error text-large').text('* Please enter your name.');
    $('#name').focus();
    return false;
  }

  if (email == null || email == '') {
    $('#js-form-message').addClass('text-error text-large').text('* Please enter your email.');
    $('#email').focus();
    return false;
  }

  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    $('#js-form-message').addClass('text-error text-large').text('* Please enter a valid email address.');
    $('#email').focus();
    return false;
  }

  if (message == null || message == '') {
    $('#js-form-message').addClass('text-error text-large').text('* Please enter your message.');
    $('#message').focus();
    return false;
  } else {
    var datastring = $("#js-form").serialize();
    $.ajax({
      //send the form using formspree
      url: "https://formspree.io/botoole518@gmail.com",
      method: "POST",
      data: datastring,
      dataType: "json"
    });
    $('#js-form-message').addClass('text-success text-large').text('Thanks for reaching out! Your message has been sent successfully. I\'ll be in touch as soon as possible.');
    return false;
  }
} // add different bg class name
// ex - '.bg-alt1' to each post item


$('.post-item').each(function (i) {
  var num = i % 4 + 1; //start index at 1

  $(this).addClass('bg-alt' + num);
  $(this).attr('data-item', i);
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGM3MDQ5ZTE3ZjZiNDk1ZDlmNGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbInRyaWdnZXIiLCIkIiwib24iLCJ0b2dnbGVDbGFzcyIsImNsaWNrIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInJlcGxhY2UiLCJob3N0bmFtZSIsInRhcmdldCIsImhhc2giLCJsZW5ndGgiLCJzbGljZSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJ3b3JrSXRlbSIsImJyZWFrcG9pbnQiLCJtb3VzZWVudGVyIiwiaW1nQ29udGFpbmVyIiwiY3VycmVudFNyYyIsImRhdGEiLCJ3aW5kb3ciLCJ3aWR0aCIsImF0dHIiLCJhZGRDbGFzcyIsImZvcm1TdWJtaXQiLCJ2YWxpZGF0ZUZvcm0iLCJlbWFpbCIsImF0cG9zIiwiZG90cG9zIiwidXNlcm5hbWUiLCJuYW1lIiwidmFsIiwiaW5kZXhPZiIsImxhc3RJbmRleE9mIiwibWVzc2FnZSIsInRleHQiLCJmb2N1cyIsImRhdGFzdHJpbmciLCJzZXJpYWxpemUiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJlYWNoIiwiaSIsIm51bSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVB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LElBQUksQ0FBTCxHQUFVLENBQXBCLENBRGdDLENBQ1Q7O0FBQ3ZCOUMsSUFBRSxJQUFGLEVBQVF5QixRQUFSLENBQWlCLFdBQVdzQixHQUE1QjtBQUNBL0MsSUFBRSxJQUFGLEVBQVF3QixJQUFSLENBQWEsV0FBYixFQUEwQnNCLENBQTFCO0FBQ0EsQ0FKRCxFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRjNzA0OWUxN2Y2YjQ5NWQ5ZjRiIiwiLy8gU3R5bGVzXG5pbXBvcnQgJ3N0eWxlcy9hcHAuc2Nzcyc7IFxuXG4vLyBTY3JpcHRzXG5pbXBvcnQgJy4vbWFpbi5qcyc7XG4vL2ltcG9ydCAnLi90d2VlbnMuanMnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBNQUlOXG5cbi8vIE1vYmlsZSBuYXZcbnZhciB0cmlnZ2VyID0gJCgnI2pzLW5hdi10b2dnbGUnKTtcbnRyaWdnZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICQoJyNqcy1uYXYtbW9iaWxlJykudG9nZ2xlQ2xhc3MoJ25hdi1vcGVuJyk7XG4gICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbmF2LW9wZW4nKTtcblx0JCgnI2pzLW5hdi10b2dnbGUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG59KTtcblxuXG4vLyBzY3JvbGwgb24gY2xpY2sgb2YgYW5jaG9yIGxpbmsgKGEgaHJlZj1cIiNcIilcbiQoZnVuY3Rpb24oKSB7XG4gICQoJ2FbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyddJyk7XG4gICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIDkwMCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSk7XG5cblxuXG4vLyB3aGVuIGhvdmVyIG92ZXIgd29yay1pdGVtLCB0YWtlIGl0J3MgZGF0YS1zcmMgYXR0ciBhbmQgc2V0IGl0IGFzIGltZ1NyYydzIGltZyBhdHRyXG52YXIgd29ya0l0ZW0gPSAkKCcucmVjZW50LXdvcmstbGlzdC0taXMtaG9tZSA+IGxpIGEnKTtcbnZhciBicmVha3BvaW50ID0gODAwO1xud29ya0l0ZW0ub24oe1xuXHRtb3VzZWVudGVyOiBmdW5jdGlvbiAoKSB7XG5cblx0XHR2YXIgaW1nQ29udGFpbmVyID0gJCgnLndvcmstaXRlbS1pbWFnZSBpbWcnKVxuXHRcdHZhciBjdXJyZW50U3JjID0gJCh0aGlzKS5kYXRhKCdzcmMnKTtcblx0XHRpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gYnJlYWtwb2ludCkge1xuXHRcdFx0aW1nQ29udGFpbmVyLmF0dHIoJ3NyYycsIGN1cnJlbnRTcmMpO1xuXHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRpbWdDb250YWluZXIuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdH1cblx0fVxufSk7XG5cblxuLy8gdmFsaWRhdGUgb24gZm9ybXN1Ym1pdFxudmFyIGZvcm1TdWJtaXQgPSAkKCcjanMtZm9ybS1zdWJtaXQnKTtcbmZvcm1TdWJtaXQuY2xpY2soZnVuY3Rpb24oKSB7XG5cdHZhbGlkYXRlRm9ybSgpO1xuXHRyZXR1cm4gZmFsc2U7XG59KTtcblxuLy8gZm9ybSB2YWxpZGF0aW9uXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XG5cdHZhciBlbWFpbCwgYXRwb3MsIGRvdHBvcywgdXNlcm5hbWU7XG5cblx0bmFtZSA9ICQoJyNuYW1lJykudmFsKCk7XG5cdGVtYWlsID0gJCgnI2VtYWlsJykudmFsKCk7XG5cdGF0cG9zID0gZW1haWwuaW5kZXhPZignQCcpO1xuXHRkb3Rwb3MgPSBlbWFpbC5sYXN0SW5kZXhPZignLicpO1xuXHRtZXNzYWdlID0gJCgnI21lc3NhZ2UnKS52YWwoKTtcblxuXHRpZiAobmFtZSA9PSBudWxsIHx8IG5hbWUgPT0gJycpIHtcblx0JCgnI2pzLWZvcm0tbWVzc2FnZScpLmFkZENsYXNzKCd0ZXh0LWVycm9yIHRleHQtbGFyZ2UnKS50ZXh0KCcqIFBsZWFzZSBlbnRlciB5b3VyIG5hbWUuJyk7XG5cdCQoJyNuYW1lJykuZm9jdXMoKTtcblx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGlmKGVtYWlsID09IG51bGwgfHwgZW1haWwgPT0gJycpIHtcblx0JCgnI2pzLWZvcm0tbWVzc2FnZScpLmFkZENsYXNzKCd0ZXh0LWVycm9yIHRleHQtbGFyZ2UnKS50ZXh0KCcqIFBsZWFzZSBlbnRlciB5b3VyIGVtYWlsLicpO1xuXHQkKCcjZW1haWwnKS5mb2N1cygpO1xuXHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYoYXRwb3MgPCAxIHx8IGRvdHBvcyA8IGF0cG9zKzIgfHwgZG90cG9zKzIgPj0gZW1haWwubGVuZ3RoKSB7XG5cdCQoJyNqcy1mb3JtLW1lc3NhZ2UnKS5hZGRDbGFzcygndGV4dC1lcnJvciB0ZXh0LWxhcmdlJykudGV4dCgnKiBQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLicpO1xuXHQkKCcjZW1haWwnKS5mb2N1cygpO1xuXHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYgKG1lc3NhZ2UgPT0gbnVsbCB8fCBtZXNzYWdlID09ICcnKSB7XG5cdCQoJyNqcy1mb3JtLW1lc3NhZ2UnKS5hZGRDbGFzcygndGV4dC1lcnJvciB0ZXh0LWxhcmdlJykudGV4dCgnKiBQbGVhc2UgZW50ZXIgeW91ciBtZXNzYWdlLicpO1xuXHQkKCcjbWVzc2FnZScpLmZvY3VzKCk7XG5cdHJldHVybiBmYWxzZTtcblx0fVxuXHRlbHNlIHtcblx0ICB2YXIgZGF0YXN0cmluZyA9ICQoXCIjanMtZm9ybVwiKS5zZXJpYWxpemUoKTtcblx0ICAkLmFqYXgoe1xuXHQgICAgLy9zZW5kIHRoZSBmb3JtIHVzaW5nIGZvcm1zcHJlZVxuXHQgICAgdXJsOiBcImh0dHBzOi8vZm9ybXNwcmVlLmlvL2JvdG9vbGU1MThAZ21haWwuY29tXCIsIFxuXHQgICAgbWV0aG9kOiBcIlBPU1RcIixcblx0ICAgIGRhdGE6IGRhdGFzdHJpbmcsXG5cdCAgICBkYXRhVHlwZTogXCJqc29uXCJcblx0ICB9KTtcblx0ICAkKCcjanMtZm9ybS1tZXNzYWdlJykuYWRkQ2xhc3MoJ3RleHQtc3VjY2VzcyB0ZXh0LWxhcmdlJykudGV4dCgnVGhhbmtzIGZvciByZWFjaGluZyBvdXQhIFlvdXIgbWVzc2FnZSBoYXMgYmVlbiBzZW50IHN1Y2Nlc3NmdWxseS4gSVxcJ2xsIGJlIGluIHRvdWNoIGFzIHNvb24gYXMgcG9zc2libGUuJyk7XG5cdCAgcmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbi8vIGFkZCBkaWZmZXJlbnQgYmcgY2xhc3MgbmFtZVxuLy8gZXggLSAnLmJnLWFsdDEnIHRvIGVhY2ggcG9zdCBpdGVtXG4kKCcucG9zdC1pdGVtJykuZWFjaChmdW5jdGlvbihpKSB7XG5cdHZhciBudW0gPSAoaSAlIDQpICsgMTsgLy9zdGFydCBpbmRleCBhdCAxXG5cdCQodGhpcykuYWRkQ2xhc3MoJ2JnLWFsdCcgKyBudW0pO1xuXHQkKHRoaXMpLmF0dHIoJ2RhdGEtaXRlbScsIGkpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbWFpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=