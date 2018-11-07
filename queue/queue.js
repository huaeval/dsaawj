function Queue(){
    this._dataStore = [];
}

Queue.prototype.enqueue = function enqueue(element){
    this._dataStore.push(element);
}

Queue.prototype.dequeue = function dequeue(){
    return this._dataStore.shift();
}

Queue.prototype.front = function front(){
    return this._dataStore[0];
}

Queue.prototype.back = function back(){
    let len = this._dataStore.length - 1;
    return this._dataStore[len];
}

Queue.prototype.isEmpty = function isEmpty(){
    return this._dataStore.length === 0;
}

Queue.prototype.toString = function toString(){
    let strBuf = "";
    for(let item of this._dataStore){
        strBuf += String(item) + '\n';
    }
    console.log(strBuf)
}

Queue.prototype.count = function count(){
    return this._dataStore.length;
}

module.exports = Queue;