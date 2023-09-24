import './style.css';
import Icon from './oporto.png';

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
    loadHomeTab(main);
    content.appendChild(main);

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

function loadHomeTab(main) {
    let h1 = document.createElement('h1');
    h1.innerText = 'Oporto';
    main.appendChild(h1);

    let div = document.createElement('div');
    div.classList.add('intro');
    let p = document.createElement('p');
    p.innerText = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
    div.appendChild(p);
    let h2 = document.createElement('h2');
    h2.innerText = 'Australian';
    div.appendChild(h2);
    main.appendChild(div);

    div = document.createElement('div');
    div.classList.add('hours');
    h2 = document.createElement('h2');
    h2.innerText = 'Hours';
    div.appendChild(h2);
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.innerText = 'Sunday: 8am - 8pm';
    ul.appendChild(li);
    li = document.createElement('li');
    li.innerText = 'Monday: 6am - 6pm';
    ul.appendChild(li);
    li = document.createElement('li');
    li.innerText = 'Tuesday: 6am - 6pm';
    ul.appendChild(li);
    li = document.createElement('li');
    li.innerText = 'Wednesday: 6am - 6pm';
    ul.appendChild(li);
    li = document.createElement('li');
    li.innerText = 'Thursday: 6am - 10pm';
    ul.appendChild(li);
    li = document.createElement('li');
    li.innerText = 'Friday: 6am - 10pm';
    ul.appendChild(li);
    li = document.createElement('li');
    li.innerText = 'Saturday: 8am - 10pm';
    ul.appendChild(li);
    div.appendChild(ul);
    main.appendChild(div);

    div = document.createElement('div');
    div.classList.add('location');
    h2 = document.createElement('h2');
    h2.innerText = 'Location'
    div.appendChild(h2);
    p = document.createElement('p');
    p.innerText = '123 Forest Drive, Forestville, Maine';
    div.appendChild(p);
    main.appendChild(div);
}

loadPage();