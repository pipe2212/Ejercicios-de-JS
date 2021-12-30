let numeros= 100;
let divisible = false;


for (let i = 1; i <= 100; i++)
{
divisible = false;
  if(i % 3 == 0)
  {
  document.write("fizz");
  divisible = true;
  }
  if (i % 5 == 0)
{
  document.write("bozz");
  divisible = true;
}
  if(!divisible)
  {
  document.write(i);
  }
  document.write("<br>");
}
