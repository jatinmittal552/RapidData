const net = require("net");
const { connected } = require("process");

console.log("Logs from your program will appear here!");

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
