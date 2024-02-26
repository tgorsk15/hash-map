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