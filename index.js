let inputConv = document.getElementById('conv-input')
let submit = document.getElementById('input-btn')
submit.innerText = 'Convert'
//aggiungo il controllo sul light/dark mode
let main = document.querySelector('main')
let modeBtn = document.getElementById('mode-btn')
modeBtn.addEventListener("click", function(){
    if(main.classList.contains('dark-mode')){
        main.classList.remove('dark-mode')
        modeBtn.textContent = '💡✨'
    } else{
        main.classList.add('dark-mode')
        modeBtn.textContent = '💡❌'
    }
})
//aggiungo il controllo sullo 0
submit.addEventListener("click", function(){
    let valoreInput = inputConv.value
    if (valoreInput == 0){
        alert('Please type a value')
    } else {
    convertUnits(valoreInput)
    }
})

let units = {
                unit: [{
                    name: 'Length (Meter/Feet)',
                    unit1: 'meters',
                    unit2: 'feet',
                    metric: 3.281
                },
                {
                    name: 'Volume (Liters/Gallons)',
                    unit1: 'liters',
                    unit2: 'gallons',
                    metric: 0.264
                },
                {
                    name: 'Mass (Kilograms/Pounds)',
                    unit1: 'kilos',
                    unit2: 'pounds',
                    metric: 2.204
                }]
}

function convertUnits(inputValue) {
    let unitDOM = ``
    for (let i = 0; i < units.unit.length; i++){
        let result1 = (inputValue * units.unit[i].metric).toFixed(3)
        let result2 = (inputValue / units.unit[i].metric).toFixed(3)

        let h2DOM= `<h2>${units.unit[i].name}</h2>`
        let pDOM = `<p>${inputValue} ${units.unit[i].unit1} = ${result1} | ${inputValue} ${units.unit[i].unit2} = ${result2}</p>`
        unitDOM += `<div class="unit-container">${h2DOM}${pDOM}</div>`
    }
    let container = document.querySelector('.units-container')
    container.innerHTML = unitDOM
}