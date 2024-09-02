
import { apiConfig } from "./api-config";

export async function scheduleNew({ id, user, when }){
    try {
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