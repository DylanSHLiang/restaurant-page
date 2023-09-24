import './style.css';
import Icon from './oporto.png';
import { loadHomeTab } from './home';

const content = document.querySelector('#content');

function loadPage() {
    const header = document.createElement('header');
    const headerIcon = new Image();
    headerIcon.src = Icon;
    header.appendChild(headerIcon);
    let nav = document.createElement('nav');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.innerText = 'Home';
    ul.appendChild(li);
    li = document.createElement('li');
    li.innerText = 'Menu';
    ul.appendChild(li);
    li = document.createElement('li');
    li.innerText = 'Contact';
    ul.appendChild(li);
    nav.appendChild(ul);
    header.appendChild(nav);
    content.appendChild(header)

    const main = document.createElement('main');
    content.appendChild(main);
    loadHomeTab(main);

    const footer = document.createElement('footer');
    ul = document.createElement('ul');
    li = document.createElement('li');
    li.innerText = 'Images from https://www.oporto.com.au/';
    ul.appendChild(li);
    li = document.createElement('li');
    li.innerText = 'Check out https://github.com/DylanSHLiang';
    ul.appendChild(li);
    li = document.createElement('li');
    li.innerText = 'This is a fake site - 2023';
    ul.appendChild(li);
    nav.appendChild(ul);
    footer.appendChild(ul);
    content.appendChild(footer);
}

loadPage();