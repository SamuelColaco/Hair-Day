
import { apiConfig } from "./api-config";

export async function scheduleNew({ id, client, date }){
    try {
        await fetch(`${apiConfig.baseURL}/schedules`,{
            method: "POST",
            headers:{
                "Content-Type": "application",
            },
            body: JSON.stringify({id, client, date}),
        })

        


    } catch (error) {
        console.log(error)
        alert("Não foi possivel ralizar o agendamento")
    }
}