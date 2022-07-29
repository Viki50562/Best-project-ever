module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      { // указываем название модели и прокидываем наши значения колонок
        name: 'Viktoria',
        email: 'syrcova.viktorija@gmail.com',
        password: '123',
        phone: '89215701351',
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
