import { Status } from "../enums/status.enum";

export interface Servidor {
    id: number;
    enderecoIP: string;
    nome: string;
    tipo: string;
    imagemUrl: string;
    status: Status;
}