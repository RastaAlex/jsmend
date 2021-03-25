'use strict';

const {join} = require('path');
const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 4030;
const putout = require('putout');
const dword = require('dword');

app.use(express.static(join(__dirname, '..')));
app.use(dword());


// app.get('/transform.html', (req, res) => {
//     res.send('hello');
//     console.log('hello');
// });

http.listen(port, () => {
    console.log('server listen on port 4030');
});

