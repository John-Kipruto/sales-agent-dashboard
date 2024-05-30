// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db/db.json");


server.listen(3000, () => {
 console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;