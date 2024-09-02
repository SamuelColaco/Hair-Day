
import dayjs, { Dayjs } from "dayjs"
import { scheduleNew } from "../services/schedule-new"

export function dateHair(){

    const checkboxs = document.querySelectorAll('input[type = "checkbox"]')
    const value = document.querySelector("#user").value
    const div = document.createElement("div")
    const strong = document.createElement("strong")
    const p = document.createElement("p")
    const when = dayjs()
    let id = new Date().getTime()
    
    div.classList.add("dates")

    const morning = document.querySelector("#morning")
    const afternoon = document.querySelector("#afternoon")
    const night = document.querySelector("#night")
    try{
        if(value === ""){
            alert("Digite algo")
        }
        else{
            checkboxs.forEach( async (check) =>  {
                if (check.checked){
                    let parent = check.parentNode
                    if(Number(check.name) >=9 && Number(check.name) <= 12){
                        p.textContent = value
                        strong.textContent = parent.textContent
                        div.append(p)
                        div.append(strong)
                        check.disabled = true
                        check.checked = false
                        morning.append(div)
                   }

                   else if (Number(check.name) >=13 && Number(check.name) <= 18){
                    p.textContent = value
                    strong.textContent = parent.textContent
                    div.append(p)
                    div.append(strong)
                    check.disabled = true
                    check.checked = false
                    afternoon.append(div)
                   }

                   else if(Number(check.name) >= 19 && Number(check.name) <=21){
                    p.textContent = value
                    strong.textContent = parent.textContent
                    div.append(p)
                    div.append(strong)
                    check.disabled = true
                    check.checked = false
                    night.append(div)
                   }

                   else{
                    alert("Não foi possivel localizar os horários")
                   }
                   await scheduleNew({
                    id,
                    value,
                    when,
                   })
                }
            })

        }
    }
    catch(err){
        console.log(err)
    }
}