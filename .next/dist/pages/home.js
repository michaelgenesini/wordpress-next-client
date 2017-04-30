'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('isomorphic-fetch');

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