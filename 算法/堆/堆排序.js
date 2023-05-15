function swap (array, i, j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

function maxHeapify(array, index, len) {
  let l = (index << 1) + 1
  let r = l + 1

  let cMax = l

  if (l > len) return
  if (r <= len && array[r] > array[l]) {
    cMax = r
  }

  if (array[cMax] > array[index]) {
    swap(array, cMax, index)
    maxHeapify(array, cMax, len)
  }
}

function heapSort(array) {
  const len = array.length

  const beginIndex = len - 1 >> 1

  for (let i = beginIndex; i >= 0; i--) {
    maxHeapify(array, i, len)
  }

  for (let i = len - 1; i > 0; i--) {
    swap(array, 0, i)
    maxHeapify(array, 0, i - 1)
  }
  return array
}


console.log(heapSort([3,2,1]))