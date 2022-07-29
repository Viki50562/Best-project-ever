const React = require('react');

module.exports = function Layout({ title, user, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/css/Layout.css" rel="stylesheet" />
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <script defer src="js/application.js" />

        <script defer src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossOrigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js" integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossOrigin="anonymous" />
        <title>{title}</title>
      </head>
      <body>
        <header className="header">
          <a href="/" id="logo-link"><h1 className="logo">ДеливериМуняк</h1></a>
          {user ? (
            <div className="auth">
              <p className="hello">{user} тута</p>
              <a href="/logout"><button type="button" className="btn btn-dark">Выскочить</button></a>
            </div>
          ) : (
            <div className="auth">
              <a href="/reg"><button type="button" className="btn btn-dark ">Регулька</button></a>
              <a href="/log"><button type="button" className="btn btn-dark">Логулька</button></a>
            </div>
          )}
        </header>
        {children}

      </body>
    </html>
  );
};
