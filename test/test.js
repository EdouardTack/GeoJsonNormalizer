const fs = require('fs');
const assert = require('assert');
const normalizer = require('../index');

/**
 * @param {string} name of fixture file
 */
const testFixtures = (input, output) => {
    const inputJson = normalizer(JSON.parse(fs.readFileSync(__dirname + '/data/' + input + '.input.geojson')));
    const outputJson = JSON.parse(fs.readFileSync(__dirname + '/data/' + (output || input) + '.output.geojson'));

    assert.deepEqual(inputJson, outputJson, input);
};

/**
 * Test a feature collection object
 */
describe('test GeoJson "FeatureCollection"', () => {
    it('should be null', () => {
        const unValidFeatureCollection = { type: 'featureCollection', features: [] };
        assert.equal(normalizer(unValidFeatureCollection), null);
    });

    it('should be a valid FeatureCollection', () => {
        testFixtures('featurecollection');
    });
});

/**
 * Test a GeometryCollection
 */
describe('test GeoJson "GeometryCollection"', () => {
    it('should be null', () => {
        const unValidFeatureCollection = { type: 'geometrycollection', features: [] };
        assert.equal(normalizer(unValidFeatureCollection), null);
    });

    it('should be a valid GeometryCollection', () => {
        testFixtures('geometrycollection');
    });

    it('should be a valid GeometryCollection instead of features uses', () => {
        testFixtures('geometrycollectionfeatures', 'geometrycollection');
    });
});

/**
 * Test a feature object
 */
describe('test GeoJson "Feature"', () => {
    it('should be null', () => {
        const unValidFeature = { type: 'feature', geometry: {} };
        assert.equal(normalizer(unValidFeature), null);
    });

    it('should be a valid FeatureCollection', () => {
        testFixtures('feature');
    });
});

/**
 * Test a simple geometry
 */
describe('test GeoJson "Geometry"', () => {
    it('should be null', () => {
        const unValidGeometryPoint = { type: 'point', coordinates: [] };
        assert.equal(normalizer(unValidGeometryPoint), null);
        const unValidGeometryPolygon = { type: 'polygon', coordinates: [] };
        assert.equal(normalizer(unValidGeometryPolygon), null);
    });

    it('should be a valid FeatureCollection', () => {
        testFixtures('geometry');
    });
});

/**
 * Test a FeatureCollection with Geometry instead of Feature in features array
 */
describe('test GeoJson "FeatureCollection" with Geometry instead of Feature', () => {
    it('should be a valid FeatureCollection', () => {
        testFixtures('featurecollectionwithgeometry', 'featurecollection');
    });
});

/**
 * Test a GeometryCollection with Geometry instead of Feature in geometries array
 */
describe('test GeoJson "GeometryCollection" with Feature instead of Geometry', () => {
    it('should be a valid GeometryCollection', () => {
        testFixtures('geometrycollectionwithfeature', 'geometrycollection');
    });
});
