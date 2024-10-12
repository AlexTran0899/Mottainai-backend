const bcrypt = require('bcrypt');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const hashedPassword = await bcrypt.hash('1234', 8); // Hash the password '1234'

  // Deletes ALL existing entries
  return knex('merchants').del()
    .then(function () {
      // Inserts seed entries for well-established restaurants in Fayetteville, AR
      return knex('merchants').insert([
        {
          merchant_id: 1,
          email: 'info@hammontrees.com',
          password: hashedPassword, // Hashed password
          shop_name: 'Hammontree’s Grilled Cheese',
          shop_logo_url: 'https://mottainai-app-img.s3.amazonaws.com/Hammontree%E2%80%99s+Grilled+Cheese+logo.jpg',
          shop_banner_url: 'https://mottainai-app-img.s3.amazonaws.com/Hammontrees-Grilled-Cheese-2.jpg',
          zipcode: '72701',
          address_1: '326 N West Ave',
          address_2: 'Suite 8',
          city: 'Fayetteville',
          state: 'AR',
          country: 'USA',
          phone_number: '4795211669',
          description: 'Gourmet grilled cheese sandwiches and homemade soups.'
        },
        {
          merchant_id: 2,
          email: 'contact@hugosfayetteville.com',
          password: hashedPassword, // Hashed password
          shop_name: 'Hugo’s',
          shop_logo_url: 'https://mottainai-app-img.s3.amazonaws.com/hugos-logo-3.jpg',
          shop_banner_url: 'https://mottainai-app-img.s3.amazonaws.com/hugos-outside-1.jpg',
          zipcode: '72701',
          address_1: '25 1/2 N Block Ave',
          address_2: null,
          city: 'Fayetteville',
          state: 'AR',
          country: 'USA',
          phone_number: '4795217585',
          description: 'Classic American food, including burgers, sandwiches, and unique house-made dishes.'
        },
        {
          merchant_id: 3,
          email: 'info@arsagas.com',
          password: hashedPassword, // Hashed password
          shop_name: 'Arsaga’s at the Depot',
          shop_logo_url: 'https://mottainai-app-img.s3.amazonaws.com/arsagas%2Blogo%2Bhoriz.png',
          shop_banner_url: 'https://mottainai-app-img.s3.amazonaws.com/Storefront%2B25.jpg',
          zipcode: '72701',
          address_1: '548 W Dickson St',
          address_2: null,
          city: 'Fayetteville',
          state: 'AR',
          country: 'USA',
          phone_number: '4794439900',
          description: 'Café offering breakfast, brunch, coffee, and a variety of fresh, locally sourced meals.'
        },
        {
          merchant_id: 4,
          email: 'info@purenirvana.com',
          password: hashedPassword, // Hashed password
          shop_name: 'Nirvana Indian Cuisine',          
          shop_logo_url: 'https://mottainai-app-img.s3.amazonaws.com/logo2015.png',
          shop_banner_url: 'https://mottainai-app-img.s3.amazonaws.com/inside2.jpg',
          zipcode: '72703',
          address_1: '637 E Joyce Blvd',
          address_2: 'Suite 110',
          city: 'Fayetteville',
          state: 'AR',
          country: 'USA',
          phone_number: '4793012222',
          description: 'Indian cuisine offering a mix of traditional and modern dishes in a casual setting.'
        }
      ]);
    });
};