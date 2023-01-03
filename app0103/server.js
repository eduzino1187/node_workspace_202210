/*노드 js가 지원하는 기본 모듈만으로도 웹서버를 제작
할수는 있으나, 완제품인 Tomcat, IIS, Apache와 비교
하면 너무 부족한 면이 많다...
but...전세계 개발자들이 계속 강력한 모듈을 공유하고
있으므로, 추후 express framework 을 이용하면 훌륭한
서버 구축이 가능하다..
*/
let http = require("http");

let server=http.createServer(function(request, response){

});

server.listen(9999, function(){
    console.log("Server is running at 9999 port...");
});










