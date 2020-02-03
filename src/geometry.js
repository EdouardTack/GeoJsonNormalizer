/**
 * Skeleton of standard geometry
 * @param {Object}
 * @return {Object}
 */
const standardGeometry = {
    type: 'Point',
    coordinates: [0, 0]
};

/**
 * Normalize Geometry object
 * @param {Object} geometry
 * @return {Object}
 */
const normalizeGeometry = (geometry) => {
    /**
     * For non-standard Geometry
     */
    if (geometry.type && geometry.type === 'Feature') {
        geometry = Object.assign(
            {},
            standardGeometry,
            {
                type: (geometry.geometry && geometry.geometry.type) || 'Point',
                coordinates: (geometry.geometry && geometry.geometry.coordinates) || [0, 0]
            }
        );
    }

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
