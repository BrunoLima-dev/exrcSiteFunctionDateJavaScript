function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()   
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'solamanha.png'
        document.body.style.background = '#f1b760'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'soldatarde.png'
        document.body.style.background = '#fee55a'
    } else {
        //Boa Noite!
        img.src = 'lua.png'
        document.body.style.background = '#707072'
    }
}
function minhaFuncao() {
    document.getElementById("bemVindo").innerHTML = "<h1>Seja Bem Vindo!</h1>"
}


