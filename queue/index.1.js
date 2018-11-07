let Q1 = require("./queue");

module.exports = function start(){
    let dancers = ["Ming","Hua","Fang","Xiang","Feng"];
    let dancerQuene = new Q1();
    for(let item of dancers){
        dancerQuene.enqueue(item);
    }
    let timer = setInterval(()=>{
        console.log(dancerQuene.dequeue() + ' is dance');
        if(dancerQuene.count() == 0){
            clearInterval(timer);
        }
    },1000);
}