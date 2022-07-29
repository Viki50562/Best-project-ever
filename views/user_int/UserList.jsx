const React = require('react');
const Layout = require('../Layout');
const UserCard = require('./UserCard');

module.exports = function userList({ arrCards, user, admin }) {
  return (
    <Layout user={user} admin={admin}>
      <main className="main">
        <section className="container">
          <div className="user-home">
            {arrCards.length ? arrCards.map((card) => <UserCard card={card} />) : <div>Товаров нет!</div>}
          </div>
        </section>
      </main>
    </Layout>
  );
};
