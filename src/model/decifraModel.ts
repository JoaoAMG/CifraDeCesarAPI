export class decifraModel {
    textoCifrado: string;
    deslocamento: number;
    textoClaro: string;


    constructor(textoCifrado: string, deslocamento: number, textoClaro: string) {
        this.textoClaro = textoClaro;
        this.deslocamento = deslocamento;
        this.textoCifrado = textoCifrado;
    }
}