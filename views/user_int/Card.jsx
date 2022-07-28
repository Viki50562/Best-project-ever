// Черновая развернутая карточка

const React = require('react');
const Layout = require('../Layout');

module.exports = function card({ title, img, price }) {
  return (
    <Layout>
      <section className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4" />
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Куча хавки</h5>
              <div>{ title }</div>
              <div>{ img }</div>
              <div>{ price }</div>
              <p className="card-text">Некоторые мудилы зак!!!!!!!азали кучу хавки и отказались</p>
              <p className="card-text"><small className="text-muted">15 мин назад, ещё тёплое</small></p>
              <a href="/buy" className="btn btn-primary center">Выкупить </a>
              <a href="/return" className="btn btn-primary center">Не хочу </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
