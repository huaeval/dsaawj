let Stack = require("./stack");

(function(){
    let str = '2.3 + 23 / 12 + (3.14159×0.24';
    console.log(m4(str))

    let str1 = '2.3 + 23 / 12 + (3.14159×0.24) * 1+2)';
    console.log(m4(str1))

    let str2 = '2.3 + 23 / 12 + (3.14159×0.24) * (1+2)';
    console.log(m4(str2))
})()

function m4(str){
    let m4Stack  = new Stack();
    let strs = str.split("");
    for(let index in strs){
        let stackItem = strs[index];
        if(stackItem == "("){
            m4Stack.push({
                el:stackItem,
                index:index
            });
        }else if(stackItem == ")"){
            if(m4Stack.length() > 0){
                let litem = m4Stack.pop();
                //右括弧
                if(litem.el !== "("){
                    return index;
                }
            }else{
                //左括弧
                return index;
            }
        }
    }
    if(m4Stack.length()>0){
        let rindex = m4Stack.pop().index;
        m4Stack.clear()
        return rindex;
    }
    return -1;
}