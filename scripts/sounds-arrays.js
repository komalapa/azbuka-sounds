const letters = {
    'а': {
        id: 'a',
        vowel: true,
    },
    'б': {
        id: 'b',
        vowel: false,
        dull: false,
        syllabic: true
    },
    'в': {
        id: 'v',
        vowel: false,
        dull: false,
        syllabic: true
    },
    'г': {
        id: 'g',
        vowel: false,
        dull: false,
        syllabic: true
    },
    'д': {
        id: 'd',
        vowel: false,
        dull: false,
        syllabic: true
    },
    'е': {
        id: 'e',
        vowel: true,
    },
    'ё': {
        id: 'jo',
        vowel: true,
    },
    'ж': {
        id: 'zh',
        vowel: false,
        dull: false,
        syllabic: true
    },
    'з': {
        id: 'z',
        vowel: false,
        dull: false,
        syllabic: true
    },
    'и': {
        id: 'i',
        vowel: true,
    },
    'й': {
        id: 'j',
        vowel: false,
        dull: false,
        syllabic: false
    },
    'к': {
        id: 'k',
        vowel: false,
        dull: true,
        syllabic: true
    },
    'л': {
        id: 'l',
        vowel: false,
        dull: false,
        syllabic: true
    },
    'м': {
        id: 'm',
        vowel: false,
        dull: false,
        syllabic: true
    },
    'н': {
        id: 'n',
        vowel: false,
        dull: false,
        syllabic: true
    },
    'о': {
        id: 'o',
        vowel: true,
    },
    'п': {
        id: 'p',
        vowel: false,
        dull: true,
        syllabic: true
    },
    'р': {
        id: 'r',
        vowel: false,
        dull: false,
        syllabic: true
    },
    'с': {
        id: 's',
        vowel: false,
        dull: true,
        syllabic: true
    },
    'т': {
        id: 't',
        vowel: false,
        dull: true,
        syllabic: true
    },
    'у': {
        id: 'u',
        vowel: true,
    },
    'ф': {
        id: 'f',
        vowel: false,
        dull: false,
        syllabic: true
    },
    'х': {
        id: 'h',
        vowel: false,
        dull: false,
        syllabic: true
    },
    'ц': {
        id: 'tc',
        vowel: false,
        dull: true,
        syllabic: true
    },
    'ч': {
        id: 'ch',
        vowel: false,
        dull: true,
        syllabic: true
    },
    'ш': {
        id: 'sh',
        vowel: false,
        dull: true,
        syllabic: true
    },
    'щ': {
        id: 'shh',
        vowel: false,
        dull: true,
        syllabic: true
    },
    'ъ': {
        id : "hard",
        vowel: null,
    },
    'ы': {
        id: 'y',
        vowel: true,
    },
    'ь': {
        id: 'soft',
        vowel: null,
    },
    'э': {
        id: 'je',
        vowel: true,
    },
    'ю': {
        id: 'ju',
        vowel: true,
    },
    'я': {
        id: 'ja',
        vowel: true,
    },
}
// const syllables = {
//     'б': {
//         'а': 'ба',
//         'о': 'бо',
//         'у': 'бу',
//         'э': 'бэ',
//         'ы': 'бы',
//         'я': 'бя',
//         'ё': 'бё',
//         'ю': 'бю',
//         'е': 'бе',
//         'и': 'би'
//     },
//     'в': {
//         'а': 'ва',
//         'о': 'во',
//         'у': 'ву',
//         'э': 'вэ',
//         'ы': 'вы',
//         'я': 'вя',
//         'ё': 'вё',
//         'ю': 'вю',
//         'е': 'ве',
//         'и': 'ви'
//     },    
//     'г': {
//         'а': 'га',
//         'о': 'го',
//         'у': 'гу',
//         'э': 'гэ',
//         'ы': 'гы',
//         'я': 'гя',
//         'ё': 'гё',
//         'ю': 'гю',
//         'е': 'ге',
//         'и': 'ги'
//     },
//     'д': {
//         'а': 'да',
//         'о': 'до',
//         'у': 'ду',
//         'э': 'дэ',
//         'ы': 'ды',
//         'я': 'дя',
//         'ё': 'дё',
//         'ю': 'дю',
//         'е': 'де',
//         'и': 'ди'
//     },
//     'ж': {
//         'а': 'жа',
//         'о': 'жо',
//         'у': 'жу',
//         'э': 'жэ',
//         'ы': 'жы',
//         'я': 'жя',
//         'ё': 'жё',
//         'ю': 'жю',
//         'е': 'же',
//         'и': 'би'
//     },
// }

const field = document.querySelector('#letters-field');
function addLetters() {
    console.log(letters)
    for (letter in letters) {
        const letterWrp = document.createElement('div');
        letterWrp.classList.add('letter');
        letterWrp.id = letters[letter].id;
        const letterSpan = document.createElement('span');
        if (letters[letter].vowel) {
            letterSpan.classList.add('vowel');
        } else if (letters[letter].vowel === false) {
            if (letters[letter].dull) {
                letterSpan.classList.add('dull');
            } else {
                letterSpan.classList.add('sonorous')
            }
        } else {
            letterSpan.classList.add('no-sound');
        }
        letterSpan.innerText = letter;
        letterWrp.append(letterSpan);
        const syllableBtn = document.createElement('button');
        syllableBtn.classList.add('letter-syllable');
        syllableBtn.onclick = () =>{
            addSyllables(letter)
        }
        if (letters[letter].vowel) {
            syllableBtn.innerText = 'м'+letter;
            syllableBtn.id = 'syl-'+letter;
            letterWrp.append(syllableBtn);
        } else if(letters[letter].vowel === false){
            if (letters[letter].syllabic){
                syllableBtn.innerText = letter+'а';
                syllableBtn.id = 'syl-'+letter;
                letterWrp.append(syllableBtn);
            }
        }
        field.append(letterWrp);
    };

}

function addSyllables(mainLetter){
    field.innerHTML = '';
    if (letters[mainLetter].vowel){
        for (letter in letters){
            console.log(letter, mainLetter)
            if (letters[letter].vowel != letters[mainLetter].vowel && letters[letter].syllabic){
                if ((mainLetter === 'и' && (letter === 'ж' || letter === 'ш')) || (mainLetter === 'я' && (letter === 'ч' || letter === 'щ')) || (mainLetter === 'ю' && (letter === 'ч' || letter === 'щ')) ) continue;
                const syllable = letters[mainLetter].vowel? letter + mainLetter : mainLetter + letter;  
                const syllableID = letters[mainLetter].vowel? letters[letter].id + letters[mainLetter].id : letters[mainLetter].id + letters[letter].id;  
                const syllableWrp = document.createElement('div');
                syllableWrp.classList.add('letter');
                syllableWrp.id = syllableID;
                const syllableSpan = document.createElement('span');
                syllableSpan.classList.add('syllable');
                syllableSpan.innerText = syllable;
                syllableWrp.append(syllableSpan);
                field.append(syllableWrp)    
            }
        }
    }
    
}

addLetters();