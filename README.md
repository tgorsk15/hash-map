This is a Hash Map that I have created from scratch after going through the Project Assignment on The Odin Project. Through creating this, I not only learned how to implement Hash Maps to store items using Hash Codes, but I built Linked Lists within it as well, successfully using the power of two fundamental types of data structures in programming.

Function descriptions:

- expandChecker(): the mechanism that validates what percent of the total Hash Map's buckets are filled with an item, so that an expansion can be done if needed

- createHash(): the function responsible for geneterating a unique hash code for each key that the user passes through

- addToMap(): the function that actually adds the key to its proper bucket in the map, depending on its hash code. If items are already in a bucket, it will create a LinkedList and add the current key to the end

- get(): The user can pass any key as an arguement into this to get the corresponding value of that key

- has(): returns a Boolean value to inform the user if a key exists in the map or not

- removeKey: used to find the exact location of a key in the Hash Map, and then removes it entirely

- getLength(): returns the current total number of keys that are in the Hash Map

- clear(): clears the entire Hash Map of its keys ... all linked lists are reset

- keys(): returns an array containing all of the unique keys that currently exist in the array

- values(): does the same things as keys(), but is returning all the values associated with each key

- entries(): does the same thing as keys, but returns each 'key: value' pair as an array
