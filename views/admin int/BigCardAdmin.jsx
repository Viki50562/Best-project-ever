const React = require('react');
const Layout = require('../Layout');

module.exports = function card({ Cards, user, admin }) {
  return (
    <Layout user={user} admin={admin}>
      <div className="margin-card">
        <div className="row g-0 bg-light position-relative btn-group  container">
          <div className="col-md-6 mb-md-0 p-md-4 img-wrap">

            <div className="dropdown img-select">
              <select class="form-select edit-card" aria-label="Default select example">
                    <option disabled selected>Выбери картинку</option>
                    <option value="/src/burger.jpeg">Бургер</option>
                    <option value="/src/kebab.jpeg">Кебаб</option>
                    <option value="/src/pizza.jpeg">Пицца</option>
                    <option value="/src/shava.jpeg">Шаверма</option>
                    <option value="/src/supec.jpeg">Суп</option>
                    <option value="/src/pasta.jpeg">Паста Пупсянара</option>
                    <option value="/src/cezar.jpeg">Салат Цезарь</option>
                    <option value="/src/rolls.jpeg">Роллы</option>
                    <option value="/src/shava.jpeg">Шварма</option>
                  </select>
            </div>
          </div>
          <div className="col-md-6 p-4 ps-md-0 btn-center">

                  <select class="form-select edit-card" aria-label="Default select example">
                    <option disabled selected>Еда у тебя в каком райное?</option>
                    <option value="Адмиралтейский">Адмиралтейский</option>
                    <option value="Василеостровский">Василеостровский</option>
                    <option value="Выборгский">Выборгский</option>
                    <option value="Калининский">Калининский</option>
                    <option value="Петроградский">Петроградский</option>
                    <option value="Московский">Московский</option>
                    <option value="Центральный">Центральный</option>
                    <option value="Невский">Невский</option>
                    <option value="Приморский">Приморский</option>
                  </select>


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

            <div className="input-group input-group-lg">
              <input type="text" value={Cards.saleprice} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
            </div>


            <a href="/add-card" className="btn btn-primary center btn-card">Добавить </a>
          </div>

        </div>
      </div>
    </Layout>
  );
};
