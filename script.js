const deg = 6;
const hr = document.querySelector('.hr');
const mn = document.querySelector('.mn');
const sc = document.querySelector('.sc');
const dhr = document.querySelector('.dhr');
const dmn = document.querySelector('.dmn');
const dsc = document.querySelector('.dsc');


setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = 'rotateZ(' + (hh + (mm / 12)) + 'deg)';
    mn.style.transform = 'rotateZ(' + mm + 'deg)';
    sc.style.transform = 'rotateZ(' + ss + 'deg)';
    dhr.innerHTML = day.getHours() + "h"
    dmn.innerHTML = day.getMinutes() + "m"
    dsc.innerHTML = day.getSeconds() + "s"
});