let imagenes = [];
imagenes ["cauchin"] ="vaca.png";
imagenes ["pokacho"] ="pollo.png";
imagenes ["tocinosaurio"] ="cerdo.png";

class Pakiman
{
 constructor (n,v,a)
{
  this.imagen = new Image();
  this.nombre = n;
  this.vida = v;
  this.ataque = a;

this.imagen.src = imagenes[this.nombre]
}
 hablar()
 {
alert (this.nombre);
 }
 mostrar ()
 {
   document.body.appendChild(this.imagen);
   document.write("<br/><strong>" + this.nombre + "</strong><br/>");
   document.write("vida:" + this.vida + "<br />");
   document.write("Ataque:" + this.ataque + "<hr />");
 }
}
let cauchin = new Pakiman ("cauchin", 100 , 30);
let pokacho = new Pakiman ("pokacho", 80 , 50);
let tocinosaurio = new Pakiman ("tocinosaurio", 120 , 40);

pokacho.mostrar();
cauchin.mostrar();
tocinosaurio.mostrar();
