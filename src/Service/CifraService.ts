

export class CifraService {

    
    private dicionarioLocal: Set<string>;

    constructor() {
       
        const palavrasComuns = [
            'de', 'a', 'o', 'que', 'e', 'do', 'da', 'em', 'um', 'para', 'é', 'com', 'não',
            'uma', 'os', 'na', 'se', 'por', 'mais', 'como', 'mas', 'foi', 'ao', 'ele',
            'ela', 'tem', 'sua', 'seu', 'ser', 'quando', 'nos', 'no', 'são', 'ola'
        ];
        this.dicionarioLocal = new Set(palavrasComuns);
    }

    public cifrar(textoClaro: string, deslocamento: number): string {
        const textoLimpo = this.removerAcentos(textoClaro);
        return this.deslocar(textoLimpo, deslocamento);
    }

 
    public decifrar(textoCifrado: string, deslocamento: number): string {
        return this.deslocar(textoCifrado, -deslocamento);
    }


    /**
     * Tenta decifrar um texto (força bruta) validando contra um dicionário local.
     * @param textoCifrado 
     * @returns 
     */
    public decifrarForcaBruta(textoCifrado: string): { deslocamento: number, textoClaro: string } | null {
        
        console.log("Iniciando força bruta com dicionário local...");

        // Loop de 1 a 25
        for (let i = 1; i <= 25; i++) {
            
            const textoClaro = this.decifrar(textoCifrado, i);
            
    
            if (this.contemPalavraValida(textoClaro)) {
                console.log(`SUCESSO: Encontrada palavra válida. Deslocamento: ${i}`);
  
                return {
                    deslocamento: i,
                    textoClaro: textoClaro
                };
            }
        }
        
        console.log("Fracasso: Nenhuma palavra correspondente encontrada no dicionário local.");
        return null;
    }

    private contemPalavraValida(texto: string): boolean {

        const palavras = texto.split(' ');

        for (const p of palavras) {

            const palavraLimpa = p.toLowerCase().replace(/[.,!?;]/g, '');
            
            if (this.dicionarioLocal.has(palavraLimpa)) {
                return true; 
            }
        }
        

        return false;
    }




    private deslocar(texto: string, deslocamento: number): string {
        let resultado = "";
        for (let i = 0; i < texto.length; i++) {
            let char = texto[i];
            let codigoASCII = texto.charCodeAt(i);

            if (codigoASCII >= 65 && codigoASCII <= 90) { // Maiúsculas
                let novoCodigo = ((codigoASCII - 65 + deslocamento) % 26 + 26) % 26 + 65;
                resultado += String.fromCharCode(novoCodigo);
            }
            else if (codigoASCII >= 97 && codigoASCII <= 122) { // Minúsculas
                let novoCodigo = ((codigoASCII - 97 + deslocamento) % 26 + 26) % 26 + 97;
                resultado += String.fromCharCode(novoCodigo);
            }
            else { 
                resultado += char;
            }
        }
        return resultado;
    }

    private removerAcentos(texto: string): string {
        return texto
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }
}