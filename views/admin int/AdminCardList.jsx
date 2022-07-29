/* eslint-disable max-len */
const React = require('react');
const Layout = require('../Layout');
const AdminCard = require('./AdminCard');

module.exports = function adminList({ arrCards, user, admin }) {
  return (
    <Layout user={user} admin={admin}>
      <main className="main">
        <div className="d-grid gap-2">
          <button href="/bigcardadmin" className="btn btn-primary" type="button">Добавить заказ</button>
        </div>
        <section className="container">
          <div className="user-home">
            {arrCards.length ? arrCards.map((card) => <AdminCard card={card} />) : <div>Товаров нет!</div>}
          </div>
        </section>
      </main>
    </Layout>
  );
};
