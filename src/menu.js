import Bondi from './best-of-bondi-box.jpg';
import Half from './half-chicken-box.jpg';
import Quarter from './quarter-chicken-box.jpg';
import Burger from './double-bondi-burger.jpg';
import Triple from './triple-bondi-burger.jpg';
import Vegan from './vegan-burger.jpg';
import Chicken from './chicken-rappa.jpg';
import Rappa from './bondi-rappa.jpg';
import Veggie from './vegan-rappa.jpg';
import Chips from './chips.jpg';
import Corn from './corn.jpg';
import Bread from './bread.jpg';
import Mousse from './mousse.jpg';
import Churros from './churros.jpg';

export function loadMenuTab(main) {
    const links = document.querySelectorAll('header li');
    links[0].classList.remove('active');
    links[1].classList.add('active');
    links[2].classList.remove('active');

    main.innerHTML = '';
    let h1 = document.createElement('h1');
    h1.innerText = 'Menu';
    main.appendChild(h1);

    let div = document.createElement('div');
    div.classList.add('menu', 'meals');
    let h2 = document.createElement('h2');
    h2.innerText = 'Meal Boxes';
    div.appendChild(h2);
    let ul = document.createElement('ul');
    
    let li = document.createElement('li');
    li.innerText = 'Best of Bondi Box';
    let img = new Image();
    img.src = Bondi;
    li.append(img);
    let p = document.createElement('p');
    p.innerText = 'Includes a Single Bondi Burger, 1/4 Flame Grilled Chicken with your choice of basting and Small Chips.';
    li.append(p);
    ul.appendChild(li);

    li = document.createElement('li');
    li.innerText = 'Half Chicken Box';
    img = new Image();
    img.src = Half;
    li.append(img);
    p = document.createElement('p');
    p.innerText = 'Includes half of our famous Flame Grilled Portuguese Chicken, your choice of two sides with pita & choice of dipping sauce.';
    li.append(p);
    ul.appendChild(li);
    
    li = document.createElement('li');
    li.innerText = 'Quarter Chicken Box';
    img = new Image();
    img.src = Quarter;
    li.append(img);
    p = document.createElement('p');
    p.innerText = 'Includes a quarter of our famous Flame Grilled Portuguese Chicken, your choice of a side with pita & choice of dipping sauce.';
    li.append(p);
    ul.appendChild(li);

    div.appendChild(ul);
    main.appendChild(div);

    div = document.createElement('div');
    div.classList.add('menu', 'burgers');
    h2 = document.createElement('h2');
    h2.innerText = 'Burgers';
    div.appendChild(h2);
    ul = document.createElement('ul');

    li = document.createElement('li');
    li.innerText = 'Double Bondi Burger';
    img = new Image();
    img.src = Burger;
    li.append(img);
    p = document.createElement('p');
    p.innerText = "Two fresh-grilled 100% chicken breast fillets, crisp lettuce, cheese, creamy mayo and Oporto's legendary Original Chilli sauce.";
    li.append(p);
    ul.appendChild(li);

    li = document.createElement('li');
    li.innerText = 'Triple Bondi Burger';
    img = new Image();
    img.src = Triple;
    li.append(img);
    p = document.createElement('p');
    p.innerText = "Three fresh-grilled 100% chicken breast fillets, crisp lettuce, cheese, creamy mayo and Oporto's legendary Original Chilli sauce.";
    li.append(p);
    ul.appendChild(li);
    
    li = document.createElement('li');
    li.innerText = 'Vegan Burger';
    img = new Image();
    img.src = Vegan;
    li.append(img);
    p = document.createElement('p');
    p.innerText = 'Our Veggie Burger is served with fresh lettuce, tomato, cheese, mayo and lemon and herb sauce.';
    li.append(p);
    ul.appendChild(li);

    div.appendChild(ul);
    main.appendChild(div);

    div = document.createElement('div');
    div.classList.add('menu', 'rappas');
    h2 = document.createElement('h2');
    h2.innerText = 'Rappas';
    div.appendChild(h2);
    ul = document.createElement('ul');
    
    li = document.createElement('li');
    li.innerText = 'Grilled Chicken Rappa';
    img = new Image();
    img.src = Chicken;
    li.append(img);
    p = document.createElement('p');
    p.innerText = 'Two fresh grilled chicken tenders, tomato, lettuce, creamy mayo and your choice of sauce - all in a warm pita bread wrap.';
    li.append(p);
    ul.appendChild(li);

    li = document.createElement('li');
    li.innerText = 'Bondi Rappa';
    img = new Image();
    img.src = Rappa;
    li.append(img);
    p = document.createElement('p');
    p.innerText = 'Two grilled chicken breast fillets, crisp lettuce, cheese, creamy mayo & original chilli sauce – all in a warm pita bread wrap.';
    li.append(p);
    ul.appendChild(li);
    
    li = document.createElement('li');
    li.innerText = 'Vegan Rappa';
    img = new Image();
    img.src = Veggie;
    li.append(img);
    p = document.createElement('p');
    p.innerText = 'A kale & quinoa pattie, avocado, fresh tomato, mixed lettuce leaves, crisp lettuce, dry slaw with a tomato & capsicum relish.';
    li.append(p);
    ul.appendChild(li);

    div.appendChild(ul);
    main.appendChild(div);

    div = document.createElement('div');
    div.classList.add('menu', 'sides');
    h2 = document.createElement('h2');
    h2.innerText = 'Sides';
    div.appendChild(h2);
    ul = document.createElement('ul');
    
    li = document.createElement('li');
    li.innerText = 'Chips';
    img = new Image();
    img.src = Chips;
    li.append(img);
    p = document.createElement('p');
    p.innerText = 'Cooked until golden brown and lightly seasoned - our famous hot chips are great on the side or as a snack.';
    li.append(p);
    ul.appendChild(li);

    li = document.createElement('li');
    li.innerText = 'Grilled Corn';
    img = new Image();
    img.src = Corn;
    li.append(img);
    p = document.createElement('p');
    p.innerText = 'Grilled corn kernels, delicious as a side or added to a bowl.';
    li.append(p);
    ul.appendChild(li);
    
    li = document.createElement('li');
    li.innerText = 'Pita Bread & Garlic Dip';
    img = new Image();
    img.src = Bread;
    li.append(img);
    p = document.createElement('p');
    p.innerText = 'A lightly toasted warm pita bread with an authentic dipping sauce made with fresh garlic and lemon.';
    li.append(p);
    ul.appendChild(li);
    
    div.appendChild(ul);
    main.appendChild(div);

    div = document.createElement('div');
    div.classList.add('menu', 'desserts');
    h2 = document.createElement('h2');
    h2.innerText = 'Desserts';
    div.appendChild(h2);
    ul = document.createElement('ul');
    
    li = document.createElement('li');
    li.innerText = 'Chocolate Mousse';
    img = new Image();
    img.src = Mousse;
    li.append(img);
    p = document.createElement('p');
    p.innerText = 'Treat yourself with a serving of our creamy, deliciously decadent chocolate mousse.';
    li.append(p);
    ul.appendChild(li);

    li = document.createElement('li');
    li.innerText = 'Churros';
    img = new Image();
    img.src = Churros;
    li.append(img);
    p = document.createElement('p');
    p.innerText = 'Crunchy, doughy goodness with a sweet dusting of cinnamon sugar along with our deliciously sweet and salty dipping sauce.';
    li.append(p);
    ul.appendChild(li);

    div.appendChild(ul);
    main.appendChild(div);
}
