const { normalizeFeature } = require('./feature');

/**
 * Skeleton of standard Feature Collection
 * @param {Object}
 */
const standardGeoJson = {
    type: 'FeatureCollection',
    features: []
};

/**
 * Normalize Fetures
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
