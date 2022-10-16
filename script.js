function prueba(){
   
   const votos1=document.querySelector('#opcion1');
   const votos2=document.querySelector('#opcion2');
   const votos3=document.querySelector('#opcion3');

   
   arreglo=[
              parseInt(votos1.value), 
              parseInt(votos2.value),
              parseInt(votos3.value)
            ];

  const resultado=arreglo.reduce((sum,elemento) => sum +elemento,0);
  document.getElementById('resultado').innerHTML=resultado; 
}
