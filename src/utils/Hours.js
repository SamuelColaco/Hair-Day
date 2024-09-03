
//Inicio

//Importa a bibloteca dayjs e as funções de modulo
import dayjs from "dayjs"
import { loadContent } from "./load"
import { schedulesByDay } from "../services/schedules-by-day"
import { scheduleDate } from "./Date-day"

//Inicia as variaveis globais desse modulo
const data = document.querySelector("#data")
//Pega a data atual e guarda nessa variavél
const dataNow = dayjs(new Date()).format("YYYY-MM-DD")

const date = data.value

//Define um valor minimo para o agendamento
data.min = dataNow

//Adiciona a data atual comp valor ao input
data.value = dataNow

const checkboxs = document.querySelectorAll('input[type = "checkbox"]')

//Pega cada checkbox e verifica se o horário já não passou, com base na hora atual
checkboxs.forEach((check) => {
    //Pega o valor de cada um deles e guarda na variavel
    const checkNumber = Number(check.name)

    //Disabilita eles caso já tenha passado da hora.EX:disabilita o 13h caso seja 14h 
   check.disabled = checkNumber <= Number(dayjs().format("HH"))
})

//Quando o site carregar, executa essa função assincrona chamando uma função de modulo
document.addEventListener("DOMContentLoaded",  async () =>{

    scheduleDate()

})

//Fim