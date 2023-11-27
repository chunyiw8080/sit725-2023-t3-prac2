const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', function (req, res) {
    if (isNaN(req.body.num1) || isNaN(req.body.num2)){
        res.send("Invalid Input")
    }else{
        const num1 = parseFloat(req.body.num1);
        const num2 = parseFloat(req.body.num2);
        const sum = num1 + num2;
        res.send(`${num1} + ${num2} = ${sum}`);
    }

});

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});
