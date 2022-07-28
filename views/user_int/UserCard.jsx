const React = require('react');

module.exports = function userCard({ card }) {
  return (
      <div className="card text-center" id={card.id} style={{ width: '18rem' }}>
        <img src={card.img} className="card-img-top" alt={`photo-${card.id}`} />
        <div className="card-body ">
          <h3>{ card.title }</h3>
          <a href="/domoi" className="btn btn-primary user-home">Хочу!</a>  
        </div>
      </div>
   
  );
};

// href="#" - захардкодила
