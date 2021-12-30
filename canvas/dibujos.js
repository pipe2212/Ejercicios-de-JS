let d = document.getElementById("dibujo");
let tl = document.getElementById("text_lineas");
let boton = document.getElementById("botoncito");
let lienzo = d.getContext ("2d");
let ancho = d.width;
boton.addEventListener("click",dibujitoPorClick);


function paradibujar(color,xpunto,ypunto,xlinea,ylinea)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xpunto,ypunto);
  lienzo.lineTo(xlinea,ylinea);
  lienzo.stroke();
  lienzo.closePath();
}
function dibujitoPorClick()
{
let x = parseInt(tl.value);
let l = 0;
let linea =x;
let xi,yi,xf,yf;
let colors = "#2f4746";
let espacio = ancho/linea

for (l=0; l < linea;l++)
{
yi=espacio*l;
xi=espacio*(l+1);
xf=espacio*(l+1);
yf=espacio*l;
paradibujar (colors,250,yi,xf,0);
paradibujar (colors,xi,250,500,yf);
}
}
