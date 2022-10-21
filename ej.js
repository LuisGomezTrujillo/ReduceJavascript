var integrado = [[0,1], [2,3], [4,5]].reduce(function(a,b) {
  return a.concat(b);
});
// integrado es [0, 1, 2, 3, 4, 5]