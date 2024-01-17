import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";

const createTabs = () => {
    console.log('yo');
    const content = document.querySelector('#content');
    const tabBar = document.createElement('div');
    tabBar.classList.add('tabs');

    const tab1 = document.createElement('div');
    const tab2 = document.createElement('div');
    const tab3 = document.createElement('div');

    tab1.setAttribute('id', 'home-btn');
    tab1.textContent = 'Home';
    tab2.setAttribute('id', 'menu-btn');
    tab2.textContent = 'Menu';
    tab3.setAttribute('id', 'contact-btn');
    tab3.textContent = 'Contact';

    tabBar.appendChild(tab1);
    tabBar.appendChild(tab2);
    tabBar.appendChild(tab3);
    content.appendChild(tabBar);

    tab1.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage(); 
    });
    tab2.addEventListener('click', () => {
        clearContent();
        createMenuPage(); 
    });
    tab3.addEventListener('click', () => {
        clearContent();
        createContactPage(); 
    });
};

function clearContent() {
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');
    if (pageContent) {
        content.removeChild(pageContent);
    }
}
export default createTabs;