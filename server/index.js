const express = require("express");
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

var tictactoeRouter = require('./routes/tictactoe');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/test", (req, res)=>{
    res.json({message:"Hello World"});
});

app.use('/', tictactoeRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});