




const sports = [
    ['🤺','fencing'],
    ['⛸','figure skating'],
    ['⛷','skier'],
    ['🏂','snowboarder'],
    ['🏌','golfing'],
    ['🚣','rowing boat'],
    ['🏊','swimming'],
    ['🤸','gymnastics'],
    ['🤾','handball']
];
const winners = [
    ['fencing','🥇','fr'],
    ['fencing','🥈','it'],
    ['fencing','🥉','us'],

    ['figure skating','🥇','ca'],
    ['figure skating','🥈','fr'],
    ['figure skating','🥉','us'],

    ['skier','🥇','no'],
    ['skier','🥈','us'],
    ['skier','🥉','fr'],

    ['snowboarder','🥇','us'],
    ['snowboarder','🥈','jp'],
    ['snowboarder','🥉','au'],

    ['golfing','🥇','gb'],
    ['golfing','🥈','se'],
    ['golfing','🥉','us'],

    ['rowing boat','🥇','us'],
    ['rowing boat','🥈','ml'],
    ['rowing boat','🥉','ro'],

    ['swimming','🥇','us'],
    ['swimming','🥈','gb'],
    ['swimming','🥉','au'],

    ['gymnastics','🥇','it'],
    ['gymnastics','🥈','fr'],
    ['gymnastics','🥉','ua'],

    ['handball','🥇','dk'],
    ['handball','🥈','ke'],
    ['handball','🥉','de'],
]
const olimpic =  ['🔵','⚫','🔴','🟡','🟢'];


const continents = [
    ['fr','Europe'],
    ['it','Europe'],
    ['us','America'],
    ['ca','America'],
    ['no','Europe'],
    ['jp','Asia'],
    ['au','Oceania'],
    ['gb','Europe'],
    ['se','Europe'],
    ['ro','Europe'],
    ['ua','Europe'],
    ['dk','Europe'],
    ['de','Europe'],
    ['ke','Africa'],
    ['ml','Africa']

]

const flags = [
    ['fr','🇫🇷'],
    ['it','🇮🇹'],
    ['us','🇺🇸'],
    ['ca','🇨🇦'],
    ['no','🇳🇴'],
    ['jp','🇯🇵'],
    ['au','🇦🇺'],
    ['gb','🇬🇧'],
    ['se','🇸🇪'],
    ['ro','🇷🇴'],
    ['ua','🇺🇦'],
    ['dk','🇩🇰'],
    ['de','🇩🇪'],
    ['ke','🇰🇪'],
    ['ml','🇲🇱']
];


const getWinnersBaySport = sport => {

    let sportWinners = winners
    .filters(winner =>winner[0] === sport);

    return sportWinners;
}

const getContinentByContry = country =>{
    let countyInfo = continents.find(item => item === [0]);
    return countyInfo[1];
}

const getFlagbyContry = country =>{
    let countyInfo = flags.find(item => item[0] === country);
    return countyInfo[1];
}

const renderThead = () =>{
    let THs = olimpic
    .map(item => `<th>${item}</th>`)
    .join(` `);
    return `<thead>
    <tr>
         <th></th>
         ${THs}
    </tr>
           </thead>`
}

const renderTbodi = () => {
    const TRs = sports
    .map(sport => {
        let Europe =[];
        let America =[];
        let Asia =[];
        let Africa =[];
        let Oceania =[];

        let sportIcon = sport[0];
        let sportName = sport[1];
        let currentWinners = getWinnersBaySport(sportName)
        currentWinners.forEach (winner => {
            let winnerMedal = winner [1];

        let winnerCountry = winner[2];
        let winnerContinent = getContinentByContry(winnerCountry);
        let countryFlsg = getFlagbyContry(winnerCountry);
        winner = `<div>${countryFlsg} - ${winnerMedal}</div>`

        switch(winnerContinent){
            case `Europe`:
            Europe.push(winner);
            break;
            case `Africa`:
            Africa.push(winner);
            break;
            case `Asia`:
            Asia.push(winner);
            break;
            case `America`:
            America.push(winner);
            break;
            case `Oceania`:
            Oceania.push(winner);
            break;
        }
        return `<tr>
            <td>${sportIcon[0]}</td>
            <td>${Europe.join(``)}</td>
            <td>${Africa.join(``)}</td>
            <td>${America.join(``)}</td>
            <td>${Asia.join(``)}</td>
            <td>${Oceania.join(``)}</td>
            
        </tr>`
    
    })
    
    .join(``);
    return `<tbody>
    ${TRs}
    </tbody>`

}}


document.write(`<table>
     ${renderTbodi()}
     ${renderThead()}
</table>`)