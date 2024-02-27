let num = ['casa','carro']

num.push('bola', 'chave')

num.sort() 

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

console.log(num.length)

for (let c = 0; c < num.length; c++) {
    console.log(num[c])
}

for (let pos in num) {
    console.log(`O item ${num[pos]} está na posição ${pos}`)
}

let pos = num.indexOf('casa')
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}