import './style.css';
import Icon from './oporto.png';
import { loadHomeTab } from './home';

const content = document.querySelector('#content');

function loadPage() {
    const main = document.createElement('main');

    const header = document.createElement('header');
    const headerIcon = new Image();
    headerIcon.src = Icon;
    header.appendChild(headerIcon);
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.classList.add('active');
    li.innerText = 'Home';
    ul.appendChild(li);
    li = document.createElement('li');
    li.innerText = 'Menu';
    ul.appendChild(li);
    li = document.createElement('li');
    li.innerText = 'Contact';
    ul.appendChild(li);
    header.appendChild(ul);
    content.appendChild(header)

    loadHomeTab(main);
    content.appendChild(main);

    const footer = document.createElement('footer');
    ul = document.createElement('ul');
    li = document.createElement('li');
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