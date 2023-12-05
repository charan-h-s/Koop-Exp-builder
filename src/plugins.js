const providerFileGeojson = require('./provider-file-geojson/initialize')();
const providerGithub = require('./provider-github/initialize')();
const outputs = [];
const auths = [];
const caches = [];
const plugins = [providerGithub, providerFileGeojson];
module.exports = [...outputs, ...auths, ...caches, ...plugins];