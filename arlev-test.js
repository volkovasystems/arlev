
const assert = require( "assert" );
const arlev = require( "./arlev.js" );

assert.equal( arlev( [ [ [ ] ] , [ [ [ ] ] ] ] ), 4, "should be equal to 4" );

console.log( "ok" );
