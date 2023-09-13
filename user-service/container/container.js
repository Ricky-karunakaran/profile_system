// https://www.npmjs.com/package/awilix
function CreateContainer({ databaseService, loggerService }) {
  const awilix = require('awilix');
  const { createContainer, InjectionMode, asClass, asValue } = awilix;
  const container = createContainer({ injectionMode: InjectionMode.PROXY }); // Proxy will pass object

  container.register({
    database_service: asValue(databaseService),
    logger_service: asValue(loggerService),
  });

  // auto load modules
  container.loadModules(['controller/*.js', 'repository/*.js'], {
    formatName: name => {
      // snack_case
      return name.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    },
    resolverOptions: {
      injectionMode: InjectionMode.PROXY,
      lifetime: awilix.Lifetime.SINGLETON,
      register: awilix.asClass,
    },
  });
  return container;
}

module.exports = CreateContainer;
