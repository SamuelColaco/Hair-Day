
import dayjs from "dayjs"
export function loadContent({date}){
const checkboxs = document.querySelectorAll('input[type = "checkbox"]')

data.addEventListener("change", ()=> {
    checkboxs.forEach((check)=> {
            const date = data.value
            try {
                const isPast = dayjs(date).add(String(check.name), "hour").isBefore(dayjs())      

                console.log(check.name, isPast)
                check.disabled = isPast
                
                
            } catch (error) {
                console.log(error)
            }
    
      
        })

    })

}