<script>
    import { onMount } from 'svelte';
    export let slidesProp = [];
    let current = 0;
    $: leftHidden = current === 0 ? 'hidden' : '';
    $: rightHidden = current === slidesProp.length - 1 ? 'hidden' : '';

    let track, nextButton, prevButton, navigation, carouselText, slides, navArray, slideSize;

    // Moves the "current-slide" class to be on the new target slide, and moves the track to show the right slide.
    const moveToSlide = (currentSlide, targetSlide) => {
        track.style.transform = `translateX(-${targetSlide.style.left})`;
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide');
    };

    const addNewText = (newTextSlide) => {
        carouselText.innerHTML = newTextSlide.querySelector('.hidden').innerHTML;
    };

    const setSlidePosition = (slide, index) => {
        slide.style.left = `${slideSize * index}px`;
    };

    // Moves slide with a click on the > button
    const nextButtonListener = (e) => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        const currentDot = navigation.querySelector('.current-slide');
        const nextDot = currentDot.nextElementSibling;

        current += 1;
        moveToSlide(currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
        addNewText(nextSlide);
    };

    // Moves slide with a click on the < button
    const prevButtonListener = (e) => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = navigation.querySelector('.current-slide');
        const prevDot = currentDot.previousElementSibling;

        current -= 1;
        moveToSlide(currentSlide, prevSlide);
        updateDots(currentDot, prevDot);
        addNewText(prevSlide);
    };

    // Lets for users to click on the navigation dots to move around.
    const navEvent = (e) => {
        const targetDot = e.target.closest('button');

        if (!targetDot) return;

        const currentSlide = track.querySelector('.current-slide');
        const currentDot = navigation.querySelector('.current-slide');
        current = navArray.findIndex((dot) => dot === targetDot);
        const targetSlide = slides[current];

        moveToSlide(currentSlide, targetSlide);
        updateDots(currentDot, targetDot);
    };

    onMount(() => {
        track = document.querySelector('.carousel-track');
        nextButton = document.querySelector('.carousel-button-right');
        prevButton = document.querySelector('.carousel-button-left');
        navigation = document.querySelector('.carousel-nav');
        carouselText = document.querySelector('.carousel-text');
        slides = Array.from(track.children);
        navArray = Array.from(navigation.children);

        nextButton.addEventListener('click', nextButtonListener);
        prevButton.addEventListener('click', prevButtonListener);
        navigation.addEventListener('click', navEvent);

        slideSize = slides[0].getBoundingClientRect().width;
        slides.forEach(setSlidePosition);

        addNewText(slides[current]);
    });
</script>

<div class="carousel">
    <button class={`carousel-button carousel-button-left ${leftHidden}`}>
        <img src="/img/l.png" alt="Left arrow" />
    </button>
    <div class="carousel-track-container">
        <ul class="carousel-track">
            {#each slidesProp as slide, index}
                {#if slide.isImage}
                    <li class="carousel-slide{index === 0 ? ' current-slide' : ''}">
                        <a href={`/img/${slide.filename}.${slide.ext}`} target="_blank" rel="noopener noreferrer">
                            <img src={`/img/${slide.filename}.${slide.ext}`} alt={slide.alt} />
                        </a>
                        <div class="hidden">{@html slide.text}</div>
                    </li>
                {:else}
                    <li class="carousel-slide">
                        {@html slide.mainText}
                        <div class="hidden">{@html slide.text}</div>
                    </li>
                {/if}
            {/each}
        </ul>
    </div>
    <button class={`carousel-button carousel-button-right ${rightHidden}`}>
        <img src={'/img/r.png'} alt="Right arrow" />
    </button>
    <div class="carousel-nav">
        {#each slidesProp as slide, index}
            <button class="carousel-indicator{index === 0 ? ' current-slide' : ''}" />
        {/each}
    </div>
    <div class="carousel-text" />
</div>
