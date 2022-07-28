const React = require('react');
const Layout = require('../Layout');

module.exports = function card({ Cards }) {
  return (
    <Layout>
      <div className="row g-0 bg-light position-relative">

        <div className="modal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

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
            <h1 className="newPrice">{Cards.saleprice}</h1>
            руб
          </div>
          <p className="card-text"><small className="text-muted">15 мин назад, ещё тёплое</small></p>
          <a href="/buy" className="btn btn-primary center">Выкупить </a>
          <a href="/return" className="btn btn-primary center">Не хочу </a>
        </div>
      </div>
    </Layout>
  );
};
