const reports = require('../../reports');

exports.command = 'view <name>'

exports.desc = 'View one report'

exports.builder = {
  name: {
    describe: 'Name of report you want to view.',
    demandOption: true,
    type: 'string'
  }
}

exports.handler = function(argv) {
  console.log('View report');
}
