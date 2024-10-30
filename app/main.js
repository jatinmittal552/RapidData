const net = require("net");
const { connected } = require("process");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage
const server = net.createServer((connection) => {
    
    connection.addListener('data',(data)=>{
        const request = data.toString();
        if(request=="*1\r\n$4\r\nping\r\n"){
            connection.write('+PONG\r\n');
            connection.end();
        }
    })
});
server.listen(6379, "127.0.0.1");
