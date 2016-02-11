'use strict';

var toArray = require( './../lib' );

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
console.log( arr );
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