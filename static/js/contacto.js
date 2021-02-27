let nombre = document.getElementById('nombre')
let correo = document.getElementById('correo')
let mensaje = document.getElementById('mensaje')
let apellidos = document.getElementById('apellidos')

const validateInputs = () => {
  nombre.value ? '' : nombre.classList.add('is-invalid')
  correo.value ? '' : correo.classList.add('is-invalid')
  mensaje.value ? '' : mensaje.classList.add('is-invalid')
  apellidos.value ? '' : apellidos.classList.add('is-invalid')

  if(nombre.value && correo.value && mensaje.value && apellidos.value) 
    console.log(ok)

}

nombre.addEventListener('keydown', () => description.classList.remove('is-invalid'))
correo.addEventListener('keydown', () => calories.classList.remove('is-invalid'))
mensaje.addEventListener('keydown', () => carbs.classList.remove('is-invalid'))
apellidos.addEventListener('keydown', () => protein.classList.remove('is-invalid'))


