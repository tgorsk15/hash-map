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
