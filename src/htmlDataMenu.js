import image1 from "../src/1.jpg";
import image2 from "../src/2.jpg";
import image3 from "../src/3.jpg";
import image4 from "../src/4.jpg";
import image5 from "../src/5.jpg";

export default function menuPageLoad () {
    const contentDiv = document.querySelector('#content');

    const imgDiv = document.createElement('div');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    const img4 = document.createElement('img');
    const img5 = document.createElement('img');

    img1.src = image1;
    img2.src = image2;
    img3.src = image3;
    img4.src = image4;
    img5.src = image5;


    imgDiv.appendChild(img1);
    imgDiv.appendChild(img2);
    imgDiv.appendChild(img3);
    imgDiv.appendChild(img4);
    imgDiv.appendChild(img5);
    contentDiv.appendChild(imgDiv);
}