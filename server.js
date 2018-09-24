
const express = require("express");
const cors = require("cors");
const  bodyParser = require('body-parser');

const app = express();

const router = express.Router();
const fetch = require('node-fetch');

app.use(cors());
app.use(bodyParser.json());

router.route('/weather/:lat/:lon/:unitsType').get((req, res) => {
    const lat = req.params.lat;
    const lon = req.params.lon;
    const unitsType = req.params.unitsType;
    const APPKEY = 'c7b5b62a01a84a2d274930a57e180950';
    const weatherUrl='http://api.openweathermap.org/data/2.5/weather?lat=';
    
    fetch(weatherUrl+ lat +'&lon=' + lon +'&appid='+APPKEY+'&units='+ unitsType)
    .then(res => res.json())
    .then(json =>{
        //console.log(json);
        res.send(json);
    } );
    
});

app.use('/', router);
app.listen(4000, () => console.log('Express server running on port 4000'));