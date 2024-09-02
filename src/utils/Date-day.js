
import { loadContent } from "./load"
import { schedulesByDay } from "../services/schedules-by-day"



export async  function scheduleDate( ){

    const date = data.value
    const daily = await schedulesByDay( { date } )
    console.log(daily)

    loadContent({date})
}