#!/usr/bin/env node
import program from 'commander';
import GetInfo from '..';

program
  .arguments('<firstConfig>')
  .description('Введите ваш api')
  .version('0.0.3')
  .option('-f', '')
  .action(api => (
    new GetInfo(api).getInfo()))
  .parse(process.argv);
