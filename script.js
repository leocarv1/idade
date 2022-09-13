function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('ERRO - Verifique os dados e tente novamente')
    } else {
        var pool = document.getElementsByName('radniver')
        if (pool[0].checked){
            var idade = ano - Number(fano.value)        
        }
        else if (pool[1].checked){
            var idade = ano - Number(fano.value) - 1            
        }

       
        var fsex = document.getElementsByName('radsex')
        if (fsex[0].checked){
            res.innerHTML = `Você é um Homem de ${idade} anos.`
        } else if (fsex[1].checked) {
            res.innerHTML = `Você é uma Mulher de ${idade} anos.`
        }
        
    }
}