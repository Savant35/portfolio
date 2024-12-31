/*=============== SHOW MENU ===============*/
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('toggle-menu'); 
  const navClose = document.getElementById('nav-close');

/* validates if button exists */
  if(navToggle){ /*if the button exists add the show-menu */
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
      })
  }

/*validate if constant exists */
  if (navClose){ /*closes show menu when button is clicked */
      navClose.addEventListener('click' , () => {
        navMenu.classList.remove('show-menu')
      })
  }

/*=============== REMOVE MENU MOBILE ===============*/
  const nav = document.querySelectorAll('.nav__link');
  const action = () => {
  navMenu.classList.remove('show-menu');
};
nav.forEach(n => n.addEventListener('click', action)); /*loops through all elements and adds click funtion to all elemnts

/*=============== SHADOW HEADER ===============*/


  /*=============== EMAIL JS ===============*/


  /*=============== SHOW SCROLL UP ===============*/ 


  /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


  /*=============== DARK LIGHT THEME ===============*/ 


  /*=============== SCROLL REVEAL ANIMATION ===============*/
