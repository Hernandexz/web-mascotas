const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Mascotaschema = new Schema(
    {
        nombre: String,
        descripcion: String
    },
    
)

const Mascota = mongoose.model('Mascota', Mascotaschema);

module.exports = Mascota;