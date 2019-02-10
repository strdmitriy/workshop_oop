import fs from 'fs';
import ReadFiles from '../src/pipeline';

test('pipeline', async () => {
  const fileNames = await fs.readdir('.');
  const pipe = new ReadFiles(fileNames);
  expect(pipe.filesProcessing()).toBe(3);
});
