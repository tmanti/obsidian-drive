const express = require("express");
const cors = require('cors');
const ws = require('ws');
const { WebSocketServer } = require("ws");
require("dotenv").config();

const app = express();

app.use(
    express.urlencoded({
      extended: false,
    })
);

app.use((req, res, next) => {
    console.log(req.method + " " + req.path);
    next();
});

app.use(express.json());
app.use(cors())

// setup websocket server for db slaves
const wss = new WebSocketServer({port: 8080});
console.log("Websocket server started on port 8080")

wss.on('connection', (ws)=>{
    
});

//connect to db