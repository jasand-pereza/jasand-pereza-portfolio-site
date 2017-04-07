
export default (html, preloadedState) => {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Jasand Pereza | Portfolio</title>
        <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Roboto|Slabo+27px" rel="stylesheet">
        <link rel="stylesheet" href="/styles.css"/>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/public/assets/bundle.js"></script>
      </body>
    </html>
    `
}
