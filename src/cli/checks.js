const inquirer = require('inquirer').default
const { initializeStore } = require('../store')
const { logger } = require('../utils')
const checks = require('../checks')
const debug = require('debug')('cli:checks')

async function listCheckCommand (knex, options = {}) {
  const { getAllComplianceChecks } = initializeStore(knex)
  const checks = await getAllComplianceChecks(knex)
  const implementedChecks = checks.filter(check => check.implementation_status === 'completed')
  implementedChecks.forEach(check => {
    logger.info(`- ${check.code_name}: ${check.title}`)
  })
  logger.info('------------------------------------')
  logger.info(`Implemented checks: ${implementedChecks.length}/${checks.length}.`)
  return implementedChecks
}

async function runCheckCommand (knex, options = {}) {
  const { getAllComplianceChecks } = initializeStore(knex)
  const complianceChecks = await getAllComplianceChecks(knex)
  const implementedChecks = complianceChecks.filter(check => check.implementation_status === 'completed')
  const validCommandNames = implementedChecks.map((item) => item.code_name)

  if (Object.keys(options).length && !validCommandNames.includes(options.name)) {
    throw new Error('Invalid check name. Please enter a valid check name.')
  }

  const answers = options.name
    ? options
    : await inquirer.prompt([
      {
        type: 'list',
        name: 'name',
        message: 'What is the name (code_name) of the check?',
        choices: validCommandNames,
        when: () => !options.name
      }
    ])

  debug('Running check with code_name:', answers.name)
  await checks[answers.name](knex)
  logger.info(`Check (${answers.name}) ran successfully`)
}

module.exports = {
  listCheckCommand,
  runCheckCommand
}
