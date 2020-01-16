const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map((item, index) => {
    return item + index;
});

const newArr2 = arr.map(item => {
    return item * 2;
});

const newArr3 = arr.map(item => item * 2);



const teste = () => ({nome: 'Matheus'});

console.log(teste);