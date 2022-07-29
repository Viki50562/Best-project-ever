module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('admins', [
      { // указываем название модели и прокидываем наши значения колонок
        name: 'Anton',
        email: 'anton@gmail.com',
        password: '321',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admins', null, {});
  },
};
