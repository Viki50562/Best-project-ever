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
        <header>
          <h1>Регистрация</h1>
        </header>
        <form action="/" method="post">
          <input id="name-input" type="text" placeholder="Ваше имя" />
          <input id="email-input" type="email" placeholder="Email" />
          <input id="password-input" type="password" placeholder="Password" />
          <button type="submit">Зарегистрировать</button>
        </form>
      </body>
    </Layout>
  );
};
