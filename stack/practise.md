## 4.4-1  [Source](index.js)
> 栈可以用来判断一个算术表达式中的括号是否匹配。编写一个函数，该函数接受一个算 术表达式作为参数，返回括号缺失的位置。下面是一个括号不匹配的算术表达式的例 子:2.3 + 23 / 12 + (3.14159×0.24。

```
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
```

## 4.4-2  [Source](./index.2.js)
> op1 op2 operator
使用两个栈，一个用来存储操作数，另外一个用来存储操作符，设计并实现一个 JavaScript 函 数，该函数可以将中缀表达式转换为后缀表达式，然后利用栈对该表达式求值。

```
    编写中
``` 