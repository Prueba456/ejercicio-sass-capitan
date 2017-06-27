'use strict';
const render = (root)=> {
  root.empty();
  for (var i = 0; i < 20; i++) {
    const input   = $('<input type="checkbox"><br>');
    const nombre = $('<li>'+state.alumnas[i].name+' '+state.alumnas[i].mLastName+'</li>');
    root.append(nombre);
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
    const root = $('#lista');
    render(root);
    console.log(json[0].name);
    console.log(json[0].mLastName);
  });
});
