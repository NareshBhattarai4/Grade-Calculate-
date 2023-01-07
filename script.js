const cal=()=>{
  let nb=document.querySelector(".login");
let h2=document.getElementById('h2');
let h1=document.querySelector('.h1');

h2.addEventListener('click',()=>{
nb.classList.add('active')
})


h1.addEventListener('click',()=>{
nb.classList.remove('active')
})
