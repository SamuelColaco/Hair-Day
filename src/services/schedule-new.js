

//Inicio

//Importa a configuração da API
import { apiConfig } from "./api-config";

//Exporta uma função assincrona adiciona na api os valores passados em parametros
export async function scheduleNew({ id, user, when }){
    try {
        //Aguarda a sincronização com a API e determina um metodo
        await fetch(`${apiConfig.baseURL}/schedules`,{
            method: "POST",
            headers:{
                "Content-Type": "application",
            },
            body: JSON.stringify({id, user, when}),
        })

        


    } catch (error) {
        console.log(error)
        alert("Não foi possivel ralizar o agendamento")
    }
}

//Fim