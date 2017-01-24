// "global-require": ["off"],

// You need not to declare '/* global require */' since require key word is widely used in Webpack
// correct
const foo = require('../foo')

// also correct
/* global require */
const bar = require('../bar')
