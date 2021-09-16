/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 
*/
// navigation global var
const navigation = document.getElementById('navbar__list');


// sections global

const sections = document.querySelectorAll('section');

/**
End Global Variables
Start HelperFunctions
 
*/


// build the nav

const navBuilder = () => {

           let navUI = '';
    // looping over all section
            sections.forEach(section => {

                const sectionID = section.id;


        const sectionDataNav = section.dataset.nav;


        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

 });
    // append all elements to the navigatio

                   navigation.innerHTML = navUI;


};

navBuilder();



// getting the largest value that's less or equal to the number
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeActive = (section) => {



                section.classList.remove('your-active-class');



          section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,266,225,.2) 0%, rgba(230,155,255,.3) 100%)";
};
// adding the active class
           const addActive = (conditional, section) => {



    if(conditional){

        section.classList.add('your-active-class');




        section.style.cssText = "background-color: blue;";
 };
};

//implementating the actual function

const sectionActivation = () => {

    sections.forEach(section => {


        const elementOffset = offset(section);


        inviewport = () => elementOffset < 150 && elementOffset >= -150;

                 removeActive(section);


                   addActive(inviewport(),section);
 });
};

               window.addEventListener('scroll' ,sectionActivation);

// Scroll to anchor ID using scrollTO 

const scrolling = () => {


    const links = document.querySelectorAll('.navbar__menu a');
             links.forEach(link => {

        link.addEventListener('click', () => {

                   for(i = 0 ; i<sections ; i++){


                sections[i].addEventListener("click",sectionScroll(link));




  }
        
});
  });

};

scrolling();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active