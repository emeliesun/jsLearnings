function findLongestWord(str) {
  //fundamentals solution
  var words = str.split(' ');
  var longest = '';

  for (var word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest.length;

  //short version solution
  // return str.split(" ").sort(function(a, b) {return b.length-a.length})[0].length;
}

findLongestWord('The cat jumped of of the couch with a longdistance jump.');
