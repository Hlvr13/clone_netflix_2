'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var grapgql = _interopRequireWildcard(_graphql);

var _rating = require('../../../schemas/rating');

var _rating2 = _interopRequireDefault(_rating);

var _rating3 = require('../../types/rating');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
    type: _rating3.RatingType,
    args: {
        id: {
            name: 'ID',
            type: new grapgql.GraphQLNonNull(grapgql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var deleteRating = _rating2.default.findByIdAndRemove(params.id).exec();
        if (!deleteRating) throw Error('Error on delete.');
        return deleteRating;
    }
};