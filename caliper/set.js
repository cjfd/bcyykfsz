'use strict';

module.exports.info = ' setting name';

let bc, contx;
let txnPerBatch;

module.exports.init = function (blockchain, context, args) {
    txnPerBatch = 1;
    bc = blockchain;
    contx = context;
    return Promise.resolve();
};

/**
 * Generates simple workload
 * @return {Object} array of json objects
 */
function generateWorkload() {
    // TODO
}

module.exports.run = function () {
    let args = generateWorkload();
    return bc.invokeSmartContract(contx, 'helloworld', 'v0', args, null);
};

module.exports.end = function () {
    return Promise.resolve();
};