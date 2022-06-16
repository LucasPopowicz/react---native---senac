interface ICompras {
    id: number
    produto:[{
    descricao: string
    quantidade: number
    valor: string
    },{
        descricao: string
        quantidade: number
        valor: string
        }]
}

var compras: ICompras = {id:0, produto:[{descricao:'',quantidade:6,valor:''},{descricao:'',quantidade:6,valor:''}]}

compras.id = 1
compras.produto[0].descricao = 'Teclado'
compras.produto[0].quantidade = 3
compras.produto[0].valor = '160,65'

compras.produto[1].descricao = 'Monitor'
compras.produto[1].quantidade = 6
compras.produto[1].valor = '190,65'

console.log(compras)
