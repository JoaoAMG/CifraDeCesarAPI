export class DecifraDto {
    textoCifrado: string;
    deslocamento: number;

    constructor(textoCifrado: string, deslocamento: number) {
        this.textoCifrado = textoCifrado;
        this.deslocamento = deslocamento;
    }
}