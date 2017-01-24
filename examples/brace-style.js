// "brace-style": ["error", "stroustrup", { "allowSingleLine": true }],

// correct
if (foo) {
    console.log('foo')
}
else {
    console.log('bar')
}

// correct: single line
if (foo) { console.log('foo') }

// wrong
if (foo) {
    console.log('foo')
} else {
    console.log('bar')
}

// wrong
if (foo)
{
    console.log('foo')
}
else
{
    console.log('bar')
}
