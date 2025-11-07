"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cifraService = void 0;
class cifraService {
    cifrar(textoClaro, deslocamento) {
        const tc = textoClaro;
        const d = deslocamento;
        let teste = this.deslocar(tc, d);
        console.log(teste);
    }
    deslocar(textoClaro, deslocamento) {
        const textoCifrado = [];
        const texto = [];
        for (let i = 0; i < textoClaro.length; i++) {
            const codigoASCII = textoClaro.charCodeAt(i) + deslocamento;
            const toString = codigoASCII.toString();
            texto.push(toString);
        }
        for (let i = 0; i < texto.length; i++) {
            const codigoletra = texto[i].charAt;
            const codigo = codigoletra.toString();
            textoCifrado.push(codigo);
        }
        return textoCifrado;
    }
}
exports.cifraService = cifraService;
