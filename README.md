# 后台系统

## 技术栈

nodejs + koa + graphql + sequelize + mysql + mocha

## 运行

npm install (或者yarn)

node start.js

访问graphql界面：http://localhost:5000/graphiql

query demo:

    query{
        infos{
            id,
            name,
            domain,
            no,
        }
        info(id:1){
            name,
            no
        }
    }

## 测试

npm run test