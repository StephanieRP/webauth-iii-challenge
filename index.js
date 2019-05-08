const server = require("./api/server/server.js");

const port = 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
