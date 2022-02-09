const addItem = () => {
    let data = document.querySelector('#task')
    

    if(!data.value == ""){
        console.log(data.value)

        localStorage.setItem('task', data.value)

        let ulDOM = document.querySelector('#list')
        let liDOM = document.createElement('li')
        liDOM.innerHTML = `${localStorage.getItem('task')}`

        ulDOM.appendChild(liDOM)

    }else{
        console.log("data yok")
    }
}


const finisTask = () => {
    
}


let addButtonDOM = document.querySelector('#liveToastBtn')
addButtonDOM.addEventListener('click', addItem)

