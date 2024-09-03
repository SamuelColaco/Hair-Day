
//Inicio

//Importa as funções de modulo
import { loadContent } from "./load"
import { schedulesByDay } from "../services/schedules-by-day"
import { dateHair } from "./hours-calendar"


//Exporta uma função assincrona que  muda o conteudo dependendo do dia
export async  function scheduleDate( ){
    //Pega e guarda o valor atual
    const date = data.value

    //Armazena e retorna o dia
    const daily = await schedulesByDay( { date } )
    
    //Carrega o conteudo e as disponibilidades de horário com base no dia
    loadContent({date})
}

//Exporta uma função assincrona e além de muda o conteudo o adiciona
export async function dateNew() {

    const date = data.value

    const daily = await schedulesByDay( { date } )
   

    dateHair({ daily })

    loadContent({date})
}

//Fim