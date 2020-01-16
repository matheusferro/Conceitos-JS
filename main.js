
class List{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor(){
        super();

        this.usuario = 'Matheus';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo to do');
}
MinhaLista.mostraUsuario();

//metodo estatico NAO FUNCIONA COM METODO ESTATICO ELE SÓ ENXERGA O QUE TA DENTRO DO METODO
// .this  NAO FUNCIONA, POIS FOI DEFINIDO NO CONSTRUTOR
class TodoList2{
    constructor(){
        this.todos = [];
    }
    static addTod(){
        this.todos.push('Novo to do');
        console.log(this.todos);
    }
}

//JEITO CERTO DE USAR O STATIC
class Matematica{
    static soma(a, b){
        return a + b;
    }
}
console.log(Matematica.soma(2,4));



