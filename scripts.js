const words = {
	'adventure film': 'film przygodowy',
	'blockbuster': 'przebój filmowy',
	'cartoon': 'kreskówka',
	'cast': 'obsada',
	'documentary': 'film dokumentalny',
	'fantasy film': 'film fantasy',
	'plot': 'fabuła',
	'romcom': 'komedia romantyczna',
	'scene': 'scena',
	'sci-fi film': 'film science fiction',
	'set': 'plan filmowy',
	'soundtrack': 'ścieżka dźwiękowa',
	'special effects': 'efekty specjalne',
	'spy film': 'film szpiegowski',
	'thriller': 'dreszczowiec',
	'western': 'film o dzikim zachodzie',
	'box-office disaster': 'klapa finansowa',
	'box-office hit': 'hit kasowy',
	'sequel': 'kontynuacja',
	'subtitles': 'napisy',
	'supporting role': 'rola drugoplanowa',
	'trailer': 'zwiastun',
	'exhibition': 'wystawa',
	'gallery': 'galeria',
	'landscape': 'krajobraz',
	'mural': 'mural',
	'oil painting': 'obraz olejny',
	'self-portrait': 'autoportret',
	'sketch': 'szkic',
	'still life': 'martwa natura',
	'watercolours': 'akwarele',
	'bust': 'popiersie',
	'statue': 'rzeźba',
	'bestseller': 'bestseler',
	'chapter': 'rozdział',
	'cover': 'okładka',
	'fiction': 'beletrystyka',
	'non-fiction': 'literatura faktu',
	'paperback': 'książka w miękkiej okładce',
	'blurb': 'notka wydawnicza',
	'bookworm': 'mól książkowy',
	'fairy tale': 'bajka',
	'verse': 'zwrotka',
	'album': 'płyta',
	'band': 'zespół',
	'choir': 'chór',
	'lyrics': 'tekst piosenki',
	'orchestra': 'orkiestra',
	'single': 'singiel',
	'track': 'utwór',
	'tune': 'melodia',
	'charts': 'lista przebojów',
	'cover version': 'nowe wykonanie',
	'gig': 'koncert',
	'act': 'grać', // uwaga: pierwsze wystąpienie, kolejne mogą być nadpisane
	'costumes': 'kostiumy',
	'curtain': 'kurtyna',
	'interval': 'antrakt',
	'script': 'scenariusz',
	'stage': 'scena',
	'audience': 'widownia',
	'row': 'rząd',
	'stage fright': 'trema',
	'standing ovation': 'owacje na stojąco',
	'actor': 'aktor',
	'author': 'autor/autorka',
	'ballet dancer': 'baletnica',
	'camera operator': 'operator kamery',
	'composer': 'kompozytor',
	'conduktor': 'dyrygent',
	'illustrator': 'ilustrator',
	'novelist': 'pisarz',
	'painter': 'malarz',
	'playwright': 'scenarzysta',
	'poet': 'poeta',
	'sculptor': 'rzeźbiarz',
	'singer': 'piosenkarz',
	'songwriter': 'autor piosenek',
	'writer': 'pisarz',
	'busker': 'artysta uliczny',
	'cartoonist': 'rysownik komiksów',
	'choreographer': 'choreograf',
	'pavement artist': 'artysta malujący na chodniku',
	'scriptwriter': 'scenarzysta',
	'stand-up comedian': 'artysta stand-upowy',
	'stuntman': 'kaskader',
	'voice-over artist': 'lektor',
	'amusing': 'zabawny',
	'attract attention': 'przyciągać uwagę',
	'audition': 'przesłuchanie',
	'award': 'nagroda',
	'based on': 'oparty na',
	'be on tour': 'być w trasie koncertowej',
	'be shortlisted': 'znaleźć się na liście finalistów',
	'bore sb to death': 'zanudzić kogoś na śmierć',
	'boring': 'nudny',
	'brilliant': 'znakomity',
	'cast the film': 'obsadzić role w filmie',
	'clever': 'pomysłowy',
	'come out': 'być wydanym, opublikowanym',
	'come up with sth': 'wymyślić coś',
	'concert hall': 'sala koncertowa',
	'disappointing': 'rozczarowujący',
	'dull': 'nudny',
	'easy-to-read': 'lekki, łatwy',
	'edition': 'wydanie',
	'enjoyable': 'przyjemny',
	'fascinating': 'fascynujący',
	'funny': 'śmieszny',
	'give a great show': 'dać świetny występ',
	'great fun': 'bardzo fajny',
	'gripping': 'porywający',
	'heavy-going': 'ciężki do przebrnięcia',
	'imaginative': 'pomysłowy',
	'informative': 'pouczający',
	'learn sth by heart': 'nauczyć się czegoś na pamięć',
	'live concert': 'koncert na żywo',
	'make sth up': 'zmyślić coś',
	'open-air event': 'wydarzenie na świeżym powietrzu',
	'opening night': 'premiera',
	'predictable': 'przewidywalny',
	'put on a show': 'zrobić show',
	'put sth down': 'odłożyć',
	'rave review': 'entuzjastyczna recenzja',
	'read': 'lektura',
	'relese': 'wydać',
	'sell out': 'wyprzedać',
	'show': 'pokaz',
	'silly': 'głupi',
	'star': 'gwiazda',
	'street festival': 'festiwal uliczny',
	'theatre performance': 'wystąpienie teatralne',
	'ticket': 'bilet',
	'tittle role': 'rola tytułowa',
	'uninteresting': 'nieciekawy',
	'violent': 'brutalny',
	'cello': 'wiolonczela',
	'drums': 'perkusja',
	'flute': 'flet',
	'guitar': 'gitara',
	'piano': 'pianino',
	'saxophone': 'saksofon',
	'tambourine': 'tamburyn',
	'trumpet': 'trąbka',
	'violin': 'skrzypce',
	'xylophone': 'ksylofon',
	'be glued to the screen': 'nie móc się oderwać od ekranu',
	'be packed with sth': 'pełny, zatłoczony',
	'boo': 'wygwizdać',
	'cheer': 'wiwatować',
	'extra': 'statysta',
	'keep sb on the edge of their seat': 'trzymać kogoś w napięciu',
	'Live in the limelight': 'żyć w blasku fleszy',
	'novel': 'powieść',
	'dress rehearsal': 'próba generalna',
	'serial': 'seryjny',
	'series': 'program w odcinkach',
	'shoot on location': 'zdjęcia w plenerze',
	'short story': 'opowiadanie',
	'spectetor': 'widz (na żywo)',
	'stand out from the crowd': 'wyróżniać się z tłumu',
	'viewer': 'widz (przed telewizorem)',
	'advertising company': 'agencja reklamowa',
	'article': 'artykuł',
	'breakfast TV': 'telewizja śniadaniowa',
	'breaking news': 'wiadomość z ostatniej chwili',
	'broadcast': 'transmitować',
	'chat show': 'program typu talk show',
	'commercial': 'reklama',
	'daily': 'codzienny',
	'game show': 'teleturniej',
	'headline': 'tytuł artykułu',
	'host': 'gospodarz programu telewizyjnego',
	'interview': 'wywiad',
	'journalist': 'dziennikarz',
	'keep to deadline': 'dotrzymać terminu',
	'make the headlines': 'trafić na pierwsze strony gazet',
	'news bulletin': 'wiadomości',
	'soap opera': 'opera mydlana',
	'sports highlights': 'przegląd wydarzeń sportowych',
	'TV station': 'stacja telewizyjna',
	'weather forecast': 'prognoza pogody',
	'biased': 'stronniczy',
	'circulation': 'nakład',
	'coverage': 'relacja, sprawozdanie',
	'feature': 'artykuł',
	'glossy magazine': 'kolorowe czasopismo',
	'gossip': 'plotka',
	'incisive': 'przenikliwy',
	'in-depth': 'dogłębny',
	'news feed': 'najnowsze wiadomości',
	'obituary': 'nekrolog',
	'one-sided': 'jednostronny',
	'press': 'prasa',
	'quality paper': 'poważna gazeta',
	'sensational': 'sensacyjny',
	'solve crossword': 'rozwiązywać krzyżówkę',
	'supplement': 'dodatek do gazety',
	'weekend edition': 'wydanie weekendowe',
	'be up for sth': 'być nominowanym do czegoś',
	'chance of s lifetime': 'życiowa szansa',
	'have a chance of doing sth': 'mieć okazje do zrobienia czegoś',
	'line up sth': 'planować coś',
	'point sth out': 'wskazywać coś',
	'take a long time': 'zająć dużo czasu',
	'take sth seriously': 'brać coś na poważnie',
	'taste in sth': 'gust w jakiejś dziedzinie',
	"be dead on one's feet": 'padać ze zmęczenia',
	'front man': 'lider zespołu',
	'get away scot-free': 'wyjść bez szwanku',
	"get out of sb's comfort zone": 'wyjść z czyjejś strefy komfortu',
	'have got two left feet': 'być jak słoń w składzie porcelany',
	'push oneself to the limit': 'dać z siebie wszystko',
	'rise to an occasion': 'stanąć na wysokości zdania',
	'understatement': 'niedopowiedzenie',
	'be aware of sth': 'być czegoś świadomym',
	'be full of sth': 'być pełnym czegoś',
	'blame sb for sth': 'winić kogoś za coś',
	'basting': 'bardzo głośny',
	'damage': 'uszczerbek',
	'express the way you feel': 'wyrazić co czujesz',
	'fussy': 'czepialski',
	'have a negative effect of sth': 'mieć na coś negatywny wpływ',
	'insecurity': 'brak pewności siebie',
	'lead to sth': 'prowadzić do czegoś',
	'listen to music': 'słuchać muzyki',
	'lose oneself in sth': 'zatracać się w czymś',
	'relieve tension': 'złagodzić napięcie',
	'stimulus': 'bodziec',
	'switch off': 'wyłączyć',
	'turn up the volume': 'podgłośnić',
	'be a real craze': 'być bardzo modnym',
	'be a whiff of fresh air': 'być powiewem świeżego powietrza',
	'be devoid of sth': 'być pozbawionym czegoś',
	'breakthrough': 'przełom',
	'chill out': 'relaksować się',
	'come into being': 'powstać',
	'derive from': 'wywodzić się z',
	'give sb positive vibes': 'dawać komuś pozytywną energie',
	'groundbreaking': 'przełomowy',
	'have its origins': 'wywodzić się skądś',
	'offer a feel-good factor': 'wprawiać w dobry nastrój',
	'ponder about sth': 'rozmyślać nad czymś',
	'start to exist': 'powstać',
	'sweep the world off its feet': 'podbić świat',
	'take the world by storm': 'podbić świat',
	'unwind': 'zrelaksować się'
};

let knownWords = []
let currentMode = ''
let totalWords = Object.keys(words).length

document.querySelectorAll('#total-words').forEach(el => (el.innerText = totalWords))

function updateProgress() {
	const progress = knownWords.length
	document.getElementById('flashcards-progress').innerText = progress
	document.getElementById('multiple-choice-progress').innerText = progress
	document.getElementById('typing-test-progress').innerText = progress

	if (progress === totalWords) {
		document.getElementById('flashcards-mode').classList.add('hidden')
		document.getElementById('multiple-choice-mode').classList.add('hidden')
		document.getElementById('typing-test-mode').classList.add('hidden')
		document.getElementById('completion-screen').classList.remove('hidden')
	}
}

function startFlashcards() {
	currentMode = 'flashcards'
	document.getElementById('flashcards-mode').classList.remove('hidden')
	document.getElementById('mode-select').classList.add('hidden')
	loadNextFlashcard()
}

function loadNextFlashcard() {
	const unknownWords = Object.keys(words).filter(word => !knownWords.includes(word))
	if (unknownWords.length === 0) {
		updateProgress()
		return
	}
	const randomWord = unknownWords[Math.floor(Math.random() * unknownWords.length)]
	let isFlipped = false

	document.getElementById('word').innerText = words[randomWord]
	document.getElementById('flip').onclick = () => {
		if (isFlipped) {
			document.getElementById('word').innerText = words[randomWord]
		} else {
			document.getElementById('word').innerText = randomWord
		}
		isFlipped = !isFlipped
	}
	document.getElementById('know').onclick = () => {
		knownWords.push(randomWord)
		loadNextFlashcard()
		updateProgress()
	}
	document.getElementById('dont-know').onclick = loadNextFlashcard
}

function startMultipleChoice() {
	currentMode = 'multiple-choice'
	document.getElementById('multiple-choice-mode').classList.remove('hidden')
	document.getElementById('mode-select').classList.add('hidden')
	loadNextMultipleChoiceQuestion()
}

function loadNextMultipleChoiceQuestion() {
	const unknownWords = Object.keys(words).filter(word => !knownWords.includes(word))
	if (unknownWords.length === 0) {
		updateProgress()
		return
	}
	const randomWord = unknownWords[Math.floor(Math.random() * unknownWords.length)]

	document.getElementById('question').innerText = words[randomWord]

	const options = []
	while (options.length < 3) {
		const randomOption = Object.keys(words)[Math.floor(Math.random() * totalWords)]
		if (!options.includes(randomOption) && randomOption !== randomWord) {
			options.push(randomOption)
		}
	}
	options.push(randomWord)
	options.sort(() => Math.random() - 0.5)

	document.getElementById('options').innerHTML = options
		.map(
			option => `
        <button onclick="checkMultipleChoiceAnswer('${option}', '${randomWord}')" class="answer-option">${option}</button>
      `
		)
		.join('')
}

function checkMultipleChoiceAnswer(selected, correct) {
	const result = selected === correct ? 'Poprawnie!' : 'Źle!'
	const resultClass = selected === correct ? 'correct' : 'incorrect'
	document.getElementById('multiple-choice-result').innerText = result
	document.getElementById('multiple-choice-result').className = resultClass

	// Dezaktywacja przycisków odpowiedzi
	document.querySelectorAll('.answer-option').forEach(button => (button.disabled = true))

	if (selected === correct) {
		knownWords.push(correct)
		updateProgress()
	}

	// Odczekaj chwilę i przejdź do następnego pytania
	setTimeout(loadNextMultipleChoiceQuestion, 1000)
}

function startTypingTest() {
	currentMode = 'typing'
	document.getElementById('typing-test-mode').classList.remove('hidden')
	document.getElementById('mode-select').classList.add('hidden')
	loadNextTypingQuestion()
}

function loadNextTypingQuestion() {
	document.getElementById('next-question').classList.add('hidden')
	const unknownWords = Object.keys(words).filter(word => !knownWords.includes(word))
	if (unknownWords.length === 0) {
		updateProgress()
		return
	}
	const randomWord = unknownWords[Math.floor(Math.random() * unknownWords.length)]

	document.getElementById('typing-question').innerText = words[randomWord]
	document.getElementById('typing-answer').value = ''
	document.getElementById('typing-result').innerText = ''

	// Nasłuchiwacz klawisza Enter
	document.getElementById('typing-answer').addEventListener('keydown', function (event) {
		if (event.key === 'Enter') {
			checkTypingAnswer()
		}
	})
}

function checkTypingAnswer() {
	const question = document.getElementById('typing-question').innerText
	const userAnswer = document.getElementById('typing-answer').value.trim()
	const correctWord = Object.keys(words).find(key => words[key] === question)

	if (userAnswer.toLowerCase() === correctWord.toLowerCase()) {
		document.getElementById('typing-result').innerText = 'Poprawnie!'
		document.getElementById('typing-result').className = 'correct'
		knownWords.push(correctWord)
		updateProgress()
	} else {
		document.getElementById(
			'typing-result'
		).innerHTML = `Źle! Twoja odpowiedź: <span class="incorrect">${userAnswer}.</span><br><span class="correct">Poprawna odpowiedź: ${correctWord}</span>`
		document.getElementById('typing-result').className = 'incorrect'
	}
	document.getElementById('next-question').classList.remove('hidden')
}

function restart() {
	knownWords = []
	document.getElementById('completion-screen').classList.add('hidden')
	document.getElementById('mode-select').classList.remove('hidden')
	updateProgress()
}
