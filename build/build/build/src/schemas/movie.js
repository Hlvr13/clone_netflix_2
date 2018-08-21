'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Scheme = _mongoose2.default.Schema;

var movieScheme = new Scheme({
    'image': {
        type: String,
        required: true
    },
    'name': {
        type: String,
        required: true
    },
    'genre': {
        type: Scheme.Types.ObjectId,
        ref: 'genres'
    },
    'synopsis': {
        type: String,
        required: true
    },
    'cast': {
        type: String,
        required: true
    },
    'year': {
        type: String,
        required: true
    },
    'rank': {
        type: String,
        required: true
    },
    'length': {
        type: String,
        required: true
    },
    'rating': {
        type: Scheme.Types.ObjectId,
        ref: 'ratings'
    },
    'url': {
        type: String,
        required: true
    }
}, { 'collections': 'movies', timestamps: true });

exports.default = _mongoose2.default.model('movies', movieScheme);