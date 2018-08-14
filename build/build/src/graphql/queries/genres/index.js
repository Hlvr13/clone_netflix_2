'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _single = require('./single');

var _single2 = _interopRequireDefault(_single);

var _all = require('./all');

var _all2 = _interopRequireDefault(_all);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
    singleGenre: _single2.default,
    allGenres: _all2.default
};