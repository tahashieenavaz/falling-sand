export default class Collection {
  constructor(rows, cols, defaultValue = 0) {
    this.value = new Array();

    for (let i = 0; i < rows; i++) {
      this.value.push(new Array(cols).fill(defaultValue));
    }
  }

  /**
   * The "update" function updates the value at a specific index in a two-dimensional array.
   * @param i - The parameter "i" represents the row index of the element in the 2D array that you want
   * to update.
   * @param j - The parameter "j" represents the column index of the element in the 2D array that you
   * want to update.
   * @param newValue - The `newValue` parameter is the new value that you want to assign to the element
   * at position `(i, j)` in the `value` array.
   */
  update(i, j, newValue) {
    this.value[i][j] = newValue;
  }

  /**
   * The "at" function returns the value at a specific index (i, j) in a two-dimensional array.
   * @param i - The parameter "i" represents the row index of the element in the 2D array.
   * @param j - The parameter "j" represents the column index of the element in the 2D array.
   * @returns The value at the specified indices (i, j) in the "value" array.
   */
  at(i, j) {
    return this.value[i][j];
  }

  /**
   * The function "rows" returns the length of the value array.
   * @returns The number of rows in the value array.
   */
  rows() {
    return this.value.length;
  }

  /**
   * The function `cols()` returns the number of columns in the `value` array.
   * @returns The number of columns in the value array.
   */
  cols() {
    return this.value[0].length;
  }

  /**
   * The `forEachRow` function iterates over each row in a matrix and calls a callback function with the
   * row's value and index.
   * @param callback - The callback parameter is a function that will be called for each row in the data
   * structure. It takes two arguments: the value of the current row and the index of the current row.
   */
  forEachRow(callback) {
    for (let i = 0; i < this.rows(); i++) {
      callback(this.value[i], i);
    }
  }

  /**
   * The `forEach` function iterates over a 2D array and calls a callback function for each element,
   * passing the row index, column index, and element value as arguments.
   * @param callback - The callback parameter is a function that will be called for each element in the
   * 2D array. It takes three parameters: i, p, and the value at the current position (this.value[i][p]).
   */
  forEach(callback) {
    for (let i = 0; i < this.value.length; i++) {
      for (let p = 0; p < this.value[0].length; p++) {
        callback(i, p, this.value[i][p]);
      }
    }
  }
}
