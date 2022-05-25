#!/usr/bin/env node
import { printGreet, askName } from '../src/cli.js';

console.log('Welcome to the Brain Games!');

printGreet(askName());
