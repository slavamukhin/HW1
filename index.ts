// 1. Реализовать двусторонний двусвязанный связанный список

interface ListItem {
  value: number,
  next: ListItem | null
  prev: ListItem | null
}

class LinkedList {
  private list: Array<ListItem>
  first: ListItem | null
  last: ListItem | null
  countn: number

  constructor() {
    this.list = []
    this.first = null
    this.last = null
    this.countn = 0
  }

  add(value: number): void {
    this.countn += 1
    if (this.countn === 1) {
      const item = {
        value,
        next: null,
        prev: null
      }
      this.list.push(item)
      this.first = item
      this.last = item
    }

    if (this.countn === 2) {
      const item = {
        value,
        next: null,
        prev: this.list[0]
      }

      this.list[0] = {...this.list[0], next: item}
      this.first = {...this.list[0], next: item}
      this.last = item
      this.list.push(item)
    }

    if (this.countn >= 3) {
      const item = {
        value,
        next: null,
        prev: this.list[this.countn - 2]
      }

      this.list[this.countn - 2] = {...this.list[this.countn - 2], next: item}
      this.last = item
      this.list.push(item)
    }
  }
}

const list = new LinkedList();

list.add(1)
list.add(2)
list.add(3)

console.log(list.first?.value)             // 1
console.log(list.last?.value)              // 3
console.log(list.first?.next?.value)       // 2
console.log(list.first?.next?.prev?.value) // 1
