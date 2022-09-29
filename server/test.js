import {SerialPort} from 'serialport'

const path = "COM3";
const baudRate = 9600;

const port = new SerialPort({
    path,
    baudRate,
    lock: false
});

port.on('open', () => {
    console.log('data');
})
port.on('data', (data) => {console.log(data.toString())});