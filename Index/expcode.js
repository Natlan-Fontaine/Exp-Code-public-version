let ol = document.querySelector("ol")
let li1 = document.getElementById("esp")
let li2 = document.getElementById("en")

let input = document.querySelector("input")

let hola = document.querySelector("h1")
let bienvenido = document.querySelector("h2")
let texto = document.querySelector("article p")
let idioma = document.querySelector("header a")

let empezar = document.getElementById("empezar")
let cuenta = document.getElementById("cuenta")

let alert = document.querySelector("section")
let alertadd = document.querySelector("section p")
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

input.addEventListener("click", ()=>{
    ol.style.transform = "scaleY(1)"
})

li1.addEventListener("click", ()=>{
    let input_value = document.querySelector("input").value
    if ("Español" != input_value){
    input.value = "Español"
    typography(hola, "¡Hola!")
    typography(bienvenido, "Bienvenido a Exp-Code")
    typography(texto, `¡En donde puedes aprender a programar de manera divertida, y gratis!
    Asi que cuentanos, ¿actualmente tienes una cuenta o eres nuevo por aqui?`, 5)
    typography(idioma, "Idioma del contenido")
    typography(empezar, "EMPEZAR AHORA")
    typography(cuenta, "YA TENGO UNA CUENTA")
    alertadd.textContent = "¡LA PAGINA YA ESTA EN ESPAÑOL!"
    ol.style.transform = "scaleY(0)"
}
else{
    alert.style.transform = "scaleY(1)"
    setTimeout(()=>{
        alert.style.transform = "scaleY(0)"
    }, 2500)
    ol.style.transform = "scaleY(0)"
}

})

li2.addEventListener("click", ()=>{
    let input_value = document.querySelector("input").value
    if ("English" != input_value){
        input.value = "English"
        typography(hola, "Hi!")
        typography(bienvenido, "Welcome to Exp-Code")
        typography(texto, `Where you can learn to code in a fun way, and for free!
        So tell us, do you already have an account or are you new here?`, 5)
        typography(idioma, "Content language")
        typography(empezar, "START NOW")
        typography(cuenta, "I HAVE AN ACCOUNT")
        alertadd.textContent = "THE PAGE IS ALREADY IN ENGLISH!"
        ol.style.transform = "scaleY(0)";
    }
    else{
        alert.style.transform = "scaleY(1)"
        setTimeout(()=>{
            alert.style.transform = "scaleY(0)"
        }, 2500)
        ol.style.transform = "scaleY(0)"
    }
})

let boton1 = document.getElementById("boton1")
let div1 = document.getElementById("azul")

    boton1.addEventListener("click", () => {
        div1.style.zIndex = 30;
        setTimeout(()=>{
            div1.children[30].classList.add("class5")
        }, 500)
        setTimeout(()=>{
            div1.children[18].classList.add("class4")
        }, 1200)
        setTimeout(()=>{
            div1.children[37].classList.add("class5")
        }, 1300)
        setTimeout(()=>{
            while (true) {
                let chooseChildren = Math.floor(Math.random() * div1.childElementCount);
                let chooseClass = Math.floor(Math.random() * 14);
    
                if (div1.children[chooseChildren].classList.length > 1) {
                    continue;
                } else {
                    div1.children[chooseChildren].classList.add("class" + chooseClass);
                }
    
                let childrenHaveClasses = true
    
                for(let i = 0; i < div1.childElementCount; i++){
                    if (div1.children[i].classList.length <= 1){
                        childrenHaveClasses = false
                        break
                    }
                }
    
                if (childrenHaveClasses){
                    break
                }
            }
        }, 2000)

        setTimeout(()=>{
            window.location.href = "../Registro/Index.html"
        }, 3500)
    });