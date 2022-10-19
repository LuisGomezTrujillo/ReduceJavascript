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
