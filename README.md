toArray
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Extract object values into an array.


## Installation

``` bash
$ npm install object-values-to-array
```


## Usage

``` javascript
var toArray = require( 'object-values-to-array' );
```

#### toArray( obj )

Extracts `object` values into an `array`.

``` javascript
var arr = toArray({
	'a': {'b':'c'},
	'd': {'e':'f'}
});
// returns [{'b':'c'},{'e':'f'}]
```


## Notes

*	Element order is __not__ guaranteed. An `object` is an __unordered__ collection of property-value pairs. While most JavaScript engines honor insertion order, this should __not__ be assumed. 


## Examples

``` javascript
var toArray = require( 'object-values-to-array' );

var obj = {
	'beep': {
		'name': 'beep',
		'value': 31
	},
	'boop': {
		'name': 'boop',
		'value': 32
	},
	'bap': {
		'value': 30
	}
};

var arr = toArray( obj );
/*
	[
		{
			'name': 'beep',
			'value': 31
		},
		{
			'name': 'boop',
			'value': 32
		},
		{
			'value': 30
		}
	]
*/
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/object-values-to-array.svg
[npm-url]: https://npmjs.org/package/object-values-to-array

[build-image]: http://img.shields.io/travis/kgryte/node-object-values-to-array/master.svg
[build-url]: https://travis-ci.org/kgryte/node-object-values-to-array

[coverage-image]: https://img.shields.io/codecov/c/github/kgryte/node-object-values-to-array/master.svg
[coverage-url]: https://codecov.io/github/kgryte/node-object-values-to-array?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/node-object-values-to-array.svg
[dependencies-url]: https://david-dm.org/kgryte/node-object-values-to-array

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/node-object-values-to-array.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/node-object-values-to-array

[github-issues-image]: http://img.shields.io/github/issues/kgryte/node-object-values-to-array.svg
[github-issues-url]: https://github.com/kgryte/node-object-values-to-array/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com
