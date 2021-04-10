interface InsertMem{
    a:String,
    b:Number
}

var insert = function(mem:InsertMem){
    console.log(mem.a+","+mem.b);
}
var newMem:InsertMem;
var a:String;
newMem.a = "b";
insert(newMem);
console.log("aaaa");