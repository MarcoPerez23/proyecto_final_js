//Programa de cotizacion automatica Seguros TK-U

var precio_base = 2000

//Valores de los recargos
var edad_18 = 0.1
var edad_25 = 0.2
var edad_50 = 0.3

var casado_18 = 0.1
var casado_25 = 0.2
var casado_50 = 0.3

var hijos_recargo = 0.2
var propiedades_recargo = 0.35
var salario_recargo = 0.05


//Recargo
var recargo_extra = 0
var recargo_total = 0

//Precio final
var precio_final = 0

 // Inicio
alert("Bienvenid@ al Cotizador Automatico de Seguros TK-U")

var nombre_cliente = prompt("Cual es su nombre")

var edad_cliente = prompt("Por favor, ingrese su edad en numeros: ")

// verificador de mayores de 18
if (edad_cliente > 18) {
  calcular()
} else {
  alert("Servicio para mayores de edad. Gracias por sucomprension.")
}

//funcion para ingreso de datos y calculo de recargos
function calcular(){

  var conyuge = prompt("Si esta casad@, por favor ingrese la edad de su conyuge en numeros. De lo contrario ingrese no.")

  var hijos =  prompt("Si tiene hijos, por favor ingrese la cantidad de hijos en numeros. De lo contrario ingrese no.")

  var propiedades = prompt("Si tiene propiedades a su nombre, por favor ingrese el precio de cotizacion de sus propiedades. De lo contrario ingrese no.")

  var salario = prompt("Si posee un salario fijo, por favor ingrese la cantidad en numeros. De lo contrario ingrese no.")

//calculo del recargo por la edad del cliente
  if (edad_cliente >= 18 && edad_cliente < 25) {
    recargo_total += precio_base * edad_18
  } else if (edad_cliente >= 25 && edad_cliente < 50) {
    recargo_total += precio_base * edad_25
  } else if (edad_cliente > 50) {
    recargo_total += precio_base * edad_50
  }

//calculo del recargo por edad del conyuge
  if (conyuge >= 18 && conyuge < 25) {
    recargo_total += precio_base * casado_18
  } else if (conyuge >= 25 && conyuge < 50) {
    recargo_total += precio_base * casado_25
  } else if (conyuge > 50) {
    recargo_total += precio_base * casado_25
  }

//recargo por hijos
  if (hijos != "no") {
    recargo_extra += (hijos * hijos_recargo)
  }

//recargos extras
  if (propiedades != "no") {
    recargo_extra += propiedades * propiedades_recargo
  }

  if (salario != "no") {
    recargo_extra += salario * salario_recargo
  }

//suma total de valores
  precio_final = precio_base + recargo_total + recargo_extra

//mensaje de respuesta con los valores calculados
  alert("Gracias por utulizar el Cotizador Automatico de Seguros TK-U" + "\n" +
        "El precio base es de: Q." + precio_base + "\n" +
        "Su recargo base es de: Q." + recargo_total + "\n" +
        "El recargo salarial y de inmuebles es: Q." + recargo_extra + "\n" +
        "El total de su seguro es de: Q." + precio_final + ".")
  alert("Gracias por utilizar nuesro servicio")
}
