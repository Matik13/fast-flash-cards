let words = {}
let totalWords = 0
fetch('words.json')
	.then(response => {
		if (!response.ok) {
			throw new Error('Nie udało się wczytać pliku words.json')
		}
		return response.json()
	})
	.then(data => {
		words = data
		totalWords = Object.keys(words).length
		document.querySelectorAll('#total-words').forEach(el => (el.innerText = totalWords))
	})
	.catch(error => {
		console.error('Błąd podczas ładowania słówek:', error)
	})

let knownWords = []
let currentMode = ''

function updateProgress() {
	const progress = knownWords.length
	document.getElementById('flashcards-progress').innerText = progress
	document.getElementById('multiple-choice-progress').innerText = progress
	document.getElementById('typing-test-progress').innerText = progress

	if (totalWords > 0 && progress === totalWords) {
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
	document.getElementById('typing-answer').addEventListener('keyup', function (event) {
		if (event.key === 'Enter') checkTypingAnswer()
	})
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
}

function checkTypingAnswer() {
	const question = document.getElementById('typing-question').innerText
	const userAnswer = document.getElementById('typing-answer').value.trim()
	const correctWord = Object.keys(words).find(key => words[key] === question)

	if (userAnswer.toLowerCase() === correctWord.toLowerCase()) {
		document.getElementById('typing-result').innerText = 'Poprawnie!'
		document.getElementById('typing-result').className = 'correct'
		if (!knownWords.includes(correctWord)) {
			knownWords.push(correctWord)
		}
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
