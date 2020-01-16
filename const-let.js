const a = 1;

//nao é possivel reatribuir seu valor
//nao funciona:
//a = 3;

//funciona (mutar a variavel):
const usuario = {nome:'Diego'}
usuario.nome = 'Matheus';
console.log(usuario.nome);

////////////////////////////////////////////////////////////

//o let só sera visível no escopo
function teste(x){
    let y = 2;

    if(x > 5){
        y = 4;
        console.log(x,y)
    }
}