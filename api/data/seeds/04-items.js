/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const { v4: uuidv4 } = require('uuid');
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries for excess food items for each restaurant
      return knex('items').insert([
        {
          item_id: uuidv4(),
          item_title: 'Grilled Cheese Sandwich',
          item_description: 'Classic grilled cheese sandwich made with a blend of cheeses on sourdough.',
          quantity: 20, // Excess at the end of the night
          price: 800, // $8.00
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          merchant_id: "6ae5cf80-fb76-4215-849e-d06db6478517", // Hammontree’s Grilled Cheese
          item_img: "https://mottainai-app-img.s3.amazonaws.com/grilled-cheese.jpg"
        },
        {
          item_id: uuidv4(),
          item_title: 'French Fries',
          item_description: 'A side of golden, crispy french fries.',
          quantity: 30, // Excess at the end of the night
          price: 500, // $5.00
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          merchant_id: "d95a134a-2f8c-4041-82be-10ef6f937484", // Hugo’s
          item_img: "https://mottainai-app-img.s3.amazonaws.com/twice-fried-fries.jpg"
        },
        {
          item_id: uuidv4(),
          item_title: 'Garlic Naan',
          item_description: 'Traditional Indian flatbread baked with garlic and butter.',
          quantity: 25, // Excess at the end of the night
          price: 550, // $5.50
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          merchant_id: "c7a51f77-9305-44ea-9b74-a8364b59618e", // Nirvana Indian Cuisine
          item_img: "https://mottainai-app-img.s3.amazonaws.com/Garlic-Naan-Bread-2.jpg"
        },
        {
          item_id: uuidv4(),
          item_title: 'Tomato Basil Soup',
          item_description: 'A creamy soup made with fresh tomatoes and basil.',
          quantity: 10, // Excess at the end of the night
          price: 600, // $6.00
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          merchant_id: "6ae5cf80-fb76-4215-849e-d06db6478517", // Hammontree’s Grilled Cheese
          item_img: "https://mottainai-app-img.s3.amazonaws.com/tomato-basil-soup.jpeg"
        },
        {
          item_id: uuidv4(),
          item_title: 'Croissant',
          item_description: 'Freshly baked buttery croissant.',
          quantity: 12, // Excess at the end of the night
          price: 575, // $5.75
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          merchant_id: "d9d27075-59e2-4e6f-a478-f61d8f706620", // Arsaga’s at the Depot
          item_img: "https://mottainai-app-img.s3.amazonaws.com/Vegan-Croissants-1.jpg"
        }
      ]);
    });
};