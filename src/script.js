
//Utilizando o modo estrito para capturar erros
"use strict"

//Importando a biblioteca dayjs
import "./libs/dayjs.js"

import {dateHair} from "./utils/hours-calendar.js"

//importando o css
import "./styles/style.css"
import "./styles/section1.css"



const form = document.querySelector("form")
const data = document.querySelector("#data")

form.onsubmit = (event) => {
    event.preventDefault()
  
    
    dateHair()
}




