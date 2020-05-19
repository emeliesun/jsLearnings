function titleCase(str) {
  //Method 1
  // var words = str.toLowerCase().split(" ");
  // for(let i=0; i<words.length; i++) {
  //   words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  // };
  // return words.join(" ");

  //Method 2
    var words = str.toLowerCase().split(' ').map(function (el) {
      return el[0].toUpperCase() + el.slice(1);
    });
  return words.join(' ');
}

titleCase("You're a little sweetiepie");

