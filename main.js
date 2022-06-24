var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click',function(){

    if (iconMenu.getAttribute("src") == 'imagens/close.png') {
        iconMenu.setAttribute("src","./imagens/menu.png");
    }else{
        iconMenu.setAttribute("src","imagens/menu.png");
    }

   menu.classList.toggle('active');
});