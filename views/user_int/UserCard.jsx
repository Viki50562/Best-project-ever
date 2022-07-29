const React = require('react');

module.exports = function userCard({ card }) {
  return (
    <div className="card text-center" id={card.id} style={{ width: '18rem' }}>
      <img src={card.img} className="card-img-top" alt={`photo-${card.id}`} />
      <div className="card-body ">
        <h3>{ card.title }</h3>
        <div className="flex-card">
          Цена без скидки:&nbsp;&nbsp;
          <h5>
            <s>
&nbsp;
              { card.price }
&nbsp;
            </s>
            руб
          </h5>
        </div>
        <div className="flex-card">
          <p>Цена после:</p>
          <h5 style={{ color: 'red' }}>
&nbsp;&nbsp;
            {card.saleprice}
&nbsp;руб
          </h5>
        </div>
        <p className="card-text"><small className="text-muted">{card.location}</small></p>
        <a href="/usercard" id={card.id} className="btn btn-primary user-home">Хочу!</a>
      </div>
    </div>
  );
};

// href="#" - захардкодила
