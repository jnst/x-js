'use strict';

var moment= require('moment');

var WEEK = ['日', '月', '火', '水', '木', '金', '土'];
var day = new Date().getDay();

console.log('JavaScript:', new Date().toISOString(), day, WEEK[day]);
console.log('Moment.js:', moment().format('d'));
console.log('平日:', isWeekday(day));
console.log('週末:', isWeekend(day));

function isWeekday(day) {
  return !isWeekend(day);
}

function isWeekend() {
  return (day === 0 || day === 6);
}
