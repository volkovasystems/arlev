"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

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
	@end-module-license

	@module-configuration:
		{
			"package": "arlev",
			"path": "arlev/arlev.js",
			"file": "arlev.js",
			"module": "arlev",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/arlev.git",
			"test": "arlev-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Get array level.
	@end-module-documentation

	@include:
		{
			"doubt": "doubt",
			"falzy": "falzy",
			"raze": "raze"
		}
	@end-include
*/

const doubt = require( "doubt" );
const falzy = require( "falzy" );
const raze = require( "raze" );

const computeLevel = function computeLevel( array, depth ){
	/*;
		@meta-configuration:
			{
				"method:required": [
					Array,
					"[*]"
				],
				"depth:required": "number"
			}
		@end-meta-configuration
	*/

	if( !doubt( array, AS_ARRAY ) ){
		return depth;
	}

	if( falzy( depth ) || typeof depth != "number" ){
		throw new Error( "invalid depth" );
	}

	return raze( array ).reduce( ( count, element ) => {
		if( doubt( element, AS_ARRAY ) ){
			return Math.max( count, computeLevel( element, depth + 1 ) );
		}

		return count;
	}, depth );
};

const arlev = function arlev( array ){
	/*;
		@meta-configuration:
			{
				"array:required": [
					Array,
					"[*]"
				]
			}
		@end-meta-configuration
	*/

	if( !doubt( array, AS_ARRAY ) ){
		return 0;
	}

	return computeLevel( array, 1 );
};

module.exports = arlev;
