const words = {
	'das Abgas': 'spaliny✅',
	'das Abwasser': 'ścieki✅',
	'das Aussterben': 'wymieranie',
	'die Bedrohung': 'zagrożenie✅',
	'belasten': 'obciążać, zanieczyszczać',
	'das Bewusstsein': 'świadomość',
	'der Bio-Müll': 'odpady biodegradowalne',
	'die CO2-Emission': 'emisja dwutlenku węgla',
	'die Dürre': 'susza✅',
	'der Einfluss auf': 'wpływ na',
	'sich einsetzen für': 'angażować się za, wstawiać się za',
	'die Energiesparlampe': 'żarówka energooszczędna',
	'sich engagieren für': 'angażować się na rzecz',
	'die Entscheidung': 'decyzja',
	'die Erdoberfläche': '✅powierzchnia Ziemi✅',
	'erneuerbar': 'odnawialny',
	'erneuerbare Energienquelle': 'odnawialne źródła energii',
	'die Erwärmung': 'ocieplenie się',
	'die globale Erwärmung': 'globalne ocieplenie',
	'die Filteranlage': 'urządzenie filtrujące',
	'die Folge': 'skutek',
	'die Gewohnheit': 'nawyk, przyzwyczajenie',
	'die Glühbirne': 'żarówka',
	'die Heizung': 'grzejnik, kaloryfer',
	'die Industrie': 'przemysł',
	'kämpfen für, gegen': 'walczyć o, przeciw',
	'die Kläranlage': 'oczyszczalnia ścieków✅',
	'der Klimawandel': 'zmiana klimatu✅',
	'das Kunstleder': 'sztuczna skóra',
	'künstlich': 'sztuczny, z tworzywa sztucznego',
	'der Kunststoff': 'tworzywo sztuczne',
	'das Licht': 'światło',
	'das Licht anlassen': 'zostawić włączone światło',
	'das Licht ausschalten': 'wyłączać światło',
	'loswerden': 'pozbywać się',
	'die Luft': 'powietrze✅',
	'die Luftverschmutzung': 'zanieczyszczenie powietrza',
	'die Maßnahme': 'działanie',
	'der Müll': 'śmieci',
	'den Müll entsorgen': 'usuwać śmieci',
	'die Mülldeponie': 'wysypisko śmieci✅',
	'der Müllhaufen': 'góra śmieci',
	'die Mülltonne': 'duży pojemnik na śmieci, kubeł',
	'die Mülltrennung': 'segregacja śmieci',
	'nützen': 'przynosić korzyść, przydawać się',
	'öffentlich': 'publiczny',
	'öffentliche Verkehrsmittel': 'publiczne środki transportu',
	'der Ökotourismus': 'ekoturystyka, turystyka ekologiczna',
	'pflanzen': 'sadzić',
	'recyceln': 'poddawać recyklingowi, utylizować',
	'der Restmüll': 'pozostałe śmieci zmieszane',
	'die Rücksicht auf': 'wzgląd na',
	'Rücksicht nehmen auf': 'uwzględniać, mieć wzgląd na',
	'saisonal': 'sezonowy',
	'schaden': 'szkodzić',
	'der Schadstoff': 'substancja szkodliwa',
	'schmelzen': 'topnieć, topić✅',
	'schützen': 'chronić',
	'die Solaranlage': 'instalacja solarna',
	'sortieren': 'sortować',
	'sparen': 'oszczędzać',
	'das Stand-by': 'funkcja czuwania',
	'Elektrogeräte auf Stand-by lassen': 'zostawiać urządzenia elektryczne w funkcji czuwania',
	'die Stofftasche': 'torba z materiału',
	'der Straßenverkehr': 'ruch drogowy',
	'der Tierversuch': 'doświadczenie na zwierzętach',
	'trennen': 'sortować',
	'die Tüte': 'torba foliowa, pot. reklamówka',
	'überfüllt': 'przepełnienie✅',
	'die Umwelt': 'środowisko naturalne✅✅',
	'umweltfreundlich': 'przyjazny środowisku',
	'die Umweltmaßnahme': 'działanie na rzecz środowiska',
	'umweltschädlich': 'szkodliwy dla środowiska',
	'der Umweltschutz': 'ochrona środowiska',
	'die Verantwortung für': 'odpowiedzialność za',
	'verantwortungsbewusst': 'odpowiedzialny',
	'verbrauchen': 'zużywać',
	'vergiftet': 'zatruty✅',
	'verschmutzen': 'zanieczyszczać✅',
	'verzichten auf': 'rezygnować z',
	'der Wasserhahn': 'kran',
	'den Wasserhahn zudrehen': 'zakręcać kran',
	'die Windkraftanlage': 'turbina wiatrowa',
	'die Wüstenbildung': 'stawanie się pustynią, pustynnienie',
	'die Wüste': 'pustynia✅',
	'verursachen': 'powodować✅',
	'der Gletscher': 'lodowiec✅',
	'die Panne': 'awaria✅',
	'wegen': 'z powodu✅',
	'zeigen': 'pokazać✅',
	'ernsthaft': 'poważnie✅',
	'einladen': 'zapraszać✅',
	'der Auftritt': 'wystąpienie✅',
	'bedeuten': 'znaczyć✅',
	'wählen': 'wybierać✅',
	
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
