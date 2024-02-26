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

            // const obj = {};
            // obj[key] = val;
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
testRun.addToMap('Tully', 'Parker');
testRun.addToMap('Tully', 'McMusterzzz');

testRun.addToMap('Carlos', 'Zappas');

// testRun.addToMap('Carla', 'Benzutto');



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJTztBQUNQO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNoR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQzs7OztBQUlwQyxnQkFBZ0Isa0RBQU87O0FBRXZCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvaGFzaC1tYXAuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG4vLyBjcmVhdGUgYSBOb2RlIGNsYXNzIGZvciBpbmRpdmlkdWFsIExpbmtlZCBMaXN0c1xuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IgKGtleSwgdmFsdWUsIG5leHROb2RlID0gbnVsbCkge1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMubmV4dE5vZGUgPSBuZXh0Tm9kZTtcbiAgICB9XG59XG5cblxuXG5leHBvcnQgY29uc3QgaGFzaE1hcCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1heEJ1Y2tldHMgPSAxNjtcbiAgICBjb25zdCBidWNrZXRTdG9yYWdlID0gW107XG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhhc2goa2V5KSB7XG4gICAgICAgIGxldCBoYXNoQ29kZSA9IDA7XG5cbiAgICAgICAgY29uc3QgcHJpbWVOdW0gPSA3O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaGFzaENvZGUgPSBwcmltZU51bSAqIGhhc2hDb2RlICsga2V5LmNoYXJDb2RlQXQoaSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhoYXNoQ29kZSk7XG4gICAgICAgICAgICBoYXNoQ29kZSAlPSBtYXhCdWNrZXRzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaGFzaENvZGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGhhc2hDb2RlKTtcblxuICAgICAgICByZXR1cm4gaGFzaENvZGUgXG4gICAgfTtcblxuXG4gICAgZnVuY3Rpb24gYWRkVG9NYXAoa2V5LCB2YWwpe1xuICAgICAgICBjb25zdCBpbmRleCA9IGNyZWF0ZUhhc2goa2V5KTtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuXG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gbWF4QnVja2V0cykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmRleCBpcyBvdXQgb2YgYm91bmRzJylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNyZWF0ZSBhIGxpbmtlZExpc3RcbiAgICAgICAgbGV0IGhlYWQgPSBudWxsO1xuICAgICAgICBsZXQgdGFpbCA9IG51bGw7XG4gICAgICAgIGxldCBsZW5ndGggPSAwO1xuXG4gICAgICAgIGlmIChidWNrZXRTdG9yYWdlW2luZGV4XSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coa2V5KTtcblxuICAgICAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKGtleSwgdmFsKVxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3Tm9kZSk7XG4gICAgICAgICAgICBoZWFkID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIGxlbmd0aCArPSAxO1xuXG4gICAgICAgICAgICAvLyBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICAgIC8vIG9ialtrZXldID0gdmFsO1xuICAgICAgICAgICAgYnVja2V0U3RvcmFnZVtpbmRleF0gPSBoZWFkO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYnVja2V0U3RvcmFnZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsZW5ndGgpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAoYnVja2V0U3RvcmFnZVtpbmRleF0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2R1cGxpY2F0ZScpO1xuICAgICAgICAgICAgLy8gdGhpcyBjb25kaXRpb25hbCBzdGF0ZW1lbnQgaXMgbm90IHdvcmtpbmcgY3VycmVudGx5XG5cbiAgICAgICAgfSBlbHNlIGlmIChidWNrZXRTdG9yYWdlW2luZGV4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBoZWFkID0gYnVja2V0U3RvcmFnZVtpbmRleF07XG4gICAgICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUoa2V5LCB2YWwpO1xuICAgICAgICAgICAgbGV0IHBvaW50ZXIgPSBoZWFkO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocG9pbnRlcik7XG5cbiAgICAgICAgICAgIHdoaWxlIChwb2ludGVyLm5leHROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoICs9IDE7XG4gICAgICAgICAgICAgICAgcG9pbnRlciA9IHBvaW50ZXIubmV4dE5vZGU7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocG9pbnRlcilcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwb2ludGVyLm5leHROb2RlID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvaW50ZXIpXG4gICAgICAgICAgICB0YWlsID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhaWwpO1xuICAgICAgICAgICAgbGVuZ3RoICs9IDE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsZW5ndGgpO1xuXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coYnVja2V0U3RvcmFnZSlcbiAgICAgICAgXG4gICAgXG5cbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlSGFzaCxcbiAgICAgICAgYWRkVG9NYXBcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBoYXNoTWFwIH0gZnJvbSAnLi9oYXNoLW1hcCdcblxuXG5cbmNvbnN0IHRlc3RSdW4gPSBoYXNoTWFwKCk7XG5cbi8vIHRlc3RSdW4uY3JlYXRlSGFzaCgnRnJlZCcpO1xuXG50ZXN0UnVuLmFkZFRvTWFwKCdGcmVkJywgJ1NtaXRoJyk7XG5cbnRlc3RSdW4uYWRkVG9NYXAoJ1R1bGx5JywgJ01jTXVzdGVyJyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdUdWxseScsICdQYXJrZXInKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ1R1bGx5JywgJ01jTXVzdGVyenp6Jyk7XG5cbnRlc3RSdW4uYWRkVG9NYXAoJ0NhcmxvcycsICdaYXBwYXMnKTtcblxuLy8gdGVzdFJ1bi5hZGRUb01hcCgnQ2FybGEnLCAnQmVuenV0dG8nKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=