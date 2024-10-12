/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
    .createTable('customers', (customer) => {
        customer.increments('customer_id');
        customer.string('firstname', 50).notNullable();
        customer.string('lastname', 50).notNullable();
        customer.string('username', 50).notNullable().unique(); // Add unique constraint for username
        customer.string('phone', 11).notNullable().unique(); // Add unique constraint for phone
        customer.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('customers'); // Drop the correct table
};