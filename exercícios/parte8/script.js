var numeros = []

function Adicionar() {    
    let num = Number(document.getElementById('num').value)
    let lista = document.getElementById('numeros')
    let find = numeros.find((numero) => numero == num)

    if (find == num) {
        window.alert('Número já cadastrado, tente outro!')
    } else if (num > 0 && num <= 100) {
        document.getElementById('analise').innerHTML = ''
        numeros.push(num)
        let item = document.createElement('option')
        item.text = `Número ${num} adicionado`
        item.value = num
        lista.appendChild(item)
    } else {
        window.alert('Número precisa estar entre 1 e 100')
    }
    document.getElementById('num').value = ''
    document.getElementById('num').focus()
}

function Analisar() {
    if (numeros.length == 0) {
        window.alert('Não há valores adicionados. Adicione para continuar!')
    } else {
        const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
        const media = soma / numeros.length

        let analise = document.getElementById('analise')
        analise.innerHTML = `Ao todo temos ${numeros.length} números cadastrados<br>`
        analise.innerHTML += `O maior número informado foi ${Math.max.apply(null, numeros)}<br>`
        analise.innerHTML += `O menor número informado foi ${Math.min.apply(null, numeros)}<br>`
        analise.innerHTML += `Somando todos os valores temos ${soma}<br>`
        analise.innerHTML += `A média dos valores é igual a ${media.toFixed(2)}`
    }
    
}