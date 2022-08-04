const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascotas');

router.get('/', async (req, res) => {
    
try {
    const arrayMascotasdb = await Mascota.find();
    console.log(arrayMascotasdb);

    res.render('Mascotas', {
        arrayMascotas: arrayMascotasdb
    });
    
} catch (error) {
    console.log(error);
}

    
});

module.exports = router;