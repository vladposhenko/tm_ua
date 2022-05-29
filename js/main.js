const menuBtn = document.querySelector('.mobile__btn');
const menu = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.close__btn');



menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
})

closeBtn.addEventListener('click', function(){
    menu.classList.remove('active');
  })


const langBtn = document.getElementById("langBtn");
const langBtnInActive = document.getElementById("langBtnInActive");

console.log(langBtn);

console.log(langBtnInActive);

langBtn.addEventListener('click', function(){
    langBtn.classList.add('gray');
    langBtnInActive.classList.remove('gray')
})

langBtnInActive.addEventListener('click', function(){
    langBtn.classList.remove('gray');
    langBtnInActive.classList.add('gray')
})

