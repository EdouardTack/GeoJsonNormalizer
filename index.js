const normalizeGeoJson = require('./src/normalizer');

/**
 * List of authorize GeoJson type
 * @param {Array}
 */
const knownTypes = [
    'Point',
    'MultiPoint',
    'LineString',
    'MultiLineString',
    'Polygon',
    'MultiPolygon',
    'GeometryCollection',
    'Feature',
    'FeatureCollection',
];

/**
 * Normalize Json features to standard GeoJson
 *
 * @see https://tools.ietf.org/html/rfc7946
 * @param {object} Json data
 * @return {object} Valid and normalize GeoJson
 */
const normalizer = (geoJson) => {
    if (!geoJson || !geoJson.type) {
        return null;
    }

    if (!knownTypes.includes(geoJson.type)) {
        return null;
    }

    return normalizeGeoJson(geoJson);
};

module.exports = normalizer;
