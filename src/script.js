
//Utilizando o modo estrito para capturar erros
"use strict"

//Importando a biblioteca dayjs
import "./libs/dayjs.js"

import  {dateHair} from "./utils/hours-calendar.js"

import "./utils/Hours.js"
import "./utils/load.js"

//importando o css
import "./styles/style.css"
import "./styles/section1.css"



const form = document.querySelector("form")



form.onsubmit =  (event) => {
    event.preventDefault()

    dateHair()
}




