async function createApp({ container }) {
  const express = require('express');
  const app = express();
  const cors = require('cors');

  const multer = require('multer');

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use((req, res, next) => {
    req.container = container;
    next();
  });
  const upload = multer({ dest: 'public/files' });
  app.use('/', upload.array('filename'), (req, res, next) => {
    next();
  });
  //swagger
  addSwagger({ app });
  // route
  addFileRoute({ app });
  return app;
}

async function addFileRoute({ app }) {
  // https://www.npmjs.com/package/express-file-routing
  const { router } = require('express-file-routing');
  const path = require('path');
  const morgan = require('morgan');
  const fileRoute = await router({
    directory: path.join(__dirname, 'routes'),
  });
  const errorHanlder = (error, req, res, next) => {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
    next();
  };
  fileRoute.use(errorHanlder);
  app.use('/user-service', morgan('combined'), fileRoute);
}

// add swagger to app
function addSwagger({
  app,
  swaggerRoute = '/api-docs',
  swaggerFilePath = './openapi.yaml',
}) {
  const fs = require('fs');
  const YAML = require('yaml');
  const swaggerUi = require('swagger-ui-express');

  console.info('INFO: Adding Swagger UI');
  try {
    const swaggerFile = fs.readFileSync(swaggerFilePath, 'utf8');
    // yaml only
    const swaggerDocument = YAML.parse(swaggerFile);
    app.use(swaggerRoute, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    console.info(`INFO: Added Swagger UI on route ${swaggerRoute}`);
  } catch (err) {
    console.info('INFO: Fail to add Swagger UI');
    console.error(err);
  }
}
module.exports = createApp;
