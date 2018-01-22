import { GraphQLSchema, GraphQLObjectType } from 'graphql';
  
import {info, infos} from './info';

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Queries",
        fields: {
            infos,
            info
        }
    }),
});

// 测试query如下所示：
// query{
//     infos{
//       id,
//       name,
//       domain,
//       no,
//     }
//     info(id:1){
//       name,
//       no
//     }
//   }