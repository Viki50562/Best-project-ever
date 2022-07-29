const React = require('react');

module.exports = function Layout({ title, user, admin, children }) {
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
          <div><a href="/" id="logo-link"><h1 className="logo">ДеливериМуняк</h1></a></div>
          {user ? (
            <>
            <div className="location">
              <div className="btn-group">
                  <select class="form-select" aria-label="Default select example">
                    <option disabled selected>Ты в каком райное?</option>
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
              </div>
            </div>
            <div className="auth">
              <p className="hello">
                {user}
                {admin && <a href="/cardadmin"><p className="hello">/ АДМИНША! /</p></a>}
                {' '}
                тута
              </p>
              <a href="/logout"><button type="button" className="btn btn-dark">Выскочить</button></a>
            </div>
            </>
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
