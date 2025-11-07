import test from "node:test";

export class cifraService {
    public cifrar(textoClaro: string,deslocamento:number): void{
        const tc = textoClaro;
        const d = deslocamento;
        let teste = this.deslocar(tc, d);
        console.log(teste);
    }

public deslocar(textoClaro:string,deslocamento:number): string[] {
    const textoCifrado: string[] = []
    const texto: string[] = []
    for(let i = 0; i < textoClaro.length ; i++){
        const codigoASCII = textoClaro.charCodeAt(i) + deslocamento;
        const toString = codigoASCII.toString();
        texto.push(toString)
    }
    for(let i = 0; i < texto.length ; i++){
        const codigoletra = texto[i].;
        const codigo = codigoletra.toString();
        textoCifrado.push(codigo)
    }
    return textoCifrado;


}







}