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


    function addToMap(key1, val){
        const index = createHash(key1);
        console.log(index);

        if (index < 0 || index >= maxBuckets) {
            throw new Error('Index is out of bounds')
        }

        // create a linkedList
        let head = null;
        let tail = null;
        let length = 0;

        if (bucketStorage[index] === undefined ) {
            console.log(key1);

            const newNode = new Node(key1, val)
            console.log(newNode);
            head = newNode;
            length += 1;

            bucketStorage[index] = head;
            console.log(bucketStorage);
            console.log(length);
            
        } else if (bucketStorage[index] !== undefined) {

            head = bucketStorage[index];
            let pointer = head;

            length = 1;
            console.log(pointer);
            // does a check to see if key already exists:
            if (pointer.key === key1) {
                    console.log('duplicate');
                    pointer.value = val;
                    console.log(pointer)
                    return
                }

            while (pointer.nextNode !== null) {
                length += 1;
                pointer = pointer.nextNode;
                // console.log(pointer)
            };
            const newNode = new Node(key1, val);

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

// else if (bucketStorage[index] === key1) {
//             console.log('duplicate');
//             // this conditional statement is not working currently

//         } 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJTztBQUNQO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGdCQUFnQjtBQUNoQjs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNoSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQzs7OztBQUlwQyxnQkFBZ0Isa0RBQU87O0FBRXZCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvaGFzaC1tYXAuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG4vLyBjcmVhdGUgYSBOb2RlIGNsYXNzIGZvciBpbmRpdmlkdWFsIExpbmtlZCBMaXN0c1xuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IgKGtleSwgdmFsdWUsIG5leHROb2RlID0gbnVsbCkge1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMubmV4dE5vZGUgPSBuZXh0Tm9kZTtcbiAgICB9XG59XG5cblxuXG5leHBvcnQgY29uc3QgaGFzaE1hcCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1heEJ1Y2tldHMgPSAxNjtcbiAgICBjb25zdCBidWNrZXRTdG9yYWdlID0gW107XG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhhc2goa2V5KSB7XG4gICAgICAgIGxldCBoYXNoQ29kZSA9IDA7XG5cbiAgICAgICAgY29uc3QgcHJpbWVOdW0gPSA3O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaGFzaENvZGUgPSBwcmltZU51bSAqIGhhc2hDb2RlICsga2V5LmNoYXJDb2RlQXQoaSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhoYXNoQ29kZSk7XG4gICAgICAgICAgICBoYXNoQ29kZSAlPSBtYXhCdWNrZXRzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaGFzaENvZGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGhhc2hDb2RlKTtcblxuICAgICAgICByZXR1cm4gaGFzaENvZGUgXG4gICAgfTtcblxuXG4gICAgZnVuY3Rpb24gYWRkVG9NYXAoa2V5MSwgdmFsKXtcbiAgICAgICAgY29uc3QgaW5kZXggPSBjcmVhdGVIYXNoKGtleTEpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG5cbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSBtYXhCdWNrZXRzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZGV4IGlzIG91dCBvZiBib3VuZHMnKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY3JlYXRlIGEgbGlua2VkTGlzdFxuICAgICAgICBsZXQgaGVhZCA9IG51bGw7XG4gICAgICAgIGxldCB0YWlsID0gbnVsbDtcbiAgICAgICAgbGV0IGxlbmd0aCA9IDA7XG5cbiAgICAgICAgaWYgKGJ1Y2tldFN0b3JhZ2VbaW5kZXhdID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkxKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKGtleTEsIHZhbClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld05vZGUpO1xuICAgICAgICAgICAgaGVhZCA9IG5ld05vZGU7XG4gICAgICAgICAgICBsZW5ndGggKz0gMTtcblxuICAgICAgICAgICAgYnVja2V0U3RvcmFnZVtpbmRleF0gPSBoZWFkO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYnVja2V0U3RvcmFnZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsZW5ndGgpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAoYnVja2V0U3RvcmFnZVtpbmRleF0gIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICBoZWFkID0gYnVja2V0U3RvcmFnZVtpbmRleF07XG4gICAgICAgICAgICBsZXQgcG9pbnRlciA9IGhlYWQ7XG5cbiAgICAgICAgICAgIGxlbmd0aCA9IDE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwb2ludGVyKTtcbiAgICAgICAgICAgIC8vIGRvZXMgYSBjaGVjayB0byBzZWUgaWYga2V5IGFscmVhZHkgZXhpc3RzOlxuICAgICAgICAgICAgaWYgKHBvaW50ZXIua2V5ID09PSBrZXkxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkdXBsaWNhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci52YWx1ZSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocG9pbnRlcilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aGlsZSAocG9pbnRlci5uZXh0Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxlbmd0aCArPSAxO1xuICAgICAgICAgICAgICAgIHBvaW50ZXIgPSBwb2ludGVyLm5leHROb2RlO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBvaW50ZXIpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKGtleTEsIHZhbCk7XG5cbiAgICAgICAgICAgIHBvaW50ZXIubmV4dE5vZGUgPSBuZXdOb2RlO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocG9pbnRlcilcblxuICAgICAgICAgICAgdGFpbCA9IG5ld05vZGU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YWlsKTtcblxuICAgICAgICAgICAgbGVuZ3RoICs9IDE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsZW5ndGgpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhidWNrZXRTdG9yYWdlKVxuICAgICAgICAgICAgcmV0dXJuIHBvaW50ZXJcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtoZWFkLCB0YWlsLCBsZW5ndGh9XG4gICAgXG5cbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlSGFzaCxcbiAgICAgICAgYWRkVG9NYXBcbiAgICB9XG59IFxuXG4vLyBlbHNlIGlmIChidWNrZXRTdG9yYWdlW2luZGV4XSA9PT0ga2V5MSkge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ2R1cGxpY2F0ZScpO1xuLy8gICAgICAgICAgICAgLy8gdGhpcyBjb25kaXRpb25hbCBzdGF0ZW1lbnQgaXMgbm90IHdvcmtpbmcgY3VycmVudGx5XG5cbi8vICAgICAgICAgfSAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGhhc2hNYXAgfSBmcm9tICcuL2hhc2gtbWFwJ1xuXG5cblxuY29uc3QgdGVzdFJ1biA9IGhhc2hNYXAoKTtcblxuLy8gdGVzdFJ1bi5jcmVhdGVIYXNoKCdGcmVkJyk7XG5cbnRlc3RSdW4uYWRkVG9NYXAoJ0ZyZWQnLCAnU21pdGgnKTtcblxudGVzdFJ1bi5hZGRUb01hcCgnVHVsbHknLCAnTWNNdXN0ZXInKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ1R1bGx5JywgJ1BhcmtlcicpO1xudGVzdFJ1bi5hZGRUb01hcCgnVHVsbHknLCAnTWNNdXN0ZXJ6enonKTtcblxudGVzdFJ1bi5hZGRUb01hcCgnQ2FybG9zJywgJ1phcHBhcycpO1xuXG4vLyB0ZXN0UnVuLmFkZFRvTWFwKCdDYXJsYScsICdCZW56dXR0bycpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==