// aqui você pode usar os tipos importados normalmente
export class PooService {
    static compararPeso(c1, c2) {
        if (c1.peso > c2.peso)
            return c1;
        if (c2.peso > c1.peso)
            return c2;
        return null;
    }
}
