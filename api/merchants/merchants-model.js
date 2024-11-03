const db = require('../data/db-config')

const merchantDTO = ['merchant_id','shop_name', 'email', 'shop_logo_url', 'shop_banner_url', 'zipcode', 'address_1', 'address_2', 'city', 'state', 'country', 'phone_number', 'description', 'pickup_start_time', 'pickup_end_time']

async function getAll() {
    return await db('merchants').select(merchantDTO);
}

module.exports = {
    getAll,
}