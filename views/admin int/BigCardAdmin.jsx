const React = require('react');
const Layout = require('../Layout');

module.exports = function card({ Cards }) {
  return (
    <Layout>
      <div className="row g-0 bg-light position-relative">
        <div className="col-md-6 mb-md-0 p-md-4">
          <img src={Cards.img} className="w-100" alt={`photo-${Cards.id}`} />

          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Выбрать картинку
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="../../public/src/burger.jpeg">Бургер</a></li>
              <li><a className="dropdown-item" href="../../public/src/kebab.jpeg">Кебаб</a></li>
              <li><a className="dropdown-item" href="../../public/src/pizza.jpeg">Пицца</a></li>
              <li><a className="dropdown-item" href="../../public/src/shava.jpeg">Шаверма</a></li>
              <li><a className="dropdown-item" href="../../public/src/supec.jpeg">Суп</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 p-4 ps-md-0">
          <h5 className="mt-0">Название блюда</h5>
          <div className="input-group input-group-lg">
            <input type="text" value={Cards.title} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
          </div>
          <p>Описание</p>

          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }} />
            <label htmlFor="floatingTextarea2">{Cards.discription}</label>
          </div>

          
          <div>
            Цена без скидки:
            <h5>
              <s />
              <div className="input-group input-group-lg">
                <input type="text" value={Cards.price} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
              </div>
            </h5>

          </div>

          <div>
            Цена со скидкой

          </div>

          <div className="btn-group">
              <button type="button" className="btn-location   btn btn-secondary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
               Выберете район</button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><button className="dropdown-item" type="button">Action</button></li>
                <li><button className="dropdown-item" type="button">Another action</button></li>
                <li><button className="dropdown-item" type="button">Something else here</button></li>
              </ul>
            </div>
          </div>

          <div className="input-group input-group-lg">
            <input type="text" value={Cards.saleprice} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
          </div>
          
          <p className="card-text"><small className="text-muted">15 мин назад, ещё тёплое</small></p>
          <a href="/" className="btn btn-primary center">Добавить </a>
          <a href="/return" className="btn btn-primary center">Удалить</a>
        </div>
     
    </Layout>
  );
};
