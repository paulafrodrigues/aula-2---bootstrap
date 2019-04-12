let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let telefone = document.querySelector("#tel");
let mensagem = document.querySelector("#mensagem");

const botao = document.querySelector("#enviar");

botao.addEventListener('click', function(evento){
    evento.preventDefault();
    if (nome.value=== undefined || 
        nome.value=== null ||
        nome.value.trim()=== "" || 
        nome.value.length<0){
        nome.focus();
        alert('Preencha o campo nome corretamente!')
        return false;
        }else if 
            (email.value=== undefined || 
             email.value=== null ||
             email.value.trim()=== "" || 
             email.value.indexOf('@')===-1){
             email.focus();
             alert('Preencha o campo e-mail corretamente!')
             return false;
        } else if
            (telefone.value=== undefined || 
            telefone.value=== null ||
            telefone.value.trim()=== "" || 
            telefone.value.length<11){
            telefone.focus();
            alert('Preencha o campo de telefone corretamente!')
            return false;         
    }else if
            (mensagem.value=== undefined ||
            mensagem.value=== null ||
            mensagem.value.trim()=== "" ||
            mensagem.value.length<=10){
            mensagem.focus();
            alert('Preencha a sua mensagem!')
            return false;
            }
    document.querySelector('form').submit()
    alert('Orçamento enviado com sucesso')
})