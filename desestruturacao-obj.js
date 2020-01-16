const usuario = {
    nome: 'Matheus',
    idade: 33,
    endereco:{
        cidade:'Sampa',
        estado: 'SP'
    }
}

const {nome, idade, endereco:{cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraDados({ nome, idade}){
    console.log(nome, idade);
}
mostraDados(usuario);