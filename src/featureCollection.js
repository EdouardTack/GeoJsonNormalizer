const { normalizeFeature } = require('./feature');

/**
 * @param {Object}
 */
const standardGeoJson = {
    type: 'FeatureCollection',
    features: []
};

/**
 * @param {Array} features
 * @return {Array}
 */
const normalizeFeatures = (features) => {
    return features
        .map((feature) => {
            return normalizeFeature(feature);
        });
};

module.exports = {
    standardGeoJson,
    normalizeFeatures
};
