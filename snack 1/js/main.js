// SNACK 1
const vips = [
    'Dwayne Johnson',
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin',
];


// map per modificare gli elementi
const guest = vips.map((guest, index) => {
    return {
        tableName: 'Tavolo Vip',
        guestName: guest,
        guestPlace: index
    }
})

// stampo in console l'array di object (ospiti)
console.log(guest);