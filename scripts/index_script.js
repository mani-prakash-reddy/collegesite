const text1 = [
	"Educating a vibrant student population of over 24,000 by 1700+ strong faculty",
	"With the highest possible ‘A++’ grade by NAAC",
	"Amrita offers more than 250 UG, PG, and Ph.D. programs"
];

const images1 = [
	"assets/collage_students.jpg",
	"assets/impact-2023-ranking.png",
	"assets/Amritapuri-1384.jpg"
];

const textElement = document.getElementById("animated-text1");
const imageElement = document.getElementById("image-placeholder1");

let sentenceIndex = 0;

function displayText(sentence) {
	textElement.textContent = "";
	let charIndex = 0;

	const interval = setInterval(() => {
		if (charIndex < sentence.length) {
			textElement.textContent += sentence[charIndex];
			charIndex++;
		} else {
			clearInterval(interval);
			setTimeout(nextSentence, 1500); // Delay before moving to the next sentence
		}
	}, 100);
}

function nextSentence() {
	if (sentenceIndex < text1.length) {
		displayText(text1[sentenceIndex]);
		imageElement.src = images1[sentenceIndex];
		sentenceIndex++;
	} else {
		sentenceIndex = 0; // Restart the loop
		nextSentence();
	}
}

nextSentence(); // Start the animation

