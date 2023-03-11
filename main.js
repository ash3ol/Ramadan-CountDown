//ramadan
setInterval(() => {
    let ramadan = new Date("2023/3/23 00:00:00").getTime();
    let now = new Date().getTime();
    let distance = ramadan - now;   
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(distance % (1000 * 60) / (1000));
    document.querySelector(".container .days").textContent = `${days}`;
    document.querySelector(".container .hours").textContent = `${hours}`;
    document.querySelector(".container .minutes").textContent = `${minutes}`;
    document.querySelector(".container .seconds").textContent = `${seconds}`;
    
}, 1000);

//holiday

setInterval(() => {
    let holiday = new Date("2023/4/1 12:00:00");
    let now2 = new Date();
    let distance2 = holiday - now2;
    let days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    let hours2 = Math.floor(distance2 % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes2 = Math.floor(distance2 % (1000 * 60 * 60) / (1000 * 60));
    let seconds2 = Math.floor(distance2 % (1000 * 60) / (1000));
    document.querySelector(".container2 .days").textContent = `${days2}`;
    document.querySelector(".container2 .hours").textContent = `${hours2}`;
    document.querySelector(".container2 .minutes").textContent = `${minutes2}`;
    document.querySelector(".container2 .seconds").textContent = `${seconds2}`;
}, 1000);
