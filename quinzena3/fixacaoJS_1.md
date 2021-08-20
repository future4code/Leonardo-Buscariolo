```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
let comissao = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05);
let salarioFixo = 2000;
let salarioTota = comissao + salarioFixo;
return salarioTota
}
```