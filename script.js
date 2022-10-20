function prueba(){
   
    const arreglo=[
              parseInt(document.querySelector('#opcion1').value), 
              parseInt(document.querySelector('#opcion2').value),
              parseInt(document.querySelector('#opcion3').value)
            ];
  


    let VotosGanador;        
      votosGanador=arreglo.reduce( (mayor,elemento) => {
      mayor=Math.max(mayor,elemento);     
      return mayor;
        }
      ,0);
   

    opcionGanadora=arreglo.indexOf(votosGanador)+1;
    

    totalVotos=arreglo.reduce( (acumulado,elemento) => {
      return acumulado+=elemento;
      
        }
      ,0);
    document.getElementById('resultado').innerHTML='Ganó la opción '+opcionGanadora+' con '+votosGanador+' votos'+' de los '+totalVotos+' realizados'; 
  
}

// Calculadora basica Jeison
const operacion =[];
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicacion = document.getElementById("multiplicacion");
let division = document.getElementById("division");
let r = document.getElementById("r");

suma.addEventListener("click", sumar);
resta.addEventListener("click", restar);
multiplicacion.addEventListener("click", multiplicar);
division.addEventListener("click", dividir);

function sumar() {
    let input1 = parseFloat(document.getElementById("input1").value);
    let input2 = parseFloat(document.getElementById("input2").value);
    operacion.push(input1, input2);

    let res = operacion.reduce(
        (sum, item) => sum + item,
        0
    );
    r.innerText = `La respuesta es: ${res}`;  
}

function restar() {
    let input1 = parseFloat(document.getElementById("input1").value);
    let input2 = parseFloat(document.getElementById("input2").value);
    operacion.push(input1, input2);

    let res1 = operacion.reduce(
        (rest, item) => rest - item,
    );

    r.innerText = `La respuesta es: ${res1}`;  
}

function multiplicar() {
    let input1 = parseFloat(document.getElementById("input1").value);
    let input2 = parseFloat(document.getElementById("input2").value);
    operacion.push(input1, input2);

    let res2 = operacion.reduce(
        (mult, item) => mult * item,
        1
    );
    r.innerText = `La respuesta es: ${res2}`;  
}

function dividir() {
    let input1 = parseFloat(document.getElementById("input1").value);
    let input2 = parseFloat(document.getElementById("input2").value);
    operacion.push(input1, input2);

    let res3 = operacion.reduce(
        (div, item) => div / item,
    );
    r.innerText = `La respuesta es: ${res3}`;  
}