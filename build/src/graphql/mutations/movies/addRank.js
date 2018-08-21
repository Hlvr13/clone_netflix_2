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

exports.default = {
    type: _movie3.MovieType,
    args: {
        id: {
            name: 'ID',
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: graphql.GraphQLNonNull(_movie3.RankMovieType)
        }
    }, resolve: function resolve(root, params) {
        var id = params.id,
            data = params.data;

        return _movie2.default.findByIdAndUpdate(id, { $push: { rank: data.rank } }).then(function (movie) {
            return _movie2.default.findById(movie.id).exec();
        });
    }
};