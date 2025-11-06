export class CifraDto {
    textoClaro: string;
    deslocamento: number;

    constructor(textoClaro: string, deslocamento: number) {
        this.textoClaro = textoClaro;
        this.deslocamento = deslocamento;
    }
}