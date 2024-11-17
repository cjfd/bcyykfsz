'use strict';

module.exports.info = ' querying name';

let bc, contx;

module.exports.init = function (blockchain, context, args) {
    bc = blockchain;
    contx = context;
    return Promise.resolve();
};

module.exports.run = function () {
    // TODO
};

module.exports.end = function () {
    return Promise.resolve();
};