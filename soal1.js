// assume input can be negative numbers
function twoSums(numbers, target) {
	let firstIndex, secondIndex
  for(firstIndex = 0; firstIndex < numbers.length - 1; firstIndex++) {
  	for(secondIndex = firstIndex+1; secondIndex < numbers.length; secondIndex++) {
    	if(numbers[firstIndex] + numbers[secondIndex] === target) {
      	return [firstIndex, secondIndex]
      }
    }
  }
  return []
}

console.log(twoSums([3,3], 1))