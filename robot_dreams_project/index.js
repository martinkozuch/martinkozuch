require('dotenv').config();
const express = require('express');
const app = express();

process.env.HOST 

app.get('/',function (req, res) {
    res.send('Hello World')
})



app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Server listening on http://${process.env.HOST}`)
});



