module.exports = ({ env }) => ({
  //host: env('HOST','0.0.0.0'), 
  host: env('HOST', '185.78.64.49'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://provasito.site'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
