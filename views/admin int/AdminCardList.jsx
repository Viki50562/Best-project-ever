const React = require('react');
const Layout = require('../Layout');
const AdminCard = require('./AdminCard');

module.exports = function adminList({ arrCards, user }) {
  return (
    <Layout user={user}>
      <main className="main">
        <section className="container">
          <div className="user-home">
            {arrCards.length ? arrCards.map((card) => <AdminCard card={card} />) : <div>Товаров нет!</div>}
          </div>
        </section>
      </main>
    </Layout>
  );
};
