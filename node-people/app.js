const express = require ('express')
const { log } = require('node:console')
const app = express()
const port = 3000

//mock
const nomes = [
    { id: 1, nome: "Fernanda", idade: 18, casado: true },
    { id: 2, nome: "Juliana", idade: 22, casado: false },
    { id: 3, nome: "Doris", idade: 15, casado: false }
]


app.use(express.json())

// Criando funções auxiliares
//Retornar o objeto por id

function buscarNomePorId(id){
    return nomes.filter((nome) => nome.id == id)
}

//rota principal
app.get ('/', (req, res) => {
    res.send('Hello World!')
})

app.get ('/teste', (req, res) => {
    res.send('Rota do senai teste')
})

// Buscando nomes (listaNomes)

app.get('/listaNomes', (req, res) => {
    res.send(nomes)
})

//Buscando por Id

app.get("/listaNomes/:id", (req,res) => {
    let index = req.params.id
    res.json(buscarNomePorId(index))
})

//Criando um cadastro
app.post("/listaNomes", (req,res) =>{
    nomes.push(req.body)
    res.status(201).send("nomes cadastrados com sucesso!")
})


app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})