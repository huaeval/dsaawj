let m4 = require("./index.1");
let m42 = require("./index.2");

(function(){
    let str = '2.3 + 23 / 12 + (3.14159*0.24';
    console.log(m4(str))

    let str1 = '2.3 + 23 / 12 + (3.14159*0.24) * 1+2)';
    console.log(m4(str1))

    let str2 = '2.3 + 23 / 12 + (3.14159*0.24) * (1+2)';
    console.log(m4(str2))

    let str3 = "1 + 2 * 3 * 3 - 1";
    console.log(m42(str3))

})()
