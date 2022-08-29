require('dotenv').config();
const express = require("express");
const cors = require("cors");
const server = express();
const weatherData = require('./assets/data.json')

server.use(cors());

const PORT = process.env.PORT ;

// http://localhost:3000/
server.get('/',(req,res)=>{
    res.send("Hi from the home route");
})

//http://localhost:3000/test

server.get('/test',(req,res) => {
    console.log("my name is bashr")
    res.send('hi from test route');
   
})
//http://localhost:3000/getWeatherCity
server.get('/getWeatherCity',(req,res) => {
    let weatherCityName = weatherData.map((item) => {
        return item.city_name;
    })
    res.send(weatherCityName);

})
// http://localhost:3000/getWetherData?name=wetherCityName
server.get('/getWetherData',(req,res) => {
    console.log(req.query.name);
    const result = wetherData.find(item=>{
        if(item.city_name==req.query.name)
        {
            return item;
        }
    })
    res.send(result);
} )

server.get("*",(req,res)=>{
    res.send("page not found");
})  
server.listen(PORT, () => {
    console.log(`hello ,iam listing on ${PORT}`)
})


