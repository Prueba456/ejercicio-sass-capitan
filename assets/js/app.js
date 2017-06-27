'use strict';
const render = (root)=> {
  root.empty();
    const input   = $('<input type="checkbox">');
    root.append(input);
  }
}


  const state = {
    alumnas: null,
    status: null,
 };

$( _ => {
  getJSON('http://laboratoria.cuadra.co:9339/api/v1/students/', (err, json) => {
    if (err) { return alert(err.message);}
    state.alumnas = json; /*Trae toda la data*/
    const root = $('ol li');
    render(root);
  });
});
