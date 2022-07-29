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
          <div><a href="/" id="logo-link"><h1 className="logo">ДеливериМуняк</h1></a></div>

          <div className="location">
            <h5 className="location-text">Я нахожусь :</h5>
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
          {user ? (
            <div className="auth">
              <p className="hello">
                {user}
                {' '}
                тута
              </p>
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
