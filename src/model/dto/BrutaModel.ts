export class BrutaDto {
    textoCifrado: string;
    textoClaro: string;

    constructor(textoCifrado: string, textoClaro: string) {
        this.textoCifrado = textoCifrado;
        this.textoClaro = textoClaro;

    }
} 