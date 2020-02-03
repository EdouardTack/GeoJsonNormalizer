const { normalizeGeometry } = require('./geometry');

/**
 * @param {Object}
 */
const standardGeometryCollection = {
    type: 'GeometryCollection',
    geometries: []
};

/**
 * @param {Object} geometries
 * @return {Object}
 */
const normalizeGeometries = (geometries) => {
    return geometries
        .map((geometry) => {
            return normalizeGeometry(geometry);
        });
};

module.exports = {
    standardGeometryCollection,
    normalizeGeometries
};
