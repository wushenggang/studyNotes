function insertSort(arr) {
	for(let i = 1; i < arr.length; i++) {
		var count = i
		while(count > 0) {
			if (arr[count] < arr[count-1]) {
				let temp = arr[count]
				arr[count] = arr[count-1]
				arr[count-1] = temp
			}
			count--
		}
	}
	return arr;
}


function insertSort(arr) {
	for(let i =1; i < arr.length; i++) {
		var count = i
		while(count > 0) {
			if(arr[count] < arr[count-1]) {
				let temp = arr[count]
				arr[count] = arr[count-1]
				arr[count-1] = temp
			}
			count--
		}
	}
	return arr
}