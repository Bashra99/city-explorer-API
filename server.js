require('dotenv').config();
const express = require("express");
const cors = require("cors");
const server = express();
const weatherData = require('./assets/weather.json');

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
// server.get('/getWeatherCity',(req,res) => {
//     let weatherCityName = weatherData.map((item) => {
//         return item.city_name.toUpperCase();
//     })
//     res.send(weatherCityName);


// http://localhost:3000/getWetherData
server.get('/getWetherData',(req,res) => {
    console.log(req.query.name);
    //
    let result = weatherData.map((item) => {
        return item ;
    })
    res.send(result);
})
// http://localhost:3000/getWetherDatas?name=weatherCityName
server.get('/getWetherDatas',(req,res) => {
    console.log(req.query.name);
    //
//     let result = weatherData.map((item) => {
//         return [item.city_name, item.lon, item.lat] ;
//     })
//     res.send(result);
// })
    
   
    const result = weatherData.find(item=>{
         if(item.city_name == req.query.name)
         {
             return item;
         }
        //  else 
        //  {return true};
     })
     res.send(result);
})
// let weatherCityName = weatherData.filter((item) => {
    //     return item.city_name === req.query.name;
    // let result = weatherData.map((item) => {
    //     return item.data  ;
    // })
    // res.send(weatherCityName);
    // console.log(req.query.name);
   

server.get("*",(req,res)=>{
    res.send("eror 404");
})  
server.listen(PORT, () => {
    console.log(`hello ,iam listing on ${PORT}`)
})
