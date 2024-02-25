/* eslint-disable import/prefer-default-export */


export const hashMap = function() {

    function createHash(key, maxBuckets) {
        let hashCode = 0;

        const primeNum = 7;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNum * hashCode + key.charCodeAt(i);
            hashCode %= maxBuckets;
            console.log(hashCode);
        }

        console.log(hashCode);

        return hashCode 
    };


    function addToMap(index){

    }



    return {
        createHash
    }
}