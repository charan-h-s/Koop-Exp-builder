const providerGithub = require('@koopjs/provider-github');
function initialize() {
  return {
    instance: providerGithub
  };
}
module.exports = initialize;