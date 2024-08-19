export default function aboutData () {
    const contentDiv = document.querySelector('#content');

    const h1 = document.createElement('h1');
    h1.innerText = "Contact Us";

    const divReg = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerText = "Registered Office";
    const h3 = document.createElement('h3');
    h3.innerText = "AMRITSAR HAVELI CUISINES PVT.LTD."
    const p1 = document.createElement('p');
    p1.innerText = `4th Floor, SCO NO. 7
                    Almas Tower, Block - d, Ranjit Avenue
                    Amritsar - 143001 Punjab(INDIA)`
    divReg.appendChild(h2);
    divReg.appendChild(h3);
    divReg.appendChild(p1);
                    
    const divBranch = document.createElement('div');
    const h21 = document.createElement('h2');
    h21.innerText = "Branch Office";
    const h31 = document.createElement('h3');
    h31.innerText = "AMRITSAR HAVELI CUISINES PVT.LTD."
    const p2 = document.createElement('p');
    p2.innerText = `World Trade Center, Level-9,
                    Tower-9,Opp. EON Free Zone,Kharadi,
                    Pune - 411014, India`
    divBranch.appendChild(h21);
    divBranch.appendChild(h31);
    divBranch.appendChild(p2);

    contentDiv.appendChild(divReg);
    contentDiv.appendChild(divBranch);
}