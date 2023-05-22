function ChistmasDay(){
    const DayChis = new Date ("December 31, 2023 00:00")// ставим дату отчета
    const myDay = new Date();// записываем в переменную текущую дату
    const datte = DayChis-myDay;//считаем сколько осталось до даты DayChis
    console.log(datte);
    const mySecond = 1000;// сколько милисекунд в секунде 1000мс
    const myMinute = 60*1000;// сколько милисекунд в минуте 60000
    const myHour = 60*60*1000;// сколько милисекунд в часе 3 600 000
    const myInDay = 24*60*60*1000;// сколько милисекунд в сутках 86 400 000 мс в сутках
const DisplayDay = Math.floor(datte/myInDay)//делим срок в милисекундах на количество дней и округляем до целого ( Math.floor)
const DisplayHour =Math.floor((datte%myInDay)/myHour)//определяем количество часов до Рождества
document.querySelector(".days").textContent=DisplayDay;//классу days присваиваем значение количества дней до Рождества .textContent- вставляем текст в класс
document.querySelector(".hours").textContent=DisplayHour;// считаем часы
const displayMinute = Math.floor((datte%myHour)/myMinute);
document.querySelector(".minutes").textContent=displayMinute;//считаем минуты
const displaySecond = Math.floor((datte%myMinute)/mySecond);//считаем секунды
document.querySelector(".second").textContent=displaySecond;
if(datte<=0){ //устраняем глюк, чтобы время остановилось когда дойдет до заданного, а не что в минус
    document.querySelector(".days").textContent=0;
    document.querySelector(".hours").textContent=0;
    document.querySelector(".minutes").textContent=0;
    document.querySelector(".second").textContent=0;
    clearInterval(timer)//метод очищения счетчика и остановка счетчика
    MerryChistmas();
}

}
let timer=setInterval(ChistmasDay,1000)//установливаем обновление сайта каждую секунду ChistmasDay название функции ,1000- время обновления в милисекундах
function MerryChistmas(){
    const heding=document.querySelector("h1");//меняем  заголовок
    heding.textContent="MERRY CHISTMAS HO-HO-HO";// пишем новое название заголовка
    heding.classList.add("red");// создаем класс и описываем его в css
}
const btn =document.querySelector("#myButton");
btn.addEventListener("click",function(){
    document.querySelector("#myAudio").play();
})