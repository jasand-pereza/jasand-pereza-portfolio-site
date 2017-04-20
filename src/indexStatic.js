export default (html, preloadedState, appEnv) => {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Jasand Pereza | Portfolio</title>
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Roboto|Slabo+27px" rel="stylesheet">
        <link rel="stylesheet" href="/assets/build/styles.css"/>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          window.appEnv = '${appEnv}';
        </script>

        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-41211316-1', 'auto');
          ga('send', 'pageview');

        </script>
        <script src="/assets/build/bundle.js"></script>
      </body>
    </html>
    `
}