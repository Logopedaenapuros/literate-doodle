let express = require ("express")
let app = express()
app.get("/", (req, res) => {
    res.send("<h1>Home<a href='/one>enlace</a> </h1>")
})
app.get("/one", (req, res) => {
    res.send("<h1>Page primera<h1>")
})

app.listen(8081, ()=> {
    console.log("Servidor activo")
})