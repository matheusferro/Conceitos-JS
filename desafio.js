//ex 1
/*
class Usuario {
    constructor(email, senha){
        this.Email = email;
        this.Senha = senha;
        this.admin = false;
    }
    isAdmin(){
        return this.admin;
    }
}

class Admin extends Usuario{
    constructor(){
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true 
*/

//ex 2
/*
const usuarios = [  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' }, 
                    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },  
                    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },];
const idade = usuarios.map( item => item.idade );
const funcionario = usuarios.filter(item => item.idade >= 18 && item.empresa == 'Rocketseat' );
const google = usuarios.find(item => item.empresa == 'Google');


const idoso = usuarios.map(function (item){
    item.idade *2;
    return item;
}).filter(item => item.idade < 50);
*/

//ex3 
// 3.1 
/*
    const arr = [1, 2, 3, 4, 5]; 
    arr.map(function(item) {  return item + 10;}); //===
    arr.map(item => item + 10);
    // 3.2// Dica: Utilize uma constante pra function
    const usuario = { nome: 'Diego', idade: 23 };
    const mostraIdade = (usuario => usuario.idade);
    mostraIdade(usuario);
    // 3.3// Dica: Utilize uma constante pra function
    const nome = "Diego";
    const idade = 23;
    //function mostraUsuario(nome = 'Diego', idade = 18) {  return { nome, idade };};
    const mostraUsuario = ((nome = 'Diego', idade = 18) => (nome, idade));
    mostraUsuario(nome, idade);
    mostraUsuario(nome);

    // 3.4
    //const promise = function() {  return new Promise(function(resolve, reject) {return resolve();})}
    const promise = (() => (resolve, reject) => resolve());
*/
//4
/*
    const empresa = {  nome: 'Rocketseat',  endereco: {    cidade: 'Rio do Sul',    estado: 'SC',  }};
    const {nome, endereco:{cidade, estado}} = empresa;
    console.log(nome); // Rocketseat
    console.log(cidade); // Rio do Sul
    console.log(estado); // SC

    function mostraInfo({nome, idade}) {  
        return `${nome} tem ${idade} anos.`;
    }
    console.log(mostraInfo({ nome: 'Diego', idade: 23 }));
*/

//5
/*
const arr = [1, 2, 3, 4, 5, 6];
const [x,...y] = arr;
console.log(x);
console.log(y);
function soma(...vetor){
    return vetor.reduce((total,next) => total+next);    
}
console.log(soma(1, 2, 3, 4, 5, 6));

const usuario = {  nome: 'Diego',  idade: 23,  endereco: {    cidade: 'Rio do Sul',    uf: 'SC',    pais: 'Brasil',  }};

const usuario2 =[...usuario, nome='gabriel'];
const usuario3 =[...usuario, nome='jão'];
*/
const nome = 'Diego';

const idade = 23;
console.log(`O usuário ${nome}  possui ${idade}  anos`);



const usuario = {  nome,  
    idade,  
    cidade: 'Rio do Sul',};
    console.log(usuario);

