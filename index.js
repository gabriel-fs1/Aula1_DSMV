// Importa as funções do arquivo arrayUtils.js
import { unique, groupBy, sumBy } from './arrayUtils.js';

console.log("===== Função unique =====");

// Exemplo 1: removendo números duplicados
const numeros = [1, 2, 2, 3, 4, 4];
console.log(unique(numeros)); 
// Esperado: [1, 2, 3, 4]

// Exemplo 2: removendo strings duplicadas
const frutas = ["maçã", "banana", "maçã", "laranja"];
console.log(unique(frutas)); 
// Esperado: ["maçã", "banana", "laranja"]


console.log("\n===== Função groupBy =====");

// Exemplo 1: agrupando por tipo
const itens = [
  { nome: "Camiseta", tipo: "Roupa" },
  { nome: "Calça", tipo: "Roupa" },
  { nome: "Notebook", tipo: "Eletrônico" }
];
console.log(groupBy(itens, "tipo"));
// Esperado: { Roupa: [...], Eletrônico: [...] }

// Exemplo 2: agrupando alunos por turma
const alunos = [
  { nome: "Ana", turma: "A" },
  { nome: "Carlos", turma: "B" },
  { nome: "João", turma: "A" }
];
console.log(groupBy(alunos, "turma"));
// Esperado: { A: [...], B: [...] }


console.log("\n===== Função sumBy =====");

// Exemplo 1: somando valores de compras
const compras = [
  { produto: "Livro", valor: 50 },
  { produto: "Caneta", valor: 10 }
];
console.log(sumBy(compras, "valor")); 
// Esperado: 60

// Exemplo 2: somando pontos de jogadores
const jogadores = [
  { nome: "Miguel", pontos: 20 },
  { nome: "Lucas", pontos: 15 },
  { nome: "Sara", pontos: 25 }
];
console.log(sumBy(jogadores, "pontos")); 
// Esperado: 60
