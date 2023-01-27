const express = require("express");
const path = require('path');
const bodyParser = require("body-parser")
require('dotenv').config();
const http = require('http');
const axios = require('axios');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, '../build')));
const server = http.createServer(app);

app.post('/api/weather', async function(req, res) {
    let config = {
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params: {
            q: req.body.city,
            appid: process.env.WEATHER_API,
            units: 'imperial'
        }
    }
    try {
        let response = await axios(config)
        res.json(response.data)
    } catch(error) {
        console.log("error from server for weather")
        res.json("error")
    }
})

app.post('/api/indices', async function(req, res) {
    const stockList = ["SPX", "RUT", "NDX", "VIX"] 
    const prices = {}
    for (const TICKER of stockList) {
        let config = {
            method: "GET",
            url: "https://api.twelvedata.com/price",
            params: {
                symbol: TICKER,
                apikey: process.env.TWELVE_API
            }
        }
        try {
            let response = await axios(config)
            // console.log(response.data)
            prices[TICKER] = parseFloat(response.data.price).toFixed(2)
        } catch (error) {
            console.log("error from server for stocks")
            prices[TICKER] = "ERROR"
        }
    } 
    res.json(prices)
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});