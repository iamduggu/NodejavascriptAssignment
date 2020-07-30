//...............maximum occurance program ....................

var colorArray = [
  "red",
  "green",
  "yellow",
  "green",
  "red",
  "red",
  "green",
  "red",
  "green",
  "blue",
  "yellow",
  "green",
  "green",
  "red",
  "green",
  "blue",
];

function colorOccurance(colorArray) {
  var maxCounter = 0;
  var color = 0;
  for (var i = 0; i < colorArray.length; i++) {
    var counter = 1;
    for (var j = i + 1; j < colorArray.length; j++) {
      if (colorArray[i] == colorArray[j]) {
        counter++;
      }
    }
    if (maxCounter < counter) {
      maxCounter = counter;
      color = colorArray[i];
    }
  }
  console.log(
    "color repeating maximum no of times: ",
    color,
    " and count is : ",
    maxCounter
  );

  return { color, maxCounter };
}

colorOccurance(colorArray);
