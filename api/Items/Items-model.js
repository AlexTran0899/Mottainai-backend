const db = require('../data/db-config')


async function getAll() {
    return await db('items')
}

async function getByMerchantId(merchant_id) {
    return await db('items').where({merchant_id})
}


module.exports = {
    getAll,
    getByMerchantId
}