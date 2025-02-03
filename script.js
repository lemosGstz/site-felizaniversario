document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const photos = [
        { src: 'fotos/foto1.jpeg', alt: 'Foto 1' },
        { src: 'fotos/foto2.jpeg', alt: 'Foto 2' },
        { src: 'fotos/foto3.jpeg', alt: 'Foto 3' },
        { src: 'fotos/foto4.jpeg', alt: 'Foto 4' },
        { src: 'fotos/foto5.jpeg', alt: 'Foto 5' }
    ];

    photos.forEach((photo, index) => {
        const div = document.createElement('div');
        div.classList.add('carousel-item');
        if (index === 0) div.classList.add('active');
        div.innerHTML = `<img src="${photo.src}" class="d-block w-100" alt="${photo.alt}">`;
        carouselInner.appendChild(div);
    });

    // Dynamic text effect for the navbar
    const phrases = ["Eu te Amo", "Amor da Minha Vida", "Feliz Aniversário"];
    let currentPhraseIndex = 0;
    const dynamicTextElement = document.getElementById('dynamic-text');

    function changeDynamicText() {
        dynamicTextElement.style.transition = "opacity 1s"; // Set transition for opacity
        dynamicTextElement.style.opacity = 0; // Start with hidden text
        setTimeout(() => {
            dynamicTextElement.textContent = phrases[currentPhraseIndex];
            dynamicTextElement.style.opacity = 1; // Fade in
        }, 1000); // Delay for fade-in effect (1 second)
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Cycle through phrases
    }

    setInterval(changeDynamicText, 4000); // Change phrase every 4 seconds (3 seconds visible + 1 second fade-out)

    // Event listener for revealing a special message
    document.getElementById('reveal-message').addEventListener('click', function() {
        alert("Você é a razão do meu sorriso!"); // Special message
    });

    // Event listener for playing a sound
    document.getElementById('play-sound').addEventListener('click', function() {
        window.open('https://www.youtube.com/watch?v=ZoQkjeWYi2o', '_blank'); // Open YouTube link in a new tab
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
