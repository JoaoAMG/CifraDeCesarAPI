"use strict";
// salvar como: index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const CifraService_js_1 = require("./service/CifraService.js"); // Importa sua classe
console.log("Iniciando o teste da cifra...");
// 1. Cria uma nova instância do seu serviço
const servico = new CifraService_js_1.cifraService();
// 2. Chama o método 'cifrar'. 
// Este método NÃO retorna nada (é void), ele apenas vai logar no console.
servico.cifrar("OLA", 2); // Deve logar: QNC
servico.cifrar("ABC", 1); // Deve logar: BCD
servico.cifrar("TESTE", 5); // Deve logar: YJXYJ
console.log("...teste finalizado.");
