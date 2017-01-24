// "no-unused-vars": ["error", { "vars": "all", "args": "none" }],

// unused args is allowed
const foo = (x) => console.log('foo')

// unused vars is not allowed
const bar = () => {
    const x = 1
    console.log('foo')
}
