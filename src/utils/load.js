
import dayjs from "dayjs"
export function loadContent({ data, date}){
const checkboxs = document.querySelectorAll('input[type = "checkbox"]')

    data.addEventListener("change", ()=> {
        checkboxs.forEach((check)=> {
            try {
                const past = dayjs(date).add(check.name, "hour").isAfter(dayjs())
                console.log(check.name, past)

                if(past === false){
                    check.disabled = false
                }
                else if (past){
                    check.disabled = true
                }
                else{
                    alert("Aconteceu algo errado")
                }
                
                
            } catch (error) {
                console.log(error)
            }
    
      
        })

    })

}