module.exports = function longestConsecutiveLength(array) {
  var result = 0;
  var set = new Set(array);

  for (var i = 0; i < array.length; i++) {
    // if an element (e.g. 5) has no predecessor (4)
    // he is the first element of a sequence
    if (!(set.has(array[i] - 1))) {
      var j = array[i];
      // check for next elements 
      while (set.has(j)) {
        j++;
      }
      result = Math.max(result, j - array[i]);
    }
  }
  return result;
}