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

/* Shadow header on scroll */
const shadowHeader = () => {
  const header = document.getElementById('header');
  if (!header) return; // Stop if header is missing

  if (window.scrollY >= 50) {
    if (!header.classList.contains('shadow-header')) {
      header.classList.add('shadow-header');
    }
  } else {
    if (header.classList.contains('shadow-header')) {
      header.classList.remove('shadow-header');
    }
  }
};

// Using debounce for better performance
const debounce = (func, delay) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(), delay);
  };
};

window.addEventListener('scroll', debounce(shadowHeader, 100));
  /*=============== EMAIL JS ===============*/
/*
 const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  // Replace placeholders with your actual service ID, template ID, and public key
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#contact-form', 'YOUR_PUBLIC_KEY')
    .then((response) => {

      // Show success message
      contactMessage.textContent = 'Message sent successfully ✅';

      // Remove message after 10 seconds
      setTimeout(() => {
        contactMessage.textContent = '';
      }, 10000);

      // Clear input fields
      contactForm.reset();
    }, (error) => {
      // Show error message
      contactMessage.textContent = 'Message not sent (service error) ❌';
    });
};

// Attach the event listener
contactForm.addEventListener('submit', sendEmail);
*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const linkSelector = `.nav__menu a[href*="${sectionId}"]`;
    const sectionLink = document.querySelector(linkSelector);

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionLink?.classList.add('active-link');
    } else {
      sectionLink?.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);
  /*=============== DARK LIGHT THEME ===============*/ 


  /*=============== SCROLL REVEAL ANIMATION ===============*/
