//파이썬  .py,  node  .js 
let http = require("http");//설치시 내장
let qs = require("querystring");

let server=http.createServer(function(request, response){
    
    request.on("data", function(data){
        console.log(data.toString());
        
        let json=qs.parse(data.toString());
        console.log(json.id);

    });

});

server.listen(9999, function(){
    console.log("Server start at 9999...");
});
