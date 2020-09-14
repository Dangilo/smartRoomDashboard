let mqtt = require('mqtt');
let client = mqtt.connect('mqtt://192.168.178.38/')

export default (req, res) => {
    console.log(res);
    client.on('connect', function () {
        client.subscribe('/home/data', function (err) {
            if (!err) {
                client.publish('/home/data', 'hello')
            }
        })
    })

    client.on('message', function (topic, message) {
        console.log(message.toString());
        client.end();
    })
    res.statusCode = 200
    res.end();
}