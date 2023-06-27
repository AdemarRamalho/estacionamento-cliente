
import { Condutor } from "@/model/Condutor";
import { Marca } from "@/model/Marca";
import axios, { AxiosInstance } from "axios";

class CondutorClient {

    private axiosClient : AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/condutores',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number): Promise<Condutor> {
        try {
            return (await this.axiosClient.get<Condutor>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listaAll(): Promise<any> {
        try {
            return (await this.axiosClient.get<Condutor[]>(`/lista`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listaAllAtivos(): Promise<any> {
        try {
            return (await this.axiosClient.get<Condutor[]>(`/lista/ativos`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(condutor: Condutor): Promise<string> {
        try {
            return (await this.axiosClient.post<string>(``, condutor)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
    public async editar(id: number, condutor: Condutor): Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/${id}`, condutor)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
    public async excluir(id: number): Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/desativar/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
}

export default new CondutorClient();