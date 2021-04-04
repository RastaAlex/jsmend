'use strict';

const {join} = require('path');
const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 4030;
const putout = require('putout');
const parseOptions = require('putout/parse-options');
const tryCatch = require('try-catch');
const pullout = require('pullout');
const dword = require('dword');
const parseError = require('putout/parse-error');

app.use(express.static(join(__dirname, '..')));
app.use(dword());

app.post('/transform', async (req, res) => {
    const data = await pullout(req);
    const [error, result] = tryCatch(putout, data, parseOptions());
    if (error) {
        const places = parseError(error, {
            debug: true
        });

        res.send({
            places,
            code: ''
        });
        
        return;
    }

    res.send(result);
});

http.listen(port, () => {
    console.log('server listen on port 4030');
});

