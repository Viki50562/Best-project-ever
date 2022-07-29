module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orders', [
      { // указываем название модели и прокидываем наши значения колонок
        title: 'Кебаб',
        img: '/src/kebab.jpeg',
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
        img: '/src/pizza.jpeg',
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
        img: '/src/burger.jpeg',
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
        img: '/src/supec.jpeg',
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
