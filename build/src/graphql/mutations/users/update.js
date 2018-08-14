'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

var _user = require('../../../schemas/user');

var _user2 = _interopRequireDefault(_user);

var _user3 = require('../../types/user');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
    type: _user3.UserType,
    args: {
        id: {
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_user3.UserInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _user2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }).then(function (user) {
            return _user2.default.findById(user.id).exec();
        }).catch(function (err) {
            return new Error('Could not update User Data', err);
        });
    }
};