const reports = require('../../reports');

exports.command = 'add <name> <location> <state>'

exports.desc = 'Add a new report'

exports.builder = {
    name: {
        describe: 'Report name.',
        demandOption: true,
        type: 'string'
    },
    location: {
        describe: 'Mashvisor neighborhood ID to pull data for.',
        demandOption: true,
        type: 'number'
    },
    state: {
        describe: 'State to pull data for.',
        demandOption: true,
        type: 'string'
    },
}

exports.handler = function(argv) {
  // console.log(argv.name, argv.location, argv.state);
  reports.addReport(argv.name, argv.location, argv.state)
}
