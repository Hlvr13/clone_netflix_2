'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _genre = require('../../../schemas/genre');

var _genre2 = _interopRequireDefault(_genre);

var _genre3 = require('../../types/genre');

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _genre3.GenreType,
    args: {
        id: {
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var deletedGenre = _genre2.default.findByIdAndRemove(params.id).exec();
        if (!deletedGenre) throw Error('Error on delete.');
        return deletedGenre;
    }
};