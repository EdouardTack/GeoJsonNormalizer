/**
 * @param {Object}
 * @return {Object}
 */
const standardGeometry = {
    type: 'Point',
    coordinates: [0, 0]
};

/**
 * @param {Object} geometry
 * @return {Object}
 */
const normalizeGeometry = (geometry) => {
    return Object.assign(
        {},
        standardGeometry,
        {
            type: geometry.type,
            coordinates: geometry.coordinates || [],
        }
    );
};

module.exports = {
    standardGeometry,
    normalizeGeometry
};
