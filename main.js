/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hash-map.js":
/*!*************************!*\
  !*** ./src/hash-map.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hashMap: () => (/* binding */ hashMap)
/* harmony export */ });
/* eslint-disable import/prefer-default-export */


const hashMap = function() {
    const maxBuckets = 16;
    const bucketStorage = [];


    function createHash(key) {
        let hashCode = 0;

        const primeNum = 7;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNum * hashCode + key.charCodeAt(i);
            console.log(hashCode);
            hashCode %= maxBuckets;
            console.log(hashCode);
        }
        // console.log(hashCode);

        return hashCode 
    };


    function addToMap(key, val){
        const index = createHash(key);
        console.log(index);

        if (index < 0 || index >= maxBuckets) {
            throw new Error('Index is out of bounds')
        }


        if (bucketStorage[index] === undefined ) {
            console.log(key);

            const obj = {};
            obj[key] = val;
            bucketStorage[index] = obj;
            console.log(bucketStorage);
        } else if (bucketStorage[index].hasOwnProperty(key)) {
            console.log('duplicate');
            // this conditional statement is not working currently
        }
        // console.log(bucketStorage)
        
    

    }



    return {
        createHash,
        addToMap
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hash-map */ "./src/hash-map.js");




const testRun = (0,_hash_map__WEBPACK_IMPORTED_MODULE_0__.hashMap)();

// testRun.createHash('Fred');

testRun.addToMap('Fred', 'Smith');
testRun.addToMap('Tully', 'McMuster');

testRun.addToMap('Tully', 'McMusterzzz');



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFHTztBQUNQO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3hEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm9DOzs7O0FBSXBDLGdCQUFnQixrREFBTzs7QUFFdkI7O0FBRUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvaGFzaC1tYXAuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG5cbmV4cG9ydCBjb25zdCBoYXNoTWFwID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbWF4QnVja2V0cyA9IDE2O1xuICAgIGNvbnN0IGJ1Y2tldFN0b3JhZ2UgPSBbXTtcblxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSGFzaChrZXkpIHtcbiAgICAgICAgbGV0IGhhc2hDb2RlID0gMDtcblxuICAgICAgICBjb25zdCBwcmltZU51bSA9IDc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoYXNoQ29kZSA9IHByaW1lTnVtICogaGFzaENvZGUgKyBrZXkuY2hhckNvZGVBdChpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhhc2hDb2RlKTtcbiAgICAgICAgICAgIGhhc2hDb2RlICU9IG1heEJ1Y2tldHM7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhoYXNoQ29kZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coaGFzaENvZGUpO1xuXG4gICAgICAgIHJldHVybiBoYXNoQ29kZSBcbiAgICB9O1xuXG5cbiAgICBmdW5jdGlvbiBhZGRUb01hcChrZXksIHZhbCl7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gY3JlYXRlSGFzaChrZXkpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG5cbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSBtYXhCdWNrZXRzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZGV4IGlzIG91dCBvZiBib3VuZHMnKVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoYnVja2V0U3RvcmFnZVtpbmRleF0gPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgb2JqW2tleV0gPSB2YWw7XG4gICAgICAgICAgICBidWNrZXRTdG9yYWdlW2luZGV4XSA9IG9iajtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1Y2tldFN0b3JhZ2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGJ1Y2tldFN0b3JhZ2VbaW5kZXhdLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkdXBsaWNhdGUnKTtcbiAgICAgICAgICAgIC8vIHRoaXMgY29uZGl0aW9uYWwgc3RhdGVtZW50IGlzIG5vdCB3b3JraW5nIGN1cnJlbnRseVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGJ1Y2tldFN0b3JhZ2UpXG4gICAgICAgIFxuICAgIFxuXG4gICAgfVxuXG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZUhhc2gsXG4gICAgICAgIGFkZFRvTWFwXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaGFzaE1hcCB9IGZyb20gJy4vaGFzaC1tYXAnXG5cblxuXG5jb25zdCB0ZXN0UnVuID0gaGFzaE1hcCgpO1xuXG4vLyB0ZXN0UnVuLmNyZWF0ZUhhc2goJ0ZyZWQnKTtcblxudGVzdFJ1bi5hZGRUb01hcCgnRnJlZCcsICdTbWl0aCcpO1xudGVzdFJ1bi5hZGRUb01hcCgnVHVsbHknLCAnTWNNdXN0ZXInKTtcblxudGVzdFJ1bi5hZGRUb01hcCgnVHVsbHknLCAnTWNNdXN0ZXJ6enonKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=