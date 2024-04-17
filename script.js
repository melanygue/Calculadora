alert("Hola, bienvenido y bienvenida a la calculadora");
var numero1 = parseFloat(prompt("Porfavor ingresa un numero del 0 al infinito"));
alert("Elegiste el numero " + numero1);
var numero2 = parseFloat(prompt("Por favor ingresa un segundo numero del 0 al infinito"));
alert("Tu segundo numero es " + numero2);
alert("Elige la operacion que deseas hacer con los numeros " +  numero1 + " y " + numero2);
var operacion = parseInt(prompt("Elige una opcion.\n1 es suma.\n2 es resta.\n3 es multiplicacion.\n4 es division"));
var resultado;
var nombre =""; 
if(operacion ==1){
    resultado = numero1 + numero2;
    nombre = " la suma es " + resultado;
}else if(operacion == 2){
    resultado = numero1 - numero2;
    nombre = " la resta es " + resultado; 
}else if(operacion == 3){
        resultado = numero1 * numero2; 
        nombre = " la multiplicacion es " + resultado;
}else if(operacion == 4){
    if(numero2 !== 0){
        resultado = numero1 / numero2;
        nombre = " la division es " + resultado;
    }else{
        nombre=" no se puede dividir por cero"
    }
    
    }else{
        nombre="operacion no valida";
    }

   


alert(nombre);
document.write("Los numeros que ingresaste fueron " + numero1 + " y " + numero2 + " y el resultado de la operacion de  " +  nombre);