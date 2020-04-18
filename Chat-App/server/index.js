const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const PORT = process.env.PORT || 5000
const router = require('./router');
const { addUsers, removeUser, getUser, getUsersInRoom } = require('./users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(router);

io.on('connection', (socket) => {
    //console.log("We have a new connection!!");
    socket.on('Join', ({name,room},callback) => {
        const { error, user } = addUsers({ id:socket.id, name, room });
        if (error) return callback(error);

        socket.emit('message', { user: "admin", text: '' + user.name + ', welcome to the room : ' + user.room });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: '' + user.name + " has joined!" });
        socket.join(user.room);
        callback();
    })

    socket.on('sendMessage', ({ message, callback}) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('message', { user: user.name, message: message });
        callback();
    });

    socket.on('disconnect', () => {
        console.log('User has left!');
    })
});

server.listen(PORT, () => console.log('Server started at port ' + PORT));