let array = []
function cadastro() {
    let nome = document.querySelector('#box-nome').value
    let sIdade = document.querySelector('#box-idade').value
    let idade = parseInt(sIdade)
    let sexo = document.querySelector('#box-sexo').value
    let pessoa = {
        nome,
        idade, 
        sexo
    }
    array.push(pessoa)
    console.log(array)
}