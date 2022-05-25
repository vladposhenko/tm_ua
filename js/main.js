const menuBtn = document.querySelector('.mobile__btn');
const menu = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.close__btn');



menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
})

closeBtn.addEventListener('click', function(){
    menu.classList.remove('active');
  })