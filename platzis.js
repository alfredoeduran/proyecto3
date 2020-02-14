var vp = document.getElementById("villaplatzi"); //asi se traen elementos de html
var papel = vp.getContext("2d"); //Para contextualizar el tipo de canvas
document.addEventListener("keydown", dibujarporqui);

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

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
}



//variables creadas para introducir la cantidad de iteraciones

var cantidadp = aleatorio(2,15);
var cantidad = aleatorio(1,10);
var cantidadc = aleatorio(1,10);

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

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

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
    if(vaca.cargaOK)  //carga de vacas
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
    if(pollo.cargaOK)  //carga de pollos
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
    if(cerdo.cargaOK)
    {

      papel.drawImage(cerdo.imagen, xcerdo, ycerdo); 
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

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var ycerdo = 210;
var xcerdo = 210;

function dibujarporqui(evento)
{
  var colorcito = "blue";
  var movimiento = 5;
  console.log(evento);

  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarporqui(colorcito, xcerdo, ycerdo, xcerdo, ycerdo - movimiento, papel);
      ycerdo = ycerdo - movimiento;
    break;

    case teclas.DOWN:
      dibujarporqui(colorcito, xcerdo, ycerdo, xcerdo, ycerdo + movimiento, papel);
      ycerdo = ycerdo + movimiento;
    break;

    case teclas.LEFT:
      dibujarporqui(colorcito, xcerdo, ycerdo, xcerdo - movimiento, ycerdo, papel);
      xcerdo = xcerdo - movimiento;
    break;

    case teclas.RIGHT:
      dibujarporqui(colorcito, xcerdo, ycerdo, xcerdo + movimiento, ycerdo, papel);
      xcerdo = xcerdo + movimiento;
    break;
    
    
  }
}