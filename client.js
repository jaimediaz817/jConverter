const jconverter = require('jconvertidor').default
let clienteConverter = jconverter()
console.log("hola mundo"+clienteConverter.iniciar()) 

// se crea un array de JSON donde cada objeto representa una unidad de medida.
let datos = clienteConverter.getMedidas() // obtiene todas las unidades de medida configuradas.

// se calcula el resultado a partir del objeto creado, indicando la unidad origen y destino a convertir seguido del valor.
let resultadoA = clienteConverter.calcularMedidas('lb','kg', 188)
let resultadoB = clienteConverter.calcularMedidas('kg','lb', 94)

// obtiene las medidas en formato JSON
let medidasCatch = JSON.stringify(datos)
// unidades validadas
console.log("validación de unidades básico: "+(resultadoA==resultadoB))
console.log("resultado A: "+resultadoA+" , resultado B: "+ resultadoB)