import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.render("index.ejs", data);
})



app.listen(port, () => {
    console.log(`Server was started on port ${port}`);
})