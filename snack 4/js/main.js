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




// ciclo per array con oggetti con nome e foul
const newTeams = teams.map((team) => {
    // random value score
    // const randomScore = Math.floor(Math.random() * 50);
    // random value foul
    const randomFoul = Math.floor(Math.random() * 50);

    team.foul = randomFoul

    // destructuring
    const {name, foul} = team;

    console.log(name, foul)

    return {name, foul};
})

// stampo array
console.log(newTeams)





