#!/usr/bin/env node
import {greet, askName} from '../src/cli.js';
import {printRules, playGame} from '../src/even.js';

console.log('Welcome to the Brain Games!');

const name = askName();

greet(name);

printRules();
playGame(name);