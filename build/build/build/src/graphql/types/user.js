"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserInputType = exports.UserType = undefined;

var _graphql = require("graphql");

var graphql = _interopRequireWildcard(_graphql);

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

var UserType = exports.UserType = new graphql.GraphQLObjectType({
    name: "Users",
    description: "Users in MongoDB",
    fields: function fields() {
        return {
            _id: {
                type: graphql.GraphQLNonNull(graphql.GraphQLID)
            },
            firstName: {
                type: graphql.GraphQLString
            },
            lastName: {
                type: graphql.GraphQLString
            },
            email: {
                type: graphql.GraphQLString
            },
            password: {
                type: graphql.GraphQLString
            },
            phone: {
                type: graphql.GraphQLString
            },
            isPremium: {
                type: graphql.GraphQLBoolean
            }
        };
    }
});

var UserInputType = exports.UserInputType = new graphql.GraphQLInputObjectType({
    name: 'Add_Users',
    description: 'Types of add Users',
    fields: function fields() {
        return {
            firstName: {
                type: graphql.GraphQLString
            },
            lastName: {
                type: graphql.GraphQLString
            },
            email: {
                type: graphql.GraphQLString
            },
            password: {
                type: graphql.GraphQLString
            },
            phone: {
                type: graphql.GraphQLString
            },
            isPremium: {
                type: graphql.GraphQLBoolean
            }
        };
    }
});