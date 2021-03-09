const express = require("express");
const app = express();
const port = 3000;

app.set("view engine","ejs");


app.get("/", (req, res) => {
    //res.send('Hello World')

    let message = "PENDIETE DE CONFIRMAR";
    let currentData = new Date();
    let targetDayOfTheMonth = 25;
    let targetMonth = 11;
    let currentDayOfTheMonth = currentData.getDate();
    let currentMonth = currentData.getMonth();

    if (currentMonth === targetMonth && currentDayOfTheMonth === targetDayOfTheMonth) {
        message ="Si";
    }
    else{
        message="No";
    }
    res.render("pages/index", {
        message: message
    })
});


app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});