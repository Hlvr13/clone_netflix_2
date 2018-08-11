import * as graphql from 'graphql';

export const UserType = new graphql.GraphQLObjectType ({
    name: "Users",
    description: "Users in MongoDB",
    fields: () => ({
        _id: {
            type : graphql.GraphQLNonNull(graphql.GraphQLID)
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
    })
});

export const UserInputType = new graphql.GraphQLInputObjectType({
    name: 'Add_Users',
    description: 'Types of add Users',
    fields : () => ({
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
    })
})