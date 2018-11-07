let PQ = require("./PriorityQueue");

module.exports = function start(){
    let quene = new PQ();
    quene.enqueue("Hua",2);
    quene.enqueue("Fang",3);
    quene.enqueue("Xiang",4);
    quene.enqueue("Ming",1);
    quene.enqueue("Feng",5);
    while(quene.count() > 0){
        console.log(quene.dequeue());
    }
}