'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

var _movie = require('../../../schemas/movie');

var _movie2 = _interopRequireDefault(_movie);

var _movie3 = require('../../types/movie');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
    type: _movie3.MovieType,
    args: {
        id: {
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_movie3.MovieInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _movie2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }).then(function (movie) {
            return _movie2.default.findById(movie.id).exec();
        }).catch(function (err) {
            return new Error('Could not update Movie Data.', err);
        });
    }
};