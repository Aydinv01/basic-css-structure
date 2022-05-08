var input=prompt("Adiniz nedir?")
if (isNaN(input)){
    var elem=document.createElement("div")
    var today=new Date()
    var body=document.getElementById('boody')
    elem.innerHTML=`Kodluyoruz
        Merhaba ${input} Hos geldin
        ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}
      `
    body.appendChild(elem)
}
