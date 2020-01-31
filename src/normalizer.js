const { standardGeoJson, normalizeFeatures } = require('./featureCollection');
const { standardFeature, normalizeFeature } = require('./feature');

/**
 * @param {Object} geoJson
 */
const normalizeGeoJson = (geoJson) => {
    if (geoJson.type === 'Feature') {
        return Object.assign(
            {},
            standardGeoJson,
            {
                features: [
                    normalizeFeature(geoJson)
                ]
            }
        );
    } else if (geoJson.type === 'FeatureCollection') {
        return Object.assign(
            {},
            standardGeoJson,
            {
                features: normalizeFeatures(geoJson.features)
            }
        );
    } else {
        return Object.assign(
            {},
            standardGeoJson,
            {
                features: [
                    normalizeFeature(
                        Object.assign(
                            {},
                            standardFeature,
                            {
                                geometry: geoJson
                            }
                        )
                    )
                ]
            }
        );
    }
};

module.exports = normalizeGeoJson;
