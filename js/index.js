


const btnAgregar = document.querySelector(".btn-info")
const span = document.getElementById("span")
let contador = 0

/* Boton Agregar */

btnAgregar.addEventListener("click", () => {
    console.log("diste click en agregar")
    contador++
    span.textContent = contador
})


const btnQuitar = document.querySelector(".btn-danger")

btnQuitar.addEventListener("click", () => {
    console.log("diste click en quitar")
    contador--
    span.textContent = contador
})