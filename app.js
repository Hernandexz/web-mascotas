const express = require('express');
const mongoose = require('mongoose');
const app = express()
const port = 3000

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/prueba', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));


//Rutas web
app.use('/', require('./router/route'));


app.use('/mascotas', require('./router/mascosta'));

app.use((req, res, next) => {
    res.status(404).render("404")
});

app.listen(port, () => console.log(`Haciendo solicitud al puerto ${port}!`))