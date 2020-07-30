//...............Program for ATM...................

var withdraw_total = "2600";
function withdraw(withdraw_total) {
  var noteTypeArray = [2000, 500, 100]; // the denomination you want to find.
  var resultArray = [];

  for (let i = 0; i < noteTypeArray.length; i++) {
    resultArray.push(Math.floor(withdraw_total / noteTypeArray[i]));
    // Get the new withdraw_total
    withdraw_total = withdraw_total % noteTypeArray[i];
  }

  var twothousands_notes = resultArray[0];
  var fivehundred_notes = resultArray[1];
  var hundred_notes = resultArray[2];

  console.log(
    "calculated Notes types are : " +
      "100 - " +
      hundred_notes +
      "   500 -  " +
      fivehundred_notes +
      "  2000 -  " +
      twothousands_notes
  );

  var result =
    "calculated Notes types are : " +
    "100 - " +
    hundred_notes +
    "   500 -  " +
    fivehundred_notes +
    "  2000 -  " +
    twothousands_notes;

  return result;
}
withdraw(withdraw_total);
