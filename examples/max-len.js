// "max-len": ["error", {"code": 80, "ignoreUrls": true, "ignoreStrings": true}],

// correct
if (someReallyLongCondition.reallyLongProperty[someProperty].foobar
    && anotherReallyLongCondition.reallyLongProperty[someProperty].foobar) {
    console.log('correct')
}

// wrong
if (someReallyLongCondition.reallyLongProperty[someProperty].foobar && anotherReallyLongCondition.reallyLongProperty[someProperty].foobar) {
    console.log('correct')
}

// exception: urls, comments and strings can exceeds 80
const url = 'https://www.SomeReallyLongDomainName.com/here/i/just/add/some/directories/to/make/its/length/longer/than/eighty'
