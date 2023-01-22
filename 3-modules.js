// function to use modules
// destructuring: const {john, peter, susan} = require('./4-names');
const names = require('./4-names');
const sayHi = require('./5-utilities')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')

sayHi(names.john);
sayHi(names.peter);
sayHi(names.susan);
