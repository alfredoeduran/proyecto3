var vp = document.getElementById("villaplatzi"); //asi se traen elementos de html
var papel = vp.getContext("2d"); //Para contextualizar el tipo de canvas


//json para carga de imagenes
var fondo = {
    url: "tile.png",
    cargaOK: false
}
var vaca = {
    url: "vaca.png",
    cargaOK: false
};
var pollo = {
    url: "pollo.png",
    cargaOK: false
}

//variables creadas para introducir la cantidad de iteraciones

var cantidadp = aleatorio(2,15);
var cantidad = aleatorio(1,10);

//Funcion para montar en la instancia de carga las imagenes

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

//funcion para introducir las imagenes en el canvas

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}
function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}


//se plasman las coordenadas para introducir los animales
function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0,0);    
    }
    if(vaca.cargaOK)
    {      
        
        console.log(cantidad);
        for(var v=0; v<10; v++) 
        {
        var x = aleatorio(0, 10);
        var y = aleatorio(0, 10);
        var x = x * 60;
        var y = y * 60;
        papel.drawImage(vaca.imagen, x , y);    
       
        }
    }
    if(pollo.cargaOK)
    {      
        
        console.log(cantidadp);
        for(var p=0; p<10; p++) 
        {
        var x = aleatorio(0, 10);
        var y = aleatorio(0, 10);
        var x = x * 60;
        var y = y * 60;
        papel.drawImage(pollo.imagen, x , y);    
       
        }
    }
}

//funcion para plasmar numeros aleatorios
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}


/*var mapa = "tile.png";

var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", dibujar);

*/