function Stack() {
    this.dataStore = []; 
    this.top = 0;
}

Stack.prototype.pop = function pop(){
    if(this.top > 0){
        return this.dataStore[--this.top];
    }
}

Stack.prototype.push = function push(element){
    this.dataStore[this.top++] = element;
}

Stack.prototype.peek = function peek(){
    if(this.top > 0){
        return this.dataStore[this.top - 1];
    }
}

Stack.prototype.clear = function clear(){
    this.dataStore = [];
    this.top = 0;
}

Stack.prototype.length = function length(){
    return this.top;
}

module.exports = Stack;