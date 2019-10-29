let nombre = prompt("¡Bienvenida a nuestra agencia de viajes! ¿Cómo te llamás?"); 

let producto1 = "Pasaje a Aruba para una persona"
let producto2 = "Pasaje a Cancún para una persona"

const bienvenida = confirm(`Hola ${nombre}! Tenemos dos viajes en promoción: 

${producto1}
${producto2}`);

let respuesta1= "si"
let respuesta2 = "no"

let pregunta1 = prompt(`¿Te gustaría comprar ${producto1}? Respondé con SI o NO`)

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

let cantidadDeCuotas = pagaConTarjeta == respuesta1 && prompt("¿En cuántas cuotas? Podés hacerlo en 1, 3 o 6") || 
cantidadDeCuotas == respuesta2 && Number(0)


let totalFinal = total / cantidadDeCuotas


confirm(`Te mostramos el detalle de lo que tenés que abonar: 
${cantidadProducto1} x ${precio1} = ${subtotal1}
${cantidadProducto2} x ${precio2} = ${subtotal2}
Total: ${total}
Número de cuotas = ${cantidadDeCuotas}
Valor de cuotas: ${totalFinal}`);

let codigoAda = "ADA"

let codigoDescuento = prompt(`¿Tenés un código de descuento? Respondé con SI o NO`)

let ingresaCodigo = codigoDescuento == respuesta1 && prompt("Ingresá el código")  

ingresaCodigo != codigoAda && prompt(`El código es incorrecto`)

let compraConCodigo = totalFinal - ((totalFinal * 15) /100) == codigoAda

confirm(`Tu código se ingresó correctamente. Se aplicó el 15%.
Te mostramos el detalle de lo que tenés que abonar: 
${cantidadProducto1} x ${precio1} = ${subtotal1}
${cantidadProducto2} x ${precio2} = ${subtotal2}
Número de cuotas = ${cantidadDeCuotas}
Subtotal: ${total}
Valor de cuotas: ${totalFinal}
Descuento aplicado: 15%
Total con descuento: ${compraConCodigo}`);

confirm(`Gracias por tu compra! Que tengas un buen viaje! ✈️  🏖️`)