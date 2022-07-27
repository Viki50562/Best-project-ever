const React = require('react');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js" integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossOrigin="anonymous" />
        <link rel="stylesheet" href="css/Layout.css" />
        <title>{title}</title>
      </head>
      <body>
        <header className="header">
          <h1 className="logo">Dosta-v-O4ko!</h1>
          <div className="auth">
            <a href="/reg"><button type="button" className="btn btn-dark ">Rega</button></a>
            <button type="button" className="btn btn-dark">Loga</button>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
};
