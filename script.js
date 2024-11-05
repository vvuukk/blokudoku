let polja = document.querySelectorAll("td");
const divGlavni = document.querySelector("#divGlavni");
const tacka = document.createElement("table");
const vLinija = document.createElement("table");
const hLinija = document.createElement("table");
const dugme1 = document.querySelector("#dug1");
const dugme2 = document.querySelector("#dug2");
for(let polje of polja){
    // polje.addEventListener("click", promeni);
    // polje.addEventListener("click", provera);
}

function ubaci(){
    for(let polje of polja){
        polje.addEventListener("click", ubacaj);
    }
}

function ubacaj(){
    let oblik = document.querySelector(".oblik");
    if(oblik.id=="tacka" && this.dataset.pun=="false"){
        popuni(this);
        provera1(this);  
    }
    if(oblik.id=="hLinija" && this.dataset.pun=="false"){
        let red = this.dataset.red;
        let kolona = this.className;
        popuni(this);
        provera1(this);
        if(red == "kol1"){
            let pored = document.querySelectorAll(`td.${kolona}`);
            for(let p of pored){
                if(p.dataset.red=="kol2"){
                    if(p.dataset.pun=="false"){
                        p.dataset.pun="true";
                        provera1(p);
                    }
                }
            }
        }
        if(red == "kol2"){
            let pored = document.querySelectorAll(`td.${kolona}`);
            for(let p of pored){
                if(p.dataset.red=="kol3"){
                    if(p.dataset.pun=="false");
                        p.dataset.pun="true";
                    provera1(p);
                }
            }
        }
    }
    if(oblik.id=="vLinija" && this.dataset.pun=="false"){
        let red = this.dataset.red;
        let kolona = this.className;
        popuni(this);
        provera1(this);
        if(kolona =="a"){
            let ispod = document.querySelectorAll(".b");
            for(let i of ispod){
                if(i.dataset.red==red){
                    if(i.dataset.pun=="false")
                        i.dataset.pun="true";
                    provera1(i);
                }
            }
        }
        if(kolona =="b"){
            let ispod = document.querySelectorAll(".c");
            for(let i of ispod){
                if(i.dataset.red==red){
                    if(i.dataset.pun=="false")
                        i.dataset.pun="true";
                    provera1(i);
                }
            }
        }
    }
    for(let polje of polja){
        polje.removeEventListener("click", ubacaj)
    }
    menjajOblik();
}



tacka.className="oblik";
tacka.id="tacka";
tacka.innerHTML += `
    <tr>
        <td></td>
    </tr>
`;
vLinija.className="oblik";
vLinija.id="vLinija";
vLinija.innerHTML +=`
    <tr> <td></td> </tr>
    <tr> <td></td> </tr>
`;
hLinija.className="oblik";
hLinija.id="hLinija";
hLinija.innerHTML +=`
    <tr>
        <td></td>
        <td></td>
    </tr>
`;


dugme1.onclick = menjajOblik;

function menjajOblik(){
    divGlavni.lastChild.remove();
    let br = Math.random()*2+1;
    br = Math.round(br);
    console.log(br);
    if(br == 1)
        divGlavni.appendChild(tacka);
    if(br == 2)
        divGlavni.appendChild(vLinija);
    if(br == 3)
        divGlavni.appendChild(hLinija);
    ubaci();
}

function popuni(polje){
    if(polje.dataset.pun == "false")
        polje.dataset.pun = "true";
}

// function promeni(){
//     if(this.dataset.pun == "true"){
//         this.dataset.pun = "false";
//     }else{
//         this.dataset.pun = "true";
//     }
// }

function provera1(nekoPolje){
    let reddata = nekoPolje.dataset.red;
    let koldata = nekoPolje.getAttribute("class");

    let kolona = document.querySelectorAll(`.${koldata}`);
    let red = document.querySelectorAll(`td[data-red="${reddata}"]`);
    let brred = 0;
    let brkol = 0;
    brkol=0;
    brred=0;
    for(let polje of red){
        if(polje.dataset.pun=="true"){
            brred++;
        }
    }
    for(let polje of kolona){
        if(polje.dataset.pun=="true"){
            brkol++;
        }
    }
    if(brred == 3 && brkol == 3)
    {
        for(let polje of red){
            polje.dataset.pun="false";
        }
        for(let polje of kolona){
            polje.dataset.pun="false";
        }
        brred=0;
        brkol=0;
    }else if(brred ==3){
        for(let polje of red){
            polje.dataset.pun="false";
        }
        brred=0;
    }else if(brkol == 3){
        for(let polje of kolona){
            polje.dataset.pun="false";
        }
        brkol=0;
    }

    console.log(`red: ${brred}`);
    console.log(`kol: ${brkol}`);
}

// function provera(){
//     let reddata = this.dataset.red;
//     let koldata = this.getAttribute("class");

//     let kolona = document.querySelectorAll(`.${koldata}`);
//     let red = document.querySelectorAll(`td[data-red="${reddata}"]`);
//     let brred = 0;
//     let brkol = 0;
//     brkol=0;
//     brred=0;
//     for(let polje of red){
//         if(polje.dataset.pun=="true"){
//             brred++;
//         }
//     }
//     for(let polje of kolona){
//         if(polje.dataset.pun=="true"){
//             brkol++;
//         }
//     }
//     if(brred == 3 && brkol == 3)
//     {
//         for(let polje of red){
//             polje.dataset.pun="false";
//         }
//         for(let polje of kolona){
//             polje.dataset.pun="false";
//         }
//         brred=0;
//         brkol=0;
//     }else if(brred ==3){
//         for(let polje of red){
//             polje.dataset.pun="false";
//         }
//         brred=0;
//     }else if(brkol == 3){
//         for(let polje of kolona){
//             polje.dataset.pun="false";
//         }
//         brkol=0;
//     }

//     console.log(`red: ${brred}`);
//     console.log(`kol: ${brkol}`);
// }