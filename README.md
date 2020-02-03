# GeoJson Normalizer

Normalize Json object to standard GeoJson. Check the standard [RFC](https://tools.ietf.org/html/rfc7946).

## Install

`npm install geojson-normalizer --save`

## Usage

You have to import/require the library like this.

```javascript
// import usage
import normalizer from 'geojson-normalizer';
// OR
// require usage
const normalizer = require('geojson-normalizer');
```

Example with a Feature object

```javascript
const feature = {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [48.390279, -4.486291]
  },
  "properties": {
    "name": "Brest"
  }
}

const collection = normalizer(feature);
/**
 * `collection` will output =>
 * {
 *      "type": "FeatureCollection",
 *    	"features": [
 *    		{
 *    			"type": "Feature",
 *    			"geometry": {
 *    				"type": "Point",
 *    				"coordinates": [
 *    					48.390279,
 *    					-4.486291
 *    				]
 *    			},
 *    			"properties": {
 *    				"name": "Brest"
 *    			}
 *    		}
 *    	]
 * }
 */
```

Example with a Geometry object
```javascript
const geometry = {
  "type": "Point",
  "coordinates": [48.390279, -4.486291]
};

const collection = normalizer(feature);
/**
 * `collection` will output =>
 * {
 *    	"type": "FeatureCollection",
 *    	"features": [
 *    		{
 *    			"type": "Feature",
 *    			"properties": {},
 *    			"geometry": {
 *    				"type": "Point",
 *    				"coordinates": [
 *    					48.390279,
 *    					-4.486291
 *    				]
 *    			}
 *    		}
 *    	]
 * }
 */
```

## Developpment

This library use `eslint` for Code style and `mocha` for tests. Use `npm run lint` or `npm run fix` to check CS. To run unit tests, use `npm test` command.

## LICENCE

MIT License

Copyright (c) 2020 Tackacoder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
