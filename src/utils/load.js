
//Inicio

//Importa a biblioteca dayjs
import dayjs from "dayjs"

//Exporta uma função que carrega o conteudo da página
export function loadContent({date}){
const checkboxs = document.querySelectorAll('input[type = "checkbox"]')

//Verifica uma mudança no valor do input "Data"
data.addEventListener("change", ()=> {
    //Pega cada checkbox e muda seu valor com base na hora atual e o dia
    checkboxs.forEach((check)=> {
            //Pega e guarda o dia
            const date = data.value
            try {
                //Verifica se a hora do checkbox já passou da hora do dia e guarda
                const isPast = dayjs(date).add(String(check.name), "hour").isBefore(dayjs())      

                console.log(check.name, isPast)
                //Dependendo do retorno que pode ser "TRUE" ou "FALSE" disabilita-o
                check.disabled = isPast
                
                
            } catch (error) {
                console.log(error)
            }
    
      
            
        })

    })

}

//Fim