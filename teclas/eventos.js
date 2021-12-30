let teclas =
{
UP:38,
DOWN:40,
LEFT:37,
RIGHT:39
};

document.addEventListener("keyup", dibujasTeclado);
let cuadrito = document.getElementById("area_de_dibujo");
let papel = cuadrito.getContext("2d");
let x =150;
let y =150;

paradibujar("red",149,149,151,151,papel)

function paradibujar(color,xpunto,ypunto,xlinea,ylinea,lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xpunto,ypunto);
  lienzo.lineTo(xlinea,ylinea);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujasTeclado(evento)
{
  let colorcito ="red"
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
