const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage
const server = net.createServer((connection) => {
  // Handle connection
  //   return "+PONG\r\n";
  console.log('client connected');
//   connection.on('end', () => {
//     console.log('client disconnected');
//   });
  connection.write('+PONG\r\n');
//   connection.pipe(connection);
// console.log(connection);
});

// server.on('data', (data) => {
//     console.log(data.toString());
//     client.end();
//   });

server.listen(6379, "127.0.0.1");
