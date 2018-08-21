'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

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
        id: {
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_rating3.RatingInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _rating2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }).then(function (rating) {
            return _rating2.default.findById(rating.id).exec();
        }).catch(function (err) {
            return new Error('Could not update Rating Data.', err);
        });
    }
};