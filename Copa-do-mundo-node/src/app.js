import express from "express"
const app = express()

// Indicar para express ler o body  com json 

app.use(express.json())

// rota principal

app.get("/", (req,res) => {
    res.send("Olá copa do mundo")
})

export default app