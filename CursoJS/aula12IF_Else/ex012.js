var agora = new Date()
var minuto = agora.getMinutes()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas e ${minuto} minutos.`)
if ( hora < 12) {
    console.log('Bom dia!')
}else if (hora <= 18) {
    console.log('Boa tarde!')
}else {
    console.log('Boa noite e Bons Sonhos!')
}