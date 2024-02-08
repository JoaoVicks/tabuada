let numero = document.querySelector('#inumero');
let multiplicador = document.querySelector('#imultiplicando')
let btn = document.querySelector('#btn-calcular')
const containerTabuada = document.querySelector('.container-tabuada')
const span = document.querySelector('#ispan')
//Funções
const createTable = (numero,multiplication)=>{
    containerTabuada.innerHTML="";
    
    span.textContent=numero

    for (let numeroAtual = 1; numeroAtual <= multiplication; numeroAtual++) {
        
    const templateEmStr = ` <div class="row">
    <p class="conta">${numero} x ${multiplication} = <span class="resultado">${numero*multiplication}</span></p>
</div>`;

const parse = new DOMParser()
const htmlTemplate = parse.parseFromString(templateEmStr , 'text/html')
const row = htmlTemplate.querySelector(".row")
containerTabuada.appendChild(row)


    }

}


//Evento
btn.addEventListener('click', (e) => {
    e.preventDefault()

    let multiplicandoPor = +multiplicador.value
    let numeroMultiplicado = +numero.value

    if (!numeroMultiplicado) {
        numero.style.backgroundColor = "rgba(255, 63, 63, 0.954)"
    }
    else if (!multiplicandoPor) {
        multiplicador.style.backgroundColor = "rgba(255, 63, 63, 0.954)"
    }
    else if (!multiplicandoPor && !numeroMultiplicado) {
        multiplicador.style.backgroundColor = "rgba(255, 63, 63, 0.954)"
        numero.style.backgroundColor = "rgba(255, 63, 63, 0.954)"
    }
    else {
       
        numero.style.backgroundColor = "#fff"
        multiplicador.style.backgroundColor = "#fff"
        createTable(numeroMultiplicado,multiplicandoPor)
}
}
)

