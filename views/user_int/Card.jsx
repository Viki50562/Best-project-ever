const React = require('react');
const Layout = require('../Layout');

module.exports = function card({ Cards, user }) {
  return (
    <Layout user={user}>
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
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Выкупить
              </button>
              {/* <a href="/buy" id="buy-btn" className="btn btn-primary center">Выкупить </a> */}
              <a href="/" className="btn btn-primary center">Не хочу </a>
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                      Решайся!
                      {' '}
                      {Cards.title}
                      {' '}
                      ждёт тебя!
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                      <form action="/">
                        <button type="submit" id={ Cards.id } className="btn btn-buy btn-primary" style={{ background: 'green' }}>Купить</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
