const nombre = document.querySelector("#nombre")
const numero = document.querySelector("#numero")
const btnAgregar = document.querySelector("#btn_agregar")
const btnBorrar = document.getElementsByClassName('borrar')

btnAgregar.addEventListener('click', ()=>{
    window.location.href = `agregar/${nombre.value}/${numero.value}`
})

for(let i = 0; i < btnBorrar.length; i++){
    btnBorrar[i].addEventListener('click', ()=>{
        let id = btnBorrar[i].getAttribute('id')
        window.location.href = `borrar/${id}`
    })
}
