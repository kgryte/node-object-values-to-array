'use strict';

// MODULES //

var tape = require( 'tape' );
var toArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof toArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'function throws an error if not provided an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		true,
		undefined,
		[],
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	function badValue( value ) {
		return function badValue() {
			toArray( value );
		};
	}
	t.end();
});

tape( 'function extracts object values into an array', function test( t ) {
	var expected;
	var actual;
	var d;

	// WARNING: we rely on JS engines honoring object insertion order...
	d = {};
	d.beep = {'a':1};
	d.boop = {'a':2};
	d.bap = {'a':3};

	expected = [{'a':1},{'a':2},{'a':3}];
	actual = toArray( d );

	t.deepEqual( actual, expected, 'extracts object values into an array' );
	t.end();
});

tape( 'function returns an empty array if provided an empty object', function test( t ) {
	var expected;
	var actual;

	expected = [];
	actual = toArray( {} );

	t.deepEqual( actual, expected, 'returns an empty array' );
	t.end();
});
