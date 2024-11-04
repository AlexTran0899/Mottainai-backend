/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
    .createTable('items', (item) => {
        item.string('item_id', 36).primary().notNullable();
        item.string('merchant_id')
            .references('merchant_id')
            .inTable('merchants')
            .onDelete('cascade')
            .onUpdate('cascade')
            .notNullable();
        item.string('item_title', 50).notNullable();
        item.string('item_description', 255).notNullable(); // Increased description length for flexibility
        item.integer('quantity'); // Corrected typo in "quantity"
        item.integer('price');
        item.string('item_img', 100).notNullable()
        item.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('items');
};