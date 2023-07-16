let barra = document.querySelector("progress")
let picture = document.querySelector("picture")
let output = document.querySelector("output")
let p = document.querySelector("p")
let python = document.getElementById("Python")
let JavaScript = document.getElementById("JavaScript")
let cSharp = document.getElementById("C#") 
let C = document.getElementById("C++")
let body = document.querySelector("body")

var total = 4
var count = 0

setTimeout(()=>{
    picture.style.transform = "scaleY(1)"
    output.style.opacity = "1"
    p.style.transform = "scale(1)"
    p.style.opacity = "1"
}, 500)

python.addEventListener("load", ()=>{
    count += 1
    barra.value = Math.floor((count/total) * 100)
    output.textContent = barra.value + "%"
    console.log("cargo python")
})

JavaScript.addEventListener("load", ()=>{
    count += 1
    barra.value = Math.floor((count/total) * 100)
    output.textContent = barra.value + "%"
    console.log("cargo javascript")
})

cSharp.addEventListener("load", ()=>{
    count += 1
    barra.value = Math.floor((count/total) * 100)
    output.textContent = barra.value + "%"
    console.log("cargo c#")
})

C.addEventListener("load", ()=>{
    count += 1
    barra.value = Math.floor((count/total) * 100)
    output.textContent = barra.value + "%"
    console.log("cargo c++")
})

window.addEventListener("load", ()=>{
    setTimeout(()=>{body.style.backgroundColor = "black"; picture.style.opacity = 0}, 2000)
})

let python_p = document.getElementById("python_p")
let pythonB = document.querySelector("#pythonB")
let i = 0
let mensaje = `Python es el lenguaje de programación perfecto para aquellos que buscan simplicidad, versatilidad y eficiencia. Con su amplia disponibilidad de bibliotecas y frameworks, podrás desarrollar aplicaciones web, analizar datos, crear inteligencias artificiales y mucho más.`
let intervalo

let javascript_p = document.getElementById("javascript_p")
let javascriptB = document.getElementById("javascriptB")
let mensajeJ = `JavaScript es el lenguaje de programación esencial para el desarrollo web. Con su amplio alcance, bibliotecas y frameworks, JavaScript te ofrece las herramientas necesarias para crear experiencias interactivas en la web y aplicaciones multiplataforma de forma efectiva`

let cP = document.getElementById("c++_p")
let cB = document.getElementById("c++B")
let mensajeC = ` C++ es un lenguaje de programación poderoso y eficiente que ofrece un alto rendimiento, flexibilidad y control de bajo nivel. Su amplia adopción hace de C++ una opción confiable para una variedad de aplicaciones en diferentes campos. Si buscas desarrollar software de alto rendimiento y tener control total sobre tus programas, C++ es una opción sólida.`

let cSharpP = document.getElementById("c#_p")
let cSharpB = document.getElementById("c#B")
let mensajeSharp = `C# es un lenguaje de programación moderno y versátil que permite desarrollar aplicaciones de Windows y aplicaciones web utilizando el poderoso ecosistema .NET. Con su enfoque en la facilidad de uso y la productividad, junto con una comunidad activa y un sólido soporte, C# es una excelente elección para aquellos que desean crear aplicaciones robustas y de alto rendimiento en el entorno de Microsoft.`

function typed(mensaje, elemento1, elemento2, iterador = 0){
    intervalo = setInterval(()=>{
        if (elemento1.textContent == mensaje){
            elemento2.classList.add("opacidad")
            clearInterval(intervalo)
        }
        else{
            elemento1.textContent += mensaje[iterador]
            iterador++
        }
    },1)
}
python.addEventListener("mouseover", function (){
    typed(mensaje, python_p, pythonB, i)
    pythonB.textContent = "▮"
})

python.addEventListener("mouseout", ()=>{
    clearInterval(intervalo)
    python_p.textContent = ""
    pythonB.textContent = ""
})

JavaScript.addEventListener("mouseover", ()=>{
    typed(mensajeJ, javascript_p, javascriptB, i)
    javascriptB.textContent = "▮"
})

JavaScript.addEventListener("mouseout", ()=>{
    clearInterval(intervalo)
    javascript_p.textContent = ""
    javascriptB.textContent = ""
})

C.addEventListener("mouseover", ()=>{
    typed(mensajeC, cP, cB, i)
    cB.textContent = "▮"
})

C.addEventListener("mouseout", ()=>{
    clearInterval(intervalo)
    cP.textContent = ""
    cB.textContent = ""
})

cSharp.addEventListener("mouseover", ()=>{
    typed(mensajeSharp, cSharpP, cSharpB, i)
    cSharpB.textContent = "▮"
})

cSharp.addEventListener("mouseout", ()=>{
    clearInterval(intervalo)
    cSharpP.textContent = ""
    cSharpB.textContent = ""
})