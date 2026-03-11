// content/ecrits/index.ts
import type { Ecrit } from "@/lib/ecrits";

export const ECRITS: Record<string, Ecrit["meta"]> = {
  "alinhamento-espiritual-e-libertacao": {
    title: "Alinhamento espiritual e libertação das correntes invisíveis",
    description:
      "Quando a nossa energia está dispersa e o caminho parece bloqueado, um realinhamento interior pode trazer coerência, clareza e harmonia ao fluxo do nosso ser.",
    readingTime: "6 min",
    themes: ["Alinhamento espiritual", "Energia", "Libertação interior"],
  },

  "cura-ancestral": {
    title: "Cura ancestral e harmonização das linhagens",
    description:
      "Alguns bloqueios têm raízes que transcendem o indivíduo. Ao compreender as dinâmicas das nossas linhagens, podemos libertar padrões que não nos pertencem e restaurar o equilíbrio na nossa jornada.",
    readingTime: "8 min",
    themes: ["Cura ancestral", "Linhagens", "Energia", "Transmissão"],
  },
};
