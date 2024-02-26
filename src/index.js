import { hashMap } from './hash-map'



const testRun = hashMap();

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

testRun.get('Carlos');
testRun.get('Zoey');
testRun.get('Salazar');
testRun.get('Hermoine');

testRun.has('Zoey')
testRun.has('Carlos')


