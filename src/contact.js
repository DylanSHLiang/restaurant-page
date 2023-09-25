export function loadContactTab(main) {
    const links = document.querySelectorAll('header li');
    links[0].classList.remove('active');
    links[1].classList.remove('active');
    links[2].classList.add('active');

    main.innerHTML = '';
    let h1 = document.createElement('h1');
    h1.innerText = 'Contact Us';
    main.appendChild(h1);

    let div = document.createElement('div');
    div.classList.add('location');
    let h2 = document.createElement('h2');
    h2.innerText = 'Find Locations here!'
    div.appendChild(h2);
    let p = document.createElement('p');
    p.innerText = '123 Forest Drive, Forestville, Maine';
    div.appendChild(p);
    main.appendChild(div);

    div = document.createElement('div');
    div.classList.add('location');
    h2 = document.createElement('h2');
    h2.innerText = 'Call us on'
    div.appendChild(h2);
    p = document.createElement('p');
    p.innerText = '1234567890';
    div.appendChild(p);
    main.appendChild(div);
}
