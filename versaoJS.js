document.addEventListener('DOMContentLoaded', function (){
    const formulario = document.querySelector('form');

    formulario.addEventListener('submit', function (e){
        e.preventDefault();
        
        const inputTexto = document.querySelector('input').value;
        const listaUL = document.querySelector('ul');
        const novaTarefa = document.createElement('li')

        if(!inputTexto){
            alert('Preencha o campo');
            return;
        }

        novaTarefa.textContent = inputTexto;
        listaUL.appendChild(novaTarefa);

        novaTarefa.addEventListener('click', function(){
            this.classList.toggle('li-estilo');
        })

    })
})

