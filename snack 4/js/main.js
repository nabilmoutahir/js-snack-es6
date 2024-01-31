// array
const teams = [
    {
        name: 'Team Turtle',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Frog',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Penguin',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Hippopotamus',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Seal',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Crocodile',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Dolphin',
        score: 0,
        foul: 0,
    },
];



// ciclo per valori random score e foul
const randomValues = teams.map((team) => {

    const randomScore = Math.floor(Math.random() * 50);

    const randomFoul = Math.floor(Math.random() * 50);

    return {'name': team.name,
            'score': randomScore,
            'foul': randomFoul
            }

})

console.log(randomValues)