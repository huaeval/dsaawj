function PriorityQueue(){
    this._dataStore = [];
}

PriorityQueue.prototype.enqueue = function enqueue(element,priority){
    this._dataStore.push({
        element:element,
        priority:priority
    });
}

PriorityQueue.prototype.dequeue = function dequeue(){
    let priority = this._dataStore[0].priority,index = 0;
    for(let i = 1;i < this._dataStore.length;i++){
        let item = this._dataStore[i];
        if(item.priority < priority){
            index = i;
        }
    }
    return this._dataStore.splice(index,1)[0].element;
}

PriorityQueue.prototype.front = function front(){
    return this._dataStore[0].element;
}

PriorityQueue.prototype.back = function back(){
    let len = this._dataStore.length - 1;
    return this._dataStore[len].element;
}

PriorityQueue.prototype.isEmpty = function isEmpty(){
    return this._dataStore.length === 0;
}

PriorityQueue.prototype.toString = function toString(){
    let strBuf = "";
    for(let item of this._dataStore){
        strBuf += String(item.element) + '\n';
    }
    console.log(strBuf)
}

PriorityQueue.prototype.count = function count(){
    return this._dataStore.length;
}

module.exports = PriorityQueue;