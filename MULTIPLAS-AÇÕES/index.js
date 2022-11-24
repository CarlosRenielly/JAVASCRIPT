function acoes (){
    const n1 = Number(prompt("Por gentileza, inform o numero que deseja calcular"))
    const n2 = Number(prompt("Por gentileza, inform o segundo numero que deseja calcular"))
    const op = Number(prompt(`Valores informados ${n1} e ${n2}\n Informe qual opção deseja \n [1] Somar?\n [2] Subtrair?\n [3] Dividir?\n [4] Multiplicar\n`))

    let res = document.getElementById("res")
    res.innerHTML = `<h2>Calculando...</h2>`
    switch(op) {
        case 1:
            res.innerHTML += `<p> a Soma dos numeros: ${n1} + ${n2} = ${n1+n2}`
            break
        case 2:
            res.innerHTML += `<p> a Subtração dos nuneros ${n1}-${n2} = ${n1-n2}`
            break
        case 3:
            res.innerHTML += `<p> a Divisão dos numeros ${n1} / ${n2} = ${n1/n2}`
            break
        case 4:
            res.innerHTML += `<p> a Multiplicação dos numeros ${n1} * ${n2} = ${n1*n2}`
            break
            default:
                res.innerHTML += `<p> Opção invalida, por favor verifique e tente novamente.`

            

    }
}