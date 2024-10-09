const words = [
	{ english: 'apricot', polish: 'morela' },
	{ english: 'blackcurrant', polish: 'czarna porzeczka' },
	{ english: 'gooseberry', polish: 'agrest' },
	{ english: 'tangerine', polish: 'mandarynka' },
	{ english: 'aubergine', polish: 'bakłażan' },
	{ english: 'chives', polish: 'szczypiorek' },
	{ english: 'kale', polish: 'jarmuż' },
	{ english: 'leek', polish: 'por' },
	{ english: 'cod', polish: 'dorsz' },
	{ english: 'poultry', polish: 'drób' },
	{ english: 'prawn', polish: 'krewetka' },
	{ english: 'crumble', polish: 'ciasto owocowe z kruszonką' },
	{ english: 'packet of crisps', polish: 'paczkę czipsów' },
	{ english: 'jug of milk', polish: 'dzbanek mleka' },
	{ english: 'spoonful of sugar', polish: 'łyżeczka cukru' },
	{ english: 'brunch', polish: 'późne śniadanie' },
	{ english: 'grate', polish: 'zetrzeć na tarce' },
	{ english: 'sprinkle', polish: 'posypać, pokropić' },
	{ english: 'gulp', polish: 'połknąć' },
	{ english: 'rinse', polish: 'opłukać' },
	{ english: 'stew', polish: 'dusić na wolnym ogniu' },
	{ english: 'kettle', polish: 'czajnik' },
	{ english: 'crockery', polish: 'naczynia, porcelana stołowa' },
	{ english: 'cutlery', polish: 'sztućce' },
	{ english: 'sieve', polish: 'sitko' },
	{ english: 'edible', polish: 'jadalny' },
	{ english: 'inedible', polish: 'niejadalny' },
	{ english: 'mild', polish: 'łagodny' },
	{ english: 'sharp', polish: 'ostry, cierpki' },
	{ english: 'bland', polish: 'mdły' },
	{ english: 'lumpy', polish: 'grudkowaty' },
	{ english: 'off-putting', polish: 'odpychający' },
	{ english: 'revolting', polish: 'odrażający, okropny' },
	{ english: 'scrumptious', polish: 'przepyszny' },
	{ english: 'additives', polish: 'dodatki do żywności, np. barwniki' },
	{ english: 'crash diet', polish: 'intensywna dieta odchudzająca' },
	{ english: 'cut down on', polish: 'ograniczyć' },
	{ english: 'put on weight', polish: 'przytyć' },
	{ english: 'well-balanced diet', polish: 'zrównoważona dieta' },
	{ english: 'daily intake', polish: 'dzienna dawka' },
	{ english: 'high-fibre', polish: 'bogate w błonnik' },
	{ english: 'nutritious', polish: 'pożywny' },
	{ english: 'processed food', polish: 'żywność przetworzona' },
	{ english: 'saturated fats', polish: 'tłuszcze nasycone' },
	{ english: 'wholemeal', polish: 'razowy' },
	{ english: 'bill', polish: 'rachunek' },
	{ english: 'cuisine', polish: 'kuchnia, sposób gotowania' },
	{ english: 'main course', polish: 'danie główne' },
	{ english: 'review', polish: 'recenzja' },
	{ english: 'self-service', polish: 'samoobsługa, samoobsługowy' },
	{ english: 'takeaway', polish: '(danie) na wynos' },
	{ english: 'delicacies', polish: 'przysmaki, delikatesy' },
	{ english: 'side dish', polish: 'dodatek do dania głównego' },
	{ english: 'binge eating disorder', polish: 'zespół napadowego objadania się' },
	{ english: 'compulsive', polish: 'kompulsywny' },
	{ english: 'fixated on sth', polish: 'mieć obsesję na punkcie czegoś' },
	{ english: 'malnutrition', polish: 'niedożywienie' },
	{ english: 'overly concerned', polish: 'nadmiernie zaniepokojony' },
	{ english: 'restrictive eating patterns', polish: 'ograniczony schemat żywienia' },
]

let knownWords = []
let currentMode = ''
let totalWords = words.length

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
	const unknownWords = words.filter(word => !knownWords.includes(word.english))
	if (unknownWords.length === 0) {
		updateProgress()
		return
	}
	const randomWord = unknownWords[Math.floor(Math.random() * unknownWords.length)]
	let isFlipped = false

	document.getElementById('word').innerText = randomWord.polish
	document.getElementById('flip').onclick = () => {
		if (isFlipped) {
			document.getElementById('word').innerText = randomWord.polish
		} else {
			document.getElementById('word').innerText = randomWord.english
		}
		isFlipped = !isFlipped
	}
	document.getElementById('know').onclick = () => {
		knownWords.push(randomWord.english)
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
	const unknownWords = words.filter(word => !knownWords.includes(word.english))
	if (unknownWords.length === 0) {
		updateProgress()
		return
	}
	const randomWord = unknownWords[Math.floor(Math.random() * unknownWords.length)]

	document.getElementById('question').innerText = randomWord.polish

	const options = []
	while (options.length < 3) {
		const randomOption = words[Math.floor(Math.random() * words.length)].english
		if (!options.includes(randomOption) && randomOption !== randomWord.english) {
			options.push(randomOption)
		}
	}
	options.push(randomWord.english)
	options.sort(() => Math.random() - 0.5)

	document.getElementById('options').innerHTML = options
		.map(
			option => `
      <button onclick="checkMultipleChoiceAnswer('${option}', '${randomWord.english}')">${option}</button>
    `
		)
		.join('')
}

function checkMultipleChoiceAnswer(selected, correct) {
	const result = selected === correct ? 'Poprawnie!' : 'Źle!'
	const resultClass = selected === correct ? 'correct' : 'incorrect'
	document.getElementById('multiple-choice-result').innerText = result
	document.getElementById('multiple-choice-result').className = resultClass

	if (selected === correct) {
		knownWords.push(correct)
		updateProgress()
	}
	setTimeout(loadNextMultipleChoiceQuestion, 10)
}

function startTypingTest() {
	currentMode = 'typing'
	document.getElementById('typing-test-mode').classList.remove('hidden')
	document.getElementById('mode-select').classList.add('hidden')
	loadNextTypingQuestion()
}

function loadNextTypingQuestion() {
	document.getElementById('next-question').classList.add('hidden')
	const unknownWords = words.filter(word => !knownWords.includes(word.english))
	if (unknownWords.length === 0) {
		updateProgress()
		return
	}
	const randomWord = unknownWords[Math.floor(Math.random() * unknownWords.length)]

	document.getElementById('typing-question').innerText = randomWord.polish
	document.getElementById('typing-answer').value = ''
	document.getElementById('typing-result').innerText = ''
}

function checkTypingAnswer() {
	const question = document.getElementById('typing-question').innerText
	const userAnswer = document.getElementById('typing-answer').value.trim()
	const correctWord = words.find(word => word.polish === question).english

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
