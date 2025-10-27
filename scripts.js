const words = {
	'chronic stress': 'przewlekły stres',
	'develop bad habits': 'wykształcić złe nawyki',
	'sedentary lifestyle': 'siedzący tryb życia',
	'severely affect sth': 'mieć poważny, negatywny wpływ na coś',
	'vigorous exercise': 'intensywne ćwiczenia',
	wrist: 'nadgarstek',
	gum: 'dziąsło',
	joint: 'staw',
	kidney: 'nerka',
	knuckle: 'knykieć',
	liver: 'wątroba',
	lung: 'płuco',
	palm: 'dłoń',
	ribs: 'żebra',
	sole: 'podeszwa',
	vein: 'żyła',
	'acute tension': 'silne napięcie',
	'be black and blue': 'być posiniaczonym',
	bruise: 'siniak',
	bump: 'guz',
	'chronic distress': 'przewlekły ból',
	'come out in a rash': 'dostać wysypki',
	diarrhoea: 'biegunka',
	'have blurred vision': 'widzieć nieostro',
	irritability: 'drażliwość',
	measles: 'odra',
	mumps: 'świnka',
	nausea: 'mdłości',
	'nervous breakdown': 'załamanie nerwowe',
	'racing thoughts': 'gonitwa myśli',
	'red and itchy eyes': 'czerwone i swędzące oczy',
	'splitting headache': 'rozsadzający ból głowy',
	stiffness: 'sztywność',
	'torn ligament': 'naderwane więzadło',
	tremble: 'drżeć',
	'ache all over': 'być obolałym',
	'be as fit as a fiddle': 'być zdrowy jak ryba',
	bewildered: 'zdezorientowany',
	'feel off-colour': 'kiepsko się czuć',
	'feel under the weather': 'źle się czuć',
	forgetful: 'roztargniony',
	heal: 'wydobrzeć',
	'jet-lagged': 'rozbity po długiej podróży lotniczej przez kilka stref czasowych',
	'puffed out': 'zasapany',
	shattered: 'wyczerpany',
	'acquire immunity': 'zdobyć odporność',
	'fatal / lethal disease': 'śmiertelna choroba',
	'global pandemic': 'globalna pandemia',
	'go into isolation': 'pozostać w izolacji',
	'go on a waiting list': 'znaleźć się na liście oczekujących',
	'impose quarantine/restrictions': 'nałożyć kwarantannę/restrykcje',
	lozenge: 'tabletka do ssania',
	'maintain your distance': 'zachowywać dystans',
	'make a good recovery': 'wrócić do zdrowia',
	'outbreak of an epidemic': 'wybuch epidemii',
	'remain in a coma': 'pozostawać w śpiączce',
	'take preventive measures': 'podjąć środki zapobiegawcze',
	'test positive for sth': 'mieć pozytywny wynik testu na coś',
	acne: 'trądzik',
	'breast/prostate cancer': 'nowotwór piersi/prostaty',
	'cardiovascular disease': 'choroba sercowo-naczyniowa',
	'cope with stress': 'radzić sobie ze stresem',
	diabetes: 'cukrzyca',
	'exacerbate the problem': 'spowodować pogorszenie problemu',
	'high cholesterol': 'wysoki cholesterol',
	insomnia: 'bezsenność',
	'lack of physical activity': 'brak aktywności fizycznej',
	lump: 'guz',
	obesity: 'nadwaga',
	'prevent hypertension': 'zapobiegać nadciśnieniu',
	'sleeping pills': 'tabletki nasenne',
	'stomach upsets': 'problemy żołądkowe',
	'accessible transport system': 'transport dostępny dla osób niepełnosprawnych',
	'hearing aid': 'aparat słuchowy',
	'partially sighted': 'niedowidzący',
	'speech therapist': 'logopeda',
	stammer: 'jąkać się',
	'be clean': 'nie brać narkotyków',
	"beat one's depression": 'pokonać depresję',
	'binge-watching': 'maraton filmowy/telewizyjny',
	'come off drugs': 'rzucić narkotyki',
	'get hopelessly hooked on': 'zatracić się w nałogu',
	'rehab centre': 'ośrodek leczenia uzależnień',
	'take an overdose': 'przedawkować',
	'blocked airways': 'zablokowane drogi oddechowe',
	'dress a cut/wound': 'opatrzyć skaleczenie/ranę',
	stitches: 'szwy',
	stretcher: 'nosze',
	stroke: 'udar mózgu',
	'suffer minor injuries': 'odnieść niewielkie obrażenia',
	'have a rough idea of sth': 'z grubsza coś wiedzieć, w przybliżeniu',
	'host of sth': 'mnóstwo czegoś',
	'major factor': 'główny czynnik',
	'make headlines': 'stać się sławnym',
	taster: 'przedsmak',
	'conducive to sth': 'sprzyjający czemuś',
	'contract a disease/a virus': 'zarazić się chorobą/wirusem',
	'lingering effect': 'długotrwały efekt',
	'meticulous records': 'skrupulatne zapisy',
	'sense of sth': 'poczucie czegoś',
	'small/large measure of sth': 'odrobina/dużo czegoś',
}

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
		).innerHTML = `Źle! Twoja odpowiedź: <span class="incorrect">${userAnswer}</span><br><span class="correct">Poprawna odpowiedź: ${correctWord}</span>`
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
