// Рабочая mini-card на стартовой странице

const React = require('react');
const Layout = require('../Layout');

module.exports = function userHome({ list, user }) {
  return (
    <Layout user={user}>
      <main>
        <div className="user-home">
          <div className="card" style={{ width: '18rem' }}>
            <img src="" className="card-img-top" alt="" />
            <div className="card-body">
              <h3><a href="#" className="ct">Куча хавки</a></h3>
              <form action="/card">
                <ul>
                  { list.map((card) => <li>{card.img}</li>) }
                </ul>
              </form>
              <p className="card-text">Некоторые мудилы заказали кучу хавки и отказались</p>
              <a href="domoi" className="btn btn-primary center">Выкупить </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};
