'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MovieInputType = exports.MovieType = undefined;

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

var _genre = require('./genre');

var _genre2 = require('../../schemas/genre');

var _genre3 = _interopRequireDefault(_genre2);

var _rating = require('./rating');

var _rating2 = require('../../schemas/rating');

var _rating3 = _interopRequireDefault(_rating2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var MovieType = exports.MovieType = new graphql.GraphQLObjectType({
    name: 'Movies',
    description: 'Types of movies',
    fields: function fields() {
        return {
            _id: {
                type: graphql.GraphQLNonNull(graphql.GraphQLID)
            },
            image: {
                type: graphql.GraphQLString
            },
            name: {
                type: graphql.GraphQLString
            },
            genre: {
                type: _genre.GenreType,
                resolve: function resolve(movie) {
                    var genre = movie.genre;

                    return _genre3.default.findById(genre).exec();
                }
            },
            synopsis: {
                type: graphql.GraphQLString
            },
            cast: {
                type: graphql.GraphQLString
            },
            year: {
                type: graphql.GraphQLString
            },
            rank: {
                type: graphql.GraphQLString
            },
            length: {
                type: graphql.GraphQLString
            },
            rating: {
                type: _rating.RatingType,
                resolve: function resolve(movie) {
                    var rating = movie.rating;

                    return _rating3.default.findById(rating).exec();
                }
            },
            url: {
                type: graphql.GraphQLString
            }
        };
    }
});

var MovieInputType = exports.MovieInputType = new graphql.GraphQLInputObjectType({
    name: 'Add_Movies',
    description: 'Types of Add movies',
    fields: function fields() {
        return {
            image: {
                type: graphql.GraphQLString
            },
            name: {
                type: graphql.GraphQLString
            },
            genre: {
                type: graphql.GraphQLString
            },
            synopsis: {
                type: graphql.GraphQLString
            },
            cast: {
                type: graphql.GraphQLString
            },
            year: {
                type: graphql.GraphQLString
            },
            rank: {
                type: graphql.GraphQLString
            },
            length: {
                type: graphql.GraphQLString
            },
            rating: {
                type: graphql.GraphQLString
            },
            url: {
                type: graphql.GraphQLString
            }
        };
    }
});