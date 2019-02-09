#!/usr/bin/env node
import program from 'commander';
import GetGeoInformation from '..';

program
  .arguments('<ip>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.3')
  .option('-f', 'Output format')
  .action((ip) => {
    const getIp = new GetGeoInformation();
    return getIp.getInfo(ip);
  })
  .parse(process.argv);
