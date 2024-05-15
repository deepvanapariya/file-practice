const express = require("express");
const ejs = require("ejs")
const app = express();
const path = require("path")
const multer = require("multer")

const PORT = 8080;

const upload = multer({ dest: "uploads/" })

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))


app.use(express.json());

app.get("/", (req, res) => {
    return res.render("homepage")
})


app.post("/upload", upload.single("profieImage"), (req, res) => {
    console.log(req.body)
    console.log(req.file)
    return res.redirect("/");

})

app.listen(PORT, () => console.log("server started on port: " + PORT))