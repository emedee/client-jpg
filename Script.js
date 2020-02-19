let hamburgerIcon = document.querySelector('#hamb');
let navBar = document.querySelector('.blockNav');
let closeIcon = document.querySelector('.close');


hamburgerIcon.addEventListener('click', function(){
    hamburgerIcon.style.display = 'none';
    navBar.style.display = 'block';
    closeIcon.style.display = 'block';
})
closeIcon.addEventListener('click', function(){
    hamburgerIcon.style.display = 'block';
    navBar.style.display = 'none';
    closeIcon.style.display = 'none';
})