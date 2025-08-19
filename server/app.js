// app.js
import express from "express";
const app = express();
const PORT =5000;
 app.get("/" ,(req, res) => {
res.send("welcome to Express Es6 Setup");});
app.get("/get",(req, res) => {
    res.json({ message: "This is a GET route example" })
    });
    app.listen(PORT, () => {
        console.log('server running at http://localhost:${PORT}');
    });
