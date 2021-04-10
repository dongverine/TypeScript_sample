interface InsertMem{
    a:String,
    b:Number
    c?:String
}

var insert = function(mem:InsertMem){
    console.log(mem.a+","+mem.b);
}
var newMem:InsertMem = {
    a:"b"
    ,b:2
    //c : "c"//?로 선언한 선택적 프로퍼티는 생성하지 않아도 에러가 발생하지 않음
}
newMem.a = "b";
insert(newMem);
console.log("aaaa");