function arr1(arr) {
  let map = new Map()
  let array = new Array()
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], true)
    } else {
      array.push(arr[i])
    }
  }
}