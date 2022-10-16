function demo(){
   // document.getElementById('demo').innerHTML = Date();
   const votos1=document.querySelector('#opcion1');
   const votos2=document.querySelector('#opcion2');
   const votos3=document.querySelector('#opcion3');

   //document.getElementById('resultado').innerHTML=parseInt(votos1.value)+parseInt(votos2.value)+parseInt(votos3.value);

   arreglo=[
              parseInt(votos1.value), 
              parseInt(votos2.value),
              parseInt(votos3.value)
            ];

  const resultado=arreglo.reduce((sum,elemento) => sum +elemento,0);
  document.getElementById('resultado').innerHTML=resultado; 
}


// const app = document.getElementById('app');
//     const app2 = document.getElementById('app2');
//     const totals = [1, 2, 3, 4];
//     app.innerHTML = `
//       <h1>Array: ${totals}</h1>
//       `

//     const rta = totals.reduce(( sum, elemnto) => sum + elemnto, 0);
//     app2.innerHTML = `
//       <h1>Reduce: ${rta}</h1>
//       `
