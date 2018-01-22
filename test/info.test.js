//对graphql中的对象类型进行测试
'use strict';

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
import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import schema from '../graphql/schema';
import {infoType, info} from '../graphql/info';
import Bank, { getBankById } from '../controllers/Bank';

chai.use(sinonChai);
const sandBox = sinon.sandbox.create();

describe('test bank info type', () => {
    it('info should have an id field of type GraphQLID', () => {
        expect(infoType.getFields()).to.have.property('id');
        expect(infoType.getFields().id.type).to.deep.equals(GraphQLID);
    });

    describe('resolve', () => {
        beforeEach(() => {
            sandBox.stub(Bank, 'getBankById')
        });
        // afterEach(() => sandbox.restore());

        it('should call getBankById', () => {
            info.resolve(null, {id: 'id'});
            expect(Bank.getBankById).to.have.been.calledWith('id');
        })
    });
});