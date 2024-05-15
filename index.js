const express = require("express");
const ejs = require("ejs")
const app = express();
const path = require("path")
const multer = require("multer");
const { error } = require("console");

const PORT = 8080;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "./uploads")
    }, filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({ storage })

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.json());

app.get("/", (req, res) => {
    return res.render("homepage")
})


app.post("/upload", upload.single("profieImage"), (req, res) => {
    console.log(req.body)
    console.log(req.file.path)//can store in database and use it
    return res.redirect("/");

})

app.listen(PORT, () => console.log("server started on port: " + PORT))