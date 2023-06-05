function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
// index 为父亲节点的 index
function maxHeapify(array, index, len) {
  // 找到这个节点的左右子节点
  let l = (index << 1) + 1;
  let r = l + 1;

  let cMax = l;

  // 找到左右子节点中最大的元素的下标，可能不存在左右节点
  if (l > len) return;
  if (r <= len && array[r] > array[l]) {
    cMax = r;
  }

  // 小根堆，把大的元素交换到叶子结点
  if (array[cMax] > array[index]) {
    swap(array, cMax, index);
    // 继续堆化，在靠近根节点的需要多次递归
    maxHeapify(array, cMax, len);
  }
}

function heapSort(array) {
  const len = array.length;

  const beginIndex = (len - 1) >> 1;

  // 从最后一个非叶子结点开始
  for (let i = beginIndex; i >= 0; i--) {
    maxHeapify(array, i, len);
  }

  for (let i = len - 1; i > 0; i--) {
    swap(array, 0, i);
    maxHeapify(array, 0, i - 1);
  }
  return array;
}

console.log(heapSort([3, 2, 1]));
