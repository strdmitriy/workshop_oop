#!/usr/bin/env node
import program from 'commander';
import GetGeoInformation from '..';

program
  .arguments('ip')
  .description('Определение города по ip')
  .version('0.0.3')
  .action((ip) => {
    const getIp = new GetGeoInformation();
    try {
      const getInfo = getIp.getInfo(ip);
      return getInfo;
    } catch (e) {
      return console.log(e.message);
    }
  })
  .parse(process.argv);
