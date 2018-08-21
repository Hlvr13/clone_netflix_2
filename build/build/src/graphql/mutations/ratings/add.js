'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

var _rating = require('../../../schemas/rating');

var _rating2 = _interopRequireDefault(_rating);

var _rating3 = require('../../types/rating');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

exports.default = {
    type: _rating3.RatingType,
    args: {
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_rating3.RatingInputType)
        }
    },
    resolve: function resolve(root, params) {
        var rating = new _rating2.default(params.data);
        var newRating = rating.save();
        if (!newRating) throw new Error('Error at creaing rating.');
        return newRating;
    }
};