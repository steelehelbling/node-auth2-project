require("dotenv").config();

const server = require("./runfile/server");

const port = process.env.PORT || 8823;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
