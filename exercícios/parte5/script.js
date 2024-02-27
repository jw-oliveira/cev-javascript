function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('result')
    res.innerHTML = ''

    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('Erro! Faltam dados!') 
    } else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p == 0) {
            window.alert('Passo inválido, considerando passo 1')
            p = 1
        }

        if (i < f) {   
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c}`
                if (c != fim) {
                    res.innerHTML += '&#x1F449'
                }
            }
        } else {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c}`
                if (c != fim) {
                    res.innerHTML += '&#x1F449'
                }
            }
        }
    }
    res.innerHTML += '&#x1F3C1'   
}
