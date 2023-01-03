/*
node.js 의 FileSystem 모듈을 이용하면, 파일을 읽을
수 있을 뿐만 아니라, 파일에 데이터를 쓰는것도 가능하다
*/
let fs = require("fs");

fs.writeFile("./res/memo.txt", "this is my data", function(){
    console.log("쓰기 완료");
});