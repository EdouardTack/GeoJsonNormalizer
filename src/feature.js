const { normalizeGeometry } = require('./geometry');

/**
 * Skeleton of standard Feature
 * @param {Object}
 */
const standardFeature = {
    type: 'Feature',
    geometry: {},
    properties: {}
};

/**
 * Normalize Feature object
 * @param {Object} feature
 * @return {Object}
 */
const normalizeFeature = (feature) => {
    /**
     * For non-standard Feature
     */
    if (!feature.geometry || feature.type !== 'Feature') {
        feature = Object.assign(
            {},
            standardFeature,
            {
                geometry: feature,
                properties: {}
            }
        );
    }

    return Object.assign(
        {},
        standardFeature,
        {
            geometry: normalizeGeometry(feature.geometry),
            properties: Object.assign(
                {},
                standardFeature.properties,
                feature.properties
            ),
        }
    );
};

module.exports = {
    standardFeature,
    normalizeFeature
};
