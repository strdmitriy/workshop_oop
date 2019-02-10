
export default class ReadFiles {
  constructor(files) {
    this.files = files;
  }

  filesProcessing() {
    const filesProcessing = this.files.filter(file => file[0] !== '.').sort();
    return filesProcessing;
  }

  middleElement() {
    const middleIndex = Math.round(this.list.length / 2);
    return this.list[middleIndex];
  }

  plural() {
    const lastChar = this.str.length - 1;
    return lastChar === this.char ? this.str : `${this.str}${this.char}`;
  }

  upperCase() {
    return this.toUpperCase();
  }
}
