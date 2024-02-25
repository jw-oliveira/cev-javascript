function verificar () {
    var ano = new Date().getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Erro! Verifique os dados e tente novamente')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <10 ){
                img.setAttribute('src', 'foto-bebemenino.png')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'foto-homemjovem.png')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'foto-homemadulto.png')
            }
            else {
                img.setAttribute('src', 'foto-homemidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <10 ){
                img.setAttribute('src', 'foto-bebemenina.png')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'foto-mulherjovem.png')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'foto-mulheradulta.png')
            }
            else {
                img.setAttribute('src', 'foto-mulheridosa.png')                
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
        res.appendChild(img)
    
    }
}