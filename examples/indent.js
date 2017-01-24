// "indent": ["error", 4, { "SwitchCase": 1, "MemberExpression": 1 }],

// correct: indent with 4 spaces
const foo = function (x) {
    console.log('foo')
}

// wrong
const bar = function (x) {
  console.log('bar')
}

// correct: switch case with 1 indent(i.e. 4 spaces)
switch (foo) {
    case 'foo':
        console.log('switch foo')
        break
    case 'bar':
        console.log('switch bar')
        break
    default:
        break
}

// wrong: switch case
switch (foo) {
  case 'foo':
    console.log('switch foo')
    break
  case 'bar':
    console.log('switch bar')
    break
  default:
    break
}

// correct: multi-line property chains with 1 indent(i.e. 4 spaces)
foo()
    .bar()
    .foobar

// wrong: multi-line property chains
foo
.bar()
.foobar
