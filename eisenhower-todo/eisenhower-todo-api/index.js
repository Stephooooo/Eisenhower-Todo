const express =require('express');
const app = express ( );
const cors = require("cors");
const pool = require ("./db");

app.use (cors ());
app.use (express.json ());

// create a todo
app.post("/")


app.listen(5000, () => console.log ('listening on port 5000..') ) 