function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirstElement<number>([1, 2, 3]);
const str = getFirstElement<string>(['a', 'b', 'c']);
const bool = getFirstElement<boolean>([true, false, true]);

const mixed = getFirstElement<number | string | boolean>([1, 'a', true]);

console.log(`---------- TASK-6 ----------`);
console.log(num, str, bool, mixed);
