alert("Press F12 for work this aplication")
console.log("bamboo vs caterpillar");

let lastDay;
let day;
let startHeight = 100 ;
let growth = 50 ;
let losses = 20;
let finishHeight = 310;
let thirdDayHeight = startHeight + ((growth - losses) *2+growth/2);

console.log("Высота бамбука на третий с половиной день: "+thirdDayHeight+" cм.") 

lastDay=(finishHeight-startHeight)/(growth - losses);
console.log("Что-бы бамбук вырос до 310см. нужно " +lastDay+" дней ");

growth = prompt("Укажите на сколько см. удобрения дают прирост")
losses = prompt("Укажите сколько см. съедают паразиты за ночь")
finishHeight = prompt("Укажите желаемую высоту в см.")

day=(finishHeight-startHeight) /(growth-losses)

console.log("Потребуеться полных дней : "+day);