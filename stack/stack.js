function Stack() {
    this._dataStore = []; 
    this.top = 0;
}

Stack.prototype.pop = function pop(){
    return this._dataStore[--this.top];
}

Stack.prototype.push = function push(element){
    this._dataStore[this.top++] = element;
}

Stack.prototype.peek = function peek(){
    return this._dataStore[this.top - 1];
}

Stack.prototype.clear = function clear(){
    this._dataStore = [];
    this.top = 0;
}

Stack.prototype.length = function length(){
    return this.top;
}

Stack.prototype.isEmpty = function(){
    return this.top === 0;
}

module.exports = Stack;