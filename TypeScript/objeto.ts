interface IFornecedor {
    id: number
    nome: string
    email: string
    fone: string
    cpf:(string | number)
}

var fornecedor: IFornecedor = {id:0,nome:'',email:'',fone:'',cpf:''}

fornecedor.id = 10
fornecedor.nome = 'Skol'
fornecedor.email = 'ambevtec@gmail.com'
fornecedor.fone = '112-222'
fornecedor.cpf = 321

console.log(fornecedor)
