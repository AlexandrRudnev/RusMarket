'use strict';
let nav = document.querySelectorAll('.nav'),
    tel = document.querySelectorAll('.tel'),
    ak = document.querySelectorAll('.aks'),
    pc = document.querySelectorAll('.komp'),
    el = document.querySelectorAll('.ele'),
    byt = document.querySelectorAll('.bytov'),
    zen = document.querySelectorAll('.zenkaia'),
    muz = document.querySelectorAll('.muzkaia'),
    det = document.querySelectorAll('.detskaia'),
    biz = document.querySelectorAll('.bizut'),
    ob = document.querySelectorAll('.obuv'),
    sum = document.querySelectorAll('.sumki'),
    dom = document.querySelectorAll('.dom'),
    avto = document.querySelectorAll('.avto'),
    kras = document.querySelectorAll('.krasota'),
    spo = document.querySelectorAll('.sport'),
    poisk = document.querySelectorAll('input'),
    cont = document.querySelectorAll('a');

//     poisk[1].addEventListener('click', function () {
//         let reg = poisk[0].value;      
//         console.log(reg);
// // cont.forEach(function (it, i) {
    
// console.log(cont.textContent.match(/телефон/gi));
// // });
        

//         // poisk[0].value =poisk[0].value.replace(/./gi, '#');
//     });       
  
function q(a, b, c, d) {
    a.addEventListener('mouseover', function () {
        b.forEach(function (item, i) {
            b[i].style.display = 'block';
        });
        c.forEach(function (item, i) {
            c[i].style.display = 'block';
        });
        d.forEach(function (item, i) {
            d[i].style.display = 'block';
        });
    });
    a.addEventListener('mouseout', function () {
        b.forEach(function (item, i) {
            b[i].style.display = 'none';
        });
        c.forEach(function (item, i) {
            c[i].style.display = 'none';
        });
        d.forEach(function (item, i) {
            d[i].style.display = 'none';
        });
    });
}
q(nav[0], tel, ak);
q(nav[1], pc);
q(nav[2], el);
q(nav[3], byt);
q(nav[4], zen, muz, det);
q(nav[5], biz);
q(nav[6], ob, sum);
q(nav[7], dom);
q(nav[8], avto);
q(nav[9], kras);
q(nav[10], spo);