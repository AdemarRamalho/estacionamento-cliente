import { Condutor } from "@/model/Condutor";
import axios, { AxiosInstance } from "axios";

export class CondutorClient{

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/condutor',
            headers: {'Content-type' : 'application/json'}
        });
    }
	public async listaAllAtivos(): Promise<any> {
        try {
            return (await this.axiosClient.get<Condutor[]>(`/lista/ativos`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findById(id: number) : Promise<Condutor> {
        try {
            return (await this.axiosClient.get<Condutor>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async cadastrar (Condutor : Condutor): Promise<void>{
		try{
			return (await this.axiosClient.post('/', Condutor)).data
		}catch (error:any){
			return Promise.reject(error.response)
		}
	}

	public async editar (Condutor : Condutor) : Promise<void>{
		try{
			return (await this.axiosClient.put(`/${Condutor.id}`)).data
		}catch(error:any){
			return Promise.reject(error.response)
		}
	}

	public async desativar (Condutor : Condutor) : Promise<void>{
		try{
			return (await this.axiosClient.put(`/desativar/${Condutor.id}`, Condutor)).data
		}catch(error:any){
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
	
	public async ativar(Condutor: Condutor): Promise<void> {
		try {
			return (await this.axiosClient.put(`/ativar/${Condutor.id}`, Condutor)).data
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
