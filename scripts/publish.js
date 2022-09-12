/* eslint-disable */
'use strict'
const execSync = require('child_process').execSync
const fs = require('fs')
const packageJsonData = JSON.parse(fs.readFileSync('./package.json', 'utf8'))
const tag = /-[a-zA-Z]*/g
// const reg = /[0-9]*\.[0-9]*\.[0-9]*/g;
function getPublishCommand() {
  const versionTag = packageJsonData.version.match(tag)?.[0]?.slice(1)
  let commandText = 'npm publish'
  if (versionTag) {
    commandText += ` --tag ${versionTag}`
  }
  console.log(commandText)
  return commandText
}
try {
  execSync(getPublishCommand(), { stdio: 'inherit' })
} catch (error) {
  console.log(error)
}
