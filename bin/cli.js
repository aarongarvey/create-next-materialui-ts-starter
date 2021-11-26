#!/usr/bin/env node
const { execSync } = require('child_process');

const runCommand = command => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/aarongarvey/create-next-materialui-ts-starter ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Clonging the repository details with name ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependancies for ${repoName}`);

const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log('Congratualtions! Your starter template is ready for action. Run the the following commands to start');
console.log('\x1b[31m%s\x1b[0m', `cd ${repoName} && npm run dev`)
