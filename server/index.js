import { SerialPort } from 'serialport';
import express from 'express';
import path from 'path';
import { exit } from 'process';

const portName = "COM3";
const baudRate = 9600;

var arduinoSerialPort;
try{
    arduinoSerialPort = new SerialPort({
        path: portName,
        baudRate,
        lock: false
    });
    arduinoSerialPort.on('open', () => console.log("Arduino connection is established"));
    arduinoSerialPort.on('data', (data) => console.log(data.toString()));
}catch(err){
    console.log("EN: An error occured.\nPL: Chuj wi co sie stalo", err);
    exit();
}

const app = express();

const __dirname = path.resolve();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view.html');
});

app.post('/arduino', (req, res) => {
    const data = req.body.number?.toString();
    console.log(data);
    console.log('writting data to arduino');
    arduinoSerialPort.write(data);
    res.redirect('/');
});

app.listen(5000, () => console.log("Apka działa"));