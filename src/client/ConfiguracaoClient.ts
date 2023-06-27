
import { Condutor } from "@/model/Condutor";
import { Configuracao } from "@/model/Configuracao";
import { Marca } from "@/model/Marca";
import axios, { AxiosInstance } from "axios";

class ConfiguracaoClient {

    private axiosClient : AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/configuracao',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number): Promise<Configuracao> {
        try {
            return (await this.axiosClient.get<Configuracao>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listaAll(): Promise<any> {
        try {
            return (await this.axiosClient.get<Configuracao[]>(`/lista`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

   

    public async cadastrar(configuracao: Configuracao): Promise<string> {
        try {
            return (await this.axiosClient.post<string>(``, configuracao)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
    public async editar(id: number, configuracao: Configuracao): Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/${id}`, configuracao)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
    public async excluir(id: number): Promise<string> {
        try {
            return (await this.axiosClient.delete<string>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
}

export default new ConfiguracaoClient();