
//Utilizando o modo estrito para capturar erros
"use strict"

//Importando a biblioteca dayjs
import "./libs/dayjs.js"

import  {dateHair} from "./utils/hours-calendar.js"
import { dateNew } from "./utils/Date-day.js"

import "./utils/Hours.js"
import "./utils/load.js"

//importando o css
import "./styles/style.css"
import "./styles/section1.css"

//Iniciando variavel do formulário
const form = document.querySelector("form")

//Iniciando o evento de envio do formulário
form.onsubmit =  (event) => {
    event.preventDefault()

    dateNew()
}




