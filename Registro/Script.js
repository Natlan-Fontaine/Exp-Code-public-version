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
let video = document.querySelector("video")
let h1 = document.querySelector("h1")
let desicion = document.getElementById("desicion")
let lenguaje = document.getElementById("lenguaje")
let cancelar = document.getElementById("cancel")
let aceptar = document.getElementById("aceptar")
let map = document.querySelector("map")
let h2 = document.querySelector("h2")
let oculto = document.getElementById("oculto")

let pythonDiv = document.getElementById("pythonDiv")
let javascriptDiv = document.getElementById("javascriptDiv")
let cDiv = document.getElementById("cDiv")
let cSharpDiv = document.getElementById("cSharpDiv")

let pythonSpan = document.querySelector("#pythonDiv span")
let pythonObject = document.querySelector("#pythonDiv object")
let javascriptSpan = document.querySelector("#javascriptDiv span")
let javascriptObject = document.querySelector("#javascriptDiv object")

var total = 5
var count = 0

body.style.overflowX = "hidden"

setTimeout(()=>{
    picture.style.transform = "scaleY(1)"
    output.style.opacity = "1"
    p.style.transform = "scale(1)"
    p.style.opacity = "1"
    h1.style.opacity = "1"
}, 500)

python.addEventListener("load", ()=>{
    count += 1
    barra.value = Math.floor((count/total) * 100)
    output.textContent = barra.value + "%"
})

JavaScript.addEventListener("load", ()=>{
    count += 1
    barra.value = Math.floor((count/total) * 100)
    output.textContent = barra.value + "%"
})

cSharp.addEventListener("load", ()=>{
    count += 1
    barra.value = Math.floor((count/total) * 100)
    output.textContent = barra.value + "%"
})

C.addEventListener("load", ()=>{
    count += 1
    barra.value = Math.floor((count/total) * 100)
    output.textContent = barra.value + "%"
})

video.addEventListener("loadeddata", ()=>{
    count += 1
    barra.value = Math.floor((count/total) * 100)
    output.textContent = barra.value + "%"
})

document.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{
        setTimeout(()=>{
            picture.style.opacity = "0"
            h1.style.opacity = "0"
        setTimeout(()=>{
            body.style.backgroundColor = "black"
            video.play()
            video.style.zIndex = "9"
            video.style.transform = "scale(1)"
            pythonDiv.style.inset = "0% 20%"
            javascriptDiv.style.inset = "0% 20%"
            cDiv.style.inset = "0% 20%"
            cSharpDiv.style.inset = "0% 20%"
        }, 300)
        setTimeout(()=>{
        pythonDiv.style.transform = "scale(1)"; pythonDiv.style.removeProperty("inset"); pythonDiv.style.top = "-20%"
        setTimeout(()=>{javascriptDiv.style.transform = "scale(1)"; javascriptDiv.style.removeProperty("inset"); javascriptDiv.style.top = "-20%"}, 50)
        setTimeout(()=>{cDiv.style.transform = "scale(1)"; cDiv.style.removeProperty("inset"); cDiv.style.top = "-20%"}, 100)
        setTimeout(()=>{cSharpDiv.style.transform = "scale(1)"; cSharpDiv.style.removeProperty("inset"); cSharpDiv.style.top = "-20%"}, 150)
        setTimeout(()=>{
            body.style.animationName = "none"; 
            body.style.overflowX = "auto"

        }, 2000)
        }, 1500)
        }, 600)
    }, 2000)

    pythonDiv.addEventListener("click", pythonClick)
javascriptDiv.addEventListener("click", javascriptClick)
cDiv.addEventListener("click", cClick)
cSharpDiv.addEventListener("click", cSharpClick)

function cancelPython(){
    console.log("Se ejecuto la funcion cancelPython")
        cancelar.style.transform = "scaleY(0)"
        aceptar.style.transform = "scaleY(0)"
        map.style.transform = "perspective(125px) rotateX(45deg) scaleY(0)"
        h2.style.opacity = "0"
        setTimeout(()=>{desicion.style.transform = "scaleY(0)"}, 250)
    
        body.style.overflowX = "auto"
        pythonDiv.classList.remove("omega")
        pythonDiv.style.inset = "-20% 0"
        
        setTimeout(()=>{
            javascriptDiv.style = ""
            javascriptDiv.style.transform = "scale(1)"
            javascriptDiv.style.inset = "-20% 35vw"
        javascriptDiv.style.margin = ".02vw"
        }, 150)
    
        setTimeout(()=>{
            cDiv.style = ""
            cDiv.style.transform = "scale(1)"
        cDiv.style.top = "-20%"
        cDiv.style.left = "70vw"
        cDiv.style.margin = ".02vw"
        }, 200)
    
        setTimeout(()=>{
            cSharpDiv.style = ""
            cSharpDiv.style.transform = "scale(1)"
        cSharpDiv.style.inset = "-20% 105vw"
        cSharpDiv.style.margin = ".02vw"
        oculto.style.opacity = "0"
        }, 250)
    
        javascriptDiv.addEventListener("mouseover", mouseoverJavascript)
        cDiv.addEventListener("mouseover", mouseoverC)
        pythonDiv.addEventListener("mouseover", mouseoverPython)
        cSharpDiv.addEventListener("mouseover", mouseoverCsharp)

        javascriptDiv.removeEventListener("click", ()=>{javascriptClickInClick(pythonDiv)})
        cDiv.removeEventListener("click", ()=>{cClickInClick(pythonDiv)})
        cSharpDiv.removeEventListener("click", ()=>{cSharpClickInClick(pythonDiv)})
    
        javascriptDiv.addEventListener("click", javascriptClick)
        pythonDiv.addEventListener("click", pythonClick)
        cDiv.addEventListener("click", cClick)
        cSharpDiv.addEventListener("click", cSharpClick)
}
    
function cancelJavaScript(){
    console.log("Se ejecuto la funcion cancelJavaScript")
        cancelar.style.transform = "scaleY(0)"
        aceptar.style.transform = "scaleY(0)"
        map.style.transform = "perspective(125px) rotateX(45deg) scaleY(0)"
        h2.style.opacity = "0"
        setTimeout(()=>{desicion.style.transform = "scaleY(0)"}, 250)
    
        body.style.overflowX = "auto"
        javascriptDiv.classList.remove("omega")
        javascriptDiv.style.inset = "-20% 35vw"
        
        setTimeout(()=>{
            pythonDiv.removeAttribute("style")
            pythonDiv.style.transform = "scale(1)"
            pythonDiv.style.inset = "-20% 0"
            pythonDiv.style.margin = ".02vw"
        }, 150)
    
        setTimeout(()=>{
            cDiv.removeAttribute("style")
            cDiv.style.transform = "scale(1)"
        cDiv.style.top = "-20%"
        cDiv.style.left = "70vw"
        cDiv.style.margin = ".02vw"
        }, 200)
    
        setTimeout(()=>{
            cSharpDiv.removeAttribute("style")
            cSharpDiv.style.transform = "scale(1)"
        cSharpDiv.style.inset = "-20% 105vw"
        cSharpDiv.style.margin = ".02vw"
        oculto.style.opacity = "0"
        }, 250)
    
        javascriptDiv.addEventListener("mouseover", mouseoverJavascript)
        cDiv.addEventListener("mouseover", mouseoverC)
        pythonDiv.addEventListener("mouseover", mouseoverPython)
        cSharpDiv.addEventListener("mouseover", mouseoverCsharp)

        pythonDiv.removeEventListener("click", ()=>{pythonClickInClick(javascriptDiv)})
        cDiv.removeEventListener("click", ()=>{cClickInClick(javascriptDiv)})
        console.log("Se removio el eventListener de cDiv")
        cSharpDiv.removeEventListener("click", ()=>{cSharpClickInClick(javascriptDiv)})
    
        javascriptDiv.addEventListener("click", javascriptClick)
        pythonDiv.addEventListener("click", pythonClick)
        cDiv.addEventListener("click", cClick)
        cSharpDiv.addEventListener("click", cSharpClick)
}
    
function cancelC(){
    console.log("Se ejecuto la funcion cancelC")
        cancelar.style.transform = "scaleY(0)"
        aceptar.style.transform = "scaleY(0)"
        map.style.transform = "perspective(125px) rotateX(45deg) scaleY(0)"
        h2.style.opacity = "0"
        setTimeout(()=>{desicion.style.transform = "scaleY(0)"}, 250)
    
        body.style.overflowX = "auto"
        cDiv.classList.remove("omega")
        cDiv.style.inset = "-20% 70vw"
        
        setTimeout(()=>{
        pythonDiv.style.transform = "scale(1)"
        pythonDiv.style.inset = "-20% 0"
        pythonDiv.style.margin = ".02vw"
        }, 150)
    
        setTimeout(()=>{
            javascriptDiv.style.transform = "scale(1)"
        javascriptDiv.style.top = "-20%"
        javascriptDiv.style.left = "35vw"
        javascriptDiv.style.margin = ".02vw"
        }, 200)
    
        setTimeout(()=>{
            cSharpDiv.style.transform = "scale(1)"
        cSharpDiv.style.inset = "-20% 105vw"
        cSharpDiv.style.margin = ".02vw"
        oculto.style.opacity = "0"
        }, 250)
    
        javascriptDiv.addEventListener("mouseover", mouseoverJavascript)
        cDiv.addEventListener("mouseover", mouseoverC)
        pythonDiv.addEventListener("mouseover", mouseoverPython)
        cSharpDiv.addEventListener("mouseover", mouseoverCsharp)

        pythonDiv.removeEventListener("click", ()=>{pythonClickInClick(cDiv)})
        javascriptDiv.removeEventListener("click", ()=>{javascriptClickInClick(cDiv)})
        cSharpDiv.removeEventListener("click", ()=>{cSharpClickInClick(cDiv)})
    
        javascriptDiv.addEventListener("click", javascriptClick)
        pythonDiv.addEventListener("click", pythonClick)
        cDiv.addEventListener("click", cClick)
        cSharpDiv.addEventListener("click", cSharpClick)
}

function cancelCsharp(){
    console.log("Se ejecuto la funcion cancelCsharp")
    cancelar.style.transform = "scaleY(0)"
        aceptar.style.transform = "scaleY(0)"
        map.style.transform = "perspective(125px) rotateX(45deg) scaleY(0)"
        h2.style.opacity = "0"
        setTimeout(()=>{desicion.style.transform = "scaleY(0)"}, 250)
    
        body.style.overflowX = "auto"
        cSharpDiv.classList.remove("omega")
        cSharpDiv.style.inset = "-20% 105vw"
        
        setTimeout(()=>{
            javascriptDiv.removeAttribute("style")
            javascriptDiv.style.transform = "scale(1)"
            javascriptDiv.style.inset = "-20% 35vw"
        javascriptDiv.style.margin = ".02vw"
        }, 150)
    
        setTimeout(()=>{
            cDiv.removeAttribute("style")
            cDiv.style.transform = "scale(1)"
        cDiv.style.top = "-20%"
        cDiv.style.left = "70vw"
        cDiv.style.margin = ".02vw"
        }, 200)
    
        setTimeout(()=>{
            pythonDiv.removeAttribute("style")
            pythonDiv.style.transform = "scale(1)"
        pythonDiv.style.inset = "-20% 0"
        pythonDiv.style.margin = ".02vw"
        }, 250)
    
        javascriptDiv.addEventListener("mouseover", mouseoverJavascript)
        cDiv.addEventListener("mouseover", mouseoverC)
        pythonDiv.addEventListener("mouseover", mouseoverPython)
        cSharpDiv.addEventListener("mouseover", mouseoverCsharp)

        pythonDiv.removeEventListener("click", ()=>{pythonClickInClick(cSharpDiv)})
        javascriptDiv.removeEventListener("click", ()=>{javascriptClickInClick(cSharpDiv)})
        cDiv.removeEventListener("click", ()=>{cClickInClick(cSharpDiv)})
    
        javascriptDiv.addEventListener("click", javascriptClick)
        pythonDiv.addEventListener("click", pythonClick)
        cDiv.addEventListener("click", cClick)
        cSharpDiv.addEventListener("click", cSharpClick)
}
    
function javascriptClick(){
    console.log("Se ejecuto la funcion javascriptClick")
        body.style.overflowX = "hidden"
        javascriptDiv.style.inset = "0% 15%"
        javascriptDiv.classList.add("omega")
    
        window.scrollTo({left: "0", behavior: "smooth"})
    
        pythonDiv.removeAttribute("style")
        pythonDiv.style.transform = "scale(.3)";
        pythonDiv.style.inset = "35vh 40vw"
        pythonDiv.style.margin = "6px"
    
        setTimeout(()=>{
        cDiv.removeAttribute("style")
        cDiv.style.transform = "scale(.3)"; 
        cDiv.style.inset = "35vh 48vw" 
        cDiv.style.margin = "6px"
    }, 150)
    
        setTimeout(()=>{cSharpDiv.removeAttribute("style"); cSharpDiv.style.transform = "scale(.3)"; cSharpDiv.style.inset = "35vh 56vw"; cSharpDiv.style.margin = "6px";
        oculto.style.opacity = "1"
    }, 200)
    
        cancelar.removeEventListener("click", cancelPython)
        cancelar.removeEventListener("click", cancelC)
        cancelar.removeEventListener("click", cancelCsharp)
        cancelar.style.transform = "scaleY(1)"
        aceptar.style.transform = "scaleY(1)"
        map.style.transform = "perspective(125px) rotateX(45deg) scaleY(1)"
        h2.style.opacity = "1"
        lenguaje.textContent = "JavaScript"
        setTimeout(()=>{desicion.style.transform = "scaleY(1)"; desicion.style.animation = "neon 3s cubic-bezier(1, 0.01, 0, 1.01)"}, 250)
        setTimeout(()=>{desicion.style.animation = "none"; cancelar.addEventListener("click", cancelJavaScript)}, 3000)
    
        javascriptDiv.removeEventListener("mouseover", mouseoverJavascript)
        cDiv.removeEventListener("mouseover", mouseoverC)
        pythonDiv.removeEventListener("mouseover", mouseoverPython)
        cSharpDiv.removeEventListener("mouseover", mouseoverCsharp)

        javascriptDiv.removeEventListener("click", javascriptClick)
        pythonDiv.removeEventListener("click", pythonClick)
        cDiv.removeEventListener("click", cClick)
        cSharpDiv.removeEventListener("click", cSharpClick)

        pythonDiv.addEventListener("click", ()=>{pythonClickInClick(javascriptDiv)})
        cDiv.addEventListener("click", ()=>{cClickInClick(javascriptDiv);})
        cSharpDiv.addEventListener("click", ()=>{cSharpClickInClick(javascriptDiv)})
}
    
function javascriptClickInClick(div){
        javascriptDiv.style.transform = "scale(1)"
        javascriptDiv.classList.add("omega")
    
        setTimeout(()=>{javascriptDiv.style.transition = ".6s cubic-bezier(0.46, 0.01, 0.43, 0.99)"; javascriptDiv.style.inset = "-3% 15%"}, 150)
    
        typography(lenguaje, "JavaScript", 50)
    
        div.classList.remove("omega")
        div.style.transform = "scale(.3)"
        div.style.margin = "6px"
    
        pythonDiv.style.inset = "35vh 40vw"
        cDiv.style.inset = "35vh 48vw"
        cSharpDiv.style.inset = "35vh 56vw"
    
        pythonDiv.removeEventListener("click", pythonClick)
        cDiv.removeEventListener("click", cClick)
        cSharpDiv.removeEventListener("click", cSharpClick)
    
        pythonDiv.addEventListener("click", ()=>{pythonClickInClick(javascriptDiv)})
        cDiv.addEventListener("click", ()=>{cClickInClick(javascriptDiv)})
        cSharpDiv.addEventListener("click", ()=>{cSharpClickInClick(javascriptDiv)})
}
    
function cClick(){
    console.log("Se ejecuto la funcion cClick")
        body.style.overflowX = "hidden"
        cDiv.style.inset = "0% 15%"
        cDiv.classList.add("omega")
    
        window.scrollTo({left: "0", behavior: "smooth"})
    
        pythonDiv.removeAttribute("style")
        pythonDiv.style.transform = "scale(.3)";
        pythonDiv.style.inset = "35vh 40vw"
        pythonDiv.style.margin = "6px"
    
        setTimeout(()=>{
        javascriptDiv.removeAttribute("style")
        javascriptDiv.style.transform = "scale(.3)"; 
        javascriptDiv.style.inset = "35vh 48vw" 
        javascriptDiv.style.margin = "6px"
    }, 150)
    
        setTimeout(()=>{cSharpDiv.removeAttribute("style"); cSharpDiv.style.transform = "scale(.3)"; cSharpDiv.style.inset = "35vh 56vw"; cSharpDiv.style.margin = "6px";
        oculto.style.opacity = "1"
    }, 200)
    
        cancelar.removeEventListener("click", cancelJavaScript)
        cancelar.removeEventListener("click", cancelPython)
        cancelar.removeEventListener("click", cancelCsharp)
        cancelar.style.transform = "scaleY(1)"
        aceptar.style.transform = "scaleY(1)"
        map.style.transform = "perspective(125px) rotateX(45deg) scaleY(1)"
        h2.style.opacity = "1"
        lenguaje.textContent = "C++"
        setTimeout(()=>{desicion.style.transform = "scaleY(1)"; desicion.style.animation = "neon 3s cubic-bezier(1, 0.01, 0, 1.01)"}, 250)
        setTimeout(()=>{desicion.style.animation = "none"; cancelar.addEventListener("click", cancelC)}, 3000)
    
        javascriptDiv.removeEventListener("mouseover", mouseoverJavascript)
        cDiv.removeEventListener("mouseover", mouseoverC)
        pythonDiv.removeEventListener("mouseover", mouseoverPython)
        cSharpDiv.removeEventListener("mouseover", mouseoverCsharp)
    
        javascriptDiv.removeEventListener("click", javascriptClick)
        pythonDiv.removeEventListener("click", pythonClick)
        cDiv.removeEventListener("click", cClick)
        cSharpDiv.removeEventListener("click", cSharpClick)

        javascriptDiv.addEventListener("click", ()=>{javascriptClickInClick(cDiv)})
        pythonDiv.addEventListener("click", ()=>{pythonClickInClick(cDiv)})
        cSharpDiv.addEventListener("click", ()=>{cSharpClickInClick(cDiv)})
}
    
function cClickInClick(div){
    console.log("se ejecuto la funcion cClickInClick")
        cDiv.style.transform = "scale(1)"
        cDiv.classList.add("omega")
    
        setTimeout(()=>{cDiv.style.transition = ".6s cubic-bezier(0.46, 0.01, 0.43, 0.99)"; cDiv.style.inset = "-3% 15%"}, 150)
    
        typography(lenguaje, "C++")
    
        div.classList.remove("omega")
        div.style.transform = "scale(.3)"
        div.style.margin = "6px"
    
        pythonDiv.style.inset = "35vh 40vw"
        javascriptDiv.style.inset = "35vh 48vw"
        cSharpDiv.style.inset = "35vh 56vw"
    
        pythonDiv.removeEventListener("click", pythonClick)
        cDiv.removeEventListener("click", cClick)
        cSharpDiv.removeEventListener("click", cSharpClick)
    
        pythonDiv.addEventListener("click", ()=>{pythonClickInClick(cDiv);})
        javascriptDiv.addEventListener("click", ()=>{javascriptClickInClick(cDiv)})
        cSharpDiv.addEventListener("click", ()=>{cSharpClickInClick(cDiv)})
}
    
function cSharpClick(){
        body.style.overflowX = "hidden"
        cSharpDiv.classList.add("omega")
    
        cSharpDiv.style.inset = "0% 15%"
        window.scrollTo({left: "0", behavior: "smooth"})
    
        pythonDiv.removeAttribute("style")
        pythonDiv.style.transform = "scale(.3)";
        pythonDiv.style.inset = "35vh 40vw"
        pythonDiv.style.margin = "6px"
    
        setTimeout(()=>{
            javascriptDiv.removeAttribute("style")
        javascriptDiv.style.transform = "scale(.3)"; 
        javascriptDiv.style.inset = "35vh 48vw" 
        javascriptDiv.style.margin = "6px"}, 150)
    
        setTimeout(()=>{cDiv.removeAttribute("style"); cDiv.style.transform = "scale(.3)"; cDiv.style.inset = "35vh 56vw"; cDiv.style.margin = "6px"}, 200)
    
        cancelar.removeEventListener("click", cancelPython)
        cancelar.removeEventListener("click", cancelJavaScript)
        cancelar.removeEventListener("click", cancelC)
        cancelar.style.transform = "scaleY(1)"
        aceptar.style.transform = "scaleY(1)"
        map.style.transform = "perspective(125px) rotateX(45deg) scaleY(1)"
        h2.style.opacity = "1"
        lenguaje.textContent = "C#"
        setTimeout(()=>{desicion.style.transform = "scaleY(1)"; desicion.style.animation = "neon 3s cubic-bezier(1, 0.01, 0, 1.01)"}, 250)
        setTimeout(()=>{desicion.style.animation = "none"; cancelar.addEventListener("click", cancelCsharp)}, 3000)
        
        javascriptDiv.removeEventListener("mouseover", mouseoverJavascript)
        cDiv.removeEventListener("mouseover", mouseoverC)
        pythonDiv.removeEventListener("mouseover", mouseoverPython)
        cSharpDiv.removeEventListener("mouseover", mouseoverCsharp)
    
        javascriptDiv.removeEventListener("click", javascriptClick)
        pythonDiv.removeEventListener("click", pythonClick)
        cDiv.removeEventListener("click", cClick)
        cSharpDiv.removeEventListener("click", cSharpClick)

        pythonDiv.addEventListener("click", ()=>{pythonClickInClick(cSharpDiv)})
        javascriptDiv.addEventListener("click", ()=>{javascriptClickInClick(cSharpDiv)})
        cDiv.addEventListener("click", ()=>{cClickInClick(cSharpDiv)})
}
    
    function cSharpClickInClick(div){
        cSharpDiv.style.transform = "scale(1)"
        cSharpDiv.classList.add("omega")
    
        setTimeout(()=>{cSharpDiv.style.transition = ".6s cubic-bezier(0.46, 0.01, 0.43, 0.99)"; cSharpDiv.style.inset = "3% 16%"}, 150)
    
        typography(lenguaje, "C#")
    
        div.classList.remove("omega")
        div.style.transform = "scale(.3)"
        div.style.margin = "6px"
    
        javascriptDiv.style.inset = "35vh 40vw"
        cDiv.style.inset = "35vh 48vw"
        pythonDiv.style.inset = "35vh 56vw"
    
        pythonDiv.removeEventListener("click", pythonClick)
        cDiv.removeEventListener("click", cClick)
        cSharpDiv.removeEventListener("click", cSharpClick)
        javascriptDiv.removeEventListener("click", javascriptClick)
    
        javascriptDiv.addEventListener("click", ()=>{javascriptClickInClick(cSharpDiv)})
        cDiv.addEventListener("click", ()=>{cClickInClick(cSharpDiv);})
        pythonDiv.addEventListener("click", ()=>{pythonClickInClick(cSharpDiv)})
    }
    
    function pythonClick(){
        console.log("se ejecuto la funcion")
        body.style.overflowX = "hidden"
        pythonDiv.style.inset = "0% 15%"
        pythonDiv.classList.add("omega")
    
        window.scrollTo({left: "0", behavior: "smooth"})
    
        javascriptDiv.removeAttribute("style")
        javascriptDiv.style.transform = "scale(.3)";
        javascriptDiv.style.inset = "35vh 40vw"
        javascriptDiv.style.margin = "6px"
    
        setTimeout(()=>{
        cDiv.removeAttribute("style")
        cDiv.style.transform = "scale(.3)"; 
        cDiv.style.inset = "35vh 48vw" 
        cDiv.style.margin = "6px"
    }, 150)
    
        setTimeout(()=>{cSharpDiv.removeAttribute("style"); cSharpDiv.style.transform = "scale(.3)"; cSharpDiv.style.inset = "35vh 56vw"; cSharpDiv.style.margin = "6px";
        oculto.style.opacity = "1"
    }, 200)
    
        cancelar.removeEventListener("click", cancelJavaScript)
        cancelar.removeEventListener("click", cancelC)
        cancelar.removeEventListener("click", cancelCsharp)
        cancelar.style.transform = "scaleY(1)"
        aceptar.style.transform = "scaleY(1)"
        map.style.transform = "perspective(125px) rotateX(45deg) scaleY(1)"
        h2.style.opacity = "1"
        lenguaje.textContent = "Python"
        setTimeout(()=>{desicion.style.transform = "scaleY(1)"; desicion.style.animation = "neon 3s cubic-bezier(1, 0.01, 0, 1.01)"}, 250)
        setTimeout(()=>{desicion.style.animation = "none"; cancelar.addEventListener("click", cancelPython)}, 3000)
    
        javascriptDiv.removeEventListener("mouseover", mouseoverJavascript)
        cDiv.removeEventListener("mouseover", mouseoverC)
        cSharpDiv.removeEventListener("mouseover", mouseoverCsharp)
        pythonDiv.removeEventListener("mouseover", mouseoverPython)
    
        javascriptDiv.removeEventListener("click", javascriptClick)
        cDiv.removeEventListener("click", cClick)
        cSharpDiv.removeEventListener("click", cSharpClick)

        javascriptDiv.addEventListener("click", ()=>{javascriptClickInClick(pythonDiv)})
        cDiv.addEventListener("click", ()=>{cClickInClick(pythonDiv);})
        cSharpDiv.addEventListener("click", ()=>{cSharpClickInClick(pythonDiv)})
    }
    
    function pythonClickInClick(div){
        pythonDiv.style.transform = "scale(1)"
        pythonDiv.classList.add("omega")
    
        setTimeout(()=>{pythonDiv.style.transition = ".6s cubic-bezier(0.46, 0.01, 0.43, 0.99)"; pythonDiv.style.inset = "3% 16%"}, 150)
    
        typography(lenguaje, "Python", 50)
    
        div.classList.remove("omega")
        div.style.transform = "scale(.3)"
        div.style.margin = "6px"
    
        javascriptDiv.style.inset = "35vh 40vw"
        cDiv.style.inset = "35vh 48vw"
        cSharpDiv.style.inset = "35vh 56vw"
    
        pythonDiv.removeEventListener("click", pythonClick)
        cDiv.removeEventListener("click", cClick)
        cSharpDiv.removeEventListener("click", cSharpClick)
        javascriptDiv.removeEventListener("click", javascriptClick)
    
        javascriptDiv.addEventListener("click", ()=>{javascriptClickInClick(pythonDiv)})
        cDiv.addEventListener("click", ()=>{cClickInClick(pythonDiv);})
        cSharpDiv.addEventListener("click", ()=>{cSharpClickInClick(pythonDiv)})
    }
    
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
    

    function mouseoverPython(){typed(mensaje, python_p, pythonB, i); pythonB.textContent = "▮"}
    function mouseoverJavascript(){typed(mensajeJ, javascript_p, javascriptB, i); javascriptB.textContent = "▮"}
    function mouseoverC(){typed(mensajeC, cP, cB, i); cB.textContent = "▮"}
    
    pythonDiv.addEventListener("mouseover", mouseoverPython)
    
    pythonDiv.addEventListener("mouseout", ()=>{
        clearInterval(intervalo)
        python_p.textContent = ""
        pythonB.textContent = ""
    })
    
    javascriptDiv.addEventListener("mouseover",  mouseoverJavascript)
    
    javascriptDiv.addEventListener("mouseout", ()=>{
        clearInterval(intervalo)
        javascript_p.textContent = ""
        javascriptB.textContent = ""
    })
    
    cDiv.addEventListener("mouseover", mouseoverC)
    
    cDiv.addEventListener("mouseout", ()=>{
        clearInterval(intervalo)
        cP.textContent = ""
        cB.textContent = ""
    })
    
    cSharpDiv.addEventListener("mouseover", ()=>{
        let iterador = 0
        cSharpB.textContent = "▮"
        intervalo = setInterval(()=>{
            if (cSharpP.textContent == mensajeSharp){
                cSharpB.classList.add("opacidad")
                clearInterval(intervalo)
            }
            else{
                cSharpP.textContent += mensajeSharp[iterador]
                iterador++
            }
        },1)
    })
    
    cSharpDiv.addEventListener("mouseout", ()=>{
        clearInterval(intervalo)
        cSharpP.textContent = ""
        cSharpB.textContent = ""
    })
    
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
    
})

