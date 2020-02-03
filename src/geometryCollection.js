const { normalizeGeometry } = require('./geometry');

/**
 * Skeleton of standard Geometry Collection
 * @param {Object}
 */
const standardGeometryCollection = {
    type: 'GeometryCollection',
    geometries: []
};

/**
 * Normalize Geometries
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
