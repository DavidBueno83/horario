

const getWaiters = () => {
    return JSON.parse(localStorage.getItem('waiters'))
}

const waiters = [
    {
        name: "davcid",
        days: [
            'asd', 'asd'
        ]
    }
] //getWaiters()

const addEscale = () => {
    localStorage.setItem('waiters', JSON.stringify(waiters))
}

//addEscale()

const setDay = (weekDay) => {
    if (weekDay == 'AF'){
        return "*"
    } else if (weekDay == '*'){
        return 'A'
    } else if (weekDay == 'A'){
        return 'F'
    } else if (weekDay == 'F'){
        return 'AF'
    } else {
        return 'AF'
    }
}


const addInTable = () => {
   
    const allWaiters = getWaiters()

    const tables = document.querySelector('.waiters')

    allWaiters.forEach((waiter, ind)=> {
        const div = document.createElement('div')
        const ul = document.createElement('ul')
        waiter.days.forEach((day, index)=> {
            if(index == 0){
                const input = document.createElement('input')
                input.value = waiter.name
                input.onchange = () => {
                    const edit = getWaiters()
                    edit.forEach((edited, indexEdit) => {
                        if(ind != indexEdit) return
                        edited.name = input.value
                        localStorage.clear
                        localStorage.setItem('waiters', JSON.stringify(edit))
                    })
                }
                ul.appendChild(input)
            }
            const li = document.createElement('li')
            li.onclick = () => {
                const edit = getWaiters()
                edit.forEach((edited, indexEdit) => {
                    if(ind != indexEdit) return
                    edited.days[index] = setDay(edited.days[index])
                    localStorage.clear
                    localStorage.setItem('waiters', JSON.stringify(edit))
                    li.innerHTML = edited.days[index]
                })
            }
            li.innerHTML = day
            ul.appendChild(li)
        })
        div.appendChild(ul)
        tables.appendChild(div)
    })
    
}



const addWaiter = () => {
    const beforeWaiters = getWaiters()
    if(!beforeWaiters){
    const newWaiters = [{
            name: 'nome',
            days: [
                '*', '*', '*', '*', '*', '*', '*'
            ]
        }]
        localStorage.clear
        localStorage.setItem('waiters', JSON.stringify(newWaiters))
    }else{
        const newWaiters = [...beforeWaiters, {
            name: 'nome',
            days: [
                '*', '*', '*', '*', '*', '*', '*'
            ]
        }]
        localStorage.clear
        localStorage.setItem('waiters', JSON.stringify(newWaiters))
    }

    location.reload()

}

const btn = document.querySelector('.btn-add-waiter')

btn.addEventListener('click', ()=> {
    addWaiter()
})

const btnClear = document.querySelector('.clear')

btnClear.addEventListener('click', ()=> {
    localStorage.clear()
    location.reload()
})


const addDocument = () => {
    const hasWaiters = getWaiters()
    if (!hasWaiters) return
    addInTable()
}

addDocument()