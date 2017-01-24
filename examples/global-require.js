// "global-require": ["off"],

// you need not to declare '/* global require */' since require key word is widely used in webpack
// correct
const foo = require('../foo')

// also correct
/* global require */
const bar = require('../bar')
