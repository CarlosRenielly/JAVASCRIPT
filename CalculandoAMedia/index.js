function calcular(){
    const num = prompt(`Qual seu nome?`)
    const n1 = Number(prompt(`Qual a primeira nota de ${num}`))
    const n2 = Number(prompt(`Qual a segunda nota de ${num}`))
    med = (n1 + n2)/2

    let msg

    if(med >=6){
        msg = "Meus parabeéns!"
    }else {
        msg = "Estude mais.."
    }

    let res = document.getElementById("situaçao")
    res.innerHTML = `<p>Calculando a média final de <mark>${num}</mark></p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark> </p>`
    res.innerHTML += `<p>A média final será ${med} </p>`
    res.innerHTML += `<p>A mensagem que temos é ${msg}</p>`


}