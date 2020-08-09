const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(cors());
const fileRoutes = require('./routes/get');
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(express.static(path.join(__dirname,'./client/build')));

app.use(fileRoutes);


// app.set('view engine', 'ejs');
// app.set('views', 'views');
// app.use('/');



app.listen(3005);
