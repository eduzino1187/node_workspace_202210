/*노드 js가 지원하는 기본 모듈만으로도 웹서버를 제작
할수는 있으나, 완제품인 Tomcat, IIS, Apache와 비교
하면 너무 부족한 면이 많다...
but...전세계 개발자들이 계속 강력한 모듈을 공유하고
있으므로, 추후 express framework 을 이용하면 훌륭한
서버 구축이 가능하다..
*/
let http = require("http");

//파일과 관련된 스트림처리를 담당하는 FileSystem모듈
//내장되어 있다. (js로도 파일을 대상으로 읽거나, 쓰는것이 
//가능하다. 전통적인 js는 이러한 기술이 존재하지 않았음
//왜? html 제어가 목적이므로...보안상 접근 불가)
let fs = require("fs");


// 현재 http 모듈로 구현된 우리 서버는, 정적 자원에 대한 응답처리
//기능이 없는 상태이므로, 개발자인 우리가 구현을 해야 한다
//원리: 
let server=http.createServer(function(request, response){
    console.log("클라이언트가 원하는 자원은 ", request.url);
    
    if(request.url=="/res/memo.txt"){
        //메모장을 원하면    
        //클라이언트의 요청이 있을때, 파일을 접근하여 읽기
        fs.readFile("./res/memo.txt", (err, data)=>{
            //data변수에는 읽어들인 메모장 데이터가 채워져있다.
            console.log(data);
            //읽어들인 데이터를 클라이언에게 응답정보로 
            //구성하여, 전송하자!
            response.writeHead(200, {"Content-Type":"text/html"}); // page 지시영역
            response.end(data);
        });

    }else if(request.url=="/res/img5.jpg"){
        //이미지를 원하면    
        //클라이언트의 요청이 있을때, 파일을 접근하여 읽기
        fs.readFile("./res/img5.jpg", (err, data)=>{
            //data변수에는 읽어들인 메모장 데이터가 채워져있다.
            console.log(data);
            //읽어들인 데이터를 클라이언에게 응답정보로 
            //구성하여, 전송하자!
            response.writeHead(200, {"Content-Type":"image/jpg"}); // page 지시영역
            response.end(data);
        });

    }


});

server.listen(9999, function(){
    console.log("Server is running at 9999 port...");
});










