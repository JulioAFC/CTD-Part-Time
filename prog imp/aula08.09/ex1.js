const contasBancarias = [
    {
        nConta:5486273622,
        tipoConta:"Conta Corrente",
        saldo:27771,
        titularConta:"Abigael Natte"
    },
    {
        nConta:1183971869,
        tipoConta:"Conta Poupança",
        saldo:8675,
        titularConta:"Ramon Connell"
    },
    {
        nConta:9582019689,
        tipoConta:"Conta Poupança",
        saldo:27363,
        titularConta:"Jarret Lafuente"
    },
    {
        nConta:1761924656,
        tipoConta:"Conta Poupança",
        saldo:32415,
        titularConta:"Ansel Ardley"
    },
    {
        nConta:7401971607,
        tipoConta:"Conta Poupança",
        saldo:18789,
        titularConta:"Jacki Shurmer"
    },
    {
        nConta:630841470,
        tipoConta:"Conta Corrente",
        saldo:28776,
        titularConta:"Jobi Mawtus"
    },
    {
        nConta:4223508636,
        tipoConta:"Conta Corrente",
        saldo:2177,
        titularConta:"Thomasin Latour"
    },
    {
        nConta:185979521,
        tipoConta:"Conta Poupança",
        saldo:25994,
        titularConta:"Lonnie Verheijden"
    },
    {
        nConta:3151956165,
        tipoConta:"Conta Corrente",
        saldo:7601,
        titularConta:"Alonso Wannan"
    },
    {
        nConta:2138105881,
        tipoConta:"Conta Poupança",
        saldo:33196,
        titularConta:"Bendite Huggett"
    },

]
console.log(contasBancarias);

function Conta(mNumero, mTipo, mSaldo, mTitular){
    this.numero = mNumero;
    this.tipo = mTipo;
    this.saldo = mSaldo;
    this.titular = mTitular;
}

let conta = new Conta(123, "Conta Corrente", 3000, "Lucas Feitosa")
console.log(conta);
/*passando os dados acima de cada conta, é só substituir na função construtora para gerar o registro no terminal!
let conta1 = ...
let conta2 = ...
.
.
.
*/

/*gerando lista de 3 contas
let lista = [conta, conta1, conta2];
console.log(lista);*/

/*let banco ={
    clientes:lista
}
console.log(banco.clientes);
*/

/*let banco = {
    clientes:lista,
    consultarCliente:function(nome){
        for(let i=0;i<this.clientes.length;i++){
            const cliente = this.clientes[i];
            if(cliente.titular ===nome){
                console.log(cliente);
                return cliente;
            }
        }
    }
    deposito:function(nome, valor){
        const cliente = this.consultarCliente(nome);
        cliente.saldo += valor;
        console.log("Depósito realizado, seu novo saldo é: "+ cliente.saldo);
    },
    saque:functio(nome, valor){
        const cliente = this.consultarCliente(nome);
        if(valor > cliente.saldo){
            console.log("Saldo insuficiente!");
        }
        else{
            cliente.saldo -= valor;
        }
    }
}
banco.consultarCliente("Lucas Feitosa");
banco.deposito("Bendite Huggett", 200.50);

console.log(conta);
*/
