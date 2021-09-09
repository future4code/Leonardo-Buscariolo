```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let totalSoma = 0;
    for (valor of arrayDeNumeros) {
      if (valor === numeroEscolhido) {
        totalSoma = totalSoma + 1;
      } else if ( valor !== numeroEscolhido) {
        totalSoma = totalSoma;
      }
    }
    if (totalSoma > 0) {
        return `O número ${numeroEscolhido} aparece ${totalSoma}x`;
    } else if (totalSoma === 0) {
        return `Número não encontrado`;
    }
}
```