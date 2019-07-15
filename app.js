require('./config/environment');

const SwaggerExpress = require('swagger-express-mw');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./api/swagger/swagger.json');

const app = require('express')();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const config = {
  // eslint-disable-next-line no-undef
  appRoot: __dirname // required config
};

const listener = (err, swaggerExpress) => {
  if (err) { throw err; }

  swaggerExpress.register(app);

  // eslint-disable-next-line no-undef
  const port = process.env.PORT || 10010;

  app.listen(port);
};

SwaggerExpress.create(config, listener);
