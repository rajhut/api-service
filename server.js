const express = require("express");
const cron = require("node-cron");
const request = require("request");

const app = express();

cron.schedule("*/5 * * * * *", () => {
    request("http://localhost:6001/hour", (err, res, body) => {
        if(err) { 
            console.error(err);
            return;
        }
        console.log(body);
    })
});

app.listen(6002, () => {
    console.log("Servicio iniciado => http://localhost:6002");
});