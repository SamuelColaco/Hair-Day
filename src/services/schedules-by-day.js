
//Inicio

//Importa a biblioteca dayjs e a configuração da API
import dayjs from "dayjs";

import { apiConfig} from "./api-config";


//Exporta uma função assincrona que recebe a data como parametro
export async function schedulesByDay({ date }) {
    try {

        //Pega a resposta da API e a transforma em json
        const response = await fetch(`${apiConfig.baseURL}/schedules`)
        const data =  await response.json()

        //Analisa cada uma das datas e volta as que atenderem a condição
        const day = data.filter((schedules) => 
        dayjs(date).isSame(schedules.when, "day")
        )
        return day
        
    } catch (error) {
        console.log(error)
        alert("Não foi possivel checar os agendamentos")
        return []
    }

    
}

//Fim