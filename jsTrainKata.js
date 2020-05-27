// Return "Yes" or "No" wether truthy or falsy.
function boolToWord(bool) {
  if (bool === true) {
    return 'Yes';
  } else return 'No';
}

Test.assertEquals(boolToWord(true), 'Yes');
Test.assertEquals(boolToWord(false), 'No');


// 


