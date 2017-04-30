webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lLmpzPzZhNDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7QUFFQSxJQUFNLE9BQU87S0FBRztLQUFPO3dCQUFjOzthQUFBO2VBQ3BDO0FBRG9DO0FBQUEsb0JBQ3BDOzthQUFBO2VBQUs7QUFBTDtBQUFBLElBQ0EsK0NBQUsseUJBQXlCLEVBQUMsUUFBUTthQUF2QztlQUFBO0FBQUE7O0FBRkQ7O0FBS0EsS0FBSyw4QkFBTDt3RUFBdUI7TUFBUztXQUFUO2dFQUFBO2FBQUE7cUNBQUE7VUFBQTtzQkFBQTthQUNILE1BQU07O1VBQWxCO0FBRGU7c0JBQUE7YUFFRixJQUFJOztVQUFqQjtBQUZlOztjQUlkLEtBQUssTUFDWjtnQkFBUyxLQUFLLFFBQVE7QUFEdEI7O1VBSnFCO1VBQUE7c0JBQUE7O0FBQUE7Y0FBQTtBQUF2Qjs7c0JBQUE7MkJBQUE7QUFBQTtBQVNBOztrQkFBZSxLIiwiZmlsZSI6IjUuMGJkYTY2NWJlZDQzYjM3MGM3MDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcblxuY29uc3QgUGFnZSA9ICh7IHRpdGxlLCBjb250ZW50IH0pID0+IDxkaXY+XG5cdDxoMT57dGl0bGV9PC9oMT5cblx0PGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogY29udGVudH19PjwvZGl2PlxuPC9kaXY+XG5cblBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVxIH0pID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly93b3JkcHJlc3MubWljaGFlbGdlbmVzaW5pLmNvbS93cC1qc29uL3dwL3YyL3BhZ2VzLzInKVxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICByZXR1cm4ge1xuXHRcdHRpdGxlOiBqc29uLnRpdGxlLnJlbmRlcmVkLFxuXHRcdGNvbnRlbnQ6IGpzb24uY29udGVudC5yZW5kZXJlZFxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2hvbWUuanM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9