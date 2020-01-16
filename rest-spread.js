//rest ... resto de alguma coisa
const vetor = [1, 2, 3, 4, 5, 6];

const [a, b, ...c] = vetor;
console.log(a);
console.log(b);
console.log(c);

function soma(...params){
    return params.reduce((total, next) => total + next);
}
console.log(soma(2,3,4,5,6,7));

//SPREAD repassa os objetos para outra estrutura
const vetor = [1, 2, 3];
const vetor2 = [4, 5, 6];

const vetor3 = [...vetor, ...vetor2];

console.log(vetor3);

const usuario = {
    nome:'Matheus',
    idade: 20,
    empresa: 'IBM'
};

const usuario2 = {...usuario1, nome:'José'};

console.log(usuario2);


