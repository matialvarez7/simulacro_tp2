'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Channels', [{
      name: 'America Tv',
      logo_url: 'america.jpg',
      category_id: 1,
      deviceId: 1,
      createdAt: "2022-11-22 20:45:00",
      updatedAt: "2022-11-22 20:45:00"
    },
    {
      name: 'Telefe',
      logo_url: 'telefe.jpg',
      category_id: 1,
      deviceId: 1,
      createdAt: "2022-11-22 20:45:00",
      updatedAt: "2022-11-22 20:45:00"
    },{
      name: 'TyC Sports',
      logo_url: 'tyc.jpg',
      category_id: 2,
      deviceId: 1,
      createdAt: "2022-11-22 20:45:00",
      updatedAt: "2022-11-22 20:45:00"
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Channels', null, {});

  }
};
