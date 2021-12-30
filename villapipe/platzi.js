let teclas =
{
UP:38,
DOWN:40,
LEFT:37,
RIGHT:39
};
let x =250;
let y =500;

document.addEventListener("keyup", dibujasTeclado);


let vp = document.getElementById("villaplatzi");
let papel = vp.getContext("2d");

let fondo = {
  url:"tile.png",
  cargaOK:false
};

let vaca = {
  url:"vaca.png",
  cargaOK:false
};

let pollo = {
  url:"pollo.png",
  cargaOK:false
};

let cerdo = {
  url:"cerdo.png",
  cargaOK:false
};

let cantidad = aleatorio(5,20);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load",cargarCerdo);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load",cargarPollo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load",cargarVaca);

function cargarFondo()
{
fondo.cargaOK=true;
dibujar();
}

function cargarCerdo()
{
cerdo.cargaOK=true;
dibujar();
}
function cargarVaca()
{
vaca.cargaOK=true;
dibujar();
}
function cargarPollo()
{
pollo.cargaOK=true;
dibujar();
}


function dibujar()
{
  if(fondo.cargaOK)
{
papel.drawImage(fondo.imagen, 0,0);
}
if(cerdo.cargaOK)
{
  for (let v=0; v < cantidad; v++)
   {
let x = aleatorio (0,7);
let y = aleatorio (0,7);
let x = x*60
let y = y*60
papel.drawImage(cerdo.objeto, x,y);
}
}
if(vaca.cargaOK)
{
  for (let v=0; v < cantidad; v++)
   {
let x = aleatorio (0,5);
let y = aleatorio (0,5);
let x = x*60
let y = y*60
papel.drawImage(vaca.objeto, x,y);
}
}
if(pollo.cargaOK)
{
  for (let v=0; v < cantidad; v++)
   {
let x = aleatorio (0,7);
let y = aleatorio (0,7);
let x = x*60
let y = y*60
papel.drawImage(pollo.objeto, x,y);
}
}
}
paradibujar(pollo,250,250,250,250,papel)

function paradibujar(pollo,xpunto,ypunto,xlinea,ylinea,lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = pollo;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xpunto,ypunto);
  lienzo.lineTo(xlinea,ylinea);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujasTeclado(evento)
{
  let colorcito = "pollo"
  let movimiento=10;
switch (evento.keyCode) {
  case teclas.UP:
  paradibujar(colorcito,x,y,x,y-movimiento,papel);
  y=y-movimiento;
  break;
  case teclas.DOWN:
  paradibujar(colorcito,x,y,x,y+movimiento,papel);
  y=y+movimiento;
  break;
  case teclas.LEFT:
  paradibujar(colorcito,x,y,x- movimiento,y,papel);
  x=x-movimiento;
    break;
  case teclas.RIGHT:
  paradibujar(colorcito,x,y,x+ movimiento,y,papel);
  x=x+movimiento;
    break;
}
}
function aleatorio (min,maxi)
{
let resultado;
resultado=Math.floor(Math.random()*(maxi-min+1))+min;
return resultado;
}
