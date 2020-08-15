// PORTFOLIO OPENING
const openingOne = document.querySelector('#opening-1');
const openingTwo = document.querySelector('#opening-2');
const openingThree = document.querySelector('#opening-3');
const openingFour = document.querySelector('#opening-4');
const btnOpenPortfolio = document.querySelector('#btn-open-portfolio');
const portfolioOpeningContainer = document.querySelector('.portfolio-opening');

// Event Open Portfolio
btnOpenPortfolio.addEventListener('click', function(){
  if(btnOpenPortfolio){
    openingOne.classList.add('open');
    openingTwo.classList.add('open');
    openingThree.classList.add('open');
    openingFour.classList.add('open');
    // Hide The Opening 4div container
    btnOpenPortfolio.classList.add('hide');
 
  }
})
// Transition End Change the z index of portfolio opening 
openingFour.addEventListener('transitionend', function() {
  // Grab The portfolio Opening Container then Apply The Z-index
  portfolioOpeningContainer.style.zIndex = '-1';
})

// NAV MENU
const menuTogglerBtn = document.querySelector('.icon-toggler');
const navMenuContainer = document.querySelector('.navbar-nav');
const menuTogglerIcon = document.querySelector('#navIcon');
// Event Listenr
menuTogglerBtn.addEventListener('click', function(){
  if(navMenuContainer.classList.contains('nav-hide')){
    // Show Menu Nav
    navMenuContainer.classList.remove('nav-hide');
    navMenuContainer.classList.add('nav-show');
    // Change Icon Nav
    menuTogglerIcon.classList.remove('fa-bars');
    menuTogglerIcon.classList.add('fa-times');
  } else {
       // Show Menu Nav
       navMenuContainer.classList.add('nav-hide');
       navMenuContainer.classList.remove('nav-show');
       // Change Icon Nav
       menuTogglerIcon.classList.add('fa-bars');
       menuTogglerIcon.classList.remove('fa-times');
  }
})
