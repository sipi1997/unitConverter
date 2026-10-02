


// bisogna creare la funzione che calcola al click del bottone
// seleziona intanto gli elementi x questo

let inputConv = document.getElementById('conv-input')
let submit = document.getElementById('input-btn')
submit.innerText = 'Convert'

submit.addEventListener("click", function(){
    convertUnits(20)
})

let units = {
                unit: [{
                    name: 'Length (Meter/Feet)',
                    unit1: 'meters',
                    unit2: 'feet',
                    metric: 3.281
                }],
                unit: [{
                    name: 'Volume (Liters/Gallons)',
                    unit1: 'liters',
                    unit2: 'gallons',
                    metric: 0.264
                }],
                unit: [{
                    name: 'Mass (Kilograms/Pounds)',
                    unit1: 'kilos',
                    unit2: 'pounds',
                    metric: 2.204
                }]
}

function convertUnits(value) {
    for (let i = 0; i < units.unit; i++){
        let h2DOM = document.createElement('h2')
        let pDOM = document.createElement('p')
        let unitContainer = document.createElement('div')
        unitContainer.classList.add('unit-container')
        
        let result1 = (value * units.unit[i].metric).toFixed(3)
        let result2 = (value / units.unit[i].metric).toFixed(3)

        h2DOM.textContent = units.unit[i].name
        pDOM = `<p>${value} ${units.unit[i].unit1} = ${result1} | ${value} ${units.unit[i].unit2} = ${result2}</p>`
        unitContainer = h2DOM + pDOM 
    }



    let meterResult = (value * 3.281).toFixed(3)
    let feetResult = (value / 3.281).toFixed(3)
    let literResult = (value * 0.264).toFixed(3)
    let gallonResult = (value / 0.264).toFixed(3)
    let kilogramResult = (value * 2.204).toFixed(3)
    let poundResult = (value / 2.204).toFixed(3)
    console.log(meterResult)
    console.log(feetResult)
    console.log(literResult)
    console.log(gallonResult)
    console.log(kilogramResult)
    console.log(poundResult)

}
/*
mi piacerebbe mettere la metrica all'interno di una variabile nell'oggetto. 
Essendo che mettere "* 3.281" non è possibile perché trasformerebbe tutto in una stringa, 
dovrei mettere {value} * {units.unit[n].metric} e costruirmi così il <p>
Poi fare un ciclo su units.unit e dire che per ognuno di questi mi devi popolare un elemento p del dom che creo
Alla fine del ciclo iniettare tutto
*/