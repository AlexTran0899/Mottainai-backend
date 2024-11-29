/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * 
 * 
 */
exports.up = async function(knex) {

    await knex.schema
    .createTable('merchants', (merchant) => {
        merchant.string('merchant_id', 36).primary().notNullable()
        merchant.string('email', 50).notNullable().unique()
        merchant.string('description', 255).notNullable()
        merchant.string('password', 255).notNullable()
        merchant.string('shop_name', 50).notNullable().unique()
        merchant.string('shop_logo_url', 100).notNullable()
        merchant.string('shop_banner_url', 100).notNullable()
        merchant.string('country', 50).notNullable();
        merchant.string('city', 50).notNullable();
        merchant.string('state', 50).notNullable();
        merchant.string('zipcode', 10).notNullable();
        merchant.string('address_1', 100).notNullable();
        merchant.string('address_2', 100);
        merchant.string('phone_number', 15).notNullable();
        merchant.time('pickup_start_time',  { precision: 4 }).notNullable()
        merchant.time('pickup_end_time',  { precision: 4 }).notNullable()
        merchant.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('merchants')
};
