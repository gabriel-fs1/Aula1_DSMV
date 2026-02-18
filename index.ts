import { unique, groupBy, sumBy } from "./arrayUtils";

// ===== unique =====
console.log("unique #1:", unique([1, 2, 2, 3]));
console.log("unique #2:", unique(["a", "b", "a", "c"]));

// ===== groupBy =====
console.log(
  "groupBy #1:",
  groupBy(
    [
      { nome: "Camiseta", tipo: "roupa" },
      { nome: "Calça", tipo: "roupa" },
      { nome: "Mouse", tipo: "eletrônico" }
    ],
    "tipo"
  )
);

console.log(
  "groupBy #2:",
  groupBy(
    [
      { nome: "Ana", turma: "A" },
      { nome: "João", turma: "B" },
      { nome: "Bia", turma: "A" }
    ],
    "turma"
  )
);

// ===== sumBy =====
console.log("sumBy #1:", sumBy([{ valor: 10 }, { valor: 5 }], "valor"));
console.log("sumBy #2:", sumBy([{ pontos: 20 }, { pontos: 15 }, { pontos: 25 }], "pontos"));
