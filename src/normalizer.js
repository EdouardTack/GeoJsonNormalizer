const { standardGeoJson, normalizeFeatures } = require('./featureCollection');
const { standardGeometryCollection, normalizeGeometries } = require('./geometryCollection');
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
    } else if (geoJson.type === 'GeometryCollection') {
        return Object.assign(
            {},
            standardGeometryCollection,
            {
                geometries: normalizeGeometries(geoJson.features || geoJson.geometries)
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
