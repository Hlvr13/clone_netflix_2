'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

var _movie = require('../../../schemas/movie');

var _movie2 = _interopRequireDefault(_movie);

var _movie3 = require('../../types/movie');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var queryAllMovies = {
    type: new graphql.GraphQLList(_movie3.MovieType),
    resolve: function resolve() {
        var movies = _movie2.default.find().exec();
        if (!movies) throw new Error('Error at fetching movies.');
        return movies;
    }
};

exports.default = queryAllMovies;