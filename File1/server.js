const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./api/routes');
routes(app);
app.listen(PORT,(req,res)=>{
    console.log('Server started on '+PORT);
})