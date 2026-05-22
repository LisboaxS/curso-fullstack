const express = require ('express')
const { log } = require('node:console')
const app = express()
const port = 3000

//rota principal
app.get ('/', (req, res) => {
    res.send('Hello World!')
})

app.get ('/teste', (req, res) => {
    res.send('Rota do senai teste')
})

app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})