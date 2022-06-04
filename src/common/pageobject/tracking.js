const { createSpinner } = require("nanospinner");

function tracking(moduleName, obj) {
  return new Proxy(obj, {
    get(target, prop) {
      const func = target[prop];
      if (!func) {
        throw new Error(`Task ${prop} not found in ${moduleName} page object`);
      }

      return async (...args) => {
        const taskName = getTaskName(prop);
        const spinner = createSpinner().start({
          text: `${moduleName}: ${taskName}`,
        });

        try {
          const result = await func(...args);
          spinner.success();
          return result;
        } catch (error) {
          spinner.error();
          throw error;
        }
      };
    },
  });
}

function getTaskName(text) {
  return text
    .split(/(?=[A-Z])/)
    .join(" ")
    .toLowerCase();
}

module.exports = { tracking };
