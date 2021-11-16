import { Servidor } from "./servidor";

export interface RespostaCustomizada {
    timeStamp: Date;
    codigoStatus: number;
    status: string;
    motivo: string;
    mensagem: string;
    mensagemDev: string;
    dados: { servidores?: Servidor[], servidor?: Servidor }
}