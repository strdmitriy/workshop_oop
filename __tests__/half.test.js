import GetInfo from '../src';

test('info for api 37.79.13.31', () => {
  expect(new GetInfo('37.79.13.31').getInfo()).toBe(2);
});
