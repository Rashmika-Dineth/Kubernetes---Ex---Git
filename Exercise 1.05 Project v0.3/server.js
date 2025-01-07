const http = require("http");
// Define the port
const PORT = process.env.PORT || 3000;

// Create the server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(<H1>"Hello, world!\n"</H1>);
});

// Start the server and log the message
server.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
