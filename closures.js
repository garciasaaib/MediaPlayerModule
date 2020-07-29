function* myGenerator() {
  yield 'Hello';
  yield 'W';
  yield 'O';
  yield 'R';
  yield 'L';
  yield 'D';
}

myGenerator = myGenerator();
console.log(myGenerator.next()); // Hello
console.log(myGenerator.next()); // W
console.log(myGenerator.next()); // O