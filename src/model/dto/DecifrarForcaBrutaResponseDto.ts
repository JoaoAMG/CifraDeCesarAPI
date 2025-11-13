export class DecifrarForcaBrutaResponseDto {
    textoClaro: string;

    constructor(deslocamento: number, textoClaro: string) {
 
        this.textoClaro = textoClaro;
    }
}