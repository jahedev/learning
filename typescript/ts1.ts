const myId: string = 'abc123'
const myPrice: number = 3.142
const myTags: string[] = ['hello', 'world']
const myObj: { title: string; desc: string } = {
  title: 'SOmething',
  desc: 'another',
}
const myTuple: [number, number, string] = [1, 2, '3']
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const myEnum: Role = Role.AUTHOR
const myFunc: (n: number, m: number) => number = function (a, b) {
  return a * b
}

let exObj: object

exObj = {
  id: myId,
  price: myPrice,
  tags: myTags,
  obj: myObj,
  tupl: myTuple,
  enm: myEnum,
  fun: myFunc,
}

console.log(exObj)
