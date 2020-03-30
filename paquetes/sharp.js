const sharp = require('sharp')

sharp('img.jpg')
.resize(480)
.grayscale()
.toFile('resized.jpg');