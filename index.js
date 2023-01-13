const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000;

app.use(express.json());
app.use(cors())

app.get('/getlist', function (req, res) {
  res.send({Sensor_suhu: [{suhu: 35, waktu: "2023-01-13 20:37"}, {suhu: 36, waktu: "2023-01-13 20:39"}, {suhu: 38, waktu: "2023-01-13 20:45"}]});
});

app.listen(port, ()=>{
  console.log("App running on http://localhost:3000/")
});