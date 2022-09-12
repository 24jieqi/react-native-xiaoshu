"use strict";
const exec = require("child_process").exec;
const fs = require("fs");
const packageJsonData = JSON.parse(fs.readFileSync("package.json", "utf8"));
const tag = /-[a-zA-Z]*/g;
// const reg = /[0-9]*\.[0-9]*\.[0-9]*/g;
function getPublishCommand() {
  const versionTag = packageJsonData.version.match(tag)?.[0]?.slice(1);
  let commandText = "npm publish || true";
  if (versionTag) {
    commandText += ` --tag ${versionTag}`;
  }
  return commandText;
}
try {
  exec(getPublishCommand());
} catch (error) {
  console.log(error);
}
