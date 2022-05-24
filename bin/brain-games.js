#!/usr/bin/env node
import {greet, askName} from '../src/cli.js';

console.log('Welcome to the Brain Games!');

greet(askName());