// GLOBALS
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

// console.log(__filename);

const {john, peter} = require('./1-names')
const sayHi = require('./util')
// sayHi('susan')
// sayHi('om')
// sayHi(john)
// sayHi(peter)
require('./2-mind-grenade')
// console.log(names)