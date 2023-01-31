const json_datos_personales ='{"id": 1, "Nombre": "Johann Sebastian", "Apellido": "Mastropiero", "Edad": "58", "Teléfono": "+549-343-455-5555", "Email": "JSebastian@Mastropiero.com.ar", "Dirección": "Les Luthiers 1234, Paraná, Entre Ríos, Argentina", "Nacionalidad": "(Desconocida)"}';

const datos = JSON.parse(json_datos_personales);

function mostrarInformacionExtra(id_informacionExtra, id_boton, cantidad){
  for (i=1; i<=cantidad; i++){
    document.getElementById(id_informacionExtra.toString()+i).style.display='block';
  }
  document.getElementById(id_boton.toString()).style.display='none';
}