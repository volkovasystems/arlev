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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFybGV2LnN1cHBvcnQuanMiXSwibmFtZXMiOlsiZG91YnQiLCJyZXF1aXJlIiwiZmFsenkiLCJyYXplIiwiY29tcHV0ZUxldmVsIiwiYXJyYXkiLCJkZXB0aCIsIkFTX0FSUkFZIiwiRXJyb3IiLCJyZWR1Y2UiLCJjb3VudCIsImVsZW1lbnQiLCJNYXRoIiwibWF4IiwiYXJsZXYiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsT0FBT0YsUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTUcsZUFBZSxTQUFTQSxZQUFULENBQXVCQyxLQUF2QixFQUE4QkMsS0FBOUIsRUFBcUM7QUFDekQ7Ozs7Ozs7Ozs7OztBQVlBLEtBQUksQ0FBQ04sTUFBT0ssS0FBUCxFQUFjRSxRQUFkLENBQUwsRUFBK0I7QUFDOUIsU0FBT0QsS0FBUDtBQUNBOztBQUVELEtBQUlKLE1BQU9JLEtBQVAsS0FBa0IsT0FBT0EsS0FBUCxJQUFnQixRQUF0QyxFQUFnRDtBQUMvQyxRQUFNLElBQUlFLEtBQUosQ0FBVyxlQUFYLENBQU47QUFDQTs7QUFFRCxRQUFPTCxLQUFNRSxLQUFOLEVBQWNJLE1BQWQsQ0FBc0IsVUFBRUMsS0FBRixFQUFTQyxPQUFULEVBQXNCO0FBQ2xELE1BQUlYLE1BQU9XLE9BQVAsRUFBZ0JKLFFBQWhCLENBQUosRUFBZ0M7QUFDL0IsVUFBT0ssS0FBS0MsR0FBTCxDQUFVSCxLQUFWLEVBQWlCTixhQUFjTyxPQUFkLEVBQXVCTCxRQUFRLENBQS9CLENBQWpCLENBQVA7QUFDQTs7QUFFRCxTQUFPSSxLQUFQO0FBQ0EsRUFOTSxFQU1KSixLQU5JLENBQVA7QUFPQSxDQTVCRDs7QUE4QkEsSUFBTVEsUUFBUSxTQUFTQSxLQUFULENBQWdCVCxLQUFoQixFQUF1QjtBQUNwQzs7Ozs7Ozs7Ozs7QUFXQSxLQUFJLENBQUNMLE1BQU9LLEtBQVAsRUFBY0UsUUFBZCxDQUFMLEVBQStCO0FBQzlCLFNBQU8sQ0FBUDtBQUNBOztBQUVELFFBQU9ILGFBQWNDLEtBQWQsRUFBcUIsQ0FBckIsQ0FBUDtBQUNBLENBakJEOztBQW1CQVUsT0FBT0MsT0FBUCxHQUFpQkYsS0FBakIiLCJmaWxlIjoiYXJsZXYuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJhcmxldlwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJhcmxldi9hcmxldi5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJhcmxldi5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcImFybGV2XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2FybGV2LmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJhcmxldi10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdEdldCBhcnJheSBsZXZlbC5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXHJcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XHJcblxyXG5jb25zdCBjb21wdXRlTGV2ZWwgPSBmdW5jdGlvbiBjb21wdXRlTGV2ZWwoIGFycmF5LCBkZXB0aCApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibWV0aG9kOnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdEFycmF5LFxyXG5cdFx0XHRcdFx0XCJbKl1cIlxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0XCJkZXB0aDpyZXF1aXJlZFwiOiBcIm51bWJlclwiXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoICFkb3VidCggYXJyYXksIEFTX0FSUkFZICkgKXtcclxuXHRcdHJldHVybiBkZXB0aDtcclxuXHR9XHJcblxyXG5cdGlmKCBmYWx6eSggZGVwdGggKSB8fCB0eXBlb2YgZGVwdGggIT0gXCJudW1iZXJcIiApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZGVwdGhcIiApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJhemUoIGFycmF5ICkucmVkdWNlKCAoIGNvdW50LCBlbGVtZW50ICkgPT4ge1xyXG5cdFx0aWYoIGRvdWJ0KCBlbGVtZW50LCBBU19BUlJBWSApICl7XHJcblx0XHRcdHJldHVybiBNYXRoLm1heCggY291bnQsIGNvbXB1dGVMZXZlbCggZWxlbWVudCwgZGVwdGggKyAxICkgKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY291bnQ7XHJcblx0fSwgZGVwdGggKTtcclxufTtcclxuXHJcbmNvbnN0IGFybGV2ID0gZnVuY3Rpb24gYXJsZXYoIGFycmF5ICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhcnJheTpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRBcnJheSxcclxuXHRcdFx0XHRcdFwiWypdXCJcclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoICFkb3VidCggYXJyYXksIEFTX0FSUkFZICkgKXtcclxuXHRcdHJldHVybiAwO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGNvbXB1dGVMZXZlbCggYXJyYXksIDEgKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYXJsZXY7XHJcbiJdfQ==
//# sourceMappingURL=arlev.support.js.map
