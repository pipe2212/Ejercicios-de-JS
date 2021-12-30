class Billete
{
  costructor(v,c)
  {
  this.valor=v;
  this.cantidad=c;
  }
}


function entregarDinero()
  {
  let t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(let bi of caja)
{
  if(dinero > 0)
{
div = Math.floor(dinero / bi.valor);

if(div > bi.cantidad)
{
  papeles = bi.cantidad;
}
else
 {
  papeles = div;
}
 entregado.push( new Billete(bi.valor,papeles));
 dinero= dinero-(bi.valor*papeles);
}
}
if (dinero > 0)
{
  resultadi.innerHTML = "Soy un cajero malo,he sido malo y no puedo darte esa cantidad";
}
else
{
for (let e of entregado)
{
   if(e.cantidad > 0)
   {
    rusultado.innerHTML += e.cantidad + "billetes de $"+ e.valor + "<br/>"
   }
}
}
}

let caja= [];
let entregado = [];
caja.push(new Billete (100,5));
caja.push(new Billete (50,10));
caja.push(new Billete (20,5));
caja.push(new Billete (10,10));
caja.push(new Billete (5,5));

let dinero = 0;
let div = 0;
let papel = 0;


let resultado = document.getElementById("resultado")
let b = document.getElementById("Extraer");

alert("hola")
