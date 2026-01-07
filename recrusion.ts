function sumRange(number: number): number {
  if (number === 1) {
    return 1;
  } else {
    return number + sumRange(number - 1);
  }
}
// sumRange(5);

function power(number: number, exp: number): number {
  if (exp === 0) {
    return 1;
  } else {
    return number * power(number, exp - 1);
  }
}
// power(4, 2);

function factorial(number: number): number {
  if (number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
// factorial(5);

function all(arr: number[], fn: (number: number) => boolean): boolean {
  if (arr.length === 0) {
    return true; // ? not sure
  } else if (!fn(arr[0])) {
    // every should be true, if one false : stop recursive : false bottom-up
    return false;
  } else {
    // if one true, try next one
    arr.shift();
    return all(arr, fn);
  }
}
// const allAreLessThanSeven =
// all([0, 2, 3, 5, 2, 1, 8], function (num) {
//   return num < 7;
// });
// allAreLessThanSeven;

function productOfArray(arr: number[]): number {
  if (arr.length === 0) {
    return 1;
  } else {
    const currNb = arr[0];
    arr.shift();
    return currNb * productOfArray(arr);
  }
}
// productOfArray([1, 2, 5, 8, 9]);

function contains(obj: Record<string, unknown>, value: unknown): boolean {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      if (typeof obj[prop] === "object" && obj[prop] !== null) {
        // recursion here, if object
        if (contains(obj[prop] as Record<string, unknown>, value)) {
          return true; // return true only if round the value (bubble up), else continue next prop
        }
      } else {
        if (obj[prop] === value) {
          return true; // return true only if found the value, else continue to next prop
        }
      }
    }
  }

  // if obj empty or no value found, return false
  return false;
}
const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
      thing: {
        moreStuff: {
          magicNumber: 66,
          something: "bar",
        },
      },
    },
  },
};
// contains(nestedObject, "foo2");

function sumIntegers(arr: Array<unknown>): number {
  const copy = arr.slice() as Array<unknown>;

  if (copy.length === 0) {
    return 0;
  } else {
    if (Number.isInteger(arr[0]) && typeof arr[0] == "number") {
      const currNb = arr[0];
      copy.shift();
      return currNb + sumIntegers(copy);
    } else if (Array.isArray(copy[0])) {
      const currTotal = sumIntegers(copy[0]);
      copy.shift();
      return currTotal + sumIntegers(copy);
    }
  }

  return 0;
}
function totalIntegers(arr: Array<unknown>): number {
  const copy = arr.slice() as Array<unknown>;

  if (copy.length === 0) {
    return 0;
  } else {
    if (Number.isInteger(arr[0])) {
      copy.shift();
      return 1 + totalIntegers(copy);
    } else if (Array.isArray(copy[0])) {
      const currTotal = totalIntegers(copy[0]);
      copy.shift();
      return currTotal + totalIntegers(copy);
    }
  }

  return 0;
}
const arrayTest = [[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]];
// sumIntegers(arrayTest);
// totalIntegers(arrayTest);

function sumSquares(arr: Array<unknown>): number {
  const copy = arr.slice() as Array<unknown>;

  if (copy.length === 0) {
    return 0;
  } else {
    if (Number.isInteger(arr[0])) {
      const currNb = arr[0] as number;
      const currSquare = currNb * currNb;
      copy.shift();
      return currSquare + sumSquares(copy);
    } else if (Array.isArray(copy[0])) {
      const currTotal = sumSquares(copy[0]);
      copy.shift();
      return currTotal + sumSquares(copy);
    }
  }

  return 0;
}
let l = [1, 2, 3] as Array<unknown>;
l = [[1, 2], 3];
l = [[[[[[[[[1]]]]]]]]];
l = [10, [[10], 10], [10]];
// sumSquares(l);

function replicate(nTimes: number, num: number): number[] {
  if (nTimes <= 0) {
    return []; // base case empty if no repetition
  } else if (nTimes === 1) {
    return [num]; // base case return the first element (no repetition)
  } else {
    return [num].concat(replicate(nTimes - 1, num));
  }
}

// replicate(3, 5);
// replicate(1, 69);
// replicate(-2, 6);
