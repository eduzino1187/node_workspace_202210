/*
Node.js 는 자바스크립트이다. 
하지만, 기존에 HTML 문서를 제어하기 위한
js 가 아닌, js기술로 서버를 구축하기 위한
기술에 특화된  js 이다...
따라서 우리가 그동안 배웠던 js에서 DOM
이 빠진 대신, 서버 구축과 관련된  api 및
모듈이 추가되어 있다...
*/
// node.js  설치와 함께 포함되어 있는
// 모듈을 가리켜 내장모듈이라 한다 
// 모듈이란 그냥 .js 파일이다.
let http = require("http");  //http 내장모듈 가져오기

//클라이언트가 전송한 쿼리(질의) 문자열을 즉 파라미터
//를 분석해주는 모듈
let qs = require("querystring");
let mysql  = require("mysql");

//1)클라이언트가 서버에게 접속하면서 부탁하는 행위
//요청(request )
//2)클라이언트의 요청에 서버가 대답하는 행위
//응답(response)
let server=http.createServer(function(request, response){
    //클라이언트가 전송한 데이터의 정보는 요청객체가
    //알고 있으므로, request 객체를 이용하여 파라미터를
    
    //클라이언트가 전송한 데이터가 도달하면 작동되는 메서드
    request.on("data", function(data){
        //클라이언트가 전송한 데이터가  data 변수에 들어있슴
        let param=data.toString();

        //매개변수로 지정된 문자열을 분석
        let result = qs.parse(param);
        console.log("data is ", result);        

        // 파싱한결과  json  객체가 반환되므로,  
        //이 시점부터는 json 점찍고 객체를 접근할수있다
        console.log("id is ", result.id);
        console.log("pass is ", result.pass);
        console.log("name is ", result.name);

        insert(result);//전달~~~
    });
    
    // <%@ page contentType="text/html;charset=utf-8"%>동일
    response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    response.end("나의 최초의  node.js  응답정보"); //out.print() 동일




}); //서버 객체 생성 

//mysql insert 
function insert(json){
    console.log("insert 전달된 json is ", json);

    //mysql 접속 정보 
    let constr={
        "host" :"localhost", 
        "user":"root",
        "password":"1234",
        "database":"javase"
    };

    //접속 객체 받기
    let con=mysql.createConnection(constr);//접속정보대입
    con.connect(); //접속시도!!!
    
    let sql="insert into member2(id,pass,name)";
    sql+=" values(?,?,?)";

    con.query(sql, [json.id, json.pass,json.name], function(err, result){
        if(err){
            console.log("실패");
        }else{
            console.log("성공");
        }
        con.end();
    });
}

//서버 가동 
server.listen(7777, function(){
    console.log("Server is running at 7777 port...");
});



