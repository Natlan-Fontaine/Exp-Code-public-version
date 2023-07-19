let barra = document.querySelector("progress")
let picture = document.querySelector("picture")
let output = document.querySelector("output")
let p = document.querySelector("p")
let python = document.getElementById("Python")
let JavaScript = document.getElementById("JavaScript")
let cSharp = document.getElementById("C#") 
let C = document.getElementById("C++")
let body = document.querySelector("body")
let section = document.querySelector("section")
let main = document.querySelector("main")

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
        setTimeout(()=>{body.style.animationName = "none"; window.scrollTo({left: "470"})}, 2000)
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
    javascriptDiv.style.transition = "2s cubic-bezier(0.46, 0.01, 0.43, 0.99)"
    javascriptDiv.style.transform = "translateY(300%)"
    javascriptDiv.style.position = "absolute"

    setTimeout(()=>{section.removeChild(javascriptDiv)
        let fragmento0 = document.createDocumentFragment()
    javascriptDiv = document.createElement("DIV")
    javascriptSpan = document.createElement("SPAN")
    javascriptObject = document.createElement("OBJECT")
    javascript = document.createElement("IMG")

    JavaScript.setAttribute("src", "JavaScript.png")

    javascriptDiv.appendChild(JavaScript)
    javascriptDiv.appendChild(javascriptObject)
    javascriptDiv.appendChild(javascriptSpan)
    fragmento0.appendChild(javascriptDiv)
    main.prepend(fragmento0)

    javascriptDiv.style.transform = "translateY(-300%)"
    javascriptDiv.classList.add("superPythonDiv")
    }, 2000)
    setTimeout(()=>{javascriptDiv.style.transform = "translate(-1%, 0%)"}, 2120)

    setTimeout(()=>{javascriptDiv.classList.add("omega")}, 4110)

    window.scrollTo({left: "0", behavior: "smooth"})

    pythonDiv.style.transform = "scale(.3)";
    pythonDiv.style.inset = "35vh 35vw"
    pythonDiv.style.margin = "6px"

    setTimeout(()=>{cDiv.style.transform = "scale(.3)"; 
    cDiv.style.inset = "35vh -4vw" 
    cDiv.style.margin = "6px"}, 150)

    setTimeout(()=>{cSharpDiv.style.transform = "scale(.3)"; cSharpDiv.style.inset = "35vh -43vw"; cSharpDiv.style.margin = "6px"}, 200)

    
    javascriptDiv.removeEventListener("mouseover", mouseoverJavascript)
    cDiv.removeEventListener("mouseover", mouseoverC)
    cSharpDiv.removeEventListener("mouseover", mouseoverCsharp)
    pythonDiv.removeEventListener("mouseover", mouseoverPython)

    pythonDiv.removeEventListener("click", pythonClick)
    cDiv.removeEventListener("click", cClick)
    cSharpDiv.removeEventListener("click", cSharpClick)
}

function cClick(){
    cDiv.style.transition = "2s cubic-bezier(0.46, 0.01, 0.43, 0.99)"
    cDiv.style.transform = "translateY(300%)"
    cDiv.style.position = "absolute"

    setTimeout(()=>{section.removeChild(cDiv)
        let fragmento0 = document.createDocumentFragment()
    cDiv = document.createElement("DIV")
    cSpan = document.createElement("SPAN")
    cObject = document.createElement("OBJECT")
    C = document.createElement("IMG")

    C.setAttribute("src", "C++.png")

    cDiv.appendChild(C)
    cDiv.appendChild(cObject)
    cDiv.appendChild(cSpan)
    fragmento0.appendChild(cDiv)
    main.prepend(fragmento0)

    cDiv.style.transform = "translateY(-300%)"
    cDiv.classList.add("superPythonDiv")
    }, 2000)
    setTimeout(()=>{cDiv.style.transform = "translate(-1%, 3%)"}, 2120)

    setTimeout(()=>{cDiv.classList.add("omega")}, 4110)

    window.scrollTo({left: "0", behavior: "smooth"})

    pythonDiv.style.transform = "scale(.3)";
    pythonDiv.style.inset = "35vh 35vw"
    pythonDiv.style.margin = "6px"

    setTimeout(()=>{javascriptDiv.style.transform = "scale(.3)"; 
    javascriptDiv.style.inset = "35vh -4vw" 
    javascriptDiv.style.margin = "6px"}, 150)

    setTimeout(()=>{cSharpDiv.style.transform = "scale(.3)"; cSharpDiv.style.inset = "35vh -43vw"; cSharpDiv.style.margin = "6px"}, 200)

    
    javascriptDiv.removeEventListener("mouseover", mouseoverJavascript)
    cSharpDiv.removeEventListener("mouseover", mouseoverCsharp)
    pythonDiv.removeEventListener("mouseover", mouseoverPython)

    javascriptDiv.removeEventListener("click", javascriptClick)
    pythonDiv.removeEventListener("click", pythonClick)
    cSharpDiv.removeEventListener("click", cSharpClick)
}

function cSharpClick(){
    cSharpDiv.style.transition = "2s cubic-bezier(0.46, 0.01, 0.43, 0.99)"
    cSharpDiv.style.transform = "translateY(300%)"
    cSharpDiv.style.position = "absolute"

    setTimeout(()=>{section.removeChild(cSharpDiv)
        let fragmento0 = document.createDocumentFragment()
    cSharpDiv = document.createElement("DIV")
    cSharpSpan = document.createElement("SPAN")
    cSharpObject = document.createElement("OBJECT")
    cSharp = document.createElement("IMG")

    cSharp.setAttribute("src", "Csharp (2).png")

    cSharpDiv.appendChild(cSharp)
    cSharpDiv.appendChild(cSharpObject)
    cSharpDiv.appendChild(cSharpSpan)
    fragmento0.appendChild(cSharpDiv)
    main.prepend(fragmento0)

    cSharpDiv.style.transform = "translateY(-300%)"
    cSharpDiv.classList.add("superPythonDiv")
    }, 2000)
    setTimeout(()=>{cSharpDiv.style.transform = "translate(-1%, 3%)"}, 2120)

    setTimeout(()=>{cSharpDiv.classList.add("omega")}, 4110)

    window.scrollTo({left: "0", behavior: "smooth"})

    pythonDiv.style.transform = "scale(.3)";
    pythonDiv.style.inset = "35vh 35vw"
    pythonDiv.style.margin = "6px"

    setTimeout(()=>{javascriptDiv.style.transform = "scale(.3)"; 
    javascriptDiv.style.inset = "35vh -4vw" 
    javascriptDiv.style.margin = "6px"}, 150)

    setTimeout(()=>{cDiv.style.transform = "scale(.3)"; cDiv.style.inset = "35vh -43vw"; cDiv.style.margin = "6px"}, 200)

    
    javascriptDiv.removeEventListener("mouseover", mouseoverJavascript)
    cDiv.removeEventListener("mouseover", mouseoverC)
    pythonDiv.removeEventListener("mouseover", mouseoverPython)

    javascriptDiv.removeEventListener("click", javascriptClick)
    pythonDiv.removeEventListener("click", pythonClick)
    cDiv.removeEventListener("click", cClick)
}

function pythonClick(){
    pythonDiv.style.transition = "2s cubic-bezier(0.46, 0.01, 0.43, 0.99)"
    pythonDiv.style.transform = "translateY(300%)"
    pythonDiv.style.position = "absolute"

    setTimeout(()=>{section.removeChild(pythonDiv)
        let fragmento0 = document.createDocumentFragment()
    pythonDiv = document.createElement("DIV")
    pythonSpan = document.createElement("SPAN")
    pythonObject = document.createElement("OBJECT")
    python = document.createElement("IMG")

    python.setAttribute("src", "Python.png")

    pythonDiv.appendChild(python)
    pythonDiv.appendChild(pythonObject)
    pythonDiv.appendChild(pythonSpan)
    fragmento0.appendChild(pythonDiv)
    main.prepend(fragmento0)

    pythonDiv.style.transform = "translateY(-300%)"
    pythonDiv.classList.add("superPythonDiv")
    }, 2000)
    setTimeout(()=>{pythonDiv.style.transform = "translate(-1%, 3%)"}, 2120)

    setTimeout(()=>{pythonDiv.classList.add("omega")}, 4110)

    window.scrollTo({left: "0", behavior: "smooth"})

    javascriptDiv.style.transform = "scale(.3)";
    javascriptDiv.style.inset = "35vh 35vw"
    javascriptDiv.style.margin = "6px"

    setTimeout(()=>{cDiv.style.transform = "scale(.3)"; 
    cDiv.style.inset = "35vh -4vw" 
    cDiv.style.margin = "6px"}, 150)

    setTimeout(()=>{cSharpDiv.style.transform = "scale(.3)"; cSharpDiv.style.inset = "35vh -43vw"; cSharpDiv.style.margin = "6px"}, 200)

    
    javascriptDiv.removeEventListener("mouseover", mouseoverJavascript)
    cDiv.removeEventListener("mouseover", mouseoverC)
    cSharpDiv.removeEventListener("mouseover", mouseoverCsharp)
    pythonDiv.removeEventListener("mouseover", mouseoverPython)

    javascriptDiv.removeEventListener("click", javascriptClick)
    cDiv.removeEventListener("click", cClick)
    cSharpDiv.removeEventListener("click", cSharpClick)
}

pythonDiv.addEventListener("click", pythonClick)

javascriptDiv.addEventListener("click", javascriptClick)

cDiv.addEventListener("click", cClick)

cSharpDiv.addEventListener("click", cSharpClick)