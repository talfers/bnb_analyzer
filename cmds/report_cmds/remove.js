const reports = require('../../reports');

exports.command = 'remove <name>'

exports.desc = 'Remove report'

exports.aliases = ['delete']

exports.builder = {
  name: {
    describe: 'Name to be removed.',
    demandOption: true,
    type: 'string'
  }
}

exports.handler = function(argv) {
  reports.removeReport(argv.name)
}
