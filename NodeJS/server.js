const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

var uri = "mongodb://rodrigo:<passwd>.@mycluster-shard-00-00-zeyun.mongodb.net:27017,mycluster-shard-00-01-zeyun.mongodb.net:27017,mycluster-shard-00-02-zeyun.mongodb.net:27017/test?ssl=true&replicaSet=MyCluster-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true
})

requireDir('./src/models');

app.use("/api", require("./src/routes"));

app.listen(3001);
