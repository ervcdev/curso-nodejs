// libreria para el manejo de imagenes
const sharp = require("sharp");

sharp('original.png')
    .resize(200)
    .grayscale()
    .toFile('rezidse.png');