# JConverter
JConverter es un módulo con servicios para calcular medidas de peso basado en el patrón de diseño JS revelador.
[Para ver detalles sobre el procedimiento ejecutado durante el desarrollo del taller, presiona click sobre el enlace]( https://sites.google.com/view/memodevs)

## Descripción del mecanismo de conversión JConverter
-	Como paso inicial se crea una instancia del modulo sin parámetros de entrada y tendrá como retorno el numero cero 0.
-   Cada unidad de medida en el contexto de la aplicación tendrá solo 2 caracteres, es decir: 'tl' para representar toneladas, 'kg' para representar Kilogramos, 'lb' para representar Libras y 'mg' para representar finalmente miligramos.
-	Una vez creado el objeto, se procede a ingresar los parámetros siguiendo un orden específico que define los parámetros de conversión, seguido de un valor numérico como tercer parámetro, es decir, si quiero convertir de Kilos a Libras el orden ideal sería:  'kg', 'lb' para los dos primeros parametros de entrada, y un valor entero numérico como tercer y último parámetro.
-	Unidad origen: corresponde al parametro número 1 según el orden del parámetro. ('kg', '...', ...)
-	Unidad Destino: corresponde al parametro número 1 según el orden del parámetro. ('...', 'lb', ...)

## Instalación
- Ejecutar el siguiente comando:
```
npm install jconvertidor
```
- Posteriormente, hay que verificar si se descargó algún directorio
cuyo nombre es "jconvertidor" en la carpeta local "node_modules".


## Métodos que incorpora
```
- Actualmente la función cuenta con algunos servicios básicos.
- Es posible llevarla a un cliente web en tan solo minutos.
- Estos servicios se exponen desde el retorno de función, y a su vez realiza el llamado a miembros propios (funciones con otro nombre interno)
-Busca lograr un desacople de responsabilidades y 100% modular.
```

```
iniciar: sin parámetros de entrada
getMedidas: sin parametros de entrada
calcularMedidas: con parametros ('kg', 'lb', 94)
getObjOrigen: sin parametros, retorna todo el objeto origen
getObjDestino: sin parametros, retorna todo el objeto destino
```

## Uso
```
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

```

## Propuesta a la comunidad y compañeros de estudio.
# implementación de otras medidas de peso
- Actualmente el módulo tiene habilitado la conversión de Kg a Lb y viceverza.
- Se propone a quien quiera hacer parte de este repositorio a realizar sus pull request respectivos para evaluar la mejor manera, ello para fines didácticos y prácticas en entornos laborales reales.
```
En total son 4 unidades de medida que contemplará el módulo JS.
Pendiente pasar de Toneladas a todas las medidas (4)
Pendiente pasar de Kilos a las demás medidas distintas de libras (3)
Pendiente pasar de Libras a las demás medidas distintas de Kilos (3)
Pendiente pasar de Gramos a todas las demás medidas (4)
```
## Créditos
- [Twitter Jaime Diaz](https://twitter.com/jdiaz0017)
- [Sitio en google de Jaime Diaz](https://sites.google.com/view/memodevs/)

## Licencia
[MIT](https://opensource.org/licenses/MIT)