const express = require("express")

let app =express ()

app.use(express.static("public"))

app.get("/",(req,res) => {
    res.send("hello word")
})
app.get("/one",(req,res) => {
   res.send("Me gustan las manzanas")
})
app.listen(8081,()=>{
   console.log("Tas en 8081 nun te pierdas") 
})
console.log("manuel")
console.log("manuel")
