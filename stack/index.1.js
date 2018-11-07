let Stack = require("./stack");

function m4(str){
    let m4Stack  = new Stack();
    let strs = str.split("");
    for(let index in strs){
        let stackItem = strs[index];
        if(stackItem === "("){
            m4Stack.push({
                el:stackItem,
                index:index
            });
        }else if(stackItem === ")"){
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

module.exports = m4;