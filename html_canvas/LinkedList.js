// TODO: Create Unit Testing with Jest
//       Would be a great opportunity to learn, a good use of testing
//       Because there are many test case possibilities.
class LinkedList {
  constructor(rootVal) {
    this.root = rootVal ? new LinkedListNode(rootVal) : null;
    this.size = this.root ? 1 : 0;
    this.last = this.root;
  }

  // O(1)
  add(data) {
    if (!this.root) {
      this.root = new LinkedListNode(data);
      this.last = this.root;
    } else {
      this.last.next = new LinkedListNode(data, null, this.last);
      this.last = this.last.next;
    }

    this.size += 1;
    return this.last.data;
  }

  // O(1)
  addFirst(data) {
    if (!this.root) {
      this.root = new LinkedListNode(data);
      this.last = this.root;
    } else {
      let node = new LinkedListNode(data, this.root);
      this.root.prev = node;
      this.root = node;
    }
    this.size += 1;
    return data;
  }

  // O(n)
  remove(data) {
    if (this.size <= 0) {
      this.root = this.last = null;
      this.size = 0;
      return undefined;
    }
    let p = this.root;
    while (p) {
      if (p.data == data) {
        if (p.prev) p.prev.next = p.next; // if not root
        if (p.next) p.next.prev = p.prev; // if not last

        if (p == this.root) {
          this.root = p.next;
        } else if (p == this.last) {
          this.last = p.prev;
        }

        p = null;
        this.size -= 1;

        // if list empty
        if (this.size <= 0) {
          this.last = this.root = null;
          this.size = 0;
        }

        return true;
      }
      p = p.next;
    }
    return undefined; // not found
  }

  // O(1)
  removeFirst() {
    if (this.size <= 0) return undefined;

    const data = this.root.data;

    if (this.size == 1) {
      this.root = this.last = null;
      this.size = 0;
    } else {
      this.root = this.root.next;
      this.root.prev = null;
      this.size -= 1;
    }

    return data;
  }

  // O(1)
  pop() {
    if (this.size <= 0) return undefined;

    const data = this.last.data;

    if (this.size == 1) {
      this.root = this.last = null;
      this.size = 0;
    } else {
      this.last = this.last.prev;
      this.last.next = null;
      this.size -= 1;
    }

    return data;
  }

  // O(n)
  listToString(reverse = false) {
    const dataVals = [];
    let p;
    if (!reverse) {
      p = this.root;
      while (p) {
        dataVals.push(p.data);
        p = p.next;
      }
    } else {
      p = this.last;
      while (p) {
        dataVals.push(p.data);
        p = p.prev;
      }
    }
    return reverse
      ? dataVals.join(' <- ').trim()
      : dataVals.join(' -> ').trim();
  }

  printList(reverse = false) {
    console.log(this.listToString(reverse));
  }
}

class LinkedListNode {
  constructor(data = undefined, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

// for testing
// module.exports = LinkedList;
