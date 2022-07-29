const React = require('react');
const Layout = require('./Layout');

module.exports = function Reg({ title }) {
  return (
    <Layout title={title}>
      <body>
        <div className="container regologo-wrap">
          <header>
            <h2>Регистрэйшн</h2>
          </header>
          <form id="reg-form" action="/reg" method="POST">
            <div className="mb-3">
              <label className="form-label">Имя</label>
              <input type="text" className="form-control" name="name"  />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email"  />
            </div>
            <div className="mb-3">
              <label className="form-label">Номерок</label>
              <input type="phone" className="form-control" name="phone"  />
            </div>
            <div className="mb-3">
              <label className="form-label">Пароль</label>
              <input type="password" id="password" className="form-control" minLength={4} name="password"  />
            </div>
            <div className="mb-3">
              <label className="form-label">Подтверди пароль щас же</label>
              <input type="password" id="password-check" className="form-control" minLength={4} name="password-check"  />
            </div>
            <button type="submit" className="btn btn-primary reg-btn">Запулить</button>
          </form>
        </div>
      </body>
    </Layout>
  );
};
