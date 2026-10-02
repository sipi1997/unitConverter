let inputConv = document.getElementById('conv-input')
let submit = document.getElementById('input-btn')
submit.innerText = 'Convert'
//adesso torniamo qui e mettiamo un ascolto sul value

submit.addEventListener("click", function(){
    convertUnits(inputConv.value)
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