/* eslint-disable import/prefer-default-export */


export const hashMap = function() {
    const maxBuckets = 16;
    const bucketStorage = [];


    function createHash(key) {
        let hashCode = 0;

        const primeNum = 7;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNum * hashCode + key.charCodeAt(i);
            console.log(hashCode);
            hashCode %= maxBuckets;
            console.log(hashCode);
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


        if (bucketStorage[index] === undefined ) {
            console.log(key);

            const obj = {};
            obj[key] = val;
            bucketStorage[index] = obj;
            console.log(bucketStorage);
        } else if (bucketStorage[index].hasOwnProperty(key)) {
            console.log('duplicate');
            // this conditional statement is not working currently
        }
        // console.log(bucketStorage)
        
    

    }



    return {
        createHash,
        addToMap
    }
}