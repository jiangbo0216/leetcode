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
    // 如果当前节点是根节点，则返回
    if (index === 0) {
      return;
    }

    const parentIndex = this.getParentIndex(index);

    // 如果父节点的值大于当前节点的值，则交换它们的值
    if (this.heap[parentIndex] > this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];

      // 继续向上调整
      this.siftUp(parentIndex);
    }
  }

  // 下移操作，用于删除堆顶元素时维护堆的性质
  siftDown(index) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    let minIndex = index;

    // 找出当前节点、左子节点和右子节点中的最小值
    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
      minIndex = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
      minIndex = rightChildIndex;
    }

    // 如果最小值不是当前节点，则交换它们的值
    if (minIndex !== index) {
      [this.heap[index], this.heap[minIndex]] = [this.heap[minIndex], this.heap[index]];

      // 继续向下调整
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


