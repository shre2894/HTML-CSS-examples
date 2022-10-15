const cards = document.querySelectorAll(".card")
const cardContainer = document.querySelector(".card-container")

function lastCard() {
	return document.querySelector(".card:last-child")
}

const observer = new IntersectionObserver(
	(entries) => {
		// console.log(entries)
		entries.forEach((entry) => {
			entry.target.classList.toggle("show", entry.isIntersecting)
			// if (entry.isIntersecting) {
			// 	observer.unobserve(entry.target)
			// }
		})
	},
	{
		threshold: 1,
		
	}
)

const lastObserver = new IntersectionObserver((entries) => {
	const last = entries[0]
	if (!last.isIntersecting) return
	loadNewCards()
	lastObserver.unobserve(last.target)
	lastObserver.observe(lastCard())
}, {
	rootMargin: '100px'
})

cards.forEach((e) => {
	observer.observe(e)
})
lastObserver.observe(lastCard())
function loadNewCards() {
	for (let i = 0; i < 10; i++) {
		const card = document.createElement("div")
		card.textContent = "New card"
		card.classList.add("card")
		observer.observe(card)
		cardContainer.append(card)
	}
}
