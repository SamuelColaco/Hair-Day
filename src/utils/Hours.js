
import dayjs from "dayjs"
import { loadContent } from "./load"
import { schedulesByDay } from "../services/schedules-by-day"
import { scheduleDate } from "./Date-day"

const data = document.querySelector("#data")
const dataNow = dayjs(new Date()).format("YYYY-MM-DD")
const date = data.value

data.min = dataNow
data.value = dataNow

const checkboxs = document.querySelectorAll('input[type = "checkbox"]')


checkboxs.forEach((check) => {
    const checkNumber = Number(check.name)

    
   check.disabled = checkNumber <= Number(dayjs().format("HH"))
})

document.addEventListener("DOMContentLoaded",  async () =>{

    scheduleDate()

})