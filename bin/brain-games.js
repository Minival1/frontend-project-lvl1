#!/usr/bin/env node

import { promptName } from '../src/cli.js';

console.log("Welcome to the Brain Games!");

const name = promptName();

console.log(`Hello ${name}`);