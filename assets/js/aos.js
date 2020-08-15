// SCREEN POSITION BEFORE ANIMATION TAKE EFFECT
const screenPosition = window.innerHeight / 1.5;
const screenPositionFadeOut = window.innerHeight / 2.5;

const screenPositionFadeIn = window.innerHeight / .5;
// FUNCTION ABOUT AOS
function aboutAOS(){
  // ABOUT ANIMATION ON SCROLL
    const aboutMeImage = document.querySelector('#about-me-img');
    const aboutMeText = document.querySelector('.about-me-text');
    
    const aboutMeImagePosition = aboutMeImage.getBoundingClientRect().top;
    const aboutMeTextPosition = aboutMeText.getBoundingClientRect().top;
  // ABOUT ME AOS
  if(aboutMeImagePosition < screenPosition){
    aboutMeImage.classList.add('fade-left-in');
  }
  if(aboutMeTextPosition < screenPosition){
    aboutMeText.classList.add('fade-right-in')
  }
  // ABOUT ME AOS FADE OUT
  if(aboutMeImagePosition > screenPositionFadeOut){
    aboutMeImage.classList.remove('fade-left-in');
  }
  if(aboutMeTextPosition > screenPositionFadeOut){
    aboutMeText.classList.remove('fade-right-in')
  } 
}
// function my skill AOS
function mySkillAOS(){
  const skillTitle = document.querySelector('.my-skill-title');
  const canDoTitle = document.querySelector('.what-can-do-title');
  const mySkillContainer = document.querySelector('.my-skill-cards');
  const canDoContainer = document.querySelector('.what-can-do-cards');

  const skillTitlePosition = skillTitle.getBoundingClientRect().top;
  const canDoTitlePosition = canDoTitle.getBoundingClientRect().top;
  const mySkillContainerPosition = mySkillContainer.getBoundingClientRect().top;
  const canDoContainerPosition = canDoContainer.getBoundingClientRect().top;

  if(skillTitlePosition < screenPosition){
    skillTitle.classList.add('fade-right-in');
  }
  if(canDoTitlePosition < screenPosition){
    canDoTitle.classList.add('fade-right-in');
  }
  if(mySkillContainerPosition < screenPosition){
    mySkillContainer.classList.add('fade-left-in');
  }
  if(canDoContainerPosition < screenPosition){
    canDoContainer.classList.add('fade-left-in');
  }
  // Fade Out
  if(skillTitlePosition > screenPositionFadeOut){
    skillTitle.classList.remove('fade-right-in');
  }
  if(canDoTitlePosition > screenPositionFadeOut){
    canDoTitle.classList.remove('fade-right-in');
  }
  if(mySkillContainerPosition > screenPositionFadeOut){
    mySkillContainer.classList.remove('fade-left-in');
  }
  if(canDoContainerPosition > screenPositionFadeOut){
    canDoContainer.classList.remove('fade-left-in');
  }
}
// FUNCTION MY WORK AOS
function myWorkAOS(){
  const workTitle = document.querySelector('.my-work-title');

  const cardOne = document.querySelector('.card-1');
  const cardTwo = document.querySelector('.card-2');
  const cardThree = document.querySelector('.card-3');

  const cardAllPosition = cardOne.getBoundingClientRect().top;
  const workTitlePosition = workTitle.getBoundingClientRect().top;
  const cardOnePosition = cardOne.getBoundingClientRect().top;
  const cardTwoPosition = cardTwo.getBoundingClientRect().top;
  const cardThreePosition = cardThree.getBoundingClientRect().top;

  // FADE IN
  if(workTitlePosition < screenPosition){
    workTitle.classList.add('fade-right-in');
  }
  if(cardAllPosition < screenPositionFadeIn){
    cardOne.classList.add('fade-left-in');
  }
  if(cardAllPosition < screenPositionFadeIn){
    cardTwo.classList.add('fade-up-in');
  }
  if(cardAllPosition < screenPositionFadeIn){
    cardThree.classList.add('fade-right-in');
  }

  // FADEOUT EFFECT
  if(workTitlePosition > screenPositionFadeOut){
    workTitle.classList.remove('fade-right-in');
  }
  if(cardOnePosition > screenPositionFadeOut){
    cardOne.classList.remove('fade-left-in');
  }
  if(cardTwoPosition > screenPositionFadeOut){
    cardTwo.classList.remove('fade-up-in');
  }
  if(cardThreePosition > screenPositionFadeOut){
    cardThree.classList.remove('fade-right-in');
  }
}

// My Contact Aos
function myContactAOS(){
  const ContactTitle = document.querySelector('.my-contact-title');
  const ContactInfo = document.querySelector('.contact-info');

  const ContactTitlePosition = ContactTitle.getBoundingClientRect().top;
  const ContactInfoPosition = ContactInfo.getBoundingClientRect().top;

  // FADE IN AOS
  if(ContactTitlePosition < screenPosition){
    ContactTitle.classList.add('fade-down-in');
  }
  if(ContactInfoPosition < screenPosition){
    ContactInfo.classList.add('opacity-in');
  }
  // FADE OUT AOS
  if(ContactTitlePosition > screenPosition){
    ContactTitle.classList.remove('fade-down-in');
  }
  if(ContactInfoPosition > screenPosition){
    ContactInfo.classList.remove('opacity-in');
  }
}
window.addEventListener('scroll', aboutAOS)
window.addEventListener('scroll', mySkillAOS)
window.addEventListener('scroll', myWorkAOS)
window.addEventListener('scroll', myContactAOS)