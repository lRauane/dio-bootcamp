// TIPOS DE FUNÇÃO
//ESTRUTURA
/*
definição comum de uma função
Variáveis criadas dentro de uma função apenas podem ser utilizadas dentro dela
 
function nome(parametros){
    // instruçoes
}
*/

// RETURN
// qaudo invocamos o "return", a função para de ser execultada
/*function nome(parametro){
    //instruçao
    return; //valor do retorno
}*/

// FUNÇÃO ANONIMA
//Funçoes que representam expressoes
/*uma variavel pode armazenar uma função

const soma = function (a, b){
    return a + b;
}
soma(1, 2) // 3
soma(5, 4) // 9
*/

// FUNÇÃO AUTOINVOCAVEL E CALLBACKS
/* 
AUTOINVOCAVEL
IIFE (immediately invoked function expression)
Uma função anonima entre parenteses, seguida por outro par de parenteses, que representa sua chamada.

EX1:

(
function(){
    let name = "DIO"
    return name;
}
)();

// DIO 

tambem pode ser utilizada com parametros ou armazenada em uma variavel

EX2:
(
    function(a, b){
        return a + b;
    }
)(1, 2);

// 3

EX3:
const soma3 =(
    function(){
        return a + b;
    }
)(1,2);
console.log(soma3)  // 3

*/

// CALLBACKS
/*
Uma função passada como argumento para outra
Utilizando callbacks, voce tem maior controle de ordem de chamadas.

EX:
const calc = function(operacao, num1, num2){
    return operacao(num, num2);
}
const soma = function(num1, num2){
    return num1 + num2;
}
cost sub = function(num1, num2){
    return num1 - num2; 
}
const resultadoSoma = calc(soma, 1, 2)
const resultadoSub = calc(ssub, 1, 2)

console.log(resultadoSub); // -1
console.log(resultadoSoma); // 3
*/

// PARAMETROS
// VALORES PADRAO E OBJETO "arguments"
/* arguments
um array com todos os parametros passados
quando a função foi invocada.

ex:
function findMax(){
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++){
        if (arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}
*/ 

// ARRAYS E OBJETOS
// ARRAYS
/*
spread: uma forma de lidar separadamente com elementos.
- Oque era parte de um array se torna um elemento independente.

ex:
function sum(x, y, z){
    return x + y + z;
}
const numbers = [1, 2, 3, 4];
console.log(sum(...numbers));

rest: combina os argumentos em uma array
o que era um elemento se torna parte de uma array.
ex:
function confereTamanho(...args){
    console.log(args.length)
}
confereTamanho() //0
confereTamanho(1, 2) //2
confereTamanho(3, 4, 5) //3
*/

//OBJETOS
// object Destructuring
/*
Entre chaves{},
podemos filtrar apenas os dados que nos interessam em um objeto.

ex:
const user = {
    id: 42,
    displayName: 'Jdoe',
    fullName:{
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id}){
    return id;
}
function getFullName({fullName: {firstName: First, lastName: last}}){
    return `${first} ${last}`;
}

userId{user}
//42
getFullName(user)
//John Doe
*/

//LOOPS
/*IF/ELSE
Ex:
function numeroPositivo(num) {
    let resultado
} 
if (num < 0) // CONDIÇÃO{
    resultado = false; // DECLARAÇÃO 1: ocorre caso a condição seja verdadeira
}else{
    resultado = true; // DECLARAÇÃO 2: ocorre caso a condição seja falsa
}
numeroPositivo(2)
//true
numeroPositivo(-3)
// false
*/

// SWITCH/CASE
/* - Equivael a uma comparaçãõ tipo e valor (===)
- Sempre precisa de um valor "default"
-Ideal para quando se precisa comparar muitos valores.

ex:
function getAnimal(id){
    switch(id){
        case 1:
            return "Cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "peixe";
    }
}
getAnimal(1) // CÃO
getAnimal(4) // PEIXE
getAnimal("1") // PEIXE

*/

// O QUE É THIS
/* A palavra reservada this é uma referencia de contexto.
No exemplo a seguir this refere-se ao objeto pessoa:

const pessoa = {
    firstName: "André",
    lastName: "Soares",
    id: 1,
    fullName: function(){
        return THIS.firstName + "" + THIS.lastName;
    },
    getId : function(){
        return THIS.id
    }
};

pessoa.fullName();
//André Soares
*/
// seu valor pode mudar de acordo com o lugar no código onde foi chamada
/* CONTEXTO            |   REFERENCIA
  Em um objeto(metodo)  própio objeto dono do metodo
  sozinha              Objeto global(Em navegadores)
  função                Objeto global
  Evento               Elemento que recebeu o evento
 */
