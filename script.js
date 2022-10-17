function demo(){
   // document.getElementById('demo').innerHTML = Date();
   const votos1=document.querySelector('#opcion1');
   const votos2=document.querySelector('#opcion2');
   const votos3=document.querySelector('#opcion3');

   //document.getElementById('resultado').innerHTML=parseInt(votos1.value)+parseInt(votos2.value)+parseInt(votos3.value);

   const arreglo=[
              parseInt(votos1.value), 
              parseInt(votos2.value),
              parseInt(votos3.value)
            ];

  //  const objeto=[
  //    {opcion: 'Opcion 1', votos: parseInt(votos1.value)},
  //    {opcion: 'Opcion 2', votos: parseInt(votos1.value)},
  //    {opcion: 'Opcion 3', votos: parseInt(votos1.value)}
  //  ]

             
  //  const resultado=objeto.reduce( (mayor,elemento) => {
  //    mayor=Math.max(mayor,elemento);
  //    indiceMayor=objeto.indexOf(mayor);
  //    return mayor;
  //     }
  //   ,0);

  //  totalVotos=objeto.reduce( (acumulado,elemento) => {
  //    return acumulado+=elemento;
    
  //     }
  //   ,0);
  //  document.getElementById('resultado').innerHTML='Ganó la '+objeto[indiceMayor].opcion+' con '+objeto[indiceMayor].votos+' votos'+' de los '+totalVotos+' realizados'; 
  





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
