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
            // console.log(length);
            
        } else if (bucketStorage[index] !== undefined) {

            head = bucketStorage[index];
            tail = bucketStorage[index];
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
        // const index = createHash(key);
        // console.log(index);

        // if (!bucketStorage[index]) {
        //     console.log(false);
        //     return false
        // };

        // let pointer = bucketStorage[index];
        console.log(Boolean(get(key)))
        return Boolean(get(key));
    }


    return {
        createHash,
        addToMap,
        get,
        has
    }
} 

