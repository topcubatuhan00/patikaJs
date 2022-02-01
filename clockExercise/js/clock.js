function setTureTime(time){

    if(time<10){
        time = '0'+time
    }
    return time
}


let name = prompt("Name : ")

document.getElementById("myName").innerHTML = name


function time(){   
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let day = date.getDay()

    let days = ['Pazartesi','Sali','Carsamba','Persembe','Cuma','Cumartesi','Pazar']
    day = days[day-1]

    hour = setTureTime(hour)
    minute = setTureTime(minute)
    second = setTureTime(second)

    document.getElementById("myClock").innerHTML = `${hour}:${minute}:${second} ${day}`
    
}

setInterval(() => {
    time()
}, 1000)

