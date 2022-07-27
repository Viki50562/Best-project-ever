const React = require('react');
const Layout = require('./Layout');

module.exports = function Reg({ title }) {
  return (
    <Layout title={title}>
      <head>
        <meta charSet="utf-8" />
        <script defer src="/js/script.js" />
      </head>
      <body>
        <div className="container regologo-wrap">
          <header>
            <h2>Регистрация</h2>
          </header>
          <form id="reg-form" action="/reg" method="POST">
            <div className="mb-3">
              <label className="form-label">Имя</label>
              <input type="text" className="form-control" name="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Номер телефона</label>
              <input type="phone" className="form-control" name="phone" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Пароль</label>
              <input type="password" className="form-control" name="password" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Подтверждение пароля</label>
              <input type="password" className="form-control" name="password-check" disabled />
            </div>
            <button type="submit" className="btn btn-primary">Готово</button>
          </form>
        </div>
      </body>
    </Layout>
  );
};
