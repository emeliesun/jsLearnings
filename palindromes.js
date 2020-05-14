function palindrome(str) {
  var reg = /[\W_]/g; //regular expression - non alphanumeric characters

  var smallCapStr = str.toLowerCase().replace(reg, ''); // lowercase evrthg and replace the characters from reg to ""=nothing(aka remove them)

  var reverseStr = smallCapStr.split('').reverse().join('');

  if (smallCapStr === reverseStr) {
    return true;
  } else {
    return false;
  }
}

// palindrome('aibohphobia');
// palindrome('Was it a car or a cat I saws?');
palindrome('Was it a car or a cat I saw?');
