import {graphqlKoa, graphiqlKoa} from 'graphql-server-koa';
import {getBanks} from '../controllers/Bank';
import Router from 'koa-router';
import schema from '../graphql/schema';

const router = new Router();
router.get('/getBanks', getBanks);
router.post('/graphql', async (ctx, next) => {
    await graphqlKoa({schema})(ctx, next);
    })
    .get('/graphql', async (ctx, next) => {
        await graphqlKoa({schema})(ctx, next);
    })
    .get('/graphiql', async(ctx, next) => {
        await graphiqlKoa({endpointURL: './graphql'})(ctx, next);
    });

module.exports = router;