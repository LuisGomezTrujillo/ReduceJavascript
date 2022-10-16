const app = document.getElementById('app');
    const app2 = document.getElementById('app2');
    const totals = [1, 2, 3, 4];
    app.innerHTML = `
      <h1>Array: ${totals}</h1>
      `

    const rta = totals.reduce(( sum, elemnto) => sum + elemnto, 0);
    app2.innerHTML = `
      <h1>Reduce: ${rta}</h1>
      `
