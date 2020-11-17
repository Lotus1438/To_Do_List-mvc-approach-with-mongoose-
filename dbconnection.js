const dbUri = "mongodb://localhost:27017/To-Do-List";
const mongoose = require('mongoose');

function connectToMongo() {
    mongoose.connect(dbUri, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(function() {
            console.log("Connected to Database!");
        })
        .catch(function(error) {
            console.log("ERROR:", error);
        })
}

//exports the function, so that we can use it in another file
module.exports = connectToMongo;