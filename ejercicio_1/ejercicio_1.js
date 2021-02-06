const diametro = Number(window.prompt('Ingrese el diámetro de la rueda'));
const grosor = Number(window.prompt('Ingrese el grosor de la rueda'));

if (diametro > 1.4) {
  console.log('La rueda es para un vehículo grande');
} else if (diametro > 0.8) {
  console.log('La rueda es para un vehículo mediano');
} else {
  console.log('La rueda es para un vehículo pequeño');
}

if ((diametro > 1.4 && grosor < 0.4) || (diametro > 0.8 && grosor < 0.25) ) {
  console.log('El grosor para esta rueda es inferior al recomendado');
}
