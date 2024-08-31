
import dayjs from "dayjs"

const data = document.querySelector("#data")
const dataNow = dayjs(new Date()).format("YYYY-MM-DD")
data.min = dataNow
data.value = dataNow


const checkboxs = document.querySelectorAll('input[type = "checkbox"]')

checkboxs.forEach((check) => {
    const checkNumber = Number(check.name)
    
   check.disabled = checkNumber <= Number(dayjs().format("HH"))

    console.log(Number(dayjs().format("HH")))


})