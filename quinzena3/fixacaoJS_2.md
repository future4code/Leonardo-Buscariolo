```
function calculaPrecoTotal(quantidade) {
  if (quantidade < 12) {
    let valorCompra = quantidade * 1.30;
    return valorCompra
    
  } else if (quantidade >= 12) {
    let valorCompra = quantidade * 1;
    return valorCompra
    
  };
}

```