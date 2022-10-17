function prueba(){
   
   const votos1=document.querySelector('#opcion1');
   const votos2=document.querySelector('#opcion2');
   const votos3=document.querySelector('#opcion3');

   

   const arreglo=[
              parseInt(votos1.value), 
              parseInt(votos2.value),
              parseInt(votos3.value)
            ];


   let mayor, indiceMayor;        
    resultado=arreglo.reduce( (mayor,elemento) => {
     mayor=Math.max(mayor,elemento);
     indiceMayor=arreglo.indexOf(mayor)+1;
     return mayor;
      }
    ,0);

   totalVotos=arreglo.reduce( (acumulado,elemento,indice) => {
     return acumulado+=elemento;
    
      }
    ,0);
   document.getElementById('resultado').innerHTML='Ganó la opción '+indiceMayor+' con '+resultado+' votos'+' de los '+totalVotos+' realizados'; 
  
}
