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

var doubt = require("doubt");
var falzy = require("falzy");
var raze = require("raze");

var computeLevel = function computeLevel(array, depth) {
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

	if (!doubt(array, AS_ARRAY)) {
		return depth;
	}

	if (falzy(depth) || typeof depth != "number") {
		throw new Error("invalid depth");
	}

	return raze(array).reduce(function (count, element) {
		if (doubt(element, AS_ARRAY)) {
			return Math.max(count, computeLevel(element, depth + 1));
		}

		return count;
	}, depth);
};

var arlev = function arlev(array) {
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

	if (!doubt(array, AS_ARRAY)) {
		return 0;
	}

	return computeLevel(array, 1);
};

module.exports = arlev;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFybGV2LnN1cHBvcnQuanMiXSwibmFtZXMiOlsiZG91YnQiLCJyZXF1aXJlIiwiZmFsenkiLCJyYXplIiwiY29tcHV0ZUxldmVsIiwiYXJyYXkiLCJkZXB0aCIsIkFTX0FSUkFZIiwiRXJyb3IiLCJyZWR1Y2UiLCJjb3VudCIsImVsZW1lbnQiLCJNYXRoIiwibWF4IiwiYXJsZXYiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsT0FBT0YsUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTUcsZUFBZSxTQUFTQSxZQUFULENBQXVCQyxLQUF2QixFQUE4QkMsS0FBOUIsRUFBcUM7QUFDekQ7Ozs7Ozs7Ozs7OztBQVlBLEtBQUksQ0FBQ04sTUFBT0ssS0FBUCxFQUFjRSxRQUFkLENBQUwsRUFBK0I7QUFDOUIsU0FBT0QsS0FBUDtBQUNBOztBQUVELEtBQUlKLE1BQU9JLEtBQVAsS0FBa0IsT0FBT0EsS0FBUCxJQUFnQixRQUF0QyxFQUFnRDtBQUMvQyxRQUFNLElBQUlFLEtBQUosQ0FBVyxlQUFYLENBQU47QUFDQTs7QUFFRCxRQUFPTCxLQUFNRSxLQUFOLEVBQWNJLE1BQWQsQ0FBc0IsVUFBRUMsS0FBRixFQUFTQyxPQUFULEVBQXNCO0FBQ2xELE1BQUlYLE1BQU9XLE9BQVAsRUFBZ0JKLFFBQWhCLENBQUosRUFBZ0M7QUFDL0IsVUFBT0ssS0FBS0MsR0FBTCxDQUFVSCxLQUFWLEVBQWlCTixhQUFjTyxPQUFkLEVBQXVCTCxRQUFRLENBQS9CLENBQWpCLENBQVA7QUFDQTs7QUFFRCxTQUFPSSxLQUFQO0FBQ0EsRUFOTSxFQU1KSixLQU5JLENBQVA7QUFPQSxDQTVCRDs7QUE4QkEsSUFBTVEsUUFBUSxTQUFTQSxLQUFULENBQWdCVCxLQUFoQixFQUF1QjtBQUNwQzs7Ozs7Ozs7Ozs7QUFXQSxLQUFJLENBQUNMLE1BQU9LLEtBQVAsRUFBY0UsUUFBZCxDQUFMLEVBQStCO0FBQzlCLFNBQU8sQ0FBUDtBQUNBOztBQUVELFFBQU9ILGFBQWNDLEtBQWQsRUFBcUIsQ0FBckIsQ0FBUDtBQUNBLENBakJEOztBQW1CQVUsT0FBT0MsT0FBUCxHQUFpQkYsS0FBakIiLCJmaWxlIjoiYXJsZXYuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiYXJsZXZcIixcblx0XHRcdFwicGF0aFwiOiBcImFybGV2L2FybGV2LmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJhcmxldi5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJhcmxldlwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvYXJsZXYuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJhcmxldi10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEdldCBhcnJheSBsZXZlbC5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZG91YnRcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcblxuY29uc3QgY29tcHV0ZUxldmVsID0gZnVuY3Rpb24gY29tcHV0ZUxldmVsKCBhcnJheSwgZGVwdGggKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJtZXRob2Q6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdEFycmF5LFxuXHRcdFx0XHRcdFwiWypdXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJkZXB0aDpyZXF1aXJlZFwiOiBcIm51bWJlclwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggIWRvdWJ0KCBhcnJheSwgQVNfQVJSQVkgKSApe1xuXHRcdHJldHVybiBkZXB0aDtcblx0fVxuXG5cdGlmKCBmYWx6eSggZGVwdGggKSB8fCB0eXBlb2YgZGVwdGggIT0gXCJudW1iZXJcIiApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGRlcHRoXCIgKTtcblx0fVxuXG5cdHJldHVybiByYXplKCBhcnJheSApLnJlZHVjZSggKCBjb3VudCwgZWxlbWVudCApID0+IHtcblx0XHRpZiggZG91YnQoIGVsZW1lbnQsIEFTX0FSUkFZICkgKXtcblx0XHRcdHJldHVybiBNYXRoLm1heCggY291bnQsIGNvbXB1dGVMZXZlbCggZWxlbWVudCwgZGVwdGggKyAxICkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY291bnQ7XG5cdH0sIGRlcHRoICk7XG59O1xuXG5jb25zdCBhcmxldiA9IGZ1bmN0aW9uIGFybGV2KCBhcnJheSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImFycmF5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRBcnJheSxcblx0XHRcdFx0XHRcIlsqXVwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCAhZG91YnQoIGFycmF5LCBBU19BUlJBWSApICl7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRyZXR1cm4gY29tcHV0ZUxldmVsKCBhcnJheSwgMSApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcmxldjtcbiJdfQ==
//# sourceMappingURL=arlev.support.js.map
