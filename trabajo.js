// Me reí mucho con el "Disculpe las molestias ocasionadas" por no poder pagar con tarjeta. 


let nombre = prompt("¡Bienvenide a nuestra agencia de viajes! ¿Cómo te llamás?"); 

let producto1 = "Pasaje a Aruba para una persona"
let producto2 = "Pasaje a Cancún para una persona"

const bienvenida = confirm(`Hola ${nombre}! Tenemos dos viajes en promoción: 

${producto1}
${producto2}`);

//Recuerden siempre dejar un espacio entre los operadores
// let respuesta1 = "si"

//Por otro lado, piensen si respuesta1 y respuesta2 son nombres descriptivos para los valores que tienen
let respuesta1= "si"
let respuesta2 = "no"

let pregunta1 = prompt(`¿Te gustaría comprar ${producto1}? Respondé con SI o NO`)


//Que pasa si el usuario responde algo que no es "no"? Por ejemplo, hace enter o escribe "asdfg"? 
// No se le asigna el 0 a cantidadProducto1 y el codigo se rompe. Quiza seria mejor hacer que, cualquier cosa
// que escriba el usuario que no sea "si", ya asigne 0 a la cantidad
//Por otro lado, no es necesario hacer Number(0) - 0 ya es un número, no hace falta convertirlo a número nuevamente 

// Con todas esas observaciones, esta variable quedaría así
// let cantidadProducto1 = pregunta1 == respuesta1 && prompt("¿Cuántos pasajes te gustaría comprar?") || 0

let cantidadProducto1 = pregunta1 == respuesta1 && prompt("¿Cuántos pasajes te gustaría comprar?") || 
pregunta1 == respuesta2 && Number(0)

let pregunta2 = prompt(`¿Te gustaría comprar ${producto2}? Respondé con SI o NO`)

let cantidadProducto2 = pregunta2 == respuesta1 && prompt("¿Cuántos pasajes te gustaría comprar?") ||
pregunta2 == respuesta2 && Number(0)

let precio1 = 22500;
let precio2 = 18000;

let subtotal1 = cantidadProducto1 * precio1;
let subtotal2 = cantidadProducto2 * precio2;
let total = subtotal1 + subtotal2;

confirm(`Te mostramos el detalle de tu compra: 

${cantidadProducto1} x ${precio1} = ${subtotal1}
${cantidadProducto2} x ${precio2} = ${subtotal2}
Total: ${total}`);

let pagaConTarjeta = prompt(`¿Te gustaría abonar con tarjeta? Respondé con SI o NO`)

// Misma observación que antes con el no - hagamos que escriba lo que escriba el usuario, si no es "no", se pongan las cuotas en 1 
// - no en 0 - ya veremos por qué
// Otro comentario: si bien me dice que solo pueden ser 1 3 o 6, el codigo funciona con cualquier número de cuotas 
let cantidadDeCuotas = pagaConTarjeta == respuesta1 && prompt("¿En cuántas cuotas? Podés hacerlo en 1, 3 o 6") || 
cantidadDeCuotas == respuesta2 && Number(0)


// ¿Que pasa si el usuario puso que no quiere pagar en cuotas? Nosotros asignamos a cantidadDeCuotas el número 0
// y cuando en javascript dividimos cualquier número por 0, el resultado final es ¡Infinity!
// Esta cuenta va a romper todo nuestro código. 

// Posibles soluciones:
// 1. Asignamos 1 cuota si el usuario dice que no quiere pagar en tarjeta. De ese modo, dividiremos total / 1 
// 2. Solo hacemos esta cuenta si el usuario sí quiere pagar en cuotas. Así:
// let totalFinal = pagaConTarjeta == respuesta1 && total / cantidadDeCuotas || total
let totalFinal = total / cantidadDeCuotas


// Si el usuario no quiere pagar en cuotas, pero pusimos que en ese caso cantidadDeCuotas es 1, este mensaje no 
// sería muy problemático. 
confirm(`Te mostramos el detalle de lo que tenés que abonar: 
${cantidadProducto1} x ${precio1} = ${subtotal1}
${cantidadProducto2} x ${precio2} = ${subtotal2}
Total: ${total}
Número de cuotas = ${cantidadDeCuotas}
Valor de cuotas: ${totalFinal}`);

let codigoAda = "ADA"

let codigoDescuento = prompt(`¿Tenés un código de descuento? Respondé con SI o NO`)

let ingresaCodigo = codigoDescuento == respuesta1 && prompt("Ingresá el código")  

// Aunque el código sea incorrecto, igual me aplica el descuento...! 
ingresaCodigo != codigoAda && prompt(`El código es incorrecto`)


// No se qué quisieron hacer aquí, pero siempre termina valiendo "false"
// porque están comparando un número con codigoAda que es un string. 
let compraConCodigo = totalFinal - ((totalFinal * 15) /100) == codigoAda


// Este mensaje solo deberia mostrarse si el usuario ingresó el código correcto. 
// Antes del confirm, escribamos:

// ingresaCodigo == codigoAda && 
confirm(`Tu código se ingresó correctamente. Se aplicó el 15%.
Te mostramos el detalle de lo que tenés que abonar: 
${cantidadProducto1} x ${precio1} = ${subtotal1}
${cantidadProducto2} x ${precio2} = ${subtotal2}
Número de cuotas = ${cantidadDeCuotas}
Subtotal: ${total}
Valor de cuotas: ${totalFinal}
Descuento aplicado: 15%
Total con descuento: ${compraConCodigo}`);

// Hagamos un confirm para el caso de que el codigo sea incorrecto
// ingresaCodigo != codigoAda &&
// confirm(`No pudimos hacerte un descuento.
// Te mostramos el detalle de lo que tenés que abonar: 
// ${cantidadProducto1} x ${precio1} = ${subtotal1}
// ${cantidadProducto2} x ${precio2} = ${subtotal2}
// Número de cuotas = ${cantidadDeCuotas}
// Subtotal: ${total}
// Valor de cuotas: ${totalFinal}`);

confirm(`Gracias por tu compra! Que tengas un buen viaje! ✈️  🏖️`)

//Muy buen trabajo, chicas! 
