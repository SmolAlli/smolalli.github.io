function carousel() {
	const track = document.querySelector('.carousel-track');
	const slides = Array.from(track.children);
	const nextButton = document.querySelector('.carousel-button-right');
	const prevButton = document.querySelector('.carousel-button-left');
	const navigation = document.querySelector('.carousel-nav');
	const navArray = Array.from(navigation.children);
	const carouselText = document.querySelector('.carousel-text');

	const slideSize = slides[0].getBoundingClientRect().width;

	// Shows/hides the arrows depending on what part of the carousel the user is at.
	const hideArrows = (targetIndex) => {
		if (targetIndex === 0) {
			prevButton.classList.add('hidden');
			nextButton.classList.remove('hidden');
		} else if (targetIndex === slides.length - 1) {
			prevButton.classList.remove('hidden');
			nextButton.classList.add('hidden');
		} else {
			prevButton.classList.remove('hidden');
			nextButton.classList.remove('hidden');
		}
	};

	// Sets the slide to be n * the size of the slides at whatever size the screen is at.
	const setSlidePosition = (slide, index) => {
		slide.style.left = `${slideSize * index}px`;
	};

	slides.forEach(setSlidePosition);

	// Moves the "current-slide" class to be on the new target slide, and moves the track to show the right slide.
	const moveToSlide = (currentSlide, targetSlide) => {
		const targetIndex = slides.findIndex((slide) => slide === targetSlide);
		track.style.transform = `translateX(-${targetSlide.style.left})`;
		currentSlide.classList.remove('current-slide');
		targetSlide.classList.add('current-slide');
		hideArrows(targetIndex);
	};

	const updateDots = (currentDot, targetDot) => {
		currentDot.classList.remove('current-slide');
		targetDot.classList.add('current-slide');
	};

	const addNewText = (newTextSlide) => {
		const text = newTextSlide.querySelector('.hidden').innerHTML;
		carouselText.innerHTML = text;
	};

	// Moves slide with a click on the > button
	nextButton.addEventListener('click', (e) => {
		const currentSlide = track.querySelector('.current-slide');
		const nextSlide = currentSlide.nextElementSibling;
		const currentDot = navigation.querySelector('.current-slide');
		const nextDot = currentDot.nextElementSibling;

		moveToSlide(currentSlide, nextSlide);
		updateDots(currentDot, nextDot);
		addNewText(nextSlide);
	});

	// Moves slide with a click on the < button
	prevButton.addEventListener('click', (e) => {
		const currentSlide = track.querySelector('.current-slide');
		const prevSlide = currentSlide.previousElementSibling;
		const currentDot = navigation.querySelector('.current-slide');
		const prevDot = currentDot.previousElementSibling;

		moveToSlide(currentSlide, prevSlide);
		updateDots(currentDot, prevDot);
		addNewText(prevSlide);
	});

	// Lets for users to click on the navigation dots to move around.
	navigation.addEventListener('click', (e) => {
		const targetDot = e.target.closest('button');

		if (!targetDot) return;

		const currentSlide = track.querySelector('.current-slide');
		const currentDot = navigation.querySelector('.current-slide');
		const targetIndex = navArray.findIndex((dot) => dot === targetDot);
		const targetSlide = slides[targetIndex];

		moveToSlide(currentSlide, targetSlide);
		updateDots(currentDot, targetDot);
	});
}

carousel();
