const providerFileGeojson = require('@koopjs/provider-file-geojson');
function initialize() {
  return {
    instance: providerFileGeojson,
    options:{ dataDir:'src/Data/GeoJson'}
  };
}
module.exports = initialize;