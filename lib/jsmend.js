'Use strict';

const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 4030;
const putout = require('putout');


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/..'));

io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('keyup', (evt) => {
        socket.send(evt);
    })
    socket.on('disconnect', () => {
        console.log('user disconnected');
    })
});

http.listen(port, () => {
    console.log('server listen on port 4030');
});
