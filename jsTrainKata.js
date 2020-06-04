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

// Calculate number of paperwork needed, also if 'n' or 'm' is  less than 0, return 0.
function paperwork(n, m) {
  if (n <= 0 || m <= 0) {
    return 0;
  } else {
    return n * m;
  }
}

paperwork(5, 5);
paperwork(5, -5);

// Return clock-time with hours, minutes and seconds converted to milliseconds.
function past(h, m, s) {
  do {
    let oneH = h * 3600000;
    let oneM = m * 60000;
    let oneS = s * 1000;
    return oneH + oneM + oneS;
  } while (0 <= h <= 23 && 0 <= m <= 59 && 0 <= s <= 59);
}

                // another shorter solution:
                function past(h, m, s) {
                   let oneH = h * 3600000;
                    let oneM = m * 60000;
                    let oneS = s * 1000;
                    return oneH + oneM + oneS;
                }

past(0, 1, 1);
past(1, 1, 1);
past(0, 0, 0);



//
