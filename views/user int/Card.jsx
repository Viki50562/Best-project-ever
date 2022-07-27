const React = require('react');

module.exports = function Card() {
  return (
    <div className="card mb-3" style={{max-width:"540px"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Куча хавки</h5>
            <p className="card-text">Некоторые мудилы заказали кучу хавки и отказались</p>
            <p className="card-text"><small className="text-muted">15 мин назад, ещё тёплое</small></p>
            <a href="#" className="btn btn-primary center">Выкупить</a>
          </div>
        </div>
      </div>
    </div>
  );
};