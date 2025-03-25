const orders = [1, 2, 3, 1];

let circle = [
    { start: "0", end: "20", color: "#baffc9" },
    { start: "30", end: "60", color: "#ffffba" },
    { start: "60", end: "85", color: "#ffdfba" },
    { start: "85", end: "100", color: "#bae1ff" },
];

let pizzaSells = [
    { ilosc: "30" },
    { ilosc: "50" },
    { ilosc: "80" },
    { ilosc: "90" },
    { ilosc: "35" }
];
let priceList = [
    { oldPrice: "20.98", newPrice: "34.87" }
];
let clients = [
    { month1: "746", month2: "938" }
];
let ingridies = [
    { nazwa: "szynka", procent1: "50", procent2: "10" },
    { nazwa: "Pieczarki", procent1: "80", procent2: "30" },
    { nazwa: "Papryka", procent1: "90", procent2: "65" },
    { nazwa: "Cebula", procent1: "20", procent2: "75" },
    { nazwa: "Oliwki", procent1: "25", procent2: "40" },
];

setInterval(() => {
    const ordersCounter = document.getElementById("orders");
    const ordersStats = document.getElementById("orders-stats");

    const randomInt = Number.parseInt(Math.random() * 10);

    ordersStats.style.color = "chartreuse";
    ordersStats.innerHTML = "+" + randomInt + '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>'

    orders.push(randomInt);

    ordersCounter.innerHTML = Number.parseInt(ordersCounter.innerHTML) + randomInt;
}, 100);


setInterval(() => {
    let price = document.getElementById("price");
    let priceStats = document.getElementById("price-stats");

    const randomFloat = Math.random() * 10;
    let result = ((randomFloat - priceList[0].newPrice) / priceList[0].newPrice) * 100;


    if (randomFloat > priceList[0].newPrice) {
        priceStats.style.color = "chartreuse";
        priceStats.innerHTML = "+" + result.toFixed(2) + '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>'
    } else {
        priceStats.style.color = "red";
        priceStats.innerHTML = "-" + result.toFixed(2) + '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus"><path d="M5 12h14"/></svg>';
    }
    price.innerText = Number.parseFloat((priceList[0].newPrice + randomFloat)).toFixed(2)  + "$";

    priceList[0].oldPrice = priceList[0].newPrice;
    priceList[0].newPrice = Number.parseFloat(priceList[0].newPrice) + randomFloat;
}, 100);

this.loadCustomers();
this.loadPrices();
this.loadChart();
this.loadCircleChart();

function loadCustomers() {
    let customers = document.getElementById("customers");
    let customersStats = document.getElementById("customers-stats");

    let result = ((clients[0].month2 - clients[0].month1) / clients[0].month1) * 100;
    customers.innerText = clients[0].month2;
    customersStats.innerHTML = result.toFixed(2) + '% <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>';
}

function loadPrices() {
    let price = document.getElementById("price");
    let priceStats = document.getElementById("price-stats");

    let result = ((priceList[0].newPrice - priceList[0].oldPrice) / priceList[0].oldPrice) * 100;
    price.innerText = priceList[0].newPrice + "$";
    priceStats.innerHTML = result.toFixed(2) + '% <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>';
}

function loadChart() {
    let kol1 = document.querySelector(".one");
    let kol2 = document.querySelector(".two");
    let kol3 = document.querySelector(".three");
    let kol4 = document.querySelector(".four");
    let kol5 = document.querySelector(".five");

    document.getElementById("one-value").innerHTML = "Wartość: " + parseInt(pizzaSells[0].ilosc) + "%";
    document.getElementById("two-value").innerHTML = "Wartość: " + parseInt(pizzaSells[1].ilosc) + "%";
    document.getElementById("three-value").innerHTML = "Wartość: " + parseInt(pizzaSells[2].ilosc) + "%";
    document.getElementById("four-value").innerHTML = "Wartość: " + parseInt(pizzaSells[3].ilosc) + "%";
    document.getElementById("five-value").innerHTML = "Wartość: " + parseInt(pizzaSells[4].ilosc) + "%";

    kol1.style.height = `${parseInt(pizzaSells[0].ilosc)}%`;
    kol2.style.height = `${parseInt(pizzaSells[1].ilosc)}%`;
    kol3.style.height = `${parseInt(pizzaSells[2].ilosc)}%`;
    kol4.style.height = `${parseInt(pizzaSells[3].ilosc)}%`;
    kol5.style.height = `${parseInt(pizzaSells[4].ilosc)}%`;
}

function loadCircleChart() {
    let gradient = circle.map(segment => {
        return `${segment.color} ${segment.start}% ${segment.end}%`;
    }).join(', ');
    
    let circleElement = document.querySelector("#circle");
    circleElement.style.background = `conic-gradient(${gradient})`;
}

let polygon = document.getElementById("polygonik");
function generateClipPath(data) {
    let points = [];
    let center = 50; 
    let total = data.length; 

    data.forEach((item, index) => {
        let angle = (index / total) * (2 * Math.PI); 
        let r = item.procent1 * 0.5; 
        let x = center + r * Math.cos(angle); 
        let y = center + r * Math.sin(angle);

        points.push(`${x}% ${y}%`);
    });

    return `polygon( ${points.join(", ")})`;
}

polygon.style.clipPath = generateClipPath(ingridies);