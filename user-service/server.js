const { MongoService } = require('./service/MongoService');
const { LoggerService } = require('./service/LoggerService');
const dotenv = require('dotenv');
const createApp = require('./app');
const CreateContainer = require('./container/container');

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const container = CreateContainer({
  databaseService: new MongoService(),
  loggerService: new LoggerService(),
});
async function startServer() {
  const app = await createApp({ container });
  app.listen(process.env.PORT, () => {
    console.log(`Listening to port 3102`);
  });
}

startServer();
