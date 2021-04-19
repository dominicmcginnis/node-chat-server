const express = require('express')
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 3000;
const io = require('socket.io')(server);
const path = require('path');

//serve public static routes
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/styles')));

//detect connection
io.on('connection', socket => {
    socket.on('chat', message => {
        io.emit('chat', message);
    });
});

//Listen 
server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
