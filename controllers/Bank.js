'use strict';
var models = require('../models');
var Sequelize = require("sequelize");

// const getBanks = async (ctx, next) => {
//     var banks = await models.Bank.findAll();
//     if (banks.length > 0) {
//         ctx.body = {
//             success: true,
//             banks: banks
//         }
//     } else {
//         ctx.body = {
//             success: false,
//         }
//     };
// }

const getBanks = async () => {
    var banks = await models.Bank.findAll();
    return banks;
}

exports.getBankById = async (id) => {
    const bank = await models.Bank.findById(id);
    return bank;
  }

exports.getBanks = getBanks;