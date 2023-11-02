class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    saludar() {
        console.log(`Hola,soy ${this.nombre}, ${this.apellido} y tengo ${this.edad} años`,)
    }
}

const persona = new Persona('Juan', 'Perez', 20)
const persona2 = new Persona('Harold', 'Garzon', 35)

class Estudiante extends Persona {
    constructor(nombre, apellido, edad, carrera) {
        super(nombre, apellido, edad)
        this.carrera = carrera
    }

    saludar() {
        console.log(`Hola,soy ${this.nombre}, ${this.apellido}  tengo ${this.edad} años y estudio ${this.carrera}`,)
    }

    estudiar() {
        console.log(`Estoy estudiando ${this.carrera}`)
    }
}

(persona.saludar())
(persona2.saludar())

const estudiante = new Estudiante('Camilo', 'Contreras', 42, 'Ingenieria')

class EstudianteEspecializado extends Estudiante {
    constructor(nombre, apellido, edad, carrera, especialidad) {
        super(nombre, apellido, edad, carrera)
        this.especialidad = especialidad
    }

    presentacion() {
        console.log(
            `Hola,soy ${this.nombre}, ${this.apellido}  tengo ${this.edad} años y estudio ${this.carrera} con especialidad en ${this.especialidad}`,
            )
    }
}

const estudianteEspecializado = new EstudianteEspecializado(
    'Camilo',
    'Contreras',
    42,
    'Ingenieria',
    'Ingenieria de Software'
)

estudianteEspecializado.saludar()
estudianteEspecializado.presentacion()