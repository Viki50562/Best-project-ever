const React = require('react');
const Layout = require('../Layout');

module.exports = function userHome() {
  return (
    <Layout>
      <main>
        <div className="user-home">
          <div className="card" style={{ width: '18rem' }}>
            <img src="" className="card-img-top" alt="" />
            <div className="card-body">
              <h3><a className="ct">Куча хавки</a></h3>
              <p className="card-text">Некоторые мудилы заказали кучу хавки и отказались</p>
              <a href="#" className="btn btn-primary center">Выкупить </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};
