// clock-hands **
let h1=document.querySelector('.page1 .container .clock-container #h1')
let m1=document.querySelector('.page1 .container .clock-container #m1')
let s1=document.querySelector('.page1 .container .clock-container #s1')
// clock-digits **
let hr=document.querySelector('.page1 .container .time #hr')
let min=document.querySelector('.page1 .container .time #min')
let sec=document.querySelector('.page1 .container .time #sec')

// adding-sound

let sound=new Audio("./assests/clock.mp3")

//function 
function updateTime(){
    let time=new Date()
    let hour=time.getHours()%12
    let minute=time.getMinutes()
    let second=time.getSeconds()
    
    let hdeg=360/12 *hour
    let mdeg=360/60 *minute
    let sdeg=360/60 *second

    h1.style.transform=`translateY(-50%) rotate(${hdeg}deg)`
    m1.style.transform=`translateY(-50%) rotate(${mdeg}deg)`
    s1.style.transform=`translateY(-50%) rotate(${sdeg}deg)`


    hr.innerHTML=String(hour).padStart(2,'0')
    min.innerHTML=String(minute).padStart(2,'0')
    sec.innerHTML=String(second).padStart(2,'0')


    sound.currentTime=0
    sound.play().catch(()=>{
        console.log("error");
    })
}
setInterval(
    updateTime,1000
)
