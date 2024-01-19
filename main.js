
$(document).ready(function(){
    $('form').on('submit', function (e){
        e.preventDefault();
        const inputTexto = $('input').val();
    if(!inputTexto){
        alert('preencha o campo')
        return
    }


        const novaTarefa = $(`<li>${inputTexto}</li>`);
        novaTarefa.appendTo($('ul'));
        
        $(novaTarefa).click(function(){
            $(this).toggleClass("li-estilo") 
        })
    })

    
})

