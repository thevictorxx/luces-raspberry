const express = require('express');
const rpio = require('rpio');
const app = express();
const port = 5000;
const ledPin = 7;
rpio.open(ledPin, rpio.OUTPUT, rpio.LOW);
app.get('/', (req,res)=>{
    res.write(`<a href="/off">OFF</a><br><a href="/on">ON</a>`);
    res.send();
});

app.get('/on', (req,res)=>{
    res.write(`<a href="/off">OFF</a>`);

    rpio.write(ledPin, rpio.HIGH);

    res.send();
});

app.get('/off', (req,res)=>{
    res.write(`<a href="/on">ON</a>`);

    rpio.write(ledPin, rpio.LOW);

    res.send();
});

app.listen(port, () =>{
    console.log('Corriendo');
});