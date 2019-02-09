import GetGeoInformation from '../src';

test('info for api 37.79.13.31', () => {
  expect(new GetGeoInformation().getInfo()).toBe({
    ip: '37.79.13.31',
    city: 'Perm',
    region: 'Perm Krai',
    region_code: 'PER',
    country: 'RU',
    country_name: 'Russia',
    continent_code: 'EU',
    in_eu: false,
    postal: '614000',
    latitude: 58,
    longitude: 56.25,
    timezone: 'Asia/Yekaterinburg',
    utc_offset: '+0500',
    country_calling_code: '+7',
    currency: 'RUB',
    languages:
      'ru,tt,xal,cau,ady,kv,ce,tyv,cv,udm,tut,mns,bua,myv,mdf,chm,ba,inh,tut,kbd,krc,av,sah,nog',
    asn: 'AS12389',
    org: 'Rostelecom',
  });
});
