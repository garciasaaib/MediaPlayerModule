class Field {
  // interface
  errors: string[] 
  input: HTMLInputElement 

  constructor(input: HTMLInputElement) {
    this.input = input //elemento input en dom
    this.errors = [] // array de mensajes de error

    //crea .text-danger
    let errorMessage = document.createElement('p')
    errorMessage.className = 'text-danger'
    //coloca .text-danger despues del input
    this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling)

    //cada nuevo valor hace la validacion
    this.input.addEventListener('input', () => {
      this.errors = []
      this.validate()
      errorMessage.innerText = this.errors[0] || ''
    })
  }

  validate() {}
}

function RequiredFieldDecorator(field: Field): Field {
  // hacemos una copia para extender la original
  // es decir que no afecta a la clase,
  // solo afecta al field obtenido
  let validate = field.validate 
  field.validate = function() {
    // esto efectua cualquier otro validador anterior a este
    validate()

    // logica de la validación 
    let value = field.input.value
    if(!value) {
      field.errors.push('Requerido')
    }
  }
  return field
}


function EmailFieldDecorator(field: Field): Field {
  let validate = field.validate // copia el current validate
  field.validate = function() { // agrega funcion al validate
    validate() // corre el validate anterior

    // logica de este validate
    let value = field.input.value
    if(value.indexOf("@") === -1) {
      field.errors.push('Debe ser un email')
    }
  }
  return field
}

// se obtiene el element y se le da la clase Field
let field = new Field(document.querySelector('#email'))

// se agrega un validate a field 
field = RequiredFieldDecorator(field)

// se agrega otro validate a field
field = EmailFieldDecorator(field)