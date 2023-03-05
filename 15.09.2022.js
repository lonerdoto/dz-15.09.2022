'use strict';


const title = 'super project';
const screens = 'Простые, сложные, интерактивные';
const screenPrice = 15000;
const rollback = 15;
const fullPrice = 40000;
const adaptive = true;


console.log(typeof(title), typeof(fullPrice), typeof(adaptive));
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);
console.log(screens.toLowerCase().split(', '));
console.log(`Процент отката посреднику за работу ${fullPrice * rollback / 100} рублей`);