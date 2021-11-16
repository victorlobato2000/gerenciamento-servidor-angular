import { DadoEstado } from "../enums/dado-estado.enum";

export interface AppEstado<T> {
    dadoEstado: DadoEstado;
    appDado?: T;
    erro?: string;
}