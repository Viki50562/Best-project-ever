module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orders', [
      { // указываем название модели и прокидываем наши значения колонок
        title: 'кебаб',
        img: 'блабла',
        location: 'крякря',
        price: 22,
        saleprice: 15,
        admin_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders', null, {});
  },
};
