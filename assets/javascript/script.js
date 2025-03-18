let kolko = [
    {start: "0", end: "20", color: "#baffc9"},
    {start: "30", end: "60", color: "#ffffba"},
    {start: "60", end: "85", color: "#ffdfba"},
    {start: "85", end: "100", color: "#bae1ff"},
];

let sprzedazpizzy = [
    {ilosc: "30"},
    {ilosc: "50"},
    {ilosc: "80"},
    {ilosc: "90"},
    {ilosc: "35"}
];
let cena = [
    {oldPrice: "20.98", newPrice: "34.87" }
];
let clients = [
    {month1: "746", month2: "938"}
];
let skladniki = [
{nazwa: "szynka", procent1: "50",procent2 : "10"},
{nazwa: "Pieczarki", procent1: "80",procent2 : "30"},
{nazwa: "Papryka", procent1: "90",procent2 : "65"},
{nazwa: "Cebula", procent1: "20",procent2 : "75"},
{nazwa: "Oliwki", procent1: "25",procent2 : "40"},
];
    

let kolo = document.querySelector("#kolo");
let kol1 = document.querySelector(".one");
let kol2 = document.querySelector(".two");
let kol3 = document.querySelector(".three");
let kol4 = document.querySelector(".four");
let kol5 = document.querySelector(".five");


let NowiKlienci = document.getElementById("NowiKlienci");
let przyrost2 = document.getElementById("przyrost2");
let roznica2 = clients[0].month2 - clients[0].month1;
let obliczenie2 = (roznica2 / clients[0].month1)*100;
NowiKlienci.innerText = `${clients[0].month2}`;
przyrost2.innerText = `${obliczenie2.toFixed(2)}%`

let polygon = document.getElementById("polygonik");
polygon.style.clipPath = `polygon(${skladniki[0].procent1}% ${skladniki[0].procent2}%, ${skladniki[1].procent1}% ${skladniki[1].procent2}%, ${skladniki[2].procent1}% ${skladniki[2].procent2}%, ${skladniki[3].procent1}% ${skladniki[3].procent2}%, ${skladniki[4].procent1}% ${skladniki[4].procent2}%)`;

let NowaCena = document.getElementById("NowaCena");
let przyrost = document.getElementById("przyrost");
let roznica = cena[0].newPrice - cena[0].oldPrice;
let obliczenie = (roznica / cena[0].oldPrice )*100;
NowaCena.innerText = `${cena[0].newPrice}$`;
przyrost.innerText = `${obliczenie.toFixed(2)}%`;
console.log(obliczenie.toFixed(2) + "%");


kol1.style.height = `${parseInt(sprzedazpizzy[0].ilosc)}%`;
kol2.style.height = `${parseInt(sprzedazpizzy[1].ilosc)}%`;
kol3.style.height = `${parseInt(sprzedazpizzy[2].ilosc)}%`;
kol4.style.height = `${parseInt(sprzedazpizzy[3].ilosc)}%`;
kol5.style.height = `${parseInt(sprzedazpizzy[4].ilosc)}%`;



let gradient = kolko.map(segment => {
    return `${segment.color} ${segment.start}% ${segment.end}%`;
}).join(', ');

kolo.style.background = `conic-gradient(${gradient})`;

let draggedBox = null;
 
        const boxes = document.querySelectorAll('.divGrid');
 
        boxes.forEach(box => {
            box.addEventListener('mousedown', (e) => {
                draggedBox = box;
                box.classList.add('highlight');
            });
 
            box.addEventListener('mouseup', () => {
                if (draggedBox) {
                    draggedBox.classList.remove('highlight'); 
                    draggedBox = null;
                }
            });
 
            box.addEventListener('mouseenter', () => {
                if (draggedBox && draggedBox !== box) {
                
                    const tempContent = box.innerHTML;
                    box.innerHTML = draggedBox.innerHTML;
                    draggedBox.innerHTML = tempContent;
 
                    draggedBox.classList.remove('highlight');
                    draggedBox = null;
                }
            });
        });
 
        document.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });