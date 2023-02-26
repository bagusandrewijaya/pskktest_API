const http = require('http');
const app = require('./index')
const server = http.createServer(app);

server.listen(process.env.PORT || 3191, () => {
    console.log(`server berjalan`);
});