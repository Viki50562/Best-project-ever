const React = require('react');
const Layout = require('../Layout');

module.exports = function card({ Cards, user, admin }) {
  return (
    <Layout user={user} admin={admin}>
      <div className="border-card">
        <div className="container border-card">
          <div className="row g-0 bg-light position-relative">

            <div className="col-md-6 mb-md-0 p-md-4">
              <img src={Cards.img} className="w-100" alt={`photo-${Cards.id}`} />
            </div>
            <div className="col-md-6 p-4 ps-md-0">
              <h5 className="mt-0">{Cards.title}</h5>
              <p>{Cards.discription}</p>
              <div>
                Цена без скидки:
                <h5>
                  <s>
                    { Cards.price }
                    руб
                  </s>
                </h5>
              </div>

              <div>
                <span>
                  <h1 className="newPrice">
&nbsp;
                    {Cards.saleprice}
&nbsp;
                  </h1>
                </span>
                {' '}
&nbsp;руб

              </div>
              <p className="card-text"><small className="text-muted">15 мин назад, ещё тёпленькое</small></p>
              <a href="/buy" className="btn btn-primary center">Выкупить </a>
              <a href="/" className="btn btn-primary center">Не хочу </a>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
