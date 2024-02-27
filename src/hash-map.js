/* eslint-disable import/prefer-default-export */
// create a Node class for individual Linked Lists
class Node {
    constructor (key, value, nextNode = null) {
        this.key = key;
        this.value = value
        this.nextNode = nextNode;
    }
}



export const hashMap = function() {
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

