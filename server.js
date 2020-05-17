const express = require("express");
const path = require("path");

const app = express();
const _PORT_ = process.env.PORT || 3011;

app.use('/assets', express.static('assets'));

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname + '/public/index.html'));
}); 

app.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
}); 

app.get("/portfolio", (req, res) =>{
    res.sendFile(path.join(__dirname + '/public/portfolio.html'));
});

app.listen(_PORT_, () =>{
    console.log("Running on port " + _PORT_);
}); 