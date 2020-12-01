function binary_search(array, key) {
	var low = 0,
	high = array.length - 1;
	while(low <= high) {
		var mid = parseInt((low+high) / 2)
		if (key == array[mid]) {
			return mid
		} else if(key < array[mid]) {
			high = mid - 1
		} else {
			low = mid + 1
		}
	} 
}

function binary_search(array,low,high,key) {
	if (low > high) {
		return -1;
	}
	var mid = parseInt((low + high)/2)
	if (key === array[mid]) {
		return mid
	} else if(key > array[mid]) {
		low = mid + 1
		return binary_search(array,low,high,key)
	} else if (key < array[mid]) {
		high = mid - 1
		return binary_search(array,low,high,key)
	}
}

