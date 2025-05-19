import { TipoAnimal } from './types/global.s'; // ajuste o caminho conforme sua estrutura de pastas

// aqui você pode usar os tipos importados normalmente
export class PooService {
  static compararPeso(c1: TipoAnimal, c2: TipoAnimal): TipoAnimal | null {
    if (c1.peso > c2.peso) return c1;
    if (c2.peso > c1.peso) return c2;
    return null;
  }
}
