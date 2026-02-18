// arrayUtils.ts
// Funções utilitárias para trabalhar com arrays, com tipagem forte (strict)

// unique([1,2,2]) -> [1,2]
export const unique = <T>(arr: T[]): T[] => [...new Set(arr)];

// groupBy([{tipo:'A'},{tipo:'B'}],'tipo') -> {A:[…], B:[…]}
export const groupBy = <T extends Record<string, unknown>, K extends keyof T>(
  arr: T[],
  key: K
): Record<string, T[]> => {
  return arr.reduce<Record<string, T[]>>((acc, obj) => {
    // transforma o valor da chave em string para virar a chave do objeto final
    const groupKey = String(obj[key]);

    // se não existir o grupo ainda, cria um array vazio
    (acc[groupKey] = acc[groupKey] || []).push(obj);

    return acc;
  }, {});
};

// sumBy([{valor:10},{valor:5}], 'valor') -> 15
export const sumBy = <T extends Record<string, unknown>, K extends keyof T>(
  arr: T[],
  key: K
): number => {
  return arr.reduce((total, obj) => {
    const value = obj[key];

    // soma apenas se for número; caso contrário soma 0
    return total + (typeof value === "number" ? value : 0);
  }, 0);
};
