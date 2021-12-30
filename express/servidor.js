let express = require("express");
let app = express();

app.get("/", inicio);
app.get("/cursos",cursos);

function inicio(peticion,resultado)
 {
resultado.send("este  <strong>home</strong>genial")
}
function cursos(peticion,resultado)
 {
resultado.send(" <strong>cursos</strong>")
}
app.listen(3000);
