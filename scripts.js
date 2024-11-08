const words = {
	'vending machine': 'automat (z napojami lub przekąskami)',
	'DIY store': 'sklep z artykułami do majsterkowania',
	'duty-free': 'sklep wolnocłowy',
	'go window-shopping': 'oglądać wystawy sklepowe',
	laundrette: 'pralnia samoobsługowa',
	'pop-up store': 'sklep działający w określonym sezonie',
	'retail outlet': 'punkt sprzedaży detalicznej',
	apparel: 'odzież',
	footwear: 'obuwie',
	'household chemicals': 'chemia gospodarcza',
	stationery: 'artykuły biurowe',
	'end of line': 'końcówka kolekcji',
	'fair price': 'uczciwa cena',
	'value for money': 'towar wart swojej ceny',
	affordable: 'w zasięgu możliwości finansowych',
	unaffordable: 'poza zasięgiem możliwości finansowych',
	'cheap and cheerful': 'tani, ale dobrej jakości',
	'for a song': 'tani',
	'low key': 'skromny',
	upmarket: 'z wyższej półki',
	bargain: 'okazja cenowa',
	branch: 'oddział, filia',
	charge: 'pobierać (opłatę), liczyć sobie (za coś)',
	convenient: 'wygodny, dogodny',
	'keep a receipt': 'zachować paragon',
	'put up the price': 'podwyższyć cenę',
	trolley: 'wózek sklepowy',
	aisle: 'alejka (w supermarkecie)',
	'buy in bulk': 'kupować hurtowo',
	'cost next to nothing': 'kosztować tyle, co nic',
	'meet expectations': 'spełniać oczekiwania',
	'pay in installments': 'kupić na raty',
	'pay upfront': 'płacić z góry',
	'pick up a bargain': 'znaleźć okazję',
	'put sth aside': 'odłożyć coś (w sklepie)',
	'shortage of': 'brak',
	'loose change': 'drobne',
	'flyer/leaflet': 'ulotka',
	'celebrity endorsement': 'udział znanej osoby w reklamie',
	'cold calling': 'akwizycja przez telefon',
	tailor: 'krawiec/krawcowa',
	caterer: 'osoba/firma zajmująca się kateringiem',
	'private tutor': 'korepetytor/korepetytorka',
	solicitor: 'adwokat, radca prawny',
	undertaker: 'zakład/przedsiębiorca pogrzebowy',
	refund: 'zwrot pieniędzy',
	faded: 'spłowiały',
	scratched: 'zarysowany',
	shrunk: 'skurczony',
	torn: 'rozdarty',
	'bank loan': 'kredyt w banku',
	'cash flow': 'przepływ gotówki',
	currency: 'waluta',
	'go in the red': 'być na minusie (jak Rokita)',
	overdraft: 'debet',
	'pay interest': 'płacić odsetki',
	'save money for a rainy day': 'oszczędzać na czarną godzinę',
	shareholder: 'akcjonariusz',
	'stocks and bonds': 'akcje i obligacje',
	withdraw: 'wypłacić (pieniądze z banku)',
	'fraudulent claim': 'fałszywe roszczenie',
	'make a claim': 'wystąpić o odszkodowanie',
	policyholder: 'osoba ubezpieczona',
	'cooling-off period': 'okres odstąpienia od umowy',
	'make a claim against sb': 'wystąpić z roszczeniem przeciwko komuś',
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
