module.exports = function longestConsecutiveLength(array) {
  let result = 0;
  const set = new Set(array);

  for (let i = 0; i < array.length; i++) {
    // if an element (e.g. 5) has no predecessor (4)
    // it is the first element of a sequence
    if (!(set.has(array[i] - 1))) {
      let j = array[i];
      // check for next elements 
      while (set.has(j)) {
        j++;
      }
      result = Math.max(result, j - array[i]);
    }
  }
  return result;
}