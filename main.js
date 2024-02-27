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
    let maxBuckets = 16;
    const expandThreshold = 0.75;
    const bucketStorage = [];
    let length = 0;

    // const keysArray = [];


    function expandChecker() {
        let bucketsFilled = 0;
        for (let i =0; i < maxBuckets; i++) {
            if (bucketStorage[i] ) {
                bucketsFilled += 1;
            };
        }
        console.log(bucketsFilled);
        const fillRatio = bucketsFilled / maxBuckets;
        console.log(fillRatio);
        if (fillRatio >= expandThreshold) {
            console.log('expand buckets!!!')
            maxBuckets *= 2;
        }
    }


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
        expandChecker();
        const index = createHash(key1);
        console.log(index);

        if (index < 0 || index >= maxBuckets) {
            throw new Error('Index is out of bounds')
        }

        // create a linkedList
        let head = null;
        const tail = null;

        if (bucketStorage[index] === undefined ) {
            console.log(key1);

            const newNode = new Node(key1, val)
            console.log(newNode);
            // keysArray.push(newNode);

            head = newNode;
            length += 1;

            bucketStorage[index] = head;
            console.log(bucketStorage);
            
        } else if (bucketStorage[index] !== undefined) {

            head = bucketStorage[index];
            let pointer = head;

            // does a check to see if key already exists:
            if (pointer.key === key1) {
                    console.log('duplicate');
                    pointer.value = val;
                    console.log(pointer);
                    return
                }

            while (pointer.nextNode !== null) {
                pointer = pointer.nextNode;

            };
            const newNode = new Node(key1, val);
            // keysArray.push(newNode);

            console.log(pointer);
            pointer.nextNode = newNode;
            length += 1;

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

            // const deleteIndex = keysArray.indexOf(key)
            // keysArray.splice(deleteIndex, 1);

            console.log('key removed');
            console.log(bucketStorage);
            // console.log(keysArray);
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

                // const deleteIndex = keysArray.indexOf(key)
                // console.log(deleteIndex);
                // keysArray.splice(deleteIndex, 1);

                length -= 1;
                console.log('key removed');
                console.log(bucketStorage);
                // console.log(keysArray);
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

    function clear() {
        for (let i = 0; i < maxBuckets; i++) {
            bucketStorage[i] = null
        }
        console.log(bucketStorage);
        console.log('cleared');
    }

    function keys() {
        const keysArray = [];

        for (let i = 0; i < maxBuckets; i++) {
            let pointer = bucketStorage[i];
            if (bucketStorage[i]) {
                while (pointer !== null) {
                    keysArray.push(pointer.key);
                    pointer = pointer.nextNode;
                }
            }
        }
        console.log(keysArray);
        return keysArray
    }


    return {
        createHash,
        addToMap,
        get,
        has,
        removeKey,
        getLength,
        clear,
        keys
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
testRun.addToMap('Mad eye', 'Moody');
testRun.addToMap('Lucius Malfoy');
testRun.addToMap('Severus', 'Snape');
testRun.addToMap('Viktor', 'Krumb');
testRun.addToMap('Luna', 'Lovegood');
testRun.addToMap('Barty', 'Crouch');
testRun.addToMap('Horace', 'Slughorn');
testRun.addToMap('Fleur', 'Delacour');
testRun.addToMap('Cedric', 'Diggory');
testRun.addToMap('Seamus', 'Finnigan');
testRun.addToMap('Gregory', 'Goyle');
testRun.addToMap('Rubeus', 'Hagrid');


testRun.get('Carlos');
testRun.get('Zoey');
testRun.get('Salazar');
testRun.get('Hermoine');

testRun.has('Zoey')
testRun.has('Carlos')


testRun.removeKey('Moaning');
// testRun.removeKey('Lucifer')
testRun.getLength();

// testRun.clear();
// testRun.get('Hermoine');
// testRun.get('Salazar');

testRun.keys();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjs7QUFFcEI7O0FBRUEsZ0JBQWdCO0FBQ2hCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNsT0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQzs7OztBQUlwQyxnQkFBZ0Isa0RBQU87O0FBRXZCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9oYXNoLW1hcC5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vLyBjcmVhdGUgYSBOb2RlIGNsYXNzIGZvciBpbmRpdmlkdWFsIExpbmtlZCBMaXN0c1xuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IgKGtleSwgdmFsdWUsIG5leHROb2RlID0gbnVsbCkge1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMubmV4dE5vZGUgPSBuZXh0Tm9kZTtcbiAgICB9XG59XG5cblxuXG5leHBvcnQgY29uc3QgaGFzaE1hcCA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBtYXhCdWNrZXRzID0gMTY7XG4gICAgY29uc3QgZXhwYW5kVGhyZXNob2xkID0gMC43NTtcbiAgICBjb25zdCBidWNrZXRTdG9yYWdlID0gW107XG4gICAgbGV0IGxlbmd0aCA9IDA7XG5cbiAgICAvLyBjb25zdCBrZXlzQXJyYXkgPSBbXTtcblxuXG4gICAgZnVuY3Rpb24gZXhwYW5kQ2hlY2tlcigpIHtcbiAgICAgICAgbGV0IGJ1Y2tldHNGaWxsZWQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0wOyBpIDwgbWF4QnVja2V0czsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYnVja2V0U3RvcmFnZVtpXSApIHtcbiAgICAgICAgICAgICAgICBidWNrZXRzRmlsbGVkICs9IDE7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGJ1Y2tldHNGaWxsZWQpO1xuICAgICAgICBjb25zdCBmaWxsUmF0aW8gPSBidWNrZXRzRmlsbGVkIC8gbWF4QnVja2V0cztcbiAgICAgICAgY29uc29sZS5sb2coZmlsbFJhdGlvKTtcbiAgICAgICAgaWYgKGZpbGxSYXRpbyA+PSBleHBhbmRUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdleHBhbmQgYnVja2V0cyEhIScpXG4gICAgICAgICAgICBtYXhCdWNrZXRzICo9IDI7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhhc2goa2V5KSB7XG4gICAgICAgIGxldCBoYXNoQ29kZSA9IDA7XG5cbiAgICAgICAgY29uc3QgcHJpbWVOdW0gPSA3O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaGFzaENvZGUgPSBwcmltZU51bSAqIGhhc2hDb2RlICsga2V5LmNoYXJDb2RlQXQoaSk7XG4gICAgICAgICAgICBoYXNoQ29kZSAlPSBtYXhCdWNrZXRzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaGFzaENvZGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGhhc2hDb2RlKTtcblxuICAgICAgICByZXR1cm4gaGFzaENvZGUgXG4gICAgfTtcblxuXG4gICAgZnVuY3Rpb24gYWRkVG9NYXAoa2V5MSwgdmFsKXtcbiAgICAgICAgZXhwYW5kQ2hlY2tlcigpO1xuICAgICAgICBjb25zdCBpbmRleCA9IGNyZWF0ZUhhc2goa2V5MSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcblxuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IG1heEJ1Y2tldHMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5kZXggaXMgb3V0IG9mIGJvdW5kcycpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgYSBsaW5rZWRMaXN0XG4gICAgICAgIGxldCBoZWFkID0gbnVsbDtcbiAgICAgICAgY29uc3QgdGFpbCA9IG51bGw7XG5cbiAgICAgICAgaWYgKGJ1Y2tldFN0b3JhZ2VbaW5kZXhdID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkxKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKGtleTEsIHZhbClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld05vZGUpO1xuICAgICAgICAgICAgLy8ga2V5c0FycmF5LnB1c2gobmV3Tm9kZSk7XG5cbiAgICAgICAgICAgIGhlYWQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgbGVuZ3RoICs9IDE7XG5cbiAgICAgICAgICAgIGJ1Y2tldFN0b3JhZ2VbaW5kZXhdID0gaGVhZDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1Y2tldFN0b3JhZ2UpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAoYnVja2V0U3RvcmFnZVtpbmRleF0gIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICBoZWFkID0gYnVja2V0U3RvcmFnZVtpbmRleF07XG4gICAgICAgICAgICBsZXQgcG9pbnRlciA9IGhlYWQ7XG5cbiAgICAgICAgICAgIC8vIGRvZXMgYSBjaGVjayB0byBzZWUgaWYga2V5IGFscmVhZHkgZXhpc3RzOlxuICAgICAgICAgICAgaWYgKHBvaW50ZXIua2V5ID09PSBrZXkxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkdXBsaWNhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci52YWx1ZSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocG9pbnRlcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2hpbGUgKHBvaW50ZXIubmV4dE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlci5uZXh0Tm9kZTtcblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZShrZXkxLCB2YWwpO1xuICAgICAgICAgICAgLy8ga2V5c0FycmF5LnB1c2gobmV3Tm9kZSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvaW50ZXIpO1xuICAgICAgICAgICAgcG9pbnRlci5uZXh0Tm9kZSA9IG5ld05vZGU7XG4gICAgICAgICAgICBsZW5ndGggKz0gMTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coYnVja2V0U3RvcmFnZSlcbiAgICAgICAgICAgIHJldHVybiB7cG9pbnRlciwgbGVuZ3RofVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge2hlYWQsIHRhaWwsIGxlbmd0aH1cbiAgICBcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBjcmVhdGVIYXNoKGtleSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcblxuICAgICAgICBpZiAoIWJ1Y2tldFN0b3JhZ2VbaW5kZXhdKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhudWxsKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGVhZCA9IGJ1Y2tldFN0b3JhZ2VbaW5kZXhdO1xuICAgICAgICBsZXQgcG9pbnRlciA9IGhlYWRcblxuICAgICAgICB3aGlsZSAocG9pbnRlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHBvaW50ZXIua2V5ID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwb2ludGVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnRlci52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9pbnRlciA9IHBvaW50ZXIubmV4dE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cobnVsbCk7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIFxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICBjb25zb2xlLmxvZyhCb29sZWFuKGdldChrZXkpKSlcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oZ2V0KGtleSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUtleShrZXkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBjcmVhdGVIYXNoKGtleSk7XG4gICAgICAgIGNvbnN0IGhlYWQgPSBidWNrZXRTdG9yYWdlW2luZGV4XTtcbiAgICAgICAgLy8gY29uc3QgcHJldiA9IG51bGw7XG4gICAgICAgIGlmIChoZWFkLmtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhoZWFkKTtcbiAgICAgICAgICAgIGJ1Y2tldFN0b3JhZ2VbaW5kZXhdID0gaGVhZC5uZXh0Tm9kZTtcblxuICAgICAgICAgICAgLy8gY29uc3QgZGVsZXRlSW5kZXggPSBrZXlzQXJyYXkuaW5kZXhPZihrZXkpXG4gICAgICAgICAgICAvLyBrZXlzQXJyYXkuc3BsaWNlKGRlbGV0ZUluZGV4LCAxKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2tleSByZW1vdmVkJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhidWNrZXRTdG9yYWdlKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGtleXNBcnJheSk7XG4gICAgICAgICAgICBsZW5ndGggLT0gMTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3TmV4dE5vZGU7XG4gICAgICAgIGxldCBwb2ludGVyID0gaGVhZDtcbiAgICAgICAgd2hpbGUgKHBvaW50ZXIubmV4dE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChwb2ludGVyLm5leHROb2RlLmtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgbmV3TmV4dE5vZGUgPSBwb2ludGVyLm5leHROb2RlLm5leHROb2RlO1xuICAgICAgICAgICAgICAgIHBvaW50ZXIubmV4dE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIHBvaW50ZXIubmV4dE5vZGUgPSBuZXdOZXh0Tm9kZTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGRlbGV0ZUluZGV4ID0ga2V5c0FycmF5LmluZGV4T2Yoa2V5KVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRlbGV0ZUluZGV4KTtcbiAgICAgICAgICAgICAgICAvLyBrZXlzQXJyYXkuc3BsaWNlKGRlbGV0ZUluZGV4LCAxKTtcblxuICAgICAgICAgICAgICAgIGxlbmd0aCAtPSAxO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdrZXkgcmVtb3ZlZCcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1Y2tldFN0b3JhZ2UpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGtleXNBcnJheSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvaW50ZXIgPSBwb2ludGVyLm5leHROb2RlXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2tleSBub3QgZm91bmQnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TGVuZ3RoKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhsZW5ndGgpO1xuICAgICAgICByZXR1cm4gbGVuZ3RoXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhCdWNrZXRzOyBpKyspIHtcbiAgICAgICAgICAgIGJ1Y2tldFN0b3JhZ2VbaV0gPSBudWxsXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYnVja2V0U3RvcmFnZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGVhcmVkJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24ga2V5cygpIHtcbiAgICAgICAgY29uc3Qga2V5c0FycmF5ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhCdWNrZXRzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwb2ludGVyID0gYnVja2V0U3RvcmFnZVtpXTtcbiAgICAgICAgICAgIGlmIChidWNrZXRTdG9yYWdlW2ldKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHBvaW50ZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5c0FycmF5LnB1c2gocG9pbnRlci5rZXkpO1xuICAgICAgICAgICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlci5uZXh0Tm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coa2V5c0FycmF5KTtcbiAgICAgICAgcmV0dXJuIGtleXNBcnJheVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlSGFzaCxcbiAgICAgICAgYWRkVG9NYXAsXG4gICAgICAgIGdldCxcbiAgICAgICAgaGFzLFxuICAgICAgICByZW1vdmVLZXksXG4gICAgICAgIGdldExlbmd0aCxcbiAgICAgICAgY2xlYXIsXG4gICAgICAgIGtleXNcbiAgICB9XG59IFxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGhhc2hNYXAgfSBmcm9tICcuL2hhc2gtbWFwJ1xuXG5cblxuY29uc3QgdGVzdFJ1biA9IGhhc2hNYXAoKTtcblxudGVzdFJ1bi5hZGRUb01hcCgnRnJlZCcsICdTbWl0aCcpO1xuXG50ZXN0UnVuLmFkZFRvTWFwKCdUdWxseScsICdNY011c3RlcicpO1xudGVzdFJ1bi5hZGRUb01hcCgnVHVsbHknLCAnUGFya2VyJyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdUdWxseScsICdNY011c3Rlcnp6eicpO1xuXG50ZXN0UnVuLmFkZFRvTWFwKCdDYXJsb3MnLCAnWmFwcGFzJyk7XG5cbnRlc3RSdW4uYWRkVG9NYXAoJ0NhcmxhJywgJ0Jlbnp1dHRvJyk7XG5cbnRlc3RSdW4uYWRkVG9NYXAoJ0hhcnJ5JywgJ1BvdHRlcicpO1xudGVzdFJ1bi5hZGRUb01hcCgnRHJhY28nLCAnTWFsZm95Jyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdBbGJ1cycsICdEdW1ibGVkb3JlJyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdIZXJtb2luZScsICdHcmFpbmdlcicpO1xudGVzdFJ1bi5hZGRUb01hcCgnU2lyaXVzJywgJ0JsYWNrJyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdSb24nLCAnV2Vhc2xleScpO1xudGVzdFJ1bi5hZGRUb01hcCgnU2FsYXphcicsICdTbHl0aGVyaW4nKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ0dlb3JnZScsICdXZWFzbGV5Jyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdNb2FuaW5nJywgJ015cnRsZScpO1xudGVzdFJ1bi5hZGRUb01hcCgnR2lubnksIFdlYXNsZXknKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ0JlbGxhdHJpeCcsICdMZXN0cmFuZ2UnKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ1JlbXVzJywgJ0x1cGluJyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdOZXZpbGxlJywgJ0xvbmdib3R0b20nKVxudGVzdFJ1bi5hZGRUb01hcCgnVG9tJywgJ1JpZGRsZScpO1xudGVzdFJ1bi5hZGRUb01hcCgnTWFkIGV5ZScsICdNb29keScpO1xudGVzdFJ1bi5hZGRUb01hcCgnTHVjaXVzIE1hbGZveScpO1xudGVzdFJ1bi5hZGRUb01hcCgnU2V2ZXJ1cycsICdTbmFwZScpO1xudGVzdFJ1bi5hZGRUb01hcCgnVmlrdG9yJywgJ0tydW1iJyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdMdW5hJywgJ0xvdmVnb29kJyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdCYXJ0eScsICdDcm91Y2gnKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ0hvcmFjZScsICdTbHVnaG9ybicpO1xudGVzdFJ1bi5hZGRUb01hcCgnRmxldXInLCAnRGVsYWNvdXInKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ0NlZHJpYycsICdEaWdnb3J5Jyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdTZWFtdXMnLCAnRmlubmlnYW4nKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ0dyZWdvcnknLCAnR295bGUnKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ1J1YmV1cycsICdIYWdyaWQnKTtcblxuXG50ZXN0UnVuLmdldCgnQ2FybG9zJyk7XG50ZXN0UnVuLmdldCgnWm9leScpO1xudGVzdFJ1bi5nZXQoJ1NhbGF6YXInKTtcbnRlc3RSdW4uZ2V0KCdIZXJtb2luZScpO1xuXG50ZXN0UnVuLmhhcygnWm9leScpXG50ZXN0UnVuLmhhcygnQ2FybG9zJylcblxuXG50ZXN0UnVuLnJlbW92ZUtleSgnTW9hbmluZycpO1xuLy8gdGVzdFJ1bi5yZW1vdmVLZXkoJ0x1Y2lmZXInKVxudGVzdFJ1bi5nZXRMZW5ndGgoKTtcblxuLy8gdGVzdFJ1bi5jbGVhcigpO1xuLy8gdGVzdFJ1bi5nZXQoJ0hlcm1vaW5lJyk7XG4vLyB0ZXN0UnVuLmdldCgnU2FsYXphcicpO1xuXG50ZXN0UnVuLmtleXMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==