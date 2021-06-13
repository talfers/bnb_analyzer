const fs = require('fs');
const chalk = require('chalk');
const { airbnb, util } = require('./api')
const cleanData = require('./util/cleanData')

const loadReports = () => {
  try {
    let reportsBuffer = fs.readFileSync('./reports.json');
    let reportsJson = reportsBuffer.toString();
    return JSON.parse(reportsJson);
  } catch (e) {
    return [];
  }
}

const saveReports = (reports) => {
  const dataJson = JSON.stringify(reports);
  fs.writeFileSync('reports.json', dataJson)
}

const listReports = () => {
  // lists report titles
  const reports = loadReports();
  reports.map((report, i) => {
    console.warn(chalk.white.bgBlue(`    ${report.name}    `));
  })
}

// !!!!!!!!!!!!! -- HALP -- !!!!!!!!!!!!!!
const addReport = async (name, neighborhoodId, state) => {
    const reports = loadReports();
    const duplicateReport = reports.find(report => report.name === name);
    if (!duplicateReport) {
        try {
            // { data: [name] } pulls data object out of response and renames it
            // Get data for neighborhood overview
            // const { data: overviewData } = await airbnb.getNeighborhoodOverview(neighborhoodId, state)
            const data = await airbnb.getNeighborhoodOverview(neighborhoodId, state)
            // console.log(data);
            // Help shallow out object depth
            const neighborhoodOverview = data.content;

            //  NEW: Get data from objects and combine into one object
            const newReportData = await cleanData(
                name,
                neighborhoodId,
                neighborhoodOverview
            )

            reports.push(newReportData)  // NEW: push new report object onto reports array

            saveReports(reports)         // NEW: save reports back to file

            console.log(chalk.green.inverse('Report added')) // NEW: Log that is worked!
        } catch (e) {
            console.log(e)
            return console.log(chalk.red.inverse('Error fetching data report'))
        }
    } else {
        console.log(chalk.red.inverse('Report already exists'))
    }
}

const viewReport = () => {
  // print report data
}

const removeReport = () => {
  // remove report from reports.json
  try {
    const reports = loadReports();
    let newReports = reports.filter(report => report.name !== name);
    if(reports.length > newReports.length) {
      saveReports(newReports);
      console.log(chalk.green.inverse('Report removed!'));
    } else {
      console.log(chalk.red.inverse('Report not found'));
    }
  } catch (e) {
    return e
  }
}

module.exports = {
  listReports,
  addReport,
  viewReport,
  removeReport
}
