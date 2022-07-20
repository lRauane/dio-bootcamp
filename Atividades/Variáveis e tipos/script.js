// VARIAVEIS E TIPOS

//Atribuição de valores

// variaveis
// VAR E LET
// HOISTING - só funciona no Var
// REDECLARAÇÃO - só no var
//ESCOPOS DIFERENTES
/*var a = 1;
var b = 2;

if (a === 1){
    var a = 11; // redeclaração
    let b = 22;
    console.log(a); //11
    console.log(b); //22
}

console.log(a); //11
console.log(b); //2 */

/*HOISTING
numberOne = 1;
console.log(numberOne + 2);
var numberOne;

//LET SÓ DECLARA ANTES */

/* ESCOPO GLOBAL
var firstName = "João";
let letsName = "Souza";


// ESCOPO DE BLOCO
if(firstName === "João"){
    var firstName = "Pedro";
    let lastName = "Silva";
}
console.log(firstName, letsName); */

// COSTANTES

// DECLARADA EM SNAKE_UPPER_CASE
//ESCOPO DE BLOCO
// NÃO FAZ HOISTING
/*
const DAYS_IN_A_WEEK = 7;
const MY_NAME = "Kieran"; 
console.log(DAYS_IN_A_WEEK, MY_NAME) */

// LET, VAR E CONST

/*           VAR        | CONST     | LET 
ESCOPO | global ou local| bloco     | bloco
REDECLARAR | sim        | Não       | Não
REATRIBUIR | sim        | não       | sim
HOISTING   | sim        | nao       | nao */


// TIPOS

// ESTRUTURA DE DADOS
/* JavaScript é uma linguagem de tipagem dinamica */

/* STRINGS
   CONCATENAÇÃO 
   PROPIEDADE LENGTH
   ITERABILIDADE
   FORMATAÇÃO
   INDEX DE LETRAS

 UTILIZADA PARA TEXTOS
 VALORES DECLARADOS ENTRE ASPAS OU CRASES*/

/*let firstName = 'João';
let lastName = 'Luiz';

let fullName = `Nome completo: ${firstName} ${lastName}`;
console.log(fullName); */

/* NUMBER 
  NUMEROS INTEIROS E NUMEROS DECIMAIS
*/

/* Math.PI
console.log(Math.PI) */

/* BOOLEANS
 TRUE FALSE */


/*ARRAY\VETORES
lista iteravel de elementos

let array = []
array.push(3)

array.shift
array.unshift
array.pop
*/

/*OBJETOS
estrutura tipo "chave e valor"

let person ={
  name: 'John'
  age: '20'
};
*/

/* EMPTY, NULL E UNDEFINED
   VAZIO, DE PROPOSITO SEJA NULO, INDEFINIDO NAO EXISTE
*/


