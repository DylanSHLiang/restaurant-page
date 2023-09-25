export function loadHomeTab(main) {
    const links = document.querySelectorAll('header li');
    links[0].classList.add('active');
    links[1].classList.remove('active');
    links[2].classList.remove('active');

    main.innerHTML = '';
    let h1 = document.createElement('h1');
    h1.id = 'slogan';
    h1.innerText = 'Live spicy';
    main.appendChild(h1);

    let div = document.createElement('div');
    div.classList.add('intro');
    let p = document.createElement('p');
    p.innerText = "Oporto exceeded all my expectations. The food was exceptional, the service was top-notch, and the ambiance was inviting. I had a fantastic dining experience and will definitely be returning for more delicious moments at my new favourtite restaurant!";
    div.appendChild(p);
    let h2 = document.createElement('h2');
    h2.innerText = '- Australian';
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
