class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 获取父节点的索引
  getParentIndex(index) {
    return (index - 1) >> 1 ;
  }

  // 获取左子节点的索引
  getLeftChildIndex(index) {
    return index  >> 1 + 1;
  }

  // 获取右子节点的索引
  getRightChildIndex(index) {
    return index >> 1 + 2;
  }

  // 上移操作，用于添加元素时维护堆的性质
  siftUp(index) {
    // 如果当前节点不是根节点，且父节点的值大于当前节点的值
    while (index > 0 && this.heap[this.getParentIndex(index)] > this.heap[index]) {
      // 交换父节点和当前节点的值
      [this.heap[this.getParentIndex(index)], this.heap[index]] = [
        this.heap[index],
        this.heap[this.getParentIndex(index)],
      ];

      // 将当前节点指向父节点
      index = this.getParentIndex(index);
    }
  }

  // 下移操作，用于删除堆顶元素时维护堆的性质
  siftDown(index) {
    let minIndex = index;

    // 检查左子节点
    const leftChildIndex = this.getLeftChildIndex(index);
    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
      minIndex = leftChildIndex;
    }

    // 检查右子节点
    const rightChildIndex = this.getRightChildIndex(index);
    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
      minIndex = rightChildIndex;
    }

    // 如果最小值的索引不是当前节点，则交换它们的值并继续向下调整
    if (index !== minIndex) {
      [this.heap[index], this.heap[minIndex]] = [this.heap[minIndex], this.heap[index]];
      this.siftDown(minIndex);
    }
  }

  // 插入元素
  insert(value) {
    // 将新元素添加到堆的末尾
    this.heap.push(value);

    // 上移新元素，以维护堆的性质
    this.siftUp(this.heap.length - 1);
    return this
  }

  // 获取堆顶元素
  peek() {
    return this.heap[0];
  }

  // 删除堆顶元素
  extract() {
    // 获取堆顶元素
    const min = this.heap[0];

    // 将堆顶元素移动到末尾，并删除它
    this.heap[0] = this.heap.pop();

    // 下移新的堆顶元素，以维护堆的性质
    this.siftDown(0);

    return min;
  }

  // 获取堆的大小
  size() {
    return this.heap.length;
  }
}

const minHeap = new MinHeap()

console.log(minHeap.insert(3))
console.log(minHeap.insert(2))
console.log(minHeap.insert(1))
console.log(minHeap.extract())
console.log(minHeap)


