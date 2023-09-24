import './style.css';
import Icon from './oporto.png';
import { loadHomeTab } from './home';
import { loadMenuTab } from './menu';
import { loadContactTab } from './contact';

const content = document.querySelector('#content');

function loadPage() {
    const main = document.createElement('main');

    const header = document.createElement('header');
    const headerIcon = new Image();
    headerIcon.src = Icon;
    header.appendChild(headerIcon);
    let ul = document.createElement('ul');
    let home = document.createElement('li');
    home.innerText = 'Home';
    home.addEventListener('click', () => {
        if (!home.classList[0]) {
            loadHomeTab(main);
        }
    });
    ul.appendChild(home);
    let menu = document.createElement('li');
    menu.innerText = 'Menu';
    menu.addEventListener('click', () => {
        if (!menu.classList[0]) {
            loadMenuTab(main);
        }
    });
    ul.appendChild(menu);
    let contact = document.createElement('li');
    contact.innerText = 'Contact';
    contact.addEventListener('click', () => {
        if (!contact.classList[0]) {
            loadContactTab(main);
        }
    });
    ul.appendChild(contact);
    header.appendChild(ul);
    content.appendChild(header)

    loadHomeTab(main);
    content.appendChild(main);

    const footer = document.createElement('footer');
    ul = document.createElement('ul');
    let li = document.createElement('li');
    li.innerText = 'Images from ';
    let a = document.createElement('a');
    a.setAttribute('href', 'https://www.oporto.com.au/');
    a.setAttribute('target', '_blank');
    a.innerText = 'Oporto';
    li.appendChild(a);
    ul.appendChild(li);
    li = document.createElement('li');
    li.innerText = 'Check out my ';
    a = document.createElement('a');
    a.setAttribute('href', 'https://github.com/DylanSHLiang');
    a.setAttribute('target', '_blank');
    a.innerText = 'GitHub';
    li.appendChild(a);
    li.innerHTML += '!';
    ul.appendChild(li);
    li = document.createElement('li');
    li.innerText = 'This is a fake site - 2023';
    ul.appendChild(li);
    footer.appendChild(ul);
    content.appendChild(footer);
}

loadPage();