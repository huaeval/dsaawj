let Stack = require("./stack");
function m42(str){
    let numberStack = new Stack();
    let operatorStack = new Stack();
    let strs = str.split("");
    for(let stackItem of strs){
        let item = stackItem.trim();
        if(item === ""){
            continue;
        }else if(
            item === "+" ||
            item === "-"
        ){
            while(
                !operatorStack.isEmpty()      &&
                operatorStack.peek() === "+"  ||
                operatorStack.peek() === "-"  ||
                operatorStack.peek() === "*"  ||
                operatorStack.peek() === "/"
            ){
                operator(numberStack,operatorStack);
            }
            operatorStack.push(item);
        }else if(
            item === "*" ||
            item === "/"
        ){
            while(
                !operatorStack.isEmpty()     &&
                operatorStack.peek() === "*" ||
                operatorStack.peek() === "/" 
            ){
                operator(numberStack,operatorStack);
            }
            operatorStack.push(item);
        }else if(
            item === "(" 
        ){
            operatorStack.push(item);
        }else if(
            item === ")" 
        ){
            while(operatorStack.peek()!=="(")
            {	
                operator(numberStack,operatorStack);
            }
		    operatorStack.push();
        }else{
            numberStack.push(Number(item));
        }
    }
    while(!operatorStack.isEmpty()){
        operator(numberStack,operatorStack);
    }
    console.log(numberStack,operatorStack)
    return numberStack.pop();
}

function operator(numberStack,operatorStack){
    let op1,op2,operator;
    operator = operatorStack.pop();
    op2 = numberStack.pop();
    op1 = numberStack.pop();
    switch (operator) {
        case "+":
            numberStack.push(op1 + op2);
        break;
        case "-":
            numberStack.push(op1 - op2);
        break;
        case "*":
            numberStack.push(op1 * op2);
        break;
        case "/":
            numberStack.push(op1 / op2);
        break;
        default:
            break;
    }
}

module.exports = m42;