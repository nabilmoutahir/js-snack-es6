
const bikes = [
    {
        'bikeName': 'red bike',
        'weight': 45
    }, 
    {
        'bikeName': 'blue bike',
        'weight': 62
    }, 
    {
        'bikeName': 'green bike',
        'weight': 123
    }, 
    {
        'bikeName': 'yellow bike',
        'weight': 89
    }, 
    {
        'bikeName': 'black bike',
        'weight': 90
    }, 
    {
        'bikeName': 'white bike',
        'weight': 36
    }, 
    {
        'bikeName': 'grey bike',
        'weight': 76
    }, 
    {
        'bikeName': 'orange bike',
        'weight': 94
    }, 
    {
        'bikeName': 'violet bike',
        'weight': 54
    }, 
]

console.log(bikes)


// assegno una costante al valore minimo
const min = Math.min(...bikes.map(bike => bike.weight))

// filtro oggetti
const minWeight = bikes.filter((bike) => {
    return bike.weight === min 
})

console.log(minWeight)

// destructuring
const {bikeName, weight} = minWeight[0];


console.log(bikeName,weight)
console.log(`la bici che pesa meno è ${bikeName} e pesa ${weight} kg`)

