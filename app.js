const express = require("express")

let app =express ()

app.get("/",(req,res) => {
    res.send("hello word")
})
app.listen(8081,()=>{
   console.log("Tas en 8081 nun te pierdas") 
})
console.log("manuel")
console.log("manuel")
