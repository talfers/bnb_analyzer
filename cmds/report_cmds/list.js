const reports = require('../../reports');

exports.command = 'list'

exports.desc = 'List all reports'

exports.handler = function() {
  reports.listReports()
}
