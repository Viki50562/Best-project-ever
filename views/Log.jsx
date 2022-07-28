const React = require('react');
const Layout = require('./Layout');

module.exports = function Reg({ title }) {
  return (
    <Layout title={title}>
      <body>
        <div className="container regologo-wrap">
          <header>
            <h2>Авторизация</h2>
          </header>
          <form id="log-form" action="/log" method="POST">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Пароль</label>
              <input type="password" className="form-control" name="password" required />
            </div>
            <button type="submit" className="btn btn-primary log-btn">Вход</button>
          </form>
        </div>
      </body>
    </Layout>
  );
};
