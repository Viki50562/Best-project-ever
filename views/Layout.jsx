const React = require('react');

function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./public/css/bootstrap.min.css" />
        <link rel="stylesheet" href="./public/css/Layout.css" />
        <title>{title}</title>
      </head>
      <body>
        <header className="header">
          <h1 className="logo">Dosta-v-O4ko!</h1>
          <div className="auth">
            <button type="button" className="btn btn-dark ">Rega</button>
            <button type="button" className="btn btn-dark">Loga</button>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
