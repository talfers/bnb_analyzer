exports.command = 'reports <command>'
exports.desc = 'Manage reports'
exports.builder = function (yargs) {
    return yargs.commandDir('report_cmds') // locate report commands
}
exports.handler = function (argv) {}
