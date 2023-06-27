var arr = [];

//Bubble Sort

function bubbleSort(arr) {
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
  document.getElementById("bubbleArray").innerHTML = arr.join(", ");
}

//Quick Sort

function quickSort(arr) {
  var userData = document.getElementById("userQuickData").value;
  parseInt(userData);
  var splitData = userData.split(", ");
  var arr = splitData.map(function (str) {
    return parseInt(str);
  });
  const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }

    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  };
  document.getElementById("quickArray").innerHTML = quickSort(arr).join(", ");
}

document
  .getElementById("userBubbleData")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.key === "Enter") {
      document.getElementById("bubbleButton").click();
    }
  });

document
  .getElementById("userQuickData")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.key === "Enter") {
      document.getElementById("quickButton").click();
    }
  });