/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    return knex('customers').del()
      .then(function () {
        // Inserts seed entries for customers
        return knex('customers').insert([
          {
            customer_id: 1,
            firstname: 'John',
            lastname: 'Doe',
            username: 'johndoe123',
            phone: '4795551234',
            created_at: knex.fn.now(),
            updated_at: knex.fn.now()
          },
          {
            customer_id: 2,
            firstname: 'Jane',
            lastname: 'Smith',
            username: 'janesmith456',
            phone: '4795555678',
            created_at: knex.fn.now(),
            updated_at: knex.fn.now()
          },
          {
            customer_id: 3,
            firstname: 'Michael',
            lastname: 'Johnson',
            username: 'mjohnson789',
            phone: '4795559876',
            created_at: knex.fn.now(),
            updated_at: knex.fn.now()
          },
          {
            customer_id: 4,
            firstname: 'Emily',
            lastname: 'Davis',
            username: 'emilydavis321',
            phone: '4795554321',
            created_at: knex.fn.now(),
            updated_at: knex.fn.now()
          },
          {
            customer_id: 5,
            firstname: 'Chris',
            lastname: 'Brown',
            username: 'chrisbrown654',
            phone: '4795558765',
            created_at: knex.fn.now(),
            updated_at: knex.fn.now()
          }
        ]);
      });
  };