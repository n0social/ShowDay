import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

app.get("/", (req,res) => {
    const today = new Date(); //Input a date here to adjust the different values shown for example ("March 14, 2024 11:13:00")
    const day = today.getDay();

    //console.log(day);
    let type = "a weekday";
    let advice = "it's time to work hard";

    if (day === 0 || day === 6) {
        type = "the weekend";
        advice = "it's time to have some fun.";
    }

    res.render("index.ejs", {
        dayType: type, 
        advice: advice,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});