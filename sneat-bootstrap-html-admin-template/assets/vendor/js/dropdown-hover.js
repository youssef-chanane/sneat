(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/dropdown-hover.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/dropdown-hover.js":
/*!******************************!*\
  !*** ./js/dropdown-hover.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Add onHover event for dropdowns\n;\n\n(function ($) {\n  if (!$ || !$.fn) return;\n  var SELECTOR = '[data-bs-toggle=dropdown][data-trigger=hover]';\n  var TIMEOUT = 150;\n\n  function openDropdown($i) {\n    var t = $i.data('dd-timeout');\n\n    if (t) {\n      clearTimeout(t);\n      t = null;\n      $i.data('dd-timeout', t);\n    }\n\n    if ($i.attr('aria-expanded') !== 'true') $i.dropdown('toggle');\n  }\n\n  function closeDropdown($i) {\n    var t = $i.data('dd-timeout');\n    if (t) clearTimeout(t);\n    t = setTimeout(function () {\n      var t2 = $i.data('dd-timeout');\n\n      if (t2) {\n        clearTimeout(t2);\n        t2 = null;\n        $i.data('dd-timeout', t2);\n      }\n\n      if ($i.attr('aria-expanded') === 'true') $i.dropdown('toggle');\n    }, TIMEOUT);\n    $i.data('dd-timeout', t);\n  }\n\n  $(function () {\n    $('body').on('mouseenter', \"\".concat(SELECTOR, \", \").concat(SELECTOR, \" ~ .dropdown-menu\"), function () {\n      var $toggle = $(this).hasClass('dropdown-toggle') ? $(this) : $(this).prev('.dropdown-toggle');\n      var $dropdown = $(this).hasClass('dropdown-menu') ? $(this) : $(this).next('.dropdown-menu');\n      if (window.getComputedStyle($dropdown[0], null).getPropertyValue('position') === 'static') return; // Set hovered flag\n\n      if ($(this).is(SELECTOR)) {\n        $(this).data('hovered', true);\n      }\n\n      openDropdown($(this).hasClass('dropdown-toggle') ? $(this) : $(this).prev('.dropdown-toggle'));\n    }).on('mouseleave', \"\".concat(SELECTOR, \", \").concat(SELECTOR, \" ~ .dropdown-menu\"), function () {\n      var $toggle = $(this).hasClass('dropdown-toggle') ? $(this) : $(this).prev('.dropdown-toggle');\n      var $dropdown = $(this).hasClass('dropdown-menu') ? $(this) : $(this).next('.dropdown-menu');\n      if (window.getComputedStyle($dropdown[0], null).getPropertyValue('position') === 'static') return; // Remove hovered flag\n\n      if ($(this).is(SELECTOR)) {\n        $(this).data('hovered', false);\n      }\n\n      closeDropdown($(this).hasClass('dropdown-toggle') ? $(this) : $(this).prev('.dropdown-toggle'));\n    }).on('hide.bs.dropdown', function (e) {\n      if ($(this).find(SELECTOR).data('hovered')) e.preventDefault();\n    });\n  });\n})(window.jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9kcm9wZG93bi1ob3Zlci5qcz8wNjQ3Il0sIm5hbWVzIjpbIiQiLCJmbiIsIlNFTEVDVE9SIiwiVElNRU9VVCIsIm9wZW5Ecm9wZG93biIsIiRpIiwidCIsImRhdGEiLCJjbGVhclRpbWVvdXQiLCJhdHRyIiwiZHJvcGRvd24iLCJjbG9zZURyb3Bkb3duIiwic2V0VGltZW91dCIsInQyIiwib24iLCIkdG9nZ2xlIiwiaGFzQ2xhc3MiLCJwcmV2IiwiJGRyb3Bkb3duIiwibmV4dCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiaXMiLCJlIiwiZmluZCIsInByZXZlbnREZWZhdWx0IiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBOztBQUFDLENBQUMsVUFBVUEsQ0FBVixFQUFhO0FBQ2IsTUFBSSxDQUFDQSxDQUFELElBQU0sQ0FBQ0EsQ0FBQyxDQUFDQyxFQUFiLEVBQWlCO0FBRWpCLE1BQU1DLFFBQVEsR0FBRywrQ0FBakI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsR0FBaEI7O0FBRUEsV0FBU0MsWUFBVCxDQUFzQkMsRUFBdEIsRUFBMEI7QUFDeEIsUUFBSUMsQ0FBQyxHQUFHRCxFQUFFLENBQUNFLElBQUgsQ0FBUSxZQUFSLENBQVI7O0FBRUEsUUFBSUQsQ0FBSixFQUFPO0FBQ0xFLGtCQUFZLENBQUNGLENBQUQsQ0FBWjtBQUNBQSxPQUFDLEdBQUcsSUFBSjtBQUNBRCxRQUFFLENBQUNFLElBQUgsQ0FBUSxZQUFSLEVBQXNCRCxDQUF0QjtBQUNEOztBQUVELFFBQUlELEVBQUUsQ0FBQ0ksSUFBSCxDQUFRLGVBQVIsTUFBNkIsTUFBakMsRUFBeUNKLEVBQUUsQ0FBQ0ssUUFBSCxDQUFZLFFBQVo7QUFDMUM7O0FBRUQsV0FBU0MsYUFBVCxDQUF1Qk4sRUFBdkIsRUFBMkI7QUFDekIsUUFBSUMsQ0FBQyxHQUFHRCxFQUFFLENBQUNFLElBQUgsQ0FBUSxZQUFSLENBQVI7QUFFQSxR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U0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxJQUFSLENBQWEsU0FBYixFQUF3QixLQUF4QjtBQUNEOztBQUVESSxtQkFBYSxDQUFDWCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnQixRQUFSLENBQWlCLGlCQUFqQixJQUFzQ2hCLENBQUMsQ0FBQyxJQUFELENBQXZDLEdBQWdEQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFpQixJQUFSLENBQWEsa0JBQWIsQ0FBakQsQ0FBYjtBQUNELEtBMUJILEVBMkJHSCxFQTNCSCxDQTJCTSxrQkEzQk4sRUEyQjBCLFVBQVVVLENBQVYsRUFBYTtBQUNuQyxVQUFJeEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUIsSUFBUixDQUFhdkIsUUFBYixFQUF1QkssSUFBdkIsQ0FBNEIsU0FBNUIsQ0FBSixFQUE0Q2lCLENBQUMsQ0FBQ0UsY0FBRjtBQUM3QyxLQTdCSDtBQThCRCxHQS9CQSxDQUFEO0FBZ0NELENBdEVBLEVBc0VFTixNQUFNLENBQUNPLE1BdEVUIiwiZmlsZSI6Ii4vanMvZHJvcGRvd24taG92ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBZGQgb25Ib3ZlciBldmVudCBmb3IgZHJvcGRvd25zXG5cbjsoZnVuY3Rpb24gKCQpIHtcbiAgaWYgKCEkIHx8ICEkLmZuKSByZXR1cm5cblxuICBjb25zdCBTRUxFQ1RPUiA9ICdbZGF0YS1icy10b2dnbGU9ZHJvcGRvd25dW2RhdGEtdHJpZ2dlcj1ob3Zlcl0nXG4gIGNvbnN0IFRJTUVPVVQgPSAxNTBcblxuICBmdW5jdGlvbiBvcGVuRHJvcGRvd24oJGkpIHtcbiAgICBsZXQgdCA9ICRpLmRhdGEoJ2RkLXRpbWVvdXQnKVxuXG4gICAgaWYgKHQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0KVxuICAgICAgdCA9IG51bGxcbiAgICAgICRpLmRhdGEoJ2RkLXRpbWVvdXQnLCB0KVxuICAgIH1cblxuICAgIGlmICgkaS5hdHRyKCdhcmlhLWV4cGFuZGVkJykgIT09ICd0cnVlJykgJGkuZHJvcGRvd24oJ3RvZ2dsZScpXG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZURyb3Bkb3duKCRpKSB7XG4gICAgbGV0IHQgPSAkaS5kYXRhKCdkZC10aW1lb3V0JylcblxuICAgIGlmICh0KSBjbGVhclRpbWVvdXQodClcblxuICAgIHQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCB0MiA9ICRpLmRhdGEoJ2RkLXRpbWVvdXQnKVxuXG4gICAgICBpZiAodDIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHQyKVxuICAgICAgICB0MiA9IG51bGxcbiAgICAgICAgJGkuZGF0YSgnZGQtdGltZW91dCcsIHQyKVxuICAgICAgfVxuXG4gICAgICBpZiAoJGkuYXR0cignYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZScpICRpLmRyb3Bkb3duKCd0b2dnbGUnKVxuICAgIH0sIFRJTUVPVVQpXG5cbiAgICAkaS5kYXRhKCdkZC10aW1lb3V0JywgdClcbiAgfVxuXG4gICQoZnVuY3Rpb24gKCkge1xuICAgICQoJ2JvZHknKVxuICAgICAgLm9uKCdtb3VzZWVudGVyJywgYCR7U0VMRUNUT1J9LCAke1NFTEVDVE9SfSB+IC5kcm9wZG93bi1tZW51YCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCAkdG9nZ2xlID0gJCh0aGlzKS5oYXNDbGFzcygnZHJvcGRvd24tdG9nZ2xlJykgPyAkKHRoaXMpIDogJCh0aGlzKS5wcmV2KCcuZHJvcGRvd24tdG9nZ2xlJylcbiAgICAgICAgY29uc3QgJGRyb3Bkb3duID0gJCh0aGlzKS5oYXNDbGFzcygnZHJvcGRvd24tbWVudScpID8gJCh0aGlzKSA6ICQodGhpcykubmV4dCgnLmRyb3Bkb3duLW1lbnUnKVxuXG4gICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSgkZHJvcGRvd25bMF0sIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSByZXR1cm5cblxuICAgICAgICAvLyBTZXQgaG92ZXJlZCBmbGFnXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKFNFTEVDVE9SKSkge1xuICAgICAgICAgICQodGhpcykuZGF0YSgnaG92ZXJlZCcsIHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICBvcGVuRHJvcGRvd24oJCh0aGlzKS5oYXNDbGFzcygnZHJvcGRvd24tdG9nZ2xlJykgPyAkKHRoaXMpIDogJCh0aGlzKS5wcmV2KCcuZHJvcGRvd24tdG9nZ2xlJykpXG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZWxlYXZlJywgYCR7U0VMRUNUT1J9LCAke1NFTEVDVE9SfSB+IC5kcm9wZG93bi1tZW51YCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCAkdG9nZ2xlID0gJCh0aGlzKS5oYXNDbGFzcygnZHJvcGRvd24tdG9nZ2xlJykgPyAkKHRoaXMpIDogJCh0aGlzKS5wcmV2KCcuZHJvcGRvd24tdG9nZ2xlJylcbiAgICAgICAgY29uc3QgJGRyb3Bkb3duID0gJCh0aGlzKS5oYXNDbGFzcygnZHJvcGRvd24tbWVudScpID8gJCh0aGlzKSA6ICQodGhpcykubmV4dCgnLmRyb3Bkb3duLW1lbnUnKVxuXG4gICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSgkZHJvcGRvd25bMF0sIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSByZXR1cm5cblxuICAgICAgICAvLyBSZW1vdmUgaG92ZXJlZCBmbGFnXG4gICAgICAgIGlmICgkKHRoaXMpLmlzKFNFTEVDVE9SKSkge1xuICAgICAgICAgICQodGhpcykuZGF0YSgnaG92ZXJlZCcsIGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgY2xvc2VEcm9wZG93bigkKHRoaXMpLmhhc0NsYXNzKCdkcm9wZG93bi10b2dnbGUnKSA/ICQodGhpcykgOiAkKHRoaXMpLnByZXYoJy5kcm9wZG93bi10b2dnbGUnKSlcbiAgICAgIH0pXG4gICAgICAub24oJ2hpZGUuYnMuZHJvcGRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoJCh0aGlzKS5maW5kKFNFTEVDVE9SKS5kYXRhKCdob3ZlcmVkJykpIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfSlcbiAgfSlcbn0pKHdpbmRvdy5qUXVlcnkpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/dropdown-hover.js\n");

/***/ })

/******/ })));