let body = document.querySelector("body")

let barraCarga = document.querySelector("progress")
let output = document.querySelector("output")
let picture = document.querySelector("picture")
let h1 = document.querySelector("h1")

let pythonImg = document.getElementById("Python")
let javascriptImg = document.getElementById("JavaScript")
let cImg = document.getElementById("C++")
let cSharpImg = document.getElementById("C#")
let video = document.querySelector("video")
let section = document.querySelector("section")

let pythonDiv = document.getElementById("pythonDiv")
let javascriptDiv = document.getElementById("javascriptDiv")
let cDiv = document.getElementById("cDiv")
let cSharpDiv = document.getElementById("cSharpDiv")

let pythonP = document.getElementById("python_p")
let pythonB = document.getElementById("pythonB")
let mensajeP = `Python es el lenguaje de programación perfecto para aquellos que buscan simplicidad, versatilidad y eficiencia. 
on su amplia disponibilidad de bibliotecas y frameworks, podrás desarrollar aplicaciones web, analizar datos, crear inteligencias artificiales 
y mucho más.`

let javascriptP = document.getElementById("javascript_p")
let javascriptB = document.getElementById("javascriptB")
let mensajeJ = `JavaScript es el lenguaje de programación esencial para el desarrollo web. 
Con su amplio alcance, bibliotecas y frameworks, JavaScript te ofrece las herramientas necesarias para crear experiencias interactivas en la 
web y aplicaciones multiplataforma de forma efectiva`

let cP = document.getElementById("c++_p")
let cB = document.getElementById("c++B")
let mensajeC = `C++ es un lenguaje de programación poderoso y eficiente que ofrece un alto rendimiento, flexibilidad y control de bajo nivel. 
Su amplia adopción hace de C++ una opción confiable para una variedad de aplicaciones en diferentes campos. Si buscas desarrollar software de alto rendimiento y tener control total sobre tus programas, C++ es una opción sólida.`

let cSharpP = document.getElementById("c#_p")
let cSharpB = document.getElementById("c#B")
let mensajeCsharp = `C# es un lenguaje de programación moderno y versátil que permite desarrollar aplicaciones de Windows y aplicaciones web 
utilizando el poderoso ecosistema .NET. Con su enfoque en la facilidad de uso y la productividad, junto con una comunidad activa y un sólido 
soporte, C# es una excelente elección para aquellos que desean crear aplicaciones robustas y de alto rendimiento en el entorno de Microsoft.`

let elementosTotales = 5
let elementosCargados = 0

let desicionDiv = document.getElementById("desicion")
let lenguaje = document.getElementById("lenguaje")
let cancelar = document.getElementById("cancel")
let aceptar = document.getElementById("aceptar")
let luces = document.querySelector("#desicion map")

h1.style.opacity = 1
picture.style.transform = "scaleY(1)"
output.style.opacity = 1

let i = 0
let intervalo

let changes

var div
var posicion

let course

function accept(){
    section.style.transform = "scaleY(.01)"
    desicionDiv.style.animation = "neon 3s cubic-bezier(1, 0.01, 0, 1.01) reverse forwards"
    setTimeout(()=>{
    section.style.transform = "scaleY(0.01) scaleX(0)"}, 200)
    setTimeout(()=>{desicionDiv.style.scale = "0"}, 3000)
}
function typed(mensaje, parrafo, etiquetaB) {
    etiquetaB.textContent = "▮";
    intervalo = setInterval(() => {
        if (parrafo.textContent.length >= mensaje.length) {
            etiquetaB.classList.add("opacidad");
            clearInterval(intervalo);
        } else {
            parrafo.textContent += mensaje[i];
            i++;
        }
    }, 1);
}

function elementoCarga(){
    elementosCargados += 1
    let porcentaje = Math.floor((elementosCargados/elementosTotales)*100)
    barraCarga.value = porcentaje
    output.textContent = porcentaje + "%"
}

function pythonClick(){
    window.scrollTo({left: "0", behavior: "smooth"})
    pythonDiv.classList.add("omega")
    pythonDiv.children[0].style.opacity = "1"

    div = pythonDiv

    javascriptDiv.removeEventListener("click", javascriptClick)
    cDiv.removeEventListener("click", cClick)
    cSharpDiv.removeEventListener("click", cSharpClick)

    javascriptDiv.addEventListener("click", javascriptClickInClick)
    cDiv.addEventListener("click", cClickInClick)
    cSharpDiv.addEventListener("click", cSharpClickInClik)

    pythonDiv.removeAttribute("style");
    javascriptDiv.classList.add("tiny");
    javascriptDiv.removeAttribute("style");
    javascriptDiv.style.left = "55vw";
    javascriptDiv.children[0].style.opacity = "1";

    cDiv.classList.add("tiny");
    cDiv.removeAttribute("style");
    cDiv.style.left = "63vw";
    cDiv.children[0].style.opacity = "1";

    cSharpDiv.classList.add("tiny");
    cSharpDiv.removeAttribute("style");
    cSharpDiv.style.left = "71vw";
    cSharpDiv.children[0].style.opacity = "1";

    desicionDiv.style.opacity = "1"
    desicionDiv.style.transform = "scale(1)"
    lenguaje.textContent = "Python"
    desicionDiv.style.animation = "neon 3s cubic-bezier(1, 0.01, 0, 1.01)"
    cancelar.style.transform = "scale(1)"
    aceptar.style.transform = "scale(1)"
    luces.style.transform = "perspective(125px) rotateX(45deg) scale(1)"
    cancelar.addEventListener("click", cancelPython)
    aceptar.addEventListener("click", accept)
    
    course = "python"
}

function cancelPython(){
    div = 0

    pythonDiv.removeEventListener("click", pythonClickInClick)
    pythonDiv.classList.remove("omega")
    pythonDiv.style.left = "20vw"
    pythonDiv.style.top = "-20%"
    pythonDiv.style.transform = "scale(1)"
    pythonDiv.children[0].style.opacity = "0"


    javascriptDiv.removeEventListener("click", javascriptClickInClick)
    javascriptDiv.classList.remove("tiny")
    javascriptDiv.style.left = "55vw"
    javascriptDiv.style.top = "-20%"
    javascriptDiv.style.transform = "scale(1)"
    javascriptDiv.children[0].style.opacity = "0"

    cDiv.removeEventListener("click", cClickInClick)
    cDiv.classList.remove("tiny")
    cDiv.style.left = "90vw"
    cDiv.style.top = "-20%"
    cDiv.style.transform = "scale(1)"
    cDiv.children[0].style.opacity = "0"

    cSharpDiv.removeEventListener("click", cSharpClickInClik)
    cSharpDiv.classList.remove("tiny")
    cSharpDiv.style.left = "125vw"
    cSharpDiv.style.top = "-20%"
    cSharpDiv.style.transform = "scale(1)"
    cSharpDiv.children[0].style.opacity = "0"

    cancelar.style.transform = "scaleY(0)"
    aceptar.style.transform = "scaleY(0)"
    luces.style.transform = "perspective(125px) rotateX(45deg) scaleY(0)"

    setTimeout(()=>{
        desicionDiv.style.transform = "scale(0)"
    desicionDiv.style.animation = "none"
    javascriptDiv.addEventListener("click", javascriptClick)
    cDiv.addEventListener("click", cClick)
    cSharpDiv.addEventListener("click", cSharpClick)
    pythonDiv.addEventListener("click", pythonClick)
    }, 200)
}

function pythonClickInClick(){
    posicion = pythonDiv.style.left
    pythonDiv.classList.remove("tiny")
    pythonDiv.removeAttribute("style")
    pythonDiv.classList.add("omega")

    div.classList.remove("omega")
    div.removeAttribute("style")
    div.classList.add("tiny")
    div.style.left = posicion

    div = pythonDiv

    typography(lenguaje, "Python")

    cancelar.removeEventListener("click", cancelJavaScript)
    cancelar.removeEventListener("click", cancelC)
    cancelar.removeEventListener("click", cancelCsharp)

    javascriptDiv.removeEventListener("click", javascriptClick)
    cDiv.removeEventListener("click", cClick)
    cSharpDiv.removeEventListener("click", cSharpClick)

    cancelar.addEventListener("click", cancelPython)
    javascriptDiv.addEventListener("click", javascriptClickInClick)
    cDiv.addEventListener("click", cClickInClick)
    cSharpDiv.addEventListener("click", cSharpClickInClik)
}
function javascriptClick(){
    window.scrollTo({left: 0, behavior: "smooth"})
    javascriptDiv.classList.add("omega")
    javascriptDiv.children[0].style.opacity = "1"

    div = javascriptDiv

    pythonDiv.addEventListener("click", pythonClickInClick)
    cDiv.addEventListener("click", cClickInClick)
    cSharpDiv.addEventListener("click", cSharpClickInClik)

    cancelar.removeEventListener("click", cancelPython)
    pythonDiv.removeEventListener("click", pythonClick)
    cDiv.removeEventListener("click", cClick)
    cSharpDiv.removeEventListener("click", cSharpClick)
    
    javascriptDiv.removeAttribute("style")
    pythonDiv.classList.add("tiny")
    pythonDiv.removeAttribute("style")
    pythonDiv.style.left = "55vw"
    pythonDiv.children[0].style.opacity = "1"
    
    cDiv.classList.add("tiny"); 
    cDiv.removeAttribute("style"); 
    cDiv.style.left = "63vw"; 
    cDiv.children[0].style.opacity = "1"
    
    cSharpDiv.classList.add("tiny"); 
    cSharpDiv.removeAttribute("style"); 
    cSharpDiv.style.left = "71vw"; 
    cSharpDiv.children[0].style.opacity = "1"
    

    desicionDiv.style.opacity = "1"
    desicionDiv.style.transform = "scale(1)"
    lenguaje.textContent = "JavaScript"
    desicionDiv.style.animation = "neon 3s cubic-bezier(1, 0.01, 0, 1.01)"
    cancelar.style.transform = "scale(1)"
    aceptar.style.transform = "scale(1)"
    luces.style.transform = "perspective(125px) rotateX(45deg) scale(1)"
    cancelar.addEventListener("click", cancelJavaScript)
}

function cancelJavaScript(){
    div = 0

    javascriptDiv.removeEventListener("click", javascriptClickInClick)
    javascriptDiv.classList.remove("omega")
    javascriptDiv.style.left = "55vw"
    javascriptDiv.style.top = "-20%"
    javascriptDiv.style.transform = "scale(1)"
    javascriptDiv.children[0].style.opacity = "0"

    cDiv.removeEventListener("click", cClickInClick)
    cDiv.classList.remove("tiny")
    cDiv.style.left = "90vw"
    cDiv.style.top = "-20%"
    cDiv.style.transform = "scale(1)"
    cDiv.children[0].style.opacity = "0"
    
    pythonDiv.removeEventListener("click", pythonClickInClick)
    pythonDiv.classList.remove("tiny")
    pythonDiv.style.left = "20vw"
    pythonDiv.style.top = "-20%"
    pythonDiv.style.transform = "scale(1)"
    pythonDiv.children[0].style.opacity = "0"
   
    cSharpDiv.removeEventListener("click", cSharpClickInClik)
    cSharpDiv.classList.remove("tiny")
    cSharpDiv.style.left = "125vw"
    cSharpDiv.style.top = "-20%"
    cSharpDiv.style.transform = "scale(1)"
    cSharpDiv.children[0].style.opacity = "0"


    cancelar.style.transform = "scaleY(0)"
    aceptar.style.transform = "scaleY(0)"
    luces.style.transform = "perspective(125px) rotateX(45deg) scaleY(0)"
    
    setTimeout(()=>{
        desicionDiv.style.transform = "scale(0)"
    desicionDiv.style.animation = "none"
    pythonDiv.addEventListener("click", pythonClick)
    javascriptDiv.addEventListener("click", javascriptClick)
    cDiv.addEventListener("click", cClick)
    cSharpDiv.addEventListener("click", cSharpClick)
    }, 200)
}

function javascriptClickInClick(){
    posicion = javascriptDiv.style.left
    javascriptDiv.classList.remove("tiny")
    javascriptDiv.removeAttribute("style")
    javascriptDiv.classList.add("omega")

    div.classList.remove("omega")
    div.removeAttribute("style")
    div.classList.add("tiny")
    div.style.left = posicion

    div = javascriptDiv

    typography(lenguaje, "JavaScript")
    
    cancelar.removeEventListener("click", cancelPython)
    cancelar.removeEventListener("click", cancelC)
    cancelar.removeEventListener("click", cancelCsharp)

    pythonDiv.removeEventListener("click", pythonClick)
    cDiv.removeEventListener("click", cClick)
    cSharpDiv.removeEventListener("click", cSharpClick)

    cancelar.addEventListener("click", cancelJavaScript)
    pythonDiv.addEventListener("click", pythonClickInClick)
    cDiv.addEventListener("click", cClickInClick)
    cSharpDiv.addEventListener("click", cSharpClickInClik)
}

function cClick(){
    window.scrollTo({left: 0, behavior: "smooth"})
    cDiv.classList.add("omega")
    cDiv.removeAttribute("style")
    cDiv.children[0].style.opacity = "1"

    div = cDiv

    pythonDiv.addEventListener("click", pythonClickInClick)
    javascriptDiv.addEventListener("click", javascriptClickInClick)
    cSharpDiv.addEventListener("click", cSharpClickInClik)

    pythonDiv.removeEventListener("click", pythonClick)
    javascriptDiv.removeEventListener("click", javascriptClick)
    cSharpDiv.removeEventListener("click", cSharpClick)

    pythonDiv.classList.add("tiny")
    pythonDiv.removeAttribute("style")
    pythonDiv.style.left = "55vw"
    pythonDiv.children[0].style.opacity = "1"
    
    javascriptDiv.classList.add("tiny")
    javascriptDiv.removeAttribute("style")
    javascriptDiv.style.left = "63vw"
    javascriptDiv.children[0].style.opacity = "1"

    cSharpDiv.classList.add("tiny"); 
    cSharpDiv.removeAttribute("style"); 
    cSharpDiv.style.left = "71vw"; 
    cSharpDiv.children[0].style.opacity = "1"
    

    desicionDiv.style.opacity = "1"
    desicionDiv.style.transform = "scale(1)"
    lenguaje.textContent = "C++"
    desicionDiv.style.animation = "neon 3s cubic-bezier(1, 0.01, 0, 1.01)"
    cancelar.style.transform = "scale(1)"
    aceptar.style.transform = "scale(1)"
    luces.style.transform = "perspective(125px) rotateX(45deg) scale(1)"
    cancelar.addEventListener("click", cancelC)
}

function cancelC(){
    div = 0

    cDiv.removeEventListener("click", cClickInClick)
    cDiv.classList.remove("omega")
    cDiv.style.left = "90vw"
    cDiv.style.top = "-20%"
    cDiv.style.transform = "scale(1)"
    cDiv.children[0].style.opacity = "0"
    
    pythonDiv.removeEventListener("click", pythonClickInClick)
    pythonDiv.classList.remove("tiny")
    pythonDiv.style.left = "20vw"
    pythonDiv.style.top = "-20%"
    pythonDiv.style.transform = "scale(1)"
    pythonDiv.children[0].style.opacity = "0"
    
    javascriptDiv.removeEventListener("click", javascriptClickInClick)
    javascriptDiv.classList.remove("tiny")
    javascriptDiv.style.left = "55vw"
    javascriptDiv.style.top = "-20%"
    javascriptDiv.style.transform = "scale(1)"
    javascriptDiv.children[0].style.opacity = "0"
    
    cSharpDiv.removeEventListener("click", cSharpClickInClik)
    cSharpDiv.classList.remove("tiny")
    cSharpDiv.style.left = "125vw"
    cSharpDiv.style.top = "-20%"
    cSharpDiv.style.transform = "scale(1)"
    cSharpDiv.children[0].style.opacity = "0"
    

    cancelar.style.transform = "scaleY(0)"
    aceptar.style.transform = "scaleY(0)"
    luces.style.transform = "perspective(125px) rotateX(45deg) scaleY(0)"

    
    setTimeout(()=>{
        desicionDiv.style.transform = "scale(0)"
    desicionDiv.style.animation = "none"
    pythonDiv.addEventListener("click", pythonClick)
    javascriptDiv.addEventListener("click", javascriptClick)
    cDiv.addEventListener("click", cClick)
    cSharpDiv.addEventListener("click", cSharpClick)
    }, 200)
}

function cClickInClick(){
    posicion = cDiv.style.left
    cDiv.classList.remove("tiny")
    cDiv.removeAttribute("style")
    cDiv.classList.add("omega")

    div.classList.remove("omega")
    div.removeAttribute("style")
    div.classList.add("tiny")
    div.style.left = posicion

    div = cDiv

    typography(lenguaje, "C++")

    cancelar.removeEventListener("click", cancelPython)
    cancelar.removeEventListener("click", cancelJavaScript)
    cancelar.removeEventListener("click", cancelCsharp)

    pythonDiv.removeEventListener("click", pythonClick)
    javascriptDiv.removeEventListener("click", javascriptClick)
    cSharpDiv.removeEventListener("click", cSharpClick)

    cancelar.addEventListener("click", cancelC)
    pythonDiv.addEventListener("click", pythonClickInClick)
    javascriptDiv.addEventListener("click", javascriptClickInClick)
    cSharpDiv.addEventListener("click", cSharpClickInClik)
}

function cSharpClick(){
    console.log("se ejecuto la funcion")
    window.scrollTo({left: "0", behavior: "smooth"})
    cSharpDiv.classList.add("omega")
    cSharpDiv.children[0].style.opacity = "1"

    div = cSharpDiv

    pythonDiv.removeEventListener("click", pythonClick)
    javascriptDiv.removeEventListener("click", javascriptClick)
    cDiv.removeEventListener("click", cClick)

    pythonDiv.addEventListener("click", pythonClickInClick)
    javascriptDiv.addEventListener("click", javascriptClickInClick)
    cDiv.addEventListener("click", cClickInClick)

    cSharpDiv.removeAttribute("style")
    pythonDiv.classList.add("tiny")
    pythonDiv.removeAttribute("style")
    pythonDiv.style.left = "55vw"
    pythonDiv.children[0].style.opacity = "1"

    javascriptDiv.classList.add("tiny");
    javascriptDiv.removeAttribute("style");
    javascriptDiv.style.left = "63vw";
    javascriptDiv.children[0].style.opacity = "1";

    cDiv.classList.add("tiny");
    cDiv.removeAttribute("style");
    cDiv.style.left = "71vw";
    cDiv.children[0].style.opacity = "1";

    desicionDiv.style.opacity = "1"
    desicionDiv.style.transform = "scale(1)"
    lenguaje.textContent = "C#"
    desicionDiv.style.animation = "neon 3s cubic-bezier(1, 0.01, 0, 1.01)"
    cancelar.style.transform = "scale(1)"
    aceptar.style.transform = "scale(1)"
    luces.style.transform = "perspective(125px) rotateX(45deg) scale(1)"
    cancelar.addEventListener("click", cancelCsharp)
}

function cancelCsharp(){
    div = 0

    cSharpDiv.removeEventListener("click", cSharpClickInClik)
    cSharpDiv.classList.remove("omega")
    cSharpDiv.style.left = "125vw"
    cSharpDiv.style.top = "-20%"
    cSharpDiv.style.transform = "scale(1)"
    cSharpDiv.children[0].style.opacity = "0"

    pythonDiv.removeEventListener("click", pythonClickInClick)
    pythonDiv.classList.remove("tiny")
    pythonDiv.style.left = "20vw"
    pythonDiv.style.top = "-20%"
    pythonDiv.style.transform = "scale(1)"
    pythonDiv.children[0].style.opacity = "0"

    javascriptDiv.removeEventListener("click", javascriptClickInClick)
    javascriptDiv.classList.remove("tiny")
    javascriptDiv.style.left = "55vw"
    javascriptDiv.style.top = "-20%"
    javascriptDiv.style.transform = "scale(1)"
    javascriptDiv.children[0].style.opacity = "0"

    cDiv.removeEventListener("click", cClickInClick)
    cDiv.classList.remove("tiny")
    cDiv.style.left = "90vw"
    cDiv.style.top = "-20%"
    cDiv.style.transform = "scale(1)"
    cDiv.children[0].style.opacity = "0"

    cancelar.style.transform = "scaleY(0)"
    aceptar.style.transform = "scaleY(0)"
    luces.style.transform = "perspective(125px) rotateX(45deg) scaleY(0)"


    setTimeout(()=>{
        desicionDiv.style.transform = "scale(0)"
    desicionDiv.style.animation = "none"
    pythonDiv.addEventListener("click", pythonClick)
    javascriptDiv.addEventListener("click", javascriptClick)
    cDiv.addEventListener("click", cClick)
    cSharpDiv.addEventListener("click", cSharpClick)
    }, 200)
}

function cSharpClickInClik(){
    posicion = cSharpDiv.style.left
    cSharpDiv.classList.remove("tiny")
    cSharpDiv.removeAttribute("style")
    cSharpDiv.classList.add("omega")

    div.classList.remove("omega")
    div.removeAttribute("style")
    div.classList.add("tiny")
    div.style.left = posicion

    div = cSharpDiv

    typography(lenguaje, "C#")

    cancelar.removeEventListener("click", cancelPython)
    cancelar.removeEventListener("click", cancelC)
    cancelar.removeEventListener("click", cancelJavaScript)

    pythonDiv.removeEventListener("click", pythonClick)
    javascriptDiv.removeEventListener("click", javascriptClick)
    cDiv.removeEventListener("click", cClick)

    cancelar.addEventListener("click", cancelCsharp)
    pythonDiv.addEventListener("click", pythonClickInClick)
    javascriptDiv.addEventListener("click", javascriptClickInClick)
    cDiv.addEventListener("click", cClickInClick)
}

function typography(fraseInicial, fraseFinal, time = 100){
    const caracts = ["!", "#", "$", "%", "/", "=", "?", "*", "{", "-", "_"];
    let result = fraseInicial.textContent.split("");
    var finalResult = "";
    var otherresult = -1
    const codificado = setInterval(()=>{
        let random = Math.floor(Math.random() * caracts.length)
        let cant = Math.floor(Math.random() * (fraseInicial.textContent.length))

        result[cant] = caracts[random]
        finalResult = result.join("")
        fraseInicial.textContent = finalResult
    }, time)

    setTimeout(()=>{
        clearInterval(codificado)
        decodificar()
    }, 1000)

    const decodificar = ()=>{
        const decodificado = setInterval(()=>{
        otherresult += 1
        result[otherresult] = fraseFinal[otherresult]
        finalResult = result.join("")
        fraseInicial.textContent = finalResult
        if(finalResult == fraseFinal){
            clearInterval(decodificado)
        }
        }, time)
    }
}

pythonImg.addEventListener("load", elementoCarga)
javascriptImg.addEventListener("load", elementoCarga)
cImg.addEventListener("load", elementoCarga)
cSharpImg.addEventListener("load", elementoCarga)
video.addEventListener("load", elementoCarga)

document.addEventListener("DOMContentLoaded", ()=>{
    barraCarga.value = 100
    output.textContent = "100%"
    setTimeout(()=>{h1.style.opacity = "0"; picture.style.opacity = "0"; body.style.backgroundColor = "rgb(0, 0, 0)"}, 1500)
    pythonDiv.style.top = "-8%"; pythonDiv.style.left = "18%"
    javascriptDiv.style.top = "-8%"; javascriptDiv.style.left = "18%"
    cDiv.style.top = "-8%"; cDiv.style.left = "18%"
    cSharpDiv.style.top = "-8%"; cSharpDiv.style.left = "18%"

    setTimeout(()=>{video.style.zIndex = "9"; video.play(); video.style.transform = "scale(1)"}, 2000)
    setTimeout(()=>{pythonDiv.style.transform = "scale(1)"; pythonDiv.style.top = "-20%"; pythonDiv.style.left = "20vw"
    javascriptDiv.style.transform = "scale(1)"; javascriptDiv.style.left = "55vw"; javascriptDiv.style.top = "-20%"
    cDiv.style.transform = "scale(1)"; cDiv.style.left = "90vw"; cDiv.style.top = "-20%"
    cSharpDiv.style.transform = "scale(1)"; cSharpDiv.style.left = "125vw"; cSharpDiv.style.top = "-20%"
}, 3000)

    setTimeout(()=>{body.style.overflowX = "auto"}, 3350)

    pythonDiv.addEventListener("mouseover", ()=>{typed(mensajeP, pythonP, pythonB)})
    pythonDiv.addEventListener("mouseout", ()=>{pythonP.textContent = ""; pythonB.textContent = ""; clearInterval(intervalo); i = 0})

    javascriptDiv.addEventListener("mouseover", ()=>{typed(mensajeJ, javascriptP, javascriptB)})
    javascriptDiv.addEventListener("mouseout", ()=>{javascriptP.textContent = ""; javascriptB.textContent = ""; clearInterval(intervalo); i = 0})

    cDiv.addEventListener("mouseover", ()=>{typed(mensajeC, cP, cB)})
    cDiv.addEventListener("mouseout", ()=>{cP.textContent = ""; cB.textContent = ""; clearInterval(intervalo); i = 0})

    cSharpDiv.addEventListener("mouseover", ()=>{typed(mensajeCsharp, cSharpP, cSharpB)})
    cSharpDiv.addEventListener("mouseout", ()=>{cSharpP.textContent = ""; cSharpB.textContent = ""; clearInterval(intervalo); i = 0})

    pythonDiv.addEventListener("click", pythonClick)
    javascriptDiv.addEventListener("click", javascriptClick)
    cDiv.addEventListener("click", cClick)
    cSharpDiv.addEventListener("click", cSharpClick)
})


