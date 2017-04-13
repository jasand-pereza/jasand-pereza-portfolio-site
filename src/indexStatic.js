export default (html, preloadedState) => {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Jasand Pereza | Portfolio</title>
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Roboto|Slabo+27px" rel="stylesheet">
        <link rel="stylesheet" href="/assets/styles.css"/>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/assets/bundle.js"></script>
      </body>
    </html>
    `
}
