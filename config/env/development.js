export default {
  environment: 'development',

  request_rewrites: {
    enabled: true,
    debug: true,
    rules: [
      {
        // matches '//core/'
        pattern: /\/\/core\//,
        replace: 'http://core.dev.cloudspot.io/',
      },
      {
        // matches '//web/'
        pattern: /\/\/web\//,
        replace: 'http://webapp.dev.cloudspot.io/',
      },
    ],
  },
}
