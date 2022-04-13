/* eslint-disable @typescript-eslint/ban-types */
// Write a function that takes two number arrays as parameters
// and return an array which contains elements from both
// arrays

// myFunction([1, 2], [3, 4])
// Expected
// [1, 2, 3, 4]

// myFunction([1, 2], [3, 4, 5, 6])
// Expected
// [1, 2, 3, 4, 5, 6]

const doubleArr = (a:number[], b:number[]):number[] => a.concat(b);

console.log(doubleArr([1, 2], [3, 4, 5, 6]));

// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the last element

// myFunction(['Apple', 'Orange', 'Banana'], 'Kiwi');
// Expected
// ['Apple', 'Orange', 'Banana', 'Kiwi']

const arrPlusStr = (arr:string[], str:string) => [...arr, str];

console.log(arrPlusStr(['Apple', 'Orange', 'Banana'], 'Kiwi'));

// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the first element

// myFunction(['Apple', 'Orange', 'Banana'], 'Kiwi');
// Expected
// ['Kiwi', 'Apple', 'Orange', 'Banana']

const strPlusArr = (arr:string[], str:string) => [str, ...arr];

console.log(strPlusArr(['Apple', 'Orange', 'Banana'], 'Kiwi'));

// Write a function that takes two objects as parameters
// and return an object which contains properties from both
// objects

// myFunction({ a:1, b:2 }, { c:3, d:4 })
// Expected
// { a:1, b:2, c:3, d:4 }

// myFunction({ a:1, b:2 }, { c:3, d:4, e:5, f:6 })
// Expected
// { a:1, b:2, c:3, d:4, e:5, f:6 }

const ObjFunction = (a:{}, b:{}) => {
    const newObj = { ...a, ...b };
    return newObj;
};

console.log(ObjFunction({ a: 1, b: 2 }, {
    c: 3, d: 4, e: 5, f: 6,
}));

// Write a function that takes an object and a string as parameters
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string

// myFunction({ eyeColor: 'green', age: 10 }, 'Garfield')
// Expected
// { eyeColor: 'green', age: 10, favoriteMovie:  'Garfield' }

// myFunction({ eyeColor: 'blue', age: 15 }, 'Twilight')
// Expected
// { eyeColor: 'blue', age: 15, favoriteMovie:  'Twilight' }

const newProp = (obj: {}, str: string) => {
    const newObj = { ...obj, favoriteMovie: str };
    return newObj;
};

console.log(newProp({ eyeColor: 'blue', age: 15 }, 'Twilight'));
