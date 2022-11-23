'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Devices', [{
      identifier: 'A1B2C3D4E5F6',
      createdAt: "2022-11-22 20:45:00",
      updatedAt: "2022-11-22 20:45:00"
    },
    {
      identifier: 'Z7Y8X9W10V11',
      createdAt: "2022-11-22 20:45:00",
      updatedAt: "2022-11-22 20:45:00"
    },
    {
      identifier: 'ABCDEF123456',
      createdAt: "2022-11-22 20:45:00",
      updatedAt: "2022-11-22 20:45:00"
    },
    {
      identifier: 'P2R4U6E8B0A',
      createdAt: "2022-11-22 20:45:00",
      updatedAt: "2022-11-22 20:45:00"
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});
  }
};
