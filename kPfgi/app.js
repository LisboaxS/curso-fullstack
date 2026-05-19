const express = require ("express");
const app = express();
const port = 3000;

//Variavel com os dados
const alimentos = [
    {id: 1, nome: "Feijão", preco: 10,},
    {id: 2, nome: "Carne", preco: 50},
    {id: 3, nome: "Frutas", preco: 70},
    {id: 4, nome: "Sopas", preco: 40}

];

const tiposPratos = [
    {id: 1, prato: "Feijoada", preco:25},
    {id: 2, prato: "Baião de dois", preco: 30},
    {id: 3, prato: "Salada de maionese", preco: 15}
];

//Middleware (Permição)
app.use(express.static('public'));

//cria uma função
//Rota principal
app.get('/', (req, res) => {
   
    res.send("Bem vindo ao meu projeto de alimentos");

});

// Produtos
app.get('/produtos', (req, res) =>{
    res.send(alimentos)
});

// Cardapio

app.get('/cardapio', (req, res) =>{
    res.send(tiposPratos)
});

// Rota Home
app.get('/home', (req,res) =>{
    // console.log("Olá",__dirname)
    res.sendFile(__dirname + '/public/index.html');    
})

// Executando o servidor 
app.listen(port, () => {
    console.log(`Servidor rodando, em http://localhost:${port}`)
})