const React = require('react');

function Layout({title, children}){
    return(
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
    </head>
    <body>
    <header class="header" >
        <h1 class="logo">Dosta-v-O4ko!</h1> 
        <div class="auth">
            <button type="button" class="btn btn-dark ">Rega</button>
            <button type="button" class="btn btn-dark">Loga</button>
        </div>
    </header>
        {children}
    </body>
    </html>)
}