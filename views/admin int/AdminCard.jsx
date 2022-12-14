const React = require('react');

module.exports = function adminCard({ card }) {
  return (
    <div className="card text-center" id={card.id} style={{ width: '18rem' }}>
      <img src={card.img} className="card-img-top" alt={`photo-${card.id}`} />
      <div className="card-body ">
        <h3>{ card.title }</h3>
        <div className="admin-btn">
          <a href={`/bigcardadmin?id=${card.id}`} className="btn btn-primary user-home">Редактировать</a>
          <a href={`/delete?id=${card.id}`} className="btn btn-primary user-home">Удалить</a>
        </div>
      </div>
    </div>
  );
};
