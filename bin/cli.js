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
if (!installDeps) process.exit(-1);

console.log('Congratualtions! You are ready. Follow the ollowing commands to start');
console.log(`cd ${repoName} && npm start`);
