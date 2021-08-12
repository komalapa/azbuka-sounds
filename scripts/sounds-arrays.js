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
        id: "hard",
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
const syllables = {
    'б': {
        'а': ['ба', true],
        'о': ['бо', true],
        'у': ['бу', true],
        'э': ['бэ', true],
        'ы': ['бы', true],
        'я': ['бя', true],
        'ё': ['бё', true],
        'ю': ['бю', true],
        'е': ['бе', true],
        'и': ['би', true]
    },
    'в': {
        'а': ['ва', true],
        'о': ['во', true],
        'у': ['ву', true],
        'э': ['вэ', true],
        'ы': ['вы', true],
        'я': ['вя', true],
        'ё': ['вё', true],
        'ю': ['вю', true],
        'е': ['ве', true],
        'и': ['ви', true]
    },
    'г': {
        'а': ['га', true],
        'о': ['го', true],
        'у': ['гу', true],
        'э': ['гэ', true],
        'ы': ['гы', true],
        'я': ['гя', true],
        'ё': ['гё', true],
        'ю': ['гю', true],
        'е': ['ге', true],
        'и': ['ги', true]
    },
    'д': {
        'а': ['да', true],
        'о': ['до', true],
        'у': ['ду', true],
        'э': ['дэ', true],
        'ы': ['ды', true],
        'я': ['дя', true],
        'ё': ['дё', true],
        'ю': ['дю', true],
        'е': ['де', true],
        'и': ['ди', true]
    },
    'ж': {
        'а': ['жа', true],
        'о': ['жо', true],
        'у': ['жу', true],
        'э': ['жэ', true],
        'ы': ['жы', true],
        'я': ['жя', null],
        'ё': ['жё', true],
        'ю': ['жю', null],
        'е': ['же', true],
        'и': ['-', false]
    },
    'з': {
        'а': ['за', true],
        'о': ['зо', true],
        'у': ['зу', true],
        'э': ['зэ', true],
        'ы': ['зы', true],
        'я': ['зя', true],
        'ё': ['зё', true],
        'ю': ['зю', true],
        'е': ['зе', true],
        'и': ['зи', true]
    },
    'к': {
        'а': ['ка', true],
        'о': ['ко', true],
        'у': ['ку', true],
        'э': ['кэ', true],
        'ы': ['кы', true],
        'я': ['кя', true],
        'ё': ['кё', true],
        'ю': ['кю', true],
        'е': ['ке', true],
        'и': ['ки', true]
    },
    'л': {
        'а': ['ла', true],
        'о': ['ло', true],
        'у': ['лу', true],
        'э': ['лэ', true],
        'ы': ['лы', true],
        'я': ['ля', true],
        'ё': ['лё', true],
        'ю': ['лю', true],
        'е': ['ле', true],
        'и': ['ли', true]
    },
    'м': {
        'а': ['ма', true],
        'о': ['мо', true],
        'у': ['му', true],
        'э': ['мэ', true],
        'ы': ['мы', true],
        'я': ['мя', true],
        'ё': ['мё', true],
        'ю': ['мю', true],
        'е': ['ме', true],
        'и': ['ми', true]
    },
    'н': {
        'а': ['на', true],
        'о': ['но', true],
        'у': ['ну', true],
        'э': ['нэ', true],
        'ы': ['ны', true],
        'я': ['ня', true],
        'ё': ['нё', true],
        'ю': ['ню', true],
        'е': ['не', true],
        'и': ['ни', true]
    },
    'п': {
        'а': ['па', true],
        'о': ['по', true],
        'у': ['пу', true],
        'э': ['пэ', true],
        'ы': ['пы', true],
        'я': ['пя', true],
        'ё': ['пё', true],
        'ю': ['пю', true],
        'е': ['пе', true],
        'и': ['пи', true]
    },
    'р': {
        'а': ['ра', true],
        'о': ['ро', true],
        'у': ['ру', true],
        'э': ['рэ', true],
        'ы': ['ры', true],
        'я': ['ря', true],
        'ё': ['рё', true],
        'ю': ['рю', true],
        'е': ['ре', true],
        'и': ['ри', true]
    },
    'с': {
        'а': ['са', true],
        'о': ['со', true],
        'у': ['су', true],
        'э': ['сэ', true],
        'ы': ['сы', true],
        'я': ['ся', true],
        'ё': ['сё', true],
        'ю': ['сю', true],
        'е': ['се', true],
        'и': ['си', true]
    },
    'т': {
        'а': ['та', true],
        'о': ['то', true],
        'у': ['ту', true],
        'э': ['тэ', true],
        'ы': ['ты', true],
        'я': ['тя', true],
        'ё': ['тё', true],
        'ю': ['тю', true],
        'е': ['те', true],
        'и': ['ти', true]
    },
    'ф': {
        'а': ['фа', true],
        'о': ['фо', true],
        'у': ['фу', true],
        'э': ['фэ', true],
        'ы': ['фы', true],
        'я': ['фя', true],
        'ё': ['фё', true],
        'ю': ['фю', true],
        'е': ['фе', true],
        'и': ['фи', true]
    },
    'х': {
        'а': ['ха', true],
        'о': ['хо', true],
        'у': ['ху', true],
        'э': ['хэ', true],
        'ы': ['хы', true],
        'я': ['хя', true],
        'ё': ['хё', true],
        'ю': ['хю', true],
        'е': ['хе', true],
        'и': ['хи', true]
    },
    'ц': {
        'а': ['ца', true],
        'о': ['цо', true],
        'у': ['цу', true],
        'э': ['цэ', true],
        'ы': ['цы', true],
        'я': ['ця', null],
        'ё': ['цё', null],
        'ю': ['цю', true],
        'е': ['це', true],
        'и': ['ци', true]
    },
    'ч': {
        'а': ['ча', true],
        'о': ['чо', true],
        'у': ['чу', true],
        'э': ['чэ', null],
        'ы': ['чы', null],
        'я': ['-', false],
        'ё': ['чё', true],
        'ю': ['-', false],
        'е': ['че', true],
        'и': ['чи', true]
    },
    'ш': {
        'а': ['ша', true],
        'о': ['шо', true],
        'у': ['шу', true],
        'э': ['шэ', null],
        'ы': ['-', false],
        'я': ['шя', null],
        'ё': ['шё', true],
        'ю': ['шю', null],
        'е': ['ше', true],
        'и': ['ши', true]
    },
    'щ': {
        'а': ['ща', true],
        'о': ['що', true],
        'у': ['щу', true],
        'э': ['щэ', null],
        'ы': ['щы', null],
        'я': ['-', false],
        'ё': ['щё', true],
        'ю': ['-', false],
        'е': ['ще', true],
        'и': ['щи', true]
    },
}

function playSound(event){
    //console.log (event)
    if (event.target.classList.contains('letter')){
        //console.log(event.target.id)
        const audioEl = document.querySelector(`audio[data-sound="${event.target.id}"]`);
        if (!audioEl) return;
        console.log(audioEl)
        audioEl.currentTime = 0;
        audioEl.play();
    }
}

const field = document.querySelector('#letters-field');
const audios = document.querySelector('#audios')

function addLetters() {
    field.innerHTML = '';
    audios.innerHTML = '';
    // console.log(letters)
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
        syllableBtn.dataLetter = letter;
        syllableBtn.onclick = () => {
            addSyllables(letterSpan.innerText.toLowerCase())
        }
        if (letters[letter].vowel) {
            syllableBtn.innerText = 'м' + letter;
            syllableBtn.id = 'syl-' + letter;
            letterWrp.append(syllableBtn);
        } else if (letters[letter].vowel === false) {
            if (letters[letter].syllabic) {
                syllableBtn.innerText = letter + 'а';
                syllableBtn.id = 'syl-' + letter;
                letterWrp.append(syllableBtn);
            }
        }
        letterWrp.addEventListener('click', playSound)
        field.append(letterWrp);
        const sound = document.createElement('audio');
        sound.dataset.sound = letters[letter].id;
        sound.src = `sounds/letters/${letters[letter].id}.wav`;
        audios.append(sound);
    };

}

function addSyllables(mainLetter) {
    // console.log(mainLetter)
    field.innerHTML = '';
    audios.innerHTML = '';
    const backBtn = document.createElement('button');
    backBtn.onclick = () => {
        addLetters();
    };
    backBtn.classList.add('back-button')
    backBtn.innerText = ('Назад к буквам!')

    const header = document.createElement('h3');
    header.innerText = `Слоги с буквой ${mainLetter.toUpperCase()}`;
    header.classList.add('field-header')
    field.append(header)
    if (letters[mainLetter].vowel) {
        for (letter in syllables) {
            if (syllables[letter][mainLetter][1] != false) {
                const syllableID = letters[letter].id + letters[mainLetter].id;
                const syllableWrp = document.createElement('div');
                syllableWrp.classList.add('letter', 'syllable');
                if (syllables[letter][mainLetter][1] === null) syllableWrp.classList.add('rare')
                syllableWrp.id = syllableID;
                const syllableSpan = document.createElement('span');
                //syllableSpan.classList.add('syllable');
                syllableSpan.innerText = syllables[letter][mainLetter][0];
                syllableWrp.append(syllableSpan);
                syllableWrp.addEventListener('click',playSound);
                field.append(syllableWrp)
                const sound = document.createElement('audio');
                sound.dataset.sound = syllableID;
                sound.src = `sounds/syllables/${syllableID}.wav`;
                audios.append(sound);
            }
        }
    }
    if (!letters[mainLetter].vowel) {
        for (letter in syllables[mainLetter]) {
            if (syllables[mainLetter][letter][1] != false) {
                const syllableID = letters[mainLetter].id + letters[letter].id;
                const syllableWrp = document.createElement('div');
                syllableWrp.classList.add('letter', 'syllable');
                if (syllables[mainLetter][letter][1] === null) syllableWrp.classList.add('rare')
                syllableWrp.id = syllableID;
                const syllableSpan = document.createElement('span');
                //syllableSpan.classList.add('syllable');
                syllableSpan.innerText = syllables[mainLetter][letter][0];
                syllableWrp.append(syllableSpan);
                syllableWrp.addEventListener('click',playSound);
                field.append(syllableWrp)
                const sound = document.createElement('audio');
                sound.dataset.sound = syllableID;
                sound.src = `sounds/syllables/${syllableID}.wav`;
                audios.append(sound);
            }
        }
    }
    field.append(backBtn);
}

addLetters();


//fullscreen
const wrp = document.querySelector("#fullscreen");
const fullScreenBtn = document.querySelector(".fullscreen-btn");
const fullscreenForm = document.querySelector('.fullscreen-exit-form')
const fullscreenFormSubmit = fullscreenForm.querySelector('button');

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fullScreenBtn.classList.remove('fullscreen-off');
        fullScreenBtn.classList.add('fullscreen-on')
    } else {
        if (document.exitFullscreen) {
            const date = new Date();
            fullscreenForm.classList.add('shown')
            const answ = document.querySelector('#fullscreen-answ');
            answ.focus();
            fullscreenForm.addEventListener('submit', (e) => {
                e.preventDefault();
                //console.log("prevented?")
                
                if (answ.value.trim() == date.getDate()) {
                    document.exitFullscreen();
                    fullScreenBtn.classList.remove('fullscreen-on');
                    fullScreenBtn.classList.add('fullscreen-off');
                }
                fullscreenForm.classList.remove('shown')
                answ.value = '';
            })
        }
    }
}

fullScreenBtn.onclick = function () {
    toggleFullScreen()
}