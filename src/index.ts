
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';


import { CifraService } from "./Service/CifraService";


import { CifraDto } from "./model/dto/CifraDto";
import { DecifraDto } from "./model/dto/DecifraDto";
import { DecifrarForcaBrutaRequestDto } from './model/dto/DecifrarForcaBrutaRequestDto';


import { CifrarResponseDto } from "./model/dto/CifrarResponseDto";
import { DecifrarResponseDto } from "./model/dto/DecifrarResponseDto";

import { DecifrarForcaBrutaResponseDto } from './model/dto/DecifrarForcaBrutaResponseDto';


const app = express();
const port = 3000;
app.use(bodyParser.json());

const servico = new CifraService(); 


app.post('/cifrar', (req: Request, res: Response) => {
    try {
        const dados: CifraDto = req.body;
        if (!dados.textoClaro || dados.deslocamento === undefined) {
             res.status(400).send({ message: "Faltam dados (textoClaro ou deslocamento)" });
             return;
        }
        const resultadoTexto = servico.cifrar(dados.textoClaro, dados.deslocamento);
        const resposta = new CifrarResponseDto(resultadoTexto);
        res.status(200).json(resposta);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Erro interno no servidor" });
    }
});


app.post('/decifrar', (req: Request, res: Response) => {
    try {
        const dados: DecifraDto = req.body;
        if (!dados.textoCifrado || dados.deslocamento === undefined) {
             res.status(400).send({ message: "Faltam dados (textoCifrado ou deslocamento)" });
             return;
        }
        const resultadoTexto = servico.decifrar(dados.textoCifrado, dados.deslocamento);
        const resposta = new DecifrarResponseDto(resultadoTexto);
        res.status(200).json(resposta);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Erro interno no servidor" });
    }
});



app.post('/decifrarForcaBruta', (req: Request, res: Response) => {
    try {
        const dados: DecifrarForcaBrutaRequestDto = req.body;

        if (!dados.textoCifrado) {
             res.status(400).send({ message: "Falta o campo textoCifrado" });
             return;
        }


        const resultado = servico.decifrarForcaBruta(dados.textoCifrado);

        if (resultado) {
    
            const respostaDto = new DecifrarForcaBrutaResponseDto(resultado.deslocamento, resultado.textoClaro);
            
         
            res.status(200).json(respostaDto);
        } else {
   
            res.status(404).send({ message: "Não foi possível decifrar. Nenhuma palavra correspondente encontrada." });
        }

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Erro interno no servidor" });
    }
});



app.listen(port, () => {
    console.log(`API a correr em http://localhost:${port}`);
});