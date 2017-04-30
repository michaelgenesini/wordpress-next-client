
          window.__NEXT_REGISTER_PAGE('/home', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(560);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/michael/Documents/Work/Projects/GitHub/wordpress-next-client/pages/home.js?entry',
    _this = undefined;

var Page = function Page(_ref) {
	var title = _ref.title,
	    content = _ref.content;
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 3
		}
	}, _react2.default.createElement('h1', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 4
		}
	}, title), _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: content }, __source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}));
};

Page.getInitialProps = function () {
	var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
		var req = _ref2.req;
		var res, json;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return fetch('http://wordpress.michaelgenesini.com/wp-json/wp/v2/pages/2');

					case 2:
						res = _context.sent;
						_context.next = 5;
						return res.json();

					case 5:
						json = _context.sent;
						return _context.abrupt('return', {
							title: json.title.rendered,
							content: json.content.rendered
						});

					case 7:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, _this);
	}));

	return function (_x) {
		return _ref3.apply(this, arguments);
	};
}();

exports.default = Page;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/michael/Documents/Work/Projects/GitHub/wordpress-next-client/pages/home.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/michael/Documents/Work/Projects/GitHub/wordpress-next-client/pages/home.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/home")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(559);


/***/ })

},[562]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lLmpzPzcyODcxNzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBRUEsSUFBTSxPQUFPO0tBQUc7S0FBTzt3QkFBYzs7YUFBQTtlQUNwQztBQURvQztBQUFBLG9CQUNwQzs7YUFBQTtlQUFLO0FBQUw7QUFBQSxJQUNBLCtDQUFLLHlCQUF5QixFQUFDLFFBQVE7YUFBdkM7ZUFBQTtBQUFBOztBQUZEOztBQUtBLEtBQUssOEJBQUw7d0VBQXVCO01BQVM7V0FBVDtnRUFBQTthQUFBO3FDQUFBO1VBQUE7c0JBQUE7YUFDSCxNQUFNOztVQUFsQjtBQURlO3NCQUFBO2FBRUYsSUFBSTs7VUFBakI7QUFGZTs7Y0FJZCxLQUFLLE1BQ1o7Z0JBQVMsS0FBSyxRQUFRO0FBRHRCOztVQUpxQjtVQUFBO3NCQUFBOztBQUFBO2NBQUE7QUFBdkI7O3NCQUFBOzJCQUFBO0FBQUE7QUFTQTs7a0JBQWUsSyIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5cbmNvbnN0IFBhZ2UgPSAoeyB0aXRsZSwgY29udGVudCB9KSA9PiA8ZGl2PlxuXHQ8aDE+e3RpdGxlfTwvaDE+XG5cdDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGNvbnRlbnR9fT48L2Rpdj5cbjwvZGl2PlxuXG5QYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSB9KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vd29yZHByZXNzLm1pY2hhZWxnZW5lc2luaS5jb20vd3AtanNvbi93cC92Mi9wYWdlcy8yJylcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgcmV0dXJuIHtcblx0XHR0aXRsZToganNvbi50aXRsZS5yZW5kZXJlZCxcblx0XHRjb250ZW50OiBqc29uLmNvbnRlbnQucmVuZGVyZWRcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9ob21lLmpzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        