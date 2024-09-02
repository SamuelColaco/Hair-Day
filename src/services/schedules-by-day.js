
import dayjs from "dayjs";

import { apiConfig} from "./api-config";

export async function schedulesByDay({ date }) {
    try {

        const response = await fetch(`${apiConfig.baseURL}/schedules`)
        const data =  await response.json()

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