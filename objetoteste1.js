const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome: 'SSD 1TB',
    preco: 1299,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}