
//Utilizando o modo estrito para capturar erros
"use strict"

//Importando a biblioteca dayjs
import "./libs/dayjs.js"

//importando o css
import "./styles/style.css"
import "./styles/section1.css"


const form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault()
  
    
    dateHair()
}

function dateHair(){
    const checkboxs = document.querySelectorAll('input[type = "checkbox"]')
    const value = document.querySelector("#user").value
    const div = document.createElement("div")
    const strong = document.createElement("strong")
    const p = document.createElement("p")
    const divCover = document.createElement("div")

    div.classList.add("dates")

    const morning = document.querySelector("#morning")
    try{
        if(value === ""){
            alert("Digite algo")
        }
        
        
        else{
            checkboxs.forEach((check) => {
                if (check.checked){
                    let parent = check.parentNode
                    switch(check.name){
                        case "nove":
                            p.textContent = value
                            strong.textContent = parent.textContent
                            div.append(p)
                            div.append(strong)
                            check.disabled = true
                            check.checked = false
                            morning.append(div)
                            
                            break
                        case "dez":
                            p.textContent = value
                            strong.textContent = parent.textContent
                            div.append(p)
                            div.append(strong)
                            check.disabled = true
                            check.checked = false
                            morning.append(div)
                            break
                        case "onze":
                            p.textContent = value
                            strong.textContent = parent.textContent
                            div.append(p)
                            div.append(strong)
                            check.disabled = true
                            check.checked = false
                            morning.append(div)
                            
                            break
                         case "doze":
                            p.textContent = value
                            strong.textContent = parent.textContent
                            div.append(p)
                            div.append(strong)
                            check.disabled = true
                            check.checked = false
                            morning.append(div)


                            break
                         default:
                            alert("Não foi de manhã")
                   }
                }
            })

        }
    }
    catch(err){
        console.log(err)
    }
}

