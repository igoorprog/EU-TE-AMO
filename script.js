// Data de início do namoro
const startDate = new Date('2024-06-01T00:00:00');

// Função para atualizar o contador
function updateCounter() {
    const now = new Date();
    const difference = now - startDate;
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
}

// Animação de scroll para elementos
function animateOnScroll() {
    const elements = document.querySelectorAll('#main-content .quote-card, #main-content .photo-card, #main-content .timeline-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Event listener para scroll
window.addEventListener('scroll', animateOnScroll);

// Adicionar partículas de coração aleatórias
function createRandomHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = '1.5rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'float 8s linear forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Função para smooth scroll
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Adicionar efeito de brilho nas seções
function addGlowEffect() {
    const sections = document.querySelectorAll('#main-content section');
    
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(102, 126, 234, 0.3)';
            this.style.transition = 'box-shadow 0.3s ease';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
}

// Lógica principal do site, executada após o clique no botão 'Começar'
const splashScreen = document.getElementById('splash-screen');
const mainContent = document.getElementById('main-content');
const startButton = document.getElementById('startButton');
const musicFrame = document.getElementById('musicFrame');
const playBtn = document.getElementById('playBtn');
let isPlaying = false;

startButton.addEventListener('click', function() {
    splashScreen.style.display = 'none'; // Oculta a tela de splash
    mainContent.classList.remove('hidden'); // Mostra o conteúdo principal
    
    // Inicia o contador e as animações de scroll
    updateCounter();
    setInterval(updateCounter, 60000);
    animateOnScroll();
    addGlowEffect();

    // Autoplay music when the button is clicked
    if (!isPlaying) {
        musicFrame.src = 'https://www.youtube.com/embed/0gqfeuXvjg0?autoplay=1&loop=1&playlist=0gqfeuXvjg0';
        musicFrame.style.display = 'block';
        playBtn.textContent = '⏸️ Pausar Música';
        isPlaying = true;
    }

    // Efeito de digitação no título
    const title = document.querySelector('#main-content .main-title');
    const titleText = title.textContent;
    title.textContent = '';
    let i = 0;
    function typeWriter() {
        if (i < titleText.length) {
            title.textContent += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    setTimeout(typeWriter, 1000);

    // Criar corações aleatórios a cada 3 segundos
    setInterval(createRandomHeart, 3000);
});

// Player de música (toggle functionality)
playBtn.addEventListener('click', function() {
    if (isPlaying) {
        musicFrame.src = ''; // Stop music
        musicFrame.style.display = 'none';
        playBtn.textContent = '▶️ Tocar Nossa Música';
        isPlaying = false;
    } else {
        musicFrame.src = 'https://www.youtube.com/embed/0gqfeuXvjg0?autoplay=1&loop=1&playlist=0gqfeuXvjg0';
        musicFrame.style.display = 'block';
        playBtn.textContent = '⏸️ Pausar Música';
        isPlaying = true;
    }
});

// Efeito de parallax suave nos corações
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hearts = document.querySelectorAll('.heart');
    
    hearts.forEach((heart, index) => {
        const speed = 0.5 + (index * 0.1);
        heart.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Adicionar efeito de hover nas fotos
const photoCards = document.querySelectorAll('.photo-card');
photoCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});



