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

