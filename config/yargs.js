let options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        // demand: false,
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('list', 'List the multiply table', options)
    .command('create', 'Create a file with the multiply table', options)
    .argv;

module.exports = {
    argv
}