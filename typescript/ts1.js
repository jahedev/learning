var myId = 'abc123';
var myPrice = 3.142;
var myTags = ['hello', 'world'];
var myObj = {
    title: 'SOmething',
    desc: 'another'
};
var myTuple = [1, 2, '3'];
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var myEnum = Role.AUTHOR;
var exObj;
exObj = {
    id: myId,
    price: myPrice,
    tags: myTags,
    obj: myObj,
    tupl: myTuple,
    enm: myEnum
};
console.log(exObj);
