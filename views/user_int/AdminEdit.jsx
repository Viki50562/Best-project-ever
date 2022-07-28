const React = require('react');
const Layout = require('../Layout');

module.exports = function AdminEdit({ title, img, location, price, sale }) {
  return (
    <Layout>
      <div>Добавление/просмотр заказов</div>
      <form action="/admin" method="POST">
        <h2></h2>
        <p>Название:</p>
        <input type="text" name="title" placeholder="Введите название продукта" required />
        <p>Изображение:</p>
        <input type="text" name="img" placeholder="Загрузите картинку" required />
        <p>Локация:</p>
        <input type="text" name="location" placeholder="Ваше местоположение" required />
        <p>Цена:</p>
        <input type="number" name="price" placeholder="Введите цену" required />
        <p>Цена со скидкой:</p>
        <input type="number" name="sale" placeholder="Введите цену со скидкой" required />
        <br />
        <br />
        <button type="submit">Добавить</button>
      </form>
    </Layout>
  )
}