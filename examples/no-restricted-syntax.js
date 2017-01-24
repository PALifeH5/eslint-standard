// "no-restricted-syntax": ["error"],

// recommend things like 'map/every/some/filter/reduce/find/findIndex'
// to iterate over arrays

// recommend thins like 'bject.keys/Object.values/Object.entries'
// to produce arrays from objects

const array = [1, 2, 3]
const dict = { x: 1, y: 2 }

// correct
array.map((element, index) => console.log(element, index))

// correct but not good
for (let i = 0; i < array.length; i += 1) {
    console.log(i, array[i])
}

// correct
Object.keys(dict).every(k => console.log(k))

// correct, but not good
const keys = Object.keys(dict)
for (let i = 0; i < keys.length; i += 1) {
    console.log(keys[i])
}

// wrong
for (const k in dict) {
    console.log(k)
}
