import './/styles.css';
import homePageLoad from './htmlData';
import menuPageLoad from './htmlDataMenu';
import aboutData from './aboutData';
const homeButton = document.querySelector("#home");
const contentDiv = document.querySelector('#content');

document.addEventListener('DOMContentLoaded', ()=> {
    homePageLoad();
});
homeButton.addEventListener('click', () => {

    contentDiv.innerHTML='';
    homePageLoad();
})

const menuButton = document.querySelector("#menu")

menuButton.addEventListener('click', () => {
    
    contentDiv.innerHTML='';
    menuPageLoad();
})

const aboutButton = document.querySelector("#about");

aboutButton.addEventListener('click', () => {
    
    contentDiv.innerHTML='';
    aboutData();
})

