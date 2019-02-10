import fs from 'fs';

const middleElement = (list) => {
  const middleIndex = Math.round(list.length / 2);
  return list[middleIndex];
};

const plural = (str, char) => {
  const lastChar = str.length - 1;
  return lastChar === char ? str : `${str}${char}`;
};

const main = () => {
  const fileNames = fs.readdir('.');
  const filesProcessing = fileNames.filter(file => file[0] !== '.').sort();
  const middleOfFileName = middleElement(filesProcessing);
  const pluraOfFileName = plural(middleOfFileName);
  return console.log(pluraOfFileName.toUpperCase());
};

export default main;
