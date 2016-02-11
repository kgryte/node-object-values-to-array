'use strict';

// MODULES //

var isObject = require( 'validate.io-object' );
var getKeys = require( 'object-keys' ).shim();


// OBJECT VALUES TO ARRAY //

/**
* FUNCTION: transform( obj )
*	Extracts object values into an array.
*
* @param {Object} obj - input object
* @returns {Array} value array
*/
function transform( obj ) {
	var keys;
	var out;
	var i;
	if ( !isObject( obj ) ) {
		throw new TypeError( 'invalid input argument. Must provide an object. Value: `' + obj + '`.' );
	}
	keys = getKeys( obj );
	out = new Array( keys.length );
	for ( i = 0; i < keys.length; i++ ) {
		out[ i ] = obj[ keys[i] ];
	}
	return out;
} // end FUNCTION transform()


// EXPORTS //

module.exports = transform;