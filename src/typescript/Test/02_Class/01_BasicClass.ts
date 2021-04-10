class BasicClass{
    public strMem:String;
    private numMem:Number;
    private bolMem:Boolean;
    private symMem:Symbol;
    private objMem:Object;
    constructor(strMem:String, numMem:Number){
        this.strMem = strMem;
        this.numMem = numMem;
    }
    // public static main(): number{
    //     var bs = new BasicClass("a",1);
    //     bs.strMem = "b";
    //     bs.numMem = 2;

    //     return 0;
    // }
}
var bs = new BasicClass("a",1);
bs.strMem = "b";
// bs.numMem = 2;//Private Error


