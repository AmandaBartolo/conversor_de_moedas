function converter_dol()
{  
    var dolar = 5.07 //cotação do dia 08/03/2022
    var valor_real = parseFloat (document.getElementById ("real").value)

    valor_convertido = valor_real / dolar 
    valor_final = valor_convertido.toFixed(2)

    document.getElementById("resultado").innerHTML = "Seu valor em dólar é: $" + valor_final
}
function converter_eur()
{  
    var euro = 5.53 //cotação do dia 08/03/2022
    var valor_real = parseFloat (document.getElementById ("real").value)

    valor_convertido = valor_real / euro 
    valor_final = valor_convertido.toFixed(2)

    document.getElementById("resultado").innerHTML = "Seu valor em euro é: €" + valor_final
}
function converter_lib()
{  
    var libra = 6.63 //cotação do dia 08/03/2022
    var valor_real = parseFloat (document.getElementById ("real").value)

    valor_convertido = valor_real / libra 
    valor_final = valor_convertido.toFixed(2)

    document.getElementById("resultado").innerHTML = "Seu valor em libra é: £" + valor_final
}
function converter_iene()
{  
    var iene = 0.044 //cotação do dia 08/03/2022
    var valor_real = parseFloat (document.getElementById ("real").value)

    valor_convertido = valor_real / iene 
    valor_final = valor_convertido.toFixed(2)

    document.getElementById("resultado").innerHTML = "Seu valor em iene é: ¥" + valor_final
}
function converter_bc()
{  
    var bitcoin = 197265.06 //cotação do dia 08/03/2022
    var valor_real = parseFloat (document.getElementById ("real").value)

    valor_convertido = valor_real / bitcoin 
    valor_final = valor_convertido.toFixed(7)

    document.getElementById("resultado").innerHTML = "Seu valor em bitcoin é: ₿" + valor_final
}