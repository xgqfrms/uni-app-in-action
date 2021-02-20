const log = console.log;
const btn = document.querySelector('#btn');
// multi times
btn.addEventListener('click', (e) => {
  log(`✅ event 1`, e);
});
btn.addEventListener('click', (e) => {
  log(`✅✅ event 2`, e);
});
// once
btn.onpopstate = function(e) {
  console.log(`❓ event function 1`, e);
};
btn.onpopstate = function(e) {
  console.log(`❓❓ event function 2`, e);
};
