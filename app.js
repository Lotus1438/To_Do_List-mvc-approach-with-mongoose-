const express = require('express');
const app = express();
const port = 3000
const toDosRouter = require("./routes/toDosRoutes");


const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "ejs");

//import mongo connection 
const connectToMongo = require('./dbconnection');
connectToMongo();


app.use("/todos", toDosRouter);

app.listen(port, () => console.log(`Server listening at port ${port}`));