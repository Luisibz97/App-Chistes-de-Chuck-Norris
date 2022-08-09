import { obtenerChiste } from "./http-proiders";
let counter = 0;

    const body = document.body;
    let btnChiste, olList, btnReiniciar;

    const crearChistesHtml = () => {

        const html = `
        <h1 class="mt-5">Chistes</h1>
    <hr>

    <button class="btn btn-primary">Chiste</button>
    <input type="button" class="btn btn-primary" value="Reiniciar">

    <ol class="mt-2 list-group"> </ol>
        
        `;

        const divChistes =document.createElement('div');
        divChistes.innerHTML = html;

        body.append(divChistes);
    }

    const eventos = () => {
       
        olList  = document.querySelector('ol');
        btnChiste = document.querySelector('button');
        btnReiniciar = document.querySelector('input');
    

        btnChiste.addEventListener('click', async () => {
            btnChiste.disabled = true
            dibujarChiste( await obtenerChiste() );
            btnChiste.disabled = false

        });

        btnReiniciar.addEventListener('click', async () => {
            location.reload()
        })
    }


    // Chiste { id, value }
    const dibujarChiste = ( chiste ) => {
        if(counter >= 10){
            return confirm("REINICIAR?") && location.reload();
        }
        chiste.id = (`Chiste Random ${counter = counter + 1}` )
        const olItem = document.createElement('li');
        olItem.innerHTML = `<b>${ chiste.id } </b>: ${ chiste.value }`
        olItem.classList.add('list-group-item');
        olList.append(olItem);
    }


    export const init = () => {
        crearChistesHtml();
        eventos();
    }