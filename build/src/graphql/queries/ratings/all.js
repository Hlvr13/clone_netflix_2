'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

var _rating = require('../../../schemas/rating');

var _rating2 = _interopRequireDefault(_rating);

var _rating3 = require('../../types/rating');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var queryAllRatings = {
    type: new graphql.GraphQLList(_rating3.RatingType),
    resolve: function resolve() {
        var ratings = _rating2.default.find().exec();
        if (!ratings) throw new Error('Error at fetching ratings.');
        return ratings;
    }
};

exports.default = queryAllRatings;