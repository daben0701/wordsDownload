import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    isOutputType
} from 'graphql';

const models = require('../models');
import {getBanks, getBankById} from '../controllers/Bank';

export const infoType = new GraphQLObjectType({
    name: 'info',
    fields: {
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
        },
        domain: {
            type: GraphQLString,
        },
        no: {
            type: GraphQLString,
        },
        address: {
            type: GraphQLString,
        },
        remark: {
            type: GraphQLString,
        }
    }
});

export const info = {
    type: infoType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID),
        }
    },
    resolve(root, params, options){
        return getBankById(params.id);
    }
}

export const infos = {
    type: new GraphQLList(infoType),
    args: {},
    resolve(root, params, options){
        return getBanks();
    }
}