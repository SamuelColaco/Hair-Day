
//Inicio

//Importa a biblioteca dayjs e funções de outros modulos
import dayjs, { Dayjs } from "dayjs"
import { scheduleNew } from "../services/schedule-new"



//Exportando uma função assincrona que faz o agendamento do corte
export  async function dateHair({ daily }){
    //Iniciando as variavéis locais dessa função
    const checkboxs = document.querySelectorAll('input[type = "checkbox"]')
    const strong = document.createElement("strong")
    const p = document.createElement("p")
    const div = document.createElement("div")
    div.classList.add("dates")
    const when = dayjs().format("HH:mm")

    const user = document.querySelector("#user").value
    let id = new Date().getTime()

    //Fazendo uma verificação para garantir que o campo "cliente" não esteja vazio
    if(user === ""){
        return
    }
    else{
        //Fazendo um tratamento de erros usando try catch para capturar novos erros
        try{
            //Iniciando as variaveis locais
            const morning = document.querySelector("#morning")
            const afternoon = document.querySelector("#afternoon")
            const night = document.querySelector("#night")

            //Verificando cada botão checkbox para ver qual foi clicado
            checkboxs.forEach( async (check) =>  {
                    if (check.checked){

                        //Pegando o pai desse checkbox, ou seja o elemento que o cobre
                        let parent = check.parentNode
                        //Verificando se o valor dele está entr 9 e 12
                        if(Number(check.name) >=9 && Number(check.name) <= 12){
                            //Adicionando as informações do agendamento
                            p.textContent = user
                            strong.textContent = parent.textContent
                            div.append(p)
                            div.append(strong)
                            check.disabled = true
                            check.checked = false
                            morning.append(div)
                       }
                        //Verificando se está entr 13 e 18
                       else if (Number(check.name) >=13 && Number(check.name) <= 18){
                        //Adicionando informações do agendamento
                        p.textContent = user
                        strong.textContent = parent.textContent
                        div.append(p)
                        div.append(strong)
                        check.disabled = true
                        check.checked = false
                        afternoon.append(div)
                       }
                       //Verificando se está entre 19 e 21
                       else if(Number(check.name) >= 19 && Number(check.name) <=21){
                        //Adicionando informações do agendamento
                        p.textContent = user
                        strong.textContent = parent.textContent
                        div.append(p)
                        div.append(strong)
                        check.disabled = true
                        check.checked = false
                        night.append(div)
                       }

                       //Caso não ache, exibe essa mensagem para o usuário
                       else{
                        alert("Não foi possivel localizar os horários")
                       }
                  
                    }
                })
                
                //Verifca pela segunda vez se o campo "cliente" está vazio
                if(user === ""){
                    alert("Digite algo")
                }
                else{
                    //Espera carregar a função modulo, e adiciona os valores a API
                    await scheduleNew({
                        id,
                        user,
                        when,
                       })
                }

                
    }
    //pega e mostra um eventual erro no console
    catch(err){
        console.log(err)
    }
    }
    
}

//Fim