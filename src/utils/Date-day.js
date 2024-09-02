
import { loadContent } from "./load"
import { schedulesByDay } from "../services/schedules-by-day"
import { dateHair } from "./hours-calendar"



export async  function scheduleDate( ){

    const date = data.value

    const daily = await schedulesByDay( { date } )
    
    loadContent({date})
}

export async function dateNew() {

    const date = data.value

    const daily = await schedulesByDay( { date } )
   

    dateHair({ daily })

    loadContent({date})
}