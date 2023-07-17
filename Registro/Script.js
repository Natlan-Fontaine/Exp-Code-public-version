let barra = document.querySelector("progress")
let picture = document.querySelector("picture")
let output = document.querySelector("output")
let p = document.querySelector("p")
let python = document.getElementById("Python")
let JavaScript = document.getElementById("JavaScript")
let cSharp = document.getElementById("C#") 
let C = document.getElementById("C++")
let body = document.querySelector("body")

let pythonDiv = document.getElementById("pythonDiv")
let javascriptDiv = document.getElementById("javascriptDiv")
let cDiv = document.getElementById("c++Div")
let cSharpDiv = document.getElementById("c#Div")

let pythonSpan = document.querySelector("#pythonDiv span")
let pythonObject = document.querySelector("#pythonDiv object")
let javascriptSpan = document.querySelector("#javascriptDiv span")
let javascriptObject = document.querySelector("#javascriptDiv object")

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
    setTimeout(()=>{
        body.style.backgroundColor = "black"; 
        picture.style.opacity = 0;
        body.style.animationName = "scrollAnimation"
        pythonDiv.style.transform = "scale(1)"; pythonDiv.style.top = "-20%"
        setTimeout(()=>{javascriptDiv.style.transform = "scale(1)"; javascriptDiv.style.top = "-20%"}, 50)
        setTimeout(()=>{cDiv.style.transform = "scale(1)"; cDiv.style.top = "-20%"}, 100)
        setTimeout(()=>{cSharpDiv.style.transform = "scale(1)"; cSharpDiv.style.top = "-20%"}, 150)
        setTimeout(()=>{body.style.animationName = "none"}, 2000)
        setTimeout(()=>{body.style.animationName = "none"; window.scrollTo({left: 465})}, 2000)
    }, 2000)
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

function mouseoverPython(){typed(mensaje, python_p, pythonB, i); pythonB.textContent = "▮"}

pythonDiv.addEventListener("mouseover", mouseoverPython)

pythonDiv.addEventListener("mouseout", ()=>{
    clearInterval(intervalo)
    python_p.textContent = ""
    pythonB.textContent = ""
})

function mouseoverJavascript(){typed(mensajeJ, javascript_p, javascriptB, i); javascriptB.textContent = "▮"}

javascriptDiv.addEventListener("mouseover",  mouseoverJavascript)

javascriptDiv.addEventListener("mouseout", ()=>{
    clearInterval(intervalo)
    javascript_p.textContent = ""
    javascriptB.textContent = ""
})

function mouseoverC(){typed(mensajeC, cP, cB, i); cB.textContent = "▮"}

cDiv.addEventListener("mouseover", mouseoverC)

cDiv.addEventListener("mouseout", ()=>{
    clearInterval(intervalo)
    cP.textContent = ""
    cB.textContent = ""
})

function mouseoverCsharp(){typed(mensajeSharp, cSharpP, cSharpB, i); cSharpB.textContent = "▮"}

cSharpDiv.addEventListener("mouseover", mouseoverCsharp)

cSharpDiv.addEventListener("mouseout", ()=>{
    clearInterval(intervalo)
    cSharpP.textContent = ""
    cSharpB.textContent = ""
})


function javascriptClick(){
    javascriptDiv.style.transform = "scale(1)"
    javascriptSpan.style.height = "170vh"
    javascriptSpan.style.width = "190vw"
    JavaScript.style.height = "130vh"
    JavaScript.style.width = "100vh"
    JavaScript.style.top = "20%"
    JavaScript.style.left = "0"
    window.scrollTo({left: 300, behavior: "smooth"})
    body.style.overflowX = "hidden"
    javascriptObject.style.width = "190vw"
    javascriptObject.style.height = "150vh"
    pythonDiv.style.zIndex = "40"
    pythonDiv.style.top = "40%"
    pythonDiv.style.left = "50%"
    pythonDiv.style.transform = "scale(.3)"
    setTimeout(()=>{cDiv.style.top = "40%"; cDiv.style.left = "-5.5%"; cDiv.style.transform = "scale(.3)"}, 50)
    setTimeout(()=>{cSharpDiv.style.top = "40%"; 
    cSharpDiv.style.left = "-20.5%"; 
    cSharpDiv.style.transform = "scale(.3)"}, 100)
    pythonDiv.removeEventListener("mouseover", mouseoverPython)
    cDiv.removeEventListener("mouseover", mouseoverC)
    cSharpDiv.removeEventListener("mouseover", mouseoverCsharp)
}
function javascriptClickInClick(){
    javascriptDiv.style.transform = "scale(1)"
    javascriptSpan.style.height = "1500px"
    javascriptSpan.style.width = "2500px"
    JavaScript.style.height = "1053px"
    JavaScript.style.width = "1053px"
    JavaScript.style.transform = "translate(-45%, -25%)"
    javascriptObject.style.width = "2080px"
    javascriptObject.style.height = "1800px"
    pythonSpan.style.height = "396px"
    pythonSpan.style.width = "324px"
    python.style.width = "288px"
    python.style.height = "360px"
    python.style.inset = "0% 0%"
    pythonObject.style.height = "360px"
    pythonObject.style.width = "288px"
    pythonDiv.style.zIndex = "40"
    pythonDiv.style.top = "39%"
    pythonDiv.style.left = "30%"
    pythonDiv.style.transform = "scale(.3)"
}

pythonDiv.addEventListener("click", ()=>{
    pythonDiv.style.transform = "scale(1)"
    pythonSpan.style.height = "1500px"
    pythonSpan.style.width = "2500px"
    python.style.height = "1053px"
    python.style.width = "1053px"
    python.style.inset = "15vw 35vh"
    window.scrollTo({left: "0", behavior: "smooth"})
    body.style.overflowX = "hidden"
    pythonObject.style.width = "2080px"
    pythonObject.style.height = "1800px"
    javascriptDiv.style.top = "39%"
    javascriptDiv.style.left = "5%"
    javascriptDiv.style.transform = "scale(.3)"
    setTimeout(()=>{cDiv.style.top = "39%"; cDiv.style.left = "-15%"; cDiv.style.transform = "scale(.3)"}, 50)
    setTimeout(()=>{cSharpDiv.style.top = "39%"; 
    cSharpDiv.style.left = "-35%"; 
    cSharpDiv.style.transform = "scale(.3)"}, 100)
    javascriptDiv.removeEventListener("mouseover", mouseoverJavascript)
    cDiv.removeEventListener("mouseover", mouseoverC)
    cSharpDiv.removeEventListener("mouseover", mouseoverCsharp)
    pythonDiv.removeEventListener("mouseover", mouseoverPython)

    javascriptDiv.removeEventListener("click", javascriptClick)
    javascriptDiv.addEventListener("click", javascriptClickInClick)
})

javascriptDiv.addEventListener("click", javascriptClick)