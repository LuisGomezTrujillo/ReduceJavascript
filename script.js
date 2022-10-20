let arreglo=[];
let n=3;

function agregarOpcion(){
  
  let votaciones=document.querySelector('#contenidoOpciones'); 
  let divOpcion=document.createElement('div');
  divOpcion.setAttribute('class','entrada');
  let labelOpcion=document.createElement('label');
  labelOpcion.setAttribute('for','opcion'+n);
  let spanOpcion=document.createElement('span');
  spanOpcion.textContent='Opcion '+n+' (Votos):  ';
  let inputOpcion=document.createElement('input');
  inputOpcion.setAttribute('type','number');
  inputOpcion.setAttribute('min','0');
  inputOpcion.setAttribute('max','100');
  inputOpcion.setAttribute('id','opcion'+n);
  labelOpcion.appendChild(spanOpcion);
  labelOpcion.appendChild(inputOpcion);
  divOpcion.appendChild(labelOpcion);
  votaciones.appendChild(divOpcion);
  console.log('n= '+n);
  n=n+1;
}

function enviarVotos(){

  arreglo=[];
  
  for(let i=1; i<n; i++){
    console.log(i);
    
    arreglo.push(parseInt(document.querySelector('#opcion'+i).value));
  }
  

  console.log(arreglo);
}

function obtenerResultadosVotaciones(){
   
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
    document.getElementById('resultado').textContent='Ganó la opción '+opcionGanadora+' con '+votosGanador+' votos'+' de los '+totalVotos+' realizados'; 
  return arreglo;
}
