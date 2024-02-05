export default class Collection {
  constructor(rows, cols, defaultValue = 0) {
    this.value = new Array();

    for (let i = 0; i < rows; i++) {
      this.value.push(new Array(cols).fill(defaultValue));
    }
  }

  update(i, j, newValue) {
    this.value[i][j] = newValue;
  }

  forEach(callback) {
    for (let i = 0; i < this.value.length; i++) {
      for (let p = 0; p < this.value[0].length; p++) {
        callback(i, p, this.value[i][p]);
      }
    }
  }
}
