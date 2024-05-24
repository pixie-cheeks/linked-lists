import LinkedList from './linked-lists.js';

const list = new LinkedList();

list.append('First');
list.append('Second');
list.append('Third');
list.prepend('Zeroth');
list.prepend('Alga');
list.append('Fourth');
list.append('Fifth');
list.append('Sixth');
list.pop();
list.append('Beta');
list.insertAt('Alpha', 6);
list.insertAt('Gamma', 7);
list.removeAt(7);
list.removeAt(3);

console.log(list.toString());
console.table({
  size: list.size(),
  head: list.head().value,
  tail: list.tail().value,
  atTwo: list.at(2).value,
  containsThird: list.contains('Third'),
  indexOfFirst: list.find('First'),
  atOther: list.at(59),
});

list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();

console.log(list.toString());
