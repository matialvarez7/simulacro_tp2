'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Categories', [{
      name: 'local',
      createdAt: "2022-11-22 20:45:00",
      updatedAt: "2022-11-22 20:45:00"
    },
    {
      name: 'sports',
      createdAt: "2022-11-22 20:45:00",
      updatedAt: "2022-11-22 20:45:00"
    },
    {
      name: 'cartoons',
      createdAt: "2022-11-22 20:45:00",
      updatedAt: "2022-11-22 20:45:00"
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
