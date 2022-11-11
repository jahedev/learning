const { exportAllDeclaration } = require('@babel/types');
const { assert } = require('console');
const LinkedList = require('./LinkedList');

const checkInput = function (linkedList = new LinkedList(), input = []) {
  let actual, expected;

  // In-Order
  actual = linkedList.listToString();
  expected = input.join(' -> ').trim();
  expect(actual).toBe(expected);

  // Reversed
  actual = linkedList.listToString(true);
  expected = input.reverse().join(' <- ').trim();
  expect(actual).toBe(expected);
};

test('adding elements using: add(data)', () => {
  const l = new LinkedList();
  l.add(1);
  l.add(2);
  l.add(3);
  l.add(4);
  l.add(5);
  l.add(6);

  checkInput(l, [1, 2, 3, 4, 5, 6]);
});

test('adding elements using: addFirst(data)', () => {
  const l = new LinkedList();
  l.addFirst(2);
  l.addFirst(1);
  l.add(3);
  l.addFirst(0);
  l.add(4);
  l.add(5);
  l.addFirst(-1);

  checkInput(l, [-1, 0, 1, 2, 3, 4, 5]);
});

test('remove elements using: remove(data)', () => {
  let actual, expected;
  const l = new LinkedList();
  l.remove(99); // non-existent
  l.add(1); // 1
  l.remove(1); // null
  l.add(2); // 2
  l.add(3); // 2 -> 3
  l.remove(2); // 3

  checkInput(l, [3]);

  l.remove(3); // null
  checkInput(l, []);

  l.add(4); // 4
  l.add(5); // 4 -> 5
  l.remove(5); // 4
  l.addFirst(3); // 3 -> 4
  l.remove(4); // 3
  l.add(6); // 3 -> 6
  l.addFirst(2); // 2 -> 3 -> 6

  checkInput(l, [2, 3, 6]);

  l.add(7); // 2 -> 3 -> 6 -> 7
  l.add(8); // 2 -> 3 -> 6 -> 7 -> 8
  l.add(7); // 2 -> 3 -> 6 -> 7 -> 8 -> 7
  l.add(8); // 2 -> 3 -> 6 -> 7 -> 8 -> 7 -> 8
  l.remove(7); // 2 -> 3 -> 6 -> 8 -> 7 -> 8

  checkInput(l, [2, 3, 6, 8, 7, 8]);

  l.add(9); // 2 -> 3 -> 6 -> 8 -> 7 -> 8 -> 9
  l.remove(1); // non-existent
  l.remove(8); // 2 -> 3 -> 6 -> 7 -> 8 -> 9

  checkInput(l, [2, 3, 6, 7, 8, 9]);
});

test('adding elements using: addFirst(data)', () => {
  const l = new LinkedList();
  l.addFirst(2);
  l.addFirst(1);
  l.add(3);
  l.addFirst(0);
  l.add(4);
  l.add(5);
  l.addFirst(-1);

  checkInput(l, [-1, 0, 1, 2, 3, 4, 5]);
});

test('remove elements using: remove(data)', () => {
  let actual, expected;
  const l = new LinkedList();
  l.remove(99); // non-existent
  l.add(1); // 1
  l.remove(1); // null
  l.add(2); // 2
  l.add(3); // 2 -> 3
  l.remove(2); // 3

  checkInput(l, [3]);

  l.remove(3); // null
  checkInput(l, []);

  l.add(4); // 4
  l.add(5); // 4 -> 5
  l.remove(5); // 4
  l.addFirst(3); // 3 -> 4
  l.remove(4); // 3
  l.add(6); // 3 -> 6
  l.addFirst(2); // 2 -> 3 -> 6

  checkInput(l, [2, 3, 6]);

  l.add(7); // 2 -> 3 -> 6 -> 7
  l.add(8); // 2 -> 3 -> 6 -> 7 -> 8
  l.add(7); // 2 -> 3 -> 6 -> 7 -> 8 -> 7
  l.add(8); // 2 -> 3 -> 6 -> 7 -> 8 -> 7 -> 8
  l.remove(7); // 2 -> 3 -> 6 -> 8 -> 7 -> 8

  checkInput(l, [2, 3, 6, 8, 7, 8]);

  l.add(9); // 2 -> 3 -> 6 -> 8 -> 7 -> 8 -> 9
  l.remove(1); // non-existent
  l.remove(8); // 2 -> 3 -> 6 -> 7 -> 8 -> 9

  checkInput(l, [2, 3, 6, 7, 8, 9]);
});

test('remove elements using: remove(data)', () => {
  let actual, expected;
  const l = new LinkedList();
  l.removeFirst(); // non-existent
  l.add(1); // 1
  l.removeFirst(); // null
  l.add(2); // 2
  l.add(3); // 2 -> 3
  l.removeFirst(); // 3

  checkInput(l, [3]);

  l.removeFirst(); // null
  checkInput(l, []);

  l.add(4); // 4
  l.addFirst(5); // 5 -> 4
  l.removeFirst(); // 4
  l.addFirst(3); // 3 -> 4
  l.removeFirst(); // 4
  l.add(6); // 4 -> 6
  l.addFirst(2); // 2 -> 4 -> 6

  checkInput(l, [2, 4, 6]);

  l.add(7); // 2 -> 4 -> 6 -> 7
  l.add(8); // 2 -> 4 -> 6 -> 7 -> 8
  l.add(7); // 2 -> 4 -> 6 -> 7 -> 8 -> 7
  l.add(8); // 2 -> 4 -> 6 -> 7 -> 8 -> 7 -> 8
  l.removeFirst(); // 4 -> 6 -> 7 -> 8 -> 7 -> 8
  l.remove(6); // 4 -> 7 -> 8 -> 7 -> 8
  l.removeFirst(); // 7 -> 8 -> 7 -> 8
  l.removeFirst(); // 8 -> 7 -> 8

  checkInput(l, [8, 7, 8]);

  l.add(9); // 8 -> 7 -> 8 -> 9
  l.remove(7); // 8 -> 8 -> 9
  l.removeFirst(); // 8 -> 9

  checkInput(l, [8, 9]);
});

test('remove elements using: pop()', () => {
  let actual, expected;
  const l = new LinkedList();
  l.pop(); // non-existent
  l.add(1); // 1
  l.pop(); // null
  l.pop(); // null
  l.add(2); // 2
  l.add(3); // 2 -> 3
  l.pop(); // 2

  checkInput(l, [2]);

  l.pop(); // null
  checkInput(l, []);

  l.add(4); // 4
  l.add(5); // 4 -> 5
  l.addFirst(3); // 3 -> 4 -> 5
  l.pop(); // 3 -> 4
  l.pop(); // 3
  l.add(6); // 3 -> 6
  l.addFirst(2); // 2 -> 3 -> 6
  l.pop(); // 2 -> 3
  l.add(4); // 2 -> 3 -> 4

  checkInput(l, [2, 3, 4]);

  l.add(7); // 2 -> 3 -> 4 -> 7
  l.add(8); // 2 -> 3 -> 4 -> 7 -> 8
  l.add(7); // 2 -> 3 -> 4 -> 7 -> 8 -> 7
  l.add(8); // 2 -> 3 -> 4 -> 7 -> 8 -> 7 -> 8
  l.pop(); // 2 -> 3 -> 4 -> 7 -> 8 -> 7
  l.removeFirst(); // 3 -> 4 -> 7 -> 8 -> 7
  l.pop(); // 3 -> 4 -> 7 -> 8
  l.pop(); // 3 -> 4 -> 7

  checkInput(l, [3, 4, 7]);

  l.add(9); // 3 -> 4 -> 7 -> 9
  l.pop(); // 3 -> 4 -> 7
  l.pop(); // 3 -> 4
  l.pop(); // 3

  checkInput(l, [3]);
});
