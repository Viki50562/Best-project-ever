module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.TEXT,
      },
      img: {
        type: Sequelize.TEXT,
      },
      discription: {
        type: Sequelize.TEXT,
      },
      location: {
        type: Sequelize.TEXT,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      saleprice: {
        type: Sequelize.INTEGER,
      },
      admin_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'admins',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  },
};
