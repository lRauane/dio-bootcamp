/*O QUE SÃO MODULOS
módulos arquivos JavaScript que tem capacidade de exportar e importar informações de outros arquivos do mesmo tipo 

ALGUMAS VANTAGENS SÃO:
Organização de código 
compartilhamento de variáveis em escopos diferentes
explicita as dependencias dos arquivos
*/
// DEFAULT EXPORTS
// só pode haver um por arquivo
// será o retorno padrao do seu arquivo 

//COMO IMPORTAR
// named exports:
// import {funcao, variavel, classe} from './arquivo.js'
// default exports
// import valorDefault from './arquivo.js'

// CURIOSIDADES
/* - módulos sempre estao em "strict mode" 
- podem ser utilizadas as extensões .js e .mjs
- para testes locais, é necessário utilizar um servidor
- ao importar sempre lembre da extensão (.js, .mjs) 
- Ao importar, sempre utilize "./" como ponto de partida*/