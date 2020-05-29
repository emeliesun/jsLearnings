// Return "Yes" or "No" wether truthy or falsy.
function boolToWord(bool) {
  if (bool === true) {
    return 'Yes';
  } else return 'No';
}

boolToWord(true);
boolToWord(false);


// Remove first and last character of a string.
function removeChar(str){
 let words = str.slice(1, -1)
 return words;
};

removeChar('eloquent');
removeChar('country');

