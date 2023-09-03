const config = require('./properties.json');
const express = require('express');
const app = express();
const { router } = require('express-file-routing');
const cors = require('cors');
require('dotenv').config();
initialize(app);

app.listen(config.app.port, () => {
  console.log(`${config.app.name} listening on port ${config.app.port}`);
});

async function initialize(app) {
  const fs = require('fs');
  const YAML = require('yaml');
  const morgan = require('morgan');
  const multer = require('multer');

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  const upload = multer({ dest: 'public/files' });
  app.use('/', upload.array('filename'), (req, res, next) => {
    next();
  });

  // swagger
  const swaggerUi = require('swagger-ui-express');
  const swaggerFile = fs.readFileSync('./openapi.yaml', 'utf8');
  const swaggerDocument = YAML.parse(swaggerFile);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  // route
  app.use('/', morgan('combined'), await router());
}
