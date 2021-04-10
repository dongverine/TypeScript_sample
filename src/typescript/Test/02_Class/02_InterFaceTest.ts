interface InsertMem{
    a:String,
    b:Number
}

var insert = function(mem:InsertMem){
    console.log(mem.a+","+mem.b);
}
var newMem:InsertMem = {
    a:"b"
    ,b:2//b를 생성하지 않으면 에러가 발생
}
newMem.a = "C";
insert(newMem);
console.log("aaaa");