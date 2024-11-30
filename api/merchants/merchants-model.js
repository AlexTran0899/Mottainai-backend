const db = require('../data/db-config')

const merchantDTO = ['merchant_id','shop_name', 'email', 'shop_logo_url', 'shop_banner_url', 'zipcode', 'address_1', 'address_2', 'city', 'state', 'country', 'phone_number', 'description', 'pickup_start_time', 'pickup_end_time']

async function getAll() {
    return await db('merchants').select(merchantDTO);
}

async function createNewMerchant(merchant) {
    const [newMerchant] = await db('merchants').insert(merchant, ['email', 'merchant_id'])
    return newMerchant
}

async function findBy(filter) {
    try {
      const merchant = await db('merchants').where(filter).first(); // Returns the first matching record
      return merchant || null; // Return null if no merchant is found
    } catch (error) {
      throw new Error('Database query failed: ' + error.message);
    }
  }

module.exports = {
    getAll,
    createNewMerchant,
    findBy
}