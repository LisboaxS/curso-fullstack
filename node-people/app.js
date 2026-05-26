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

// Pegar a posição ou index do elemento do Array por id
function buscarIdNomes(id){
    // findIndex
    return nomes.findIndex(nome => nome?.id == id)
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

// Criando Rota Excluir
app.delete('/listaNomes/:id', (req,res) => {
    let id = req.params.id;
    let index = buscarIdNomes(id)

    //se não encontrar, retornar erro
    if(index === -1){
        return res.status(404).send(`Nenhum nome com o id ${id} foi encontrado`)
    }

    //Splice
    nomes.splice(index, 1)
    return res.send(`Nomes com id ${req.params.id} excluida com sucesso`)
})

// Rota Alterar
app.put('/listaNomes/:id', (req,res) => {
    let index = buscarIdNomes(req.params.id)
     //se não encontrar, retornar erro
    if(index === -1){
        return res.status(404).send(`Nenhum nome com o id ${id} foi encontrado`)
    }

    nomes[index].nome = req.body.nome
    nomes[index].idade = req.body.idade
    nomes[index].casado = req.body.casado

    res.json(nomes)

})


app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})