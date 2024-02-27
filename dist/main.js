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

    function values() {
        const valuesArray = [];

        for (let i = 0; i < maxBuckets; i++) {
            let pointer = bucketStorage[i];
            if (bucketStorage[i]) {
                while (pointer !== null) {
                    valuesArray.push(pointer.value);
                    pointer = pointer.nextNode;
                }
            }
        }
        console.log(valuesArray);
        return valuesArray
    }

    function entries() {
        const entriesArray = [];

        for (let i = 0; i < maxBuckets; i++) {
            let pointer = bucketStorage[i];
            if (bucketStorage[i]) {
                while (pointer !== null) {
                    entriesArray.push([pointer.key, pointer.value]);
                    pointer = pointer.nextNode;
                }
            }
        }
        console.log(entriesArray);
        return entriesArray

    }


    return {
        createHash,
        addToMap,
        get,
        has,
        removeKey,
        getLength,
        clear,
        keys,
        values,
        entries
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
testRun.addToMap('Lucius', 'Malfoy');

// testRun.keys();

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
testRun.getLength();

// testRun.clear();
// testRun.get('Hermoine');
// testRun.get('Salazar');

testRun.keys();
testRun.values();
testRun.entries();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dGVtcGxhdGUvLi9zcmMvaGFzaC1tYXAuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLy8gY3JlYXRlIGEgTm9kZSBjbGFzcyBmb3IgaW5kaXZpZHVhbCBMaW5rZWQgTGlzdHNcbmNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yIChrZXksIHZhbHVlLCBuZXh0Tm9kZSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgICAgICB0aGlzLm5leHROb2RlID0gbmV4dE5vZGU7XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGNvbnN0IGhhc2hNYXAgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgbWF4QnVja2V0cyA9IDE2O1xuICAgIGNvbnN0IGV4cGFuZFRocmVzaG9sZCA9IDAuNzU7XG4gICAgY29uc3QgYnVja2V0U3RvcmFnZSA9IFtdO1xuICAgIGxldCBsZW5ndGggPSAwO1xuXG4gICAgLy8gY29uc3Qga2V5c0FycmF5ID0gW107XG5cblxuICAgIGZ1bmN0aW9uIGV4cGFuZENoZWNrZXIoKSB7XG4gICAgICAgIGxldCBidWNrZXRzRmlsbGVkID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9MDsgaSA8IG1heEJ1Y2tldHM7IGkrKykge1xuICAgICAgICAgICAgaWYgKGJ1Y2tldFN0b3JhZ2VbaV0gKSB7XG4gICAgICAgICAgICAgICAgYnVja2V0c0ZpbGxlZCArPSAxO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhidWNrZXRzRmlsbGVkKTtcbiAgICAgICAgY29uc3QgZmlsbFJhdGlvID0gYnVja2V0c0ZpbGxlZCAvIG1heEJ1Y2tldHM7XG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGxSYXRpbyk7XG4gICAgICAgIGlmIChmaWxsUmF0aW8gPj0gZXhwYW5kVGhyZXNob2xkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXhwYW5kIGJ1Y2tldHMhISEnKVxuICAgICAgICAgICAgbWF4QnVja2V0cyAqPSAyO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVIYXNoKGtleSkge1xuICAgICAgICBsZXQgaGFzaENvZGUgPSAwO1xuXG4gICAgICAgIGNvbnN0IHByaW1lTnVtID0gNztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGhhc2hDb2RlID0gcHJpbWVOdW0gKiBoYXNoQ29kZSArIGtleS5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAgICAgaGFzaENvZGUgJT0gbWF4QnVja2V0cztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGhhc2hDb2RlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhoYXNoQ29kZSk7XG5cbiAgICAgICAgcmV0dXJuIGhhc2hDb2RlIFxuICAgIH07XG5cblxuICAgIGZ1bmN0aW9uIGFkZFRvTWFwKGtleTEsIHZhbCl7XG4gICAgICAgIGV4cGFuZENoZWNrZXIoKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBjcmVhdGVIYXNoKGtleTEpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG5cbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSBtYXhCdWNrZXRzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZGV4IGlzIG91dCBvZiBib3VuZHMnKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY3JlYXRlIGEgbGlua2VkTGlzdFxuICAgICAgICBsZXQgaGVhZCA9IG51bGw7XG4gICAgICAgIGNvbnN0IHRhaWwgPSBudWxsO1xuXG4gICAgICAgIGlmIChidWNrZXRTdG9yYWdlW2luZGV4XSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coa2V5MSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZShrZXkxLCB2YWwpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdOb2RlKTtcbiAgICAgICAgICAgIC8vIGtleXNBcnJheS5wdXNoKG5ld05vZGUpO1xuXG4gICAgICAgICAgICBoZWFkID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIGxlbmd0aCArPSAxO1xuXG4gICAgICAgICAgICBidWNrZXRTdG9yYWdlW2luZGV4XSA9IGhlYWQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhidWNrZXRTdG9yYWdlKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2UgaWYgKGJ1Y2tldFN0b3JhZ2VbaW5kZXhdICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgaGVhZCA9IGJ1Y2tldFN0b3JhZ2VbaW5kZXhdO1xuICAgICAgICAgICAgbGV0IHBvaW50ZXIgPSBoZWFkO1xuXG4gICAgICAgICAgICAvLyBkb2VzIGEgY2hlY2sgdG8gc2VlIGlmIGtleSBhbHJlYWR5IGV4aXN0czpcbiAgICAgICAgICAgIGlmIChwb2ludGVyLmtleSA9PT0ga2V5MSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZHVwbGljYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXIudmFsdWUgPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvaW50ZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdoaWxlIChwb2ludGVyLm5leHROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcG9pbnRlciA9IHBvaW50ZXIubmV4dE5vZGU7XG5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUoa2V5MSwgdmFsKTtcbiAgICAgICAgICAgIC8vIGtleXNBcnJheS5wdXNoKG5ld05vZGUpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwb2ludGVyKTtcbiAgICAgICAgICAgIHBvaW50ZXIubmV4dE5vZGUgPSBuZXdOb2RlO1xuICAgICAgICAgICAgbGVuZ3RoICs9IDE7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1Y2tldFN0b3JhZ2UpXG4gICAgICAgICAgICByZXR1cm4ge3BvaW50ZXIsIGxlbmd0aH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtoZWFkLCB0YWlsLCBsZW5ndGh9XG4gICAgXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gY3JlYXRlSGFzaChrZXkpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG5cbiAgICAgICAgaWYgKCFidWNrZXRTdG9yYWdlW2luZGV4XSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobnVsbCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhlYWQgPSBidWNrZXRTdG9yYWdlW2luZGV4XTtcbiAgICAgICAgbGV0IHBvaW50ZXIgPSBoZWFkXG5cbiAgICAgICAgd2hpbGUgKHBvaW50ZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChwb2ludGVyLmtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocG9pbnRlci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50ZXIudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvaW50ZXIgPSBwb2ludGVyLm5leHROb2RlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKG51bGwpO1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICBcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgY29uc29sZS5sb2coQm9vbGVhbihnZXQoa2V5KSkpXG4gICAgICAgIHJldHVybiBCb29sZWFuKGdldChrZXkpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVLZXkoa2V5KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gY3JlYXRlSGFzaChrZXkpO1xuICAgICAgICBjb25zdCBoZWFkID0gYnVja2V0U3RvcmFnZVtpbmRleF07XG4gICAgICAgIC8vIGNvbnN0IHByZXYgPSBudWxsO1xuICAgICAgICBpZiAoaGVhZC5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaGVhZCk7XG4gICAgICAgICAgICBidWNrZXRTdG9yYWdlW2luZGV4XSA9IGhlYWQubmV4dE5vZGU7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdrZXkgcmVtb3ZlZCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYnVja2V0U3RvcmFnZSk7XG4gICAgICAgICAgICBsZW5ndGggLT0gMTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3TmV4dE5vZGU7XG4gICAgICAgIGxldCBwb2ludGVyID0gaGVhZDtcbiAgICAgICAgd2hpbGUgKHBvaW50ZXIubmV4dE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChwb2ludGVyLm5leHROb2RlLmtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgbmV3TmV4dE5vZGUgPSBwb2ludGVyLm5leHROb2RlLm5leHROb2RlO1xuICAgICAgICAgICAgICAgIHBvaW50ZXIubmV4dE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIHBvaW50ZXIubmV4dE5vZGUgPSBuZXdOZXh0Tm9kZTtcblxuICAgICAgICAgICAgICAgIGxlbmd0aCAtPSAxO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdrZXkgcmVtb3ZlZCcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1Y2tldFN0b3JhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlci5uZXh0Tm9kZVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdrZXkgbm90IGZvdW5kJyk7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldExlbmd0aCgpIHtcbiAgICAgICAgY29uc29sZS5sb2cobGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGxlbmd0aFxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4QnVja2V0czsgaSsrKSB7XG4gICAgICAgICAgICBidWNrZXRTdG9yYWdlW2ldID0gbnVsbFxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGJ1Y2tldFN0b3JhZ2UpO1xuICAgICAgICBjb25zb2xlLmxvZygnY2xlYXJlZCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGtleXMoKSB7XG4gICAgICAgIGNvbnN0IGtleXNBcnJheSA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4QnVja2V0czsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcG9pbnRlciA9IGJ1Y2tldFN0b3JhZ2VbaV07XG4gICAgICAgICAgICBpZiAoYnVja2V0U3RvcmFnZVtpXSkge1xuICAgICAgICAgICAgICAgIHdoaWxlIChwb2ludGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXNBcnJheS5wdXNoKHBvaW50ZXIua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlciA9IHBvaW50ZXIubmV4dE5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGtleXNBcnJheSk7XG4gICAgICAgIHJldHVybiBrZXlzQXJyYXlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWx1ZXMoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlc0FycmF5ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhCdWNrZXRzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwb2ludGVyID0gYnVja2V0U3RvcmFnZVtpXTtcbiAgICAgICAgICAgIGlmIChidWNrZXRTdG9yYWdlW2ldKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHBvaW50ZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzQXJyYXkucHVzaChwb2ludGVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlciA9IHBvaW50ZXIubmV4dE5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlc0FycmF5KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlc0FycmF5XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW50cmllcygpIHtcbiAgICAgICAgY29uc3QgZW50cmllc0FycmF5ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhCdWNrZXRzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwb2ludGVyID0gYnVja2V0U3RvcmFnZVtpXTtcbiAgICAgICAgICAgIGlmIChidWNrZXRTdG9yYWdlW2ldKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHBvaW50ZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cmllc0FycmF5LnB1c2goW3BvaW50ZXIua2V5LCBwb2ludGVyLnZhbHVlXSk7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXIgPSBwb2ludGVyLm5leHROb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhlbnRyaWVzQXJyYXkpO1xuICAgICAgICByZXR1cm4gZW50cmllc0FycmF5XG5cbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZUhhc2gsXG4gICAgICAgIGFkZFRvTWFwLFxuICAgICAgICBnZXQsXG4gICAgICAgIGhhcyxcbiAgICAgICAgcmVtb3ZlS2V5LFxuICAgICAgICBnZXRMZW5ndGgsXG4gICAgICAgIGNsZWFyLFxuICAgICAgICBrZXlzLFxuICAgICAgICB2YWx1ZXMsXG4gICAgICAgIGVudHJpZXNcbiAgICB9XG59IFxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGhhc2hNYXAgfSBmcm9tICcuL2hhc2gtbWFwJ1xuXG5cblxuY29uc3QgdGVzdFJ1biA9IGhhc2hNYXAoKTtcblxudGVzdFJ1bi5hZGRUb01hcCgnRnJlZCcsICdTbWl0aCcpO1xuXG50ZXN0UnVuLmFkZFRvTWFwKCdUdWxseScsICdNY011c3RlcicpO1xudGVzdFJ1bi5hZGRUb01hcCgnVHVsbHknLCAnUGFya2VyJyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdUdWxseScsICdNY011c3Rlcnp6eicpO1xuXG50ZXN0UnVuLmFkZFRvTWFwKCdDYXJsb3MnLCAnWmFwcGFzJyk7XG5cbnRlc3RSdW4uYWRkVG9NYXAoJ0NhcmxhJywgJ0Jlbnp1dHRvJyk7XG5cbnRlc3RSdW4uYWRkVG9NYXAoJ0hhcnJ5JywgJ1BvdHRlcicpO1xudGVzdFJ1bi5hZGRUb01hcCgnRHJhY28nLCAnTWFsZm95Jyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdBbGJ1cycsICdEdW1ibGVkb3JlJyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdIZXJtb2luZScsICdHcmFpbmdlcicpO1xudGVzdFJ1bi5hZGRUb01hcCgnU2lyaXVzJywgJ0JsYWNrJyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdSb24nLCAnV2Vhc2xleScpO1xudGVzdFJ1bi5hZGRUb01hcCgnU2FsYXphcicsICdTbHl0aGVyaW4nKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ0dlb3JnZScsICdXZWFzbGV5Jyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdNb2FuaW5nJywgJ015cnRsZScpO1xudGVzdFJ1bi5hZGRUb01hcCgnR2lubnksIFdlYXNsZXknKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ0JlbGxhdHJpeCcsICdMZXN0cmFuZ2UnKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ1JlbXVzJywgJ0x1cGluJyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdOZXZpbGxlJywgJ0xvbmdib3R0b20nKVxudGVzdFJ1bi5hZGRUb01hcCgnVG9tJywgJ1JpZGRsZScpO1xudGVzdFJ1bi5hZGRUb01hcCgnTWFkIGV5ZScsICdNb29keScpO1xudGVzdFJ1bi5hZGRUb01hcCgnTHVjaXVzJywgJ01hbGZveScpO1xuXG4vLyB0ZXN0UnVuLmtleXMoKTtcblxudGVzdFJ1bi5hZGRUb01hcCgnU2V2ZXJ1cycsICdTbmFwZScpO1xudGVzdFJ1bi5hZGRUb01hcCgnVmlrdG9yJywgJ0tydW1iJyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdMdW5hJywgJ0xvdmVnb29kJyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdCYXJ0eScsICdDcm91Y2gnKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ0hvcmFjZScsICdTbHVnaG9ybicpO1xudGVzdFJ1bi5hZGRUb01hcCgnRmxldXInLCAnRGVsYWNvdXInKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ0NlZHJpYycsICdEaWdnb3J5Jyk7XG50ZXN0UnVuLmFkZFRvTWFwKCdTZWFtdXMnLCAnRmlubmlnYW4nKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ0dyZWdvcnknLCAnR295bGUnKTtcbnRlc3RSdW4uYWRkVG9NYXAoJ1J1YmV1cycsICdIYWdyaWQnKTtcblxuXG50ZXN0UnVuLmdldCgnQ2FybG9zJyk7XG50ZXN0UnVuLmdldCgnWm9leScpO1xudGVzdFJ1bi5nZXQoJ1NhbGF6YXInKTtcbnRlc3RSdW4uZ2V0KCdIZXJtb2luZScpO1xuXG50ZXN0UnVuLmhhcygnWm9leScpXG50ZXN0UnVuLmhhcygnQ2FybG9zJylcblxuXG50ZXN0UnVuLnJlbW92ZUtleSgnTW9hbmluZycpO1xudGVzdFJ1bi5nZXRMZW5ndGgoKTtcblxuLy8gdGVzdFJ1bi5jbGVhcigpO1xuLy8gdGVzdFJ1bi5nZXQoJ0hlcm1vaW5lJyk7XG4vLyB0ZXN0UnVuLmdldCgnU2FsYXphcicpO1xuXG50ZXN0UnVuLmtleXMoKTtcbnRlc3RSdW4udmFsdWVzKCk7XG50ZXN0UnVuLmVudHJpZXMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==