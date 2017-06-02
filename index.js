function findMinAndRemove(array){
  var currentMin = array[0]
  var currentIndex = 0
  array.forEach((currentValue, index, array) => {
    if(currentValue < currentMin) {
      currentMin = currentValue;
      currentIndex = index;
    }
  })
  array.splice(currentIndex, 1)
  return currentMin
}

function insertionSort(array){
  let sorted = [];
  while(array.length != 0){
    sorted.push(findMinAndRemove(array))
  }
  return sorted;
}
