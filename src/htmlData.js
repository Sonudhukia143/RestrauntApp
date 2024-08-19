import imageSrc from '../src/amritsar-haveli-groupp-copy-1.png';

export default function homePageLoad () {

    const contentDiv = document.querySelector('#content');

    const h1 = document.createElement('h1');
    h1.textContent = "Welcome! To Haveli";

    const p1 = document.createElement('p');
    const i = document.createElement('i');

    i.textContent = "Experience";
    p1.appendChild(i);

    const p2 = document.createElement('p');
    p2.textContent = "The Authentic Taste of Amritsar"

    const image = document.createElement('img');
    image.src = imageSrc;

    contentDiv.appendChild(h1);
    contentDiv.appendChild(p1);
    contentDiv.appendChild(p2);
    contentDiv.appendChild(image);
}
