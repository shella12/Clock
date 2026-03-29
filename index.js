const hour = document.body.getElementsByClassName("hour")
const min = document.body.getElementsByClassName("min")
const sec = document.body.getElementsByClassName("sec")

const time = new Date();

const setTime = () => {
   
    let h =  new Date().getHours()
    h = 90+ (Number(h) / 12 * 360)
    hour[0].style.transform = 'rotate(' + h + 'deg)';
    console.log("Transform Value for hour",hour[0].style.transform);

    let m =  new Date().getMinutes()
    m = 90 + (Number(m) / 60 * 360)
    min[0].style.transform = 'rotate(' + m + 'deg)'; 
    console.log("Transform Value for min",min[0].style.transform);

    let s =  new Date().getSeconds()
    s = 90 + (Number(s)/60 * 360)
    sec[0].style.transform = 'rotate(' + s + 'deg)';
    console.log("Transform Value for sec",sec[0].style.transform);
}

setInterval(setTime,1000)