// Черновая развернутая карточка

const React = require('react');
const Layout = require('../Layout');

module.exports = function card({ title, img, price }) {
  return (
    <Layout>
      <section className="card mb-3 container">

        <div className="row g-0 ">

          <div className="col-md-4" />
            <div className="col-md-8">

              <img src="https://i.siteapi.org/u6vboZsEppeuVFTBP9ghkTvufgE=/0x0:645x900/ea46265fc7e95bc.ru.s.siteapi.org/img/9h08kb1pbgg0c4ow8w000wckgogwc4" className="img-big-card" alt={`photo-${card.id}`} />
              
              <div className="card-body big-card-info">

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
