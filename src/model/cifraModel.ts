export class CifraModel {
    textoClaro: string;
    deslocamento: number;
    textoCifrado: string;


    constructor(textoClaro: string, deslocamento: number, textoCifrado: string) {
        this.textoClaro = textoClaro;
        this.deslocamento = deslocamento;
        this.textoCifrado = textoCifrado;
    }
}