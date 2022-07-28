module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orders', [
      { // указываем название модели и прокидываем наши значения колонок
        title: 'Кебаб',
        img: 'блабла',
        location: 'Лондон',
        discription: 'Вкусняшка',
        price: 82,
        saleprice: 45,
        admin_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { // указываем название модели и прокидываем наши значения колонок
        title: 'Пицца',
        img: 'миумиу',
        location: 'Осло',
        discription: 'Гадость гадкая',
        price: 72,
        saleprice: 25,
        admin_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { // указываем название модели и прокидываем наши значения колонок
        title: 'Бургеры',
        img: 'миумиу',
        location: 'Париж',
        discription: 'Супер бякость',
        price: 92,
        saleprice: 35,
        admin_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { // указываем название модели и прокидываем наши значения колонок
        title: 'Суп',
        img: 'мякмяк',
        location: 'Петербург',
        discription: 'Супер вкусно',
        price: 52,
        saleprice: 45,
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
