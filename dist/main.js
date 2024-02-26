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

// create a Node class for individual Linked Lists
class Node {
    constructor (key, value, nextNode = null) {
        this.key = key;
        this.value = value
        this.nextNode = nextNode;
    }
}



const hashMap = function() {
    const maxBuckets = 16;
    const bucketStorage = [];


    function createHash(key) {
        let hashCode = 0;

        const primeNum = 7;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNum * hashCode + key.charCodeAt(i);
            // console.log(hashCode);
            hashCode %= maxBuckets;
            // console.log(hashCode);
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

        // create a linkedList
        let head = null;
        let tail = null;
        let length = 0;

        if (bucketStorage[index] === undefined ) {
            console.log(key);

            const newNode = new Node(key, val)
            console.log(newNode);
            head = newNode;
            length += 1;

            bucketStorage[index] = head;
            console.log(bucketStorage);
            console.log(length);
            
        } else if (bucketStorage[index].hasOwnProperty(key)) {
            console.log('duplicate');
            // this conditional statement is not working currently

        } else if (bucketStorage[index] !== undefined) {
            head = bucketStorage[index];
            const newNode = new Node(key, val);
            let pointer = head;
            length = 1;
            console.log(pointer);

            while (pointer.nextNode !== null) {
                length += 1;
                pointer = pointer.nextNode;
                // console.log(pointer)
            };
            pointer.nextNode = newNode;
            console.log(pointer)
            tail = newNode;
            console.log(tail);
            length += 1;
            console.log(length);
            console.log(bucketStorage)
            return pointer

        }

        return {head, tail, length}
    

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
testRun.addToMap('Tully', 'Parker');
testRun.addToMap('Tully', 'McMusterzzz');

testRun.addToMap('Carlos', 'Zappas');

// testRun.addToMap('Carla', 'Benzutto');



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJTztBQUNQO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxnQkFBZ0I7QUFDaEI7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNqR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQzs7OztBQUlwQyxnQkFBZ0Isa0RBQU87O0FBRXZCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvaGFzaC1tYXAuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG4vLyBjcmVhdGUgYSBOb2RlIGNsYXNzIGZvciBpbmRpdmlkdWFsIExpbmtlZCBMaXN0c1xuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IgKGtleSwgdmFsdWUsIG5leHROb2RlID0gbnVsbCkge1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMubmV4dE5vZGUgPSBuZXh0Tm9kZTtcbiAgICB9XG59XG5cblxuXG5leHBvcnQgY29uc3QgaGFzaE1hcCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1heEJ1Y2tldHMgPSAxNjtcbiAgICBjb25zdCBidWNrZXRTdG9yYWdlID0gW107XG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhhc2goa2V5KSB7XG4gICAgICAgIGxldCBoYXNoQ29kZSA9IDA7XG5cbiAgICAgICAgY29uc3QgcHJpbWVOdW0gPSA3O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaGFzaENvZGUgPSBwcmltZU51bSAqIGhhc2hDb2RlICsga2V5LmNoYXJDb2RlQXQoaSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhoYXNoQ29kZSk7XG4gICAgICAgICAgICBoYXNoQ29kZSAlPSBtYXhCdWNrZXRzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaGFzaENvZGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGhhc2hDb2RlKTtcblxuICAgICAgICByZXR1cm4gaGFzaENvZGUgXG4gICAgfTtcblxuXG4gICAgZnVuY3Rpb24gYWRkVG9NYXAoa2V5LCB2YWwpe1xuICAgICAgICBjb25zdCBpbmRleCA9IGNyZWF0ZUhhc2goa2V5KTtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuXG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gbWF4QnVja2V0cykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmRleCBpcyBvdXQgb2YgYm91bmRzJylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNyZWF0ZSBhIGxpbmtlZExpc3RcbiAgICAgICAgbGV0IGhlYWQgPSBudWxsO1xuICAgICAgICBsZXQgdGFpbCA9IG51bGw7XG4gICAgICAgIGxldCBsZW5ndGggPSAwO1xuXG4gICAgICAgIGlmIChidWNrZXRTdG9yYWdlW2luZGV4XSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coa2V5KTtcblxuICAgICAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKGtleSwgdmFsKVxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3Tm9kZSk7XG4gICAgICAgICAgICBoZWFkID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIGxlbmd0aCArPSAxO1xuXG4gICAgICAgICAgICBidWNrZXRTdG9yYWdlW2luZGV4XSA9IGhlYWQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhidWNrZXRTdG9yYWdlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxlbmd0aCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmIChidWNrZXRTdG9yYWdlW2luZGV4XS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZHVwbGljYXRlJyk7XG4gICAgICAgICAgICAvLyB0aGlzIGNvbmRpdGlvbmFsIHN0YXRlbWVudCBpcyBub3Qgd29ya2luZyBjdXJyZW50bHlcblxuICAgICAgICB9IGVsc2UgaWYgKGJ1Y2tldFN0b3JhZ2VbaW5kZXhdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGhlYWQgPSBidWNrZXRTdG9yYWdlW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZShrZXksIHZhbCk7XG4gICAgICAgICAgICBsZXQgcG9pbnRlciA9IGhlYWQ7XG4gICAgICAgICAgICBsZW5ndGggPSAxO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocG9pbnRlcik7XG5cbiAgICAgICAgICAgIHdoaWxlIChwb2ludGVyLm5leHROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoICs9IDE7XG4gICAgICAgICAgICAgICAgcG9pbnRlciA9IHBvaW50ZXIubmV4dE5vZGU7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocG9pbnRlcilcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwb2ludGVyLm5leHROb2RlID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvaW50ZXIpXG4gICAgICAgICAgICB0YWlsID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhaWwpO1xuICAgICAgICAgICAgbGVuZ3RoICs9IDE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsZW5ndGgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYnVja2V0U3RvcmFnZSlcbiAgICAgICAgICAgIHJldHVybiBwb2ludGVyXG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7aGVhZCwgdGFpbCwgbGVuZ3RofVxuICAgIFxuXG4gICAgfVxuXG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZUhhc2gsXG4gICAgICAgIGFkZFRvTWFwXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaGFzaE1hcCB9IGZyb20gJy4vaGFzaC1tYXAnXG5cblxuXG5jb25zdCB0ZXN0UnVuID0gaGFzaE1hcCgpO1xuXG4vLyB0ZXN0UnVuLmNyZWF0ZUhhc2goJ0ZyZWQnKTtcblxudGVzdFJ1bi5hZGRUb01hcCgnRnJlZCcsICdTbWl0aCcpO1xuXG50ZXN0UnVuLmFkZFRvTWFwKCdUdWxseScsICdNY011c3RlcicpO1xudGVzdFJ1bi5hZGRUb01hcCgnVHVsbHknLCAnUGFya2VyJyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdUdWxseScsICdNY011c3Rlcnp6eicpO1xuXG50ZXN0UnVuLmFkZFRvTWFwKCdDYXJsb3MnLCAnWmFwcGFzJyk7XG5cbi8vIHRlc3RSdW4uYWRkVG9NYXAoJ0NhcmxhJywgJ0Jlbnp1dHRvJyk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9