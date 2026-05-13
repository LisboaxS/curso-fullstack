const formulario = document.getElementById("meuFormulario")

formulario.addEventListener("submit", function(event) {

    event.preventDefault()

    const nome = document.getElementById ("nome")
    const telefone = document.getElementById ("telefone")
    const sexo = document.getElementById ("sexo")
    const checkbox = document.getElementById ("s")

    console.log(nome.value)
    console.log(telefone.value)
    console.log(sexo.value)
    console.log(sexo.value)

    if(nome.value.trim() === ""){
        alert("Preencha o nome")
        return false
    }

    if (telefone.value.trim() === ""){
        alert("Preencha o telefone")
        return false
        
    }

    // Limpar campos 

    nome.value = ""
    telefone.value = ""
    checkbox.checked = false
    
    alert("Formulário enviado!")


})