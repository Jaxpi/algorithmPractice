var arr = [];

//Bubble Sort

function sort(arr) {
  var userData = document.getElementById("userBubbleData").value;
  parseInt(userData);
  var splitData = userData.split(", ");
  var arr = splitData.map(function (str) {
    return parseInt(str);
  });
  var temp = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  document.getElementById("array").innerHTML = arr.join(", ");
}

//Binary Search

const binarySearch = () => {
  var target = document.getElementById("userQuickData").value;
  console.log("target: " + target);
  var arr = document.getElementById("array").innerHTML.split(", ");
  console.log(arr);

  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (target === arr[middleIndex]) {
      document.getElementById("result").innerHTML =
        "Your searched number was found at index " + middleIndex;
      return console.log("Target was found at index " + middleIndex);
    }
    if (target > arr[middleIndex]) {
      console.log("Searching the right side of Array");
      startIndex = middleIndex + 1;
    }
    if (target < arr[middleIndex]) {
      console.log("Searching the left side of array");
      endIndex = middleIndex - 1;
    } else {
      console.log("Not Found this loop iteration. Looping another iteration.");
    }
  }
  document.getElementById("result").innerHTML =
    "Your searched number was not found";
  console.log("Target value not found in array");
};

document
  .getElementById("userBubbleData")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.key === "Enter") {
      document.getElementById("sortButton").click();
    }
  });

document
  .getElementById("userQuickData")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.key === "Enter") {
      document.getElementById("searchButton").click();
    }
  });
