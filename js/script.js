let days = document.querySelectorAll(".timer_value")[0];
let hourse = document.querySelectorAll(".timer_value")[1];
let minuts = document.querySelectorAll(".timer_value")[2];

let deadlineDate = new Date(2024,1,2,23,59,59)

function countDown(){
    let newDate= new Date()
    let resultDate = deadlineDate-newDate
if(resultDate <= 0){
    clearInterval{timer}
}
else{
    let daysValue=Math.floor(resultDate/(24*60*60*1000))
    let hoursValue=Math.floor(resultDate%(24*60*60*1000))/(60*60*1000)
    let minutsValue=Math.floor(resultDate%(60*60*1000))/(60*1000)
    let secondsValue=Math.floor(resultDate%(60*1000))/1000
    days.innerHTML=daysValue
    hourse.innerHTML=hoursValue
    minuts.innerHTML=minutsValue

}



}

let timer =setInterval(countDown,1000)


countDown()
