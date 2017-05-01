"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataStore = function () {
    function DataStore() {
        _classCallCheck(this, DataStore);

        this.data = {};
    }

    // Returns all pages and posts


    _createClass(DataStore, [{
        key: "getAll",
        value: function getAll() {
            return this.data;
        }

        // Returns all Pages

    }, {
        key: "getAllPages",
        value: function getAllPages() {
            return this.data.pages;
        }

        // Returns all Posts

    }, {
        key: "getAllPosts",
        value: function getAllPosts() {
            return this.posts;
        }

        // Returns a Page by provided slug

    }, {
        key: "getPageBySlug",
        value: function getPageBySlug(slug) {
            var pages = this.data.pages;
            return pages[Object.keys(pages).find(function (page, i) {
                return pages[page].slug === slug;
            })] || {};
        }
    }]);

    return DataStore;
}();

exports.default = DataStore;
