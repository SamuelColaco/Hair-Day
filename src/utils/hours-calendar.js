
import dayjs, { Dayjs } from "dayjs"
import { scheduleNew } from "../services/schedule-new"




export  async function dateHair({ daily }){
    const checkboxs = document.querySelectorAll('input[type = "checkbox"]')
    const strong = document.createElement("strong")
    const p = document.createElement("p")
    const div = document.createElement("div")
    div.classList.add("dates")
    const when = dayjs().format("HH:mm")

    const user = document.querySelector("#user").value
    let id = new Date().getTime()

    if(user === ""){
        return
    }
    else{
        try{
            const morning = document.querySelector("#morning")
            const afternoon = document.querySelector("#afternoon")
            const night = document.querySelector("#night")
            checkboxs.forEach( async (check) =>  {
                    if (check.checked){
                        let parent = check.parentNode
                        if(Number(check.name) >=9 && Number(check.name) <= 12){
                            p.textContent = user
                            strong.textContent = parent.textContent
                            div.append(p)
                            div.append(strong)
                            check.disabled = true
                            check.checked = false
                            morning.append(div)
                       }
        
                       else if (Number(check.name) >=13 && Number(check.name) <= 18){
                        p.textContent = user
                        strong.textContent = parent.textContent
                        div.append(p)
                        div.append(strong)
                        check.disabled = true
                        check.checked = false
                        afternoon.append(div)
                       }
        
                       else if(Number(check.name) >= 19 && Number(check.name) <=21){
                        p.textContent = user
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
                  
                    }
                })
                
                if(user === ""){
                    alert("Digite algo")
                }
                else{
                    await scheduleNew({
                        id,
                        user,
                        when,
                       })
                }

    }
        
    catch(err){
        console.log(err)
    }
    }
    
}