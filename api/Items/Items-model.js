const db = require('../data/db-config')


async function getAll() {
    const items = db('items')
    const merchants = db('merchants')
    const data = await Promise.all([items, merchants])
    return {items: data[0], merchants: data[1]};
}

module.exports = {
    getAll,
}