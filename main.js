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
    let length = 0;


    function createHash(key) {
        let hashCode = 0;

        const primeNum = 7;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNum * hashCode + key.charCodeAt(i);
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

        if (bucketStorage[index] === undefined ) {
            console.log(key1);

            const newNode = new Node(key1, val)
            console.log(newNode);
            head = newNode;
            length += 1;

            bucketStorage[index] = head;
            console.log(bucketStorage);
            
        } else if (bucketStorage[index] !== undefined) {

            head = bucketStorage[index];
            tail = bucketStorage[index];
            let pointer = head;

            console.log(pointer);
            // does a check to see if key already exists:
            if (pointer.key === key1) {
                    console.log('duplicate');
                    pointer.value = val;
                    console.log(pointer)
                    return
                }

            while (pointer.nextNode !== null) {
                pointer = pointer.nextNode;

            };
            const newNode = new Node(key1, val);

            pointer.nextNode = newNode;
            console.log(pointer)

            tail = newNode;
            console.log(tail);

            length += 1;
            console.log(length);

            console.log(bucketStorage)
            return {pointer, length}

        }

        return {head, tail, length}
    

    }

    function get(key) {
        const index = createHash(key);
        console.log(index);

        if (!bucketStorage[index]) {
            console.log(null);
            return null
        };

        const head = bucketStorage[index];
        let pointer = head

        while (pointer !== null) {
            if (pointer.key === key) {
                console.log(pointer.value);
                return pointer.value
            }
            pointer = pointer.nextNode;
        }
        console.log(null);
        return null
        

    }

    function has(key) {
        console.log(Boolean(get(key)))
        return Boolean(get(key));
    }

    function removeKey(key) {
        const index = createHash(key);
        const head = bucketStorage[index];
        // const prev = null;
        if (head.key === key) {
            console.log(head);
            bucketStorage[index] = head.nextNode;
            console.log('key removed');
            console.log(bucketStorage);
            length -= 1;
            return true
        }

        let newNextNode;
        let pointer = head;
        while (pointer.nextNode !== null) {
            if (pointer.nextNode.key === key) {
                newNextNode = pointer.nextNode.nextNode;
                pointer.nextNode = null;
                pointer.nextNode = newNextNode;
                length -= 1;
                console.log('key removed');
                console.log(bucketStorage);
                return true
            }
            pointer = pointer.nextNode
        }
        console.log('key not found');
        return false
    }

    function getLength() {
        console.log(length);
        return length

    }


    return {
        createHash,
        addToMap,
        get,
        has,
        removeKey,
        getLength
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

testRun.addToMap('Fred', 'Smith');

testRun.addToMap('Tully', 'McMuster');
testRun.addToMap('Tully', 'Parker');
testRun.addToMap('Tully', 'McMusterzzz');

testRun.addToMap('Carlos', 'Zappas');

testRun.addToMap('Carla', 'Benzutto');

testRun.addToMap('Harry', 'Potter');
testRun.addToMap('Draco', 'Malfoy');
testRun.addToMap('Albus', 'Dumbledore');
testRun.addToMap('Hermoine', 'Grainger');
testRun.addToMap('Sirius', 'Black');
testRun.addToMap('Ron', 'Weasley');
testRun.addToMap('Salazar', 'Slytherin');
testRun.addToMap('George', 'Weasley');
testRun.addToMap('Moaning', 'Myrtle');
testRun.addToMap('Ginny, Weasley');
testRun.addToMap('Bellatrix', 'Lestrange');
testRun.addToMap('Remus', 'Lupin');
testRun.addToMap('Neville', 'Longbottom')
testRun.addToMap('Tom', 'Riddle');

testRun.get('Carlos');
testRun.get('Zoey');
testRun.get('Salazar');
testRun.get('Hermoine');

testRun.has('Zoey')
testRun.has('Carlos')


testRun.removeKey('Moaning');
// testRun.removeKey('Lucifer')
testRun.getLength();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJTztBQUNQO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9COztBQUVwQjs7QUFFQSxnQkFBZ0I7QUFDaEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDN0tBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOb0M7Ozs7QUFJcEMsZ0JBQWdCLGtEQUFPOztBQUV2Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL2hhc2gtbWFwLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuLy8gY3JlYXRlIGEgTm9kZSBjbGFzcyBmb3IgaW5kaXZpZHVhbCBMaW5rZWQgTGlzdHNcbmNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yIChrZXksIHZhbHVlLCBuZXh0Tm9kZSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgICAgICB0aGlzLm5leHROb2RlID0gbmV4dE5vZGU7XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGNvbnN0IGhhc2hNYXAgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtYXhCdWNrZXRzID0gMTY7XG4gICAgY29uc3QgYnVja2V0U3RvcmFnZSA9IFtdO1xuICAgIGxldCBsZW5ndGggPSAwO1xuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVIYXNoKGtleSkge1xuICAgICAgICBsZXQgaGFzaENvZGUgPSAwO1xuXG4gICAgICAgIGNvbnN0IHByaW1lTnVtID0gNztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGhhc2hDb2RlID0gcHJpbWVOdW0gKiBoYXNoQ29kZSArIGtleS5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAgICAgaGFzaENvZGUgJT0gbWF4QnVja2V0cztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGhhc2hDb2RlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhoYXNoQ29kZSk7XG5cbiAgICAgICAgcmV0dXJuIGhhc2hDb2RlIFxuICAgIH07XG5cblxuICAgIGZ1bmN0aW9uIGFkZFRvTWFwKGtleTEsIHZhbCl7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gY3JlYXRlSGFzaChrZXkxKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuXG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gbWF4QnVja2V0cykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmRleCBpcyBvdXQgb2YgYm91bmRzJylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNyZWF0ZSBhIGxpbmtlZExpc3RcbiAgICAgICAgbGV0IGhlYWQgPSBudWxsO1xuICAgICAgICBsZXQgdGFpbCA9IG51bGw7XG5cbiAgICAgICAgaWYgKGJ1Y2tldFN0b3JhZ2VbaW5kZXhdID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkxKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKGtleTEsIHZhbClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld05vZGUpO1xuICAgICAgICAgICAgaGVhZCA9IG5ld05vZGU7XG4gICAgICAgICAgICBsZW5ndGggKz0gMTtcblxuICAgICAgICAgICAgYnVja2V0U3RvcmFnZVtpbmRleF0gPSBoZWFkO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYnVja2V0U3RvcmFnZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmIChidWNrZXRTdG9yYWdlW2luZGV4XSAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgIGhlYWQgPSBidWNrZXRTdG9yYWdlW2luZGV4XTtcbiAgICAgICAgICAgIHRhaWwgPSBidWNrZXRTdG9yYWdlW2luZGV4XTtcbiAgICAgICAgICAgIGxldCBwb2ludGVyID0gaGVhZDtcblxuICAgICAgICAgICAgY29uc29sZS5sb2cocG9pbnRlcik7XG4gICAgICAgICAgICAvLyBkb2VzIGEgY2hlY2sgdG8gc2VlIGlmIGtleSBhbHJlYWR5IGV4aXN0czpcbiAgICAgICAgICAgIGlmIChwb2ludGVyLmtleSA9PT0ga2V5MSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZHVwbGljYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXIudmFsdWUgPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvaW50ZXIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2hpbGUgKHBvaW50ZXIubmV4dE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlci5uZXh0Tm9kZTtcblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZShrZXkxLCB2YWwpO1xuXG4gICAgICAgICAgICBwb2ludGVyLm5leHROb2RlID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvaW50ZXIpXG5cbiAgICAgICAgICAgIHRhaWwgPSBuZXdOb2RlO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFpbCk7XG5cbiAgICAgICAgICAgIGxlbmd0aCArPSAxO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobGVuZ3RoKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coYnVja2V0U3RvcmFnZSlcbiAgICAgICAgICAgIHJldHVybiB7cG9pbnRlciwgbGVuZ3RofVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge2hlYWQsIHRhaWwsIGxlbmd0aH1cbiAgICBcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBjcmVhdGVIYXNoKGtleSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcblxuICAgICAgICBpZiAoIWJ1Y2tldFN0b3JhZ2VbaW5kZXhdKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhudWxsKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGVhZCA9IGJ1Y2tldFN0b3JhZ2VbaW5kZXhdO1xuICAgICAgICBsZXQgcG9pbnRlciA9IGhlYWRcblxuICAgICAgICB3aGlsZSAocG9pbnRlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHBvaW50ZXIua2V5ID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwb2ludGVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnRlci52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9pbnRlciA9IHBvaW50ZXIubmV4dE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cobnVsbCk7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIFxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICBjb25zb2xlLmxvZyhCb29sZWFuKGdldChrZXkpKSlcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oZ2V0KGtleSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUtleShrZXkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBjcmVhdGVIYXNoKGtleSk7XG4gICAgICAgIGNvbnN0IGhlYWQgPSBidWNrZXRTdG9yYWdlW2luZGV4XTtcbiAgICAgICAgLy8gY29uc3QgcHJldiA9IG51bGw7XG4gICAgICAgIGlmIChoZWFkLmtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhoZWFkKTtcbiAgICAgICAgICAgIGJ1Y2tldFN0b3JhZ2VbaW5kZXhdID0gaGVhZC5uZXh0Tm9kZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdrZXkgcmVtb3ZlZCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYnVja2V0U3RvcmFnZSk7XG4gICAgICAgICAgICBsZW5ndGggLT0gMTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3TmV4dE5vZGU7XG4gICAgICAgIGxldCBwb2ludGVyID0gaGVhZDtcbiAgICAgICAgd2hpbGUgKHBvaW50ZXIubmV4dE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChwb2ludGVyLm5leHROb2RlLmtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgbmV3TmV4dE5vZGUgPSBwb2ludGVyLm5leHROb2RlLm5leHROb2RlO1xuICAgICAgICAgICAgICAgIHBvaW50ZXIubmV4dE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIHBvaW50ZXIubmV4dE5vZGUgPSBuZXdOZXh0Tm9kZTtcbiAgICAgICAgICAgICAgICBsZW5ndGggLT0gMTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygna2V5IHJlbW92ZWQnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhidWNrZXRTdG9yYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9pbnRlciA9IHBvaW50ZXIubmV4dE5vZGVcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygna2V5IG5vdCBmb3VuZCcpO1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRMZW5ndGgoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxlbmd0aCk7XG4gICAgICAgIHJldHVybiBsZW5ndGhcblxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlSGFzaCxcbiAgICAgICAgYWRkVG9NYXAsXG4gICAgICAgIGdldCxcbiAgICAgICAgaGFzLFxuICAgICAgICByZW1vdmVLZXksXG4gICAgICAgIGdldExlbmd0aFxuICAgIH1cbn0gXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaGFzaE1hcCB9IGZyb20gJy4vaGFzaC1tYXAnXG5cblxuXG5jb25zdCB0ZXN0UnVuID0gaGFzaE1hcCgpO1xuXG50ZXN0UnVuLmFkZFRvTWFwKCdGcmVkJywgJ1NtaXRoJyk7XG5cbnRlc3RSdW4uYWRkVG9NYXAoJ1R1bGx5JywgJ01jTXVzdGVyJyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdUdWxseScsICdQYXJrZXInKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ1R1bGx5JywgJ01jTXVzdGVyenp6Jyk7XG5cbnRlc3RSdW4uYWRkVG9NYXAoJ0NhcmxvcycsICdaYXBwYXMnKTtcblxudGVzdFJ1bi5hZGRUb01hcCgnQ2FybGEnLCAnQmVuenV0dG8nKTtcblxudGVzdFJ1bi5hZGRUb01hcCgnSGFycnknLCAnUG90dGVyJyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdEcmFjbycsICdNYWxmb3knKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ0FsYnVzJywgJ0R1bWJsZWRvcmUnKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ0hlcm1vaW5lJywgJ0dyYWluZ2VyJyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdTaXJpdXMnLCAnQmxhY2snKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ1JvbicsICdXZWFzbGV5Jyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdTYWxhemFyJywgJ1NseXRoZXJpbicpO1xudGVzdFJ1bi5hZGRUb01hcCgnR2VvcmdlJywgJ1dlYXNsZXknKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ01vYW5pbmcnLCAnTXlydGxlJyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdHaW5ueSwgV2Vhc2xleScpO1xudGVzdFJ1bi5hZGRUb01hcCgnQmVsbGF0cml4JywgJ0xlc3RyYW5nZScpO1xudGVzdFJ1bi5hZGRUb01hcCgnUmVtdXMnLCAnTHVwaW4nKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ05ldmlsbGUnLCAnTG9uZ2JvdHRvbScpXG50ZXN0UnVuLmFkZFRvTWFwKCdUb20nLCAnUmlkZGxlJyk7XG5cbnRlc3RSdW4uZ2V0KCdDYXJsb3MnKTtcbnRlc3RSdW4uZ2V0KCdab2V5Jyk7XG50ZXN0UnVuLmdldCgnU2FsYXphcicpO1xudGVzdFJ1bi5nZXQoJ0hlcm1vaW5lJyk7XG5cbnRlc3RSdW4uaGFzKCdab2V5JylcbnRlc3RSdW4uaGFzKCdDYXJsb3MnKVxuXG5cbnRlc3RSdW4ucmVtb3ZlS2V5KCdNb2FuaW5nJyk7XG4vLyB0ZXN0UnVuLnJlbW92ZUtleSgnTHVjaWZlcicpXG50ZXN0UnVuLmdldExlbmd0aCgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=