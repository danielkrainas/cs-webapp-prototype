export default {
  environment: 'production',

  request_rewrites: {
    enabled: true,
    debug: false,
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
