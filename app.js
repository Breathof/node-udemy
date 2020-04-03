//Here I'm ussing destructuration
const { createArchive, multiply } = require('./multiply/multiply');
const { argv } = require('./config/yargs');
const colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'list':
        multiply(argv.base, argv.limit)
        break;
    case 'create':
        createArchive(argv.base, argv.limit)
            .then(response => console.log(response))
            .catch(err => console.error(err));
        break;

    default:
        break;
}

