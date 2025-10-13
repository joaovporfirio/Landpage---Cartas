// Dados das cartas - 26 cartas de exemplo (A-Z)
const cardsData = [
    {
        id: 1,
        title: "Apple",
        titlePT: "Maçã",
        description: "Uma fruta vermelha ou verde, doce e crocante",
        image: "images/apple.jpg",
        audio: "audio/apple.mp3"
    },
    {
        id: 2,
        title: "Book",
        titlePT: "Livro",
        description: "Um conjunto de páginas com histórias ou informações",
        image: "images/book.jpg",
        audio: "audio/book.mp3"
    },
    {
        id: 3,
        title: "Cat",
        titlePT: "Gato",
        description: "Um animal de estimação peludo e independente",
        image: "images/cat.jpg",
        audio: "audio/cat.mp3"
    },
    {
        id: 4,
        title: "Dog",
        titlePT: "Cachorro",
        description: "O melhor amigo do homem, leal e brincalhão",
        image: "images/dog.jpg",
        audio: "audio/dog.mp3"
    },
    {
        id: 5,
        title: "Elephant",
        titlePT: "Elefante",
        description: "O maior animal terrestre com uma tromba longa",
        image: "images/elephant.jpg",
        audio: "audio/elephant.mp3"
    },
    {
        id: 6,
        title: "Fish",
        titlePT: "Peixe",
        description: "Um animal aquático que respira através de guelras",
        image: "images/fish.jpg",
        audio: "audio/fish.mp3"
    },
    {
        id: 7,
        title: "Guitar",
        titlePT: "Violão",
        description: "Um instrumento musical de cordas",
        image: "images/guitar.jpg",
        audio: "audio/guitar.mp3"
    },
    {
        id: 8,
        title: "House",
        titlePT: "Casa",
        description: "Um lugar onde as pessoas vivem e se sentem seguras",
        image: "images/house.jpg",
        audio: "audio/house.mp3"
    },
    {
        id: 9,
        title: "Ice Cream",
        titlePT: "Sorvete",
        description: "Uma sobremesa gelada e doce em vários sabores",
        image: "images/icecream.jpg",
        audio: "audio/icecream.mp3"
    },
    {
        id: 10,
        title: "Jacket",
        titlePT: "Jaqueta",
        description: "Uma peça de roupa usada para se aquecer",
        image: "images/jacket.jpg",
        audio: "audio/jacket.mp3"
    },
    {
        id: 11,
        title: "Kite",
        titlePT: "Pipa",
        description: "Um brinquedo que voa no céu com o vento",
        image: "images/kite.jpg",
        audio: "audio/kite.mp3"
    },
    {
        id: 12,
        title: "Lion",
        titlePT: "Leão",
        description: "O rei da selva, um grande felino majestoso",
        image: "images/lion.jpg",
        audio: "audio/lion.mp3"
    },
    {
        id: 13,
        title: "Moon",
        titlePT: "Lua",
        description: "O satélite natural da Terra que brilha à noite",
        image: "images/moon.jpg",
        audio: "audio/moon.mp3"
    },
    {
        id: 14,
        title: "Notebook",
        titlePT: "Caderno",
        description: "Um conjunto de folhas para escrever e desenhar",
        image: "images/notebook.jpg",
        audio: "audio/notebook.mp3"
    },
    {
        id: 15,
        title: "Orange",
        titlePT: "Laranja",
        description: "Uma fruta cítrica redonda e suculenta",
        image: "images/orange.jpg",
        audio: "audio/orange.mp3"
    },
    {
        id: 16,
        title: "Piano",
        titlePT: "Piano",
        description: "Um grande instrumento musical de teclas",
        image: "images/piano.jpg",
        audio: "audio/piano.mp3"
    },
    {
        id: 17,
        title: "Queen",
        titlePT: "Rainha",
        description: "A governante feminina de um reino",
        image: "images/queen.jpg",
        audio: "audio/queen.mp3"
    },
    {
        id: 18,
        title: "Rainbow",
        titlePT: "Arco-íris",
        description: "Um arco colorido que aparece no céu após a chuva",
        image: "images/rainbow.jpg",
        audio: "audio/rainbow.mp3"
    },
    {
        id: 19,
        title: "Sun",
        titlePT: "Sol",
        description: "A estrela que ilumina e aquece nosso planeta",
        image: "images/sun.jpg",
        audio: "audio/sun.mp3"
    },
    {
        id: 20,
        title: "Tree",
        titlePT: "Árvore",
        description: "Uma planta grande com tronco, galhos e folhas",
        image: "images/tree.jpg",
        audio: "audio/tree.mp3"
    },
    {
        id: 21,
        title: "Umbrella",
        titlePT: "Guarda-chuva",
        description: "Um objeto usado para se proteger da chuva",
        image: "images/umbrella.jpg",
        audio: "audio/umbrella.mp3"
    },
    {
        id: 22,
        title: "Violin",
        titlePT: "Violino",
        description: "Um instrumento musical de cordas tocado com arco",
        image: "images/violin.jpg",
        audio: "audio/violin.mp3"
    },
    {
        id: 23,
        title: "Watch",
        titlePT: "Relógio",
        description: "Um dispositivo usado para ver as horas",
        image: "images/watch.jpg",
        audio: "audio/watch.mp3"
    },
    {
        id: 24,
        title: "Xylophone",
        titlePT: "Xilofone",
        description: "Um instrumento musical com barras coloridas",
        image: "images/xylophone.jpg",
        audio: "audio/xylophone.mp3"
    },
    {
        id: 25,
        title: "Yacht",
        titlePT: "Iate",
        description: "Um barco grande e luxuoso para passeios",
        image: "images/yacht.jpg",
        audio: "audio/yacht.mp3"
    },
    {
        id: 26,
        title: "Zebra",
        titlePT: "Zebra",
        description: "Um animal africano com listras pretas e brancas",
        image: "images/zebra.jpg",
        audio: "audio/zebra.mp3"
    }
];

// Variável para controlar o áudio atual
let currentAudio = null;
let currentButton = null;

// Função para criar o ícone SVG de áudio
function createAudioIcon() {
    return `
        <svg class="audio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 5L6 9H2v6h4l5 4V5z"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
        </svg>
    `;
}

// Função para criar uma carta
function createCard(card) {
    const cardWrapper = document.createElement('div');
    cardWrapper.className = 'card-wrapper';
    cardWrapper.dataset.cardId = card.id;
    
    cardWrapper.innerHTML = `
        <div class="card">
            <div class="card-image-placeholder">
                ${card.titlePT[0]}
            </div>
            <div class="card-content">
                <h2 class="card-title">${card.title}</h2>
                <p class="card-description">${card.description}</p>
            </div>
        </div>
        <button class="audio-button" data-audio="${card.audio}" data-title="${card.title}">
            ${createAudioIcon()}
            <span>Ouvir pronúncia</span>
        </button>
    `;
    
    return cardWrapper;
}

// Função para renderizar todas as cartas
function renderCards() {
    const container = document.getElementById('cards-container');
    
    if (!container) {
        console.error('Container de cartas não encontrado!');
        return;
    }
    
    // Limpar container
    container.innerHTML = '';
    
    // Criar e adicionar cada carta
    cardsData.forEach(card => {
        const cardElement = createCard(card);
        container.appendChild(cardElement);
    });
    
    // Adicionar event listeners aos botões de áudio
    attachAudioListeners();
}

// Função para adicionar event listeners aos botões de áudio
function attachAudioListeners() {
    const audioButtons = document.querySelectorAll('.audio-button');
    
    audioButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            playAudio(this);
        });
    });
}

// Função para reproduzir áudio
function playAudio(button) {
    const audioPath = button.dataset.audio;
    const title = button.dataset.title;
    
    // Se já existe um áudio tocando, parar
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        if (currentButton) {
            currentButton.classList.remove('playing');
            currentButton.querySelector('span').textContent = 'Ouvir pronúncia';
        }
    }
    
    // Se clicou no mesmo botão, apenas parar
    if (currentButton === button && currentAudio && !currentAudio.paused) {
        return;
    }
    
    // Criar novo áudio
    currentAudio = new Audio(audioPath);
    currentButton = button;
    
    // Adicionar classe de playing
    button.classList.add('playing');
    button.querySelector('span').textContent = 'Tocando...';
    
    // Reproduzir áudio
    currentAudio.play().catch(error => {
        console.warn(`Áudio não encontrado para "${title}". Usando síntese de voz.`);
        // Fallback: usar Web Speech API
        speakText(title);
    });
    
    // Quando o áudio terminar
    currentAudio.addEventListener('ended', function() {
        button.classList.remove('playing');
        button.querySelector('span').textContent = 'Ouvir pronúncia';
        currentAudio = null;
        currentButton = null;
    });
    
    // Se houver erro ao carregar o áudio
    currentAudio.addEventListener('error', function() {
        console.warn(`Erro ao carregar áudio para "${title}". Usando síntese de voz.`);
        button.classList.remove('playing');
        button.querySelector('span').textContent = 'Ouvir pronúncia';
        // Fallback: usar Web Speech API
        speakText(title);
    });
}

// Função fallback usando Web Speech API
function speakText(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US'; // Idioma inglês
        utterance.rate = 0.8; // Velocidade um pouco mais lenta
        utterance.pitch = 1;
        
        window.speechSynthesis.speak(utterance);
        
        if (currentButton) {
            currentButton.classList.add('playing');
            currentButton.querySelector('span').textContent = 'Tocando...';
            
            utterance.addEventListener('end', function() {
                currentButton.classList.remove('playing');
                currentButton.querySelector('span').textContent = 'Ouvir pronúncia';
                currentButton = null;
            });
        }
    } else {
        alert('Seu navegador não suporta síntese de voz. Por favor, adicione os arquivos de áudio.');
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    renderCards();
    console.log('Jogo de cartas carregado com sucesso!');
    console.log(`Total de cartas: ${cardsData.length}`);
});

// Adicionar funcionalidade de busca/filtro (opcional)
function filterCards(searchTerm) {
    const cards = document.querySelectorAll('.card');
    const term = searchTerm.toLowerCase();
    
    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const description = card.querySelector('.card-description').textContent.toLowerCase();
        
        if (title.includes(term) || description.includes(term)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Exportar funções para uso externo (opcional)
window.cardGame = {
    renderCards,
    filterCards,
    cardsData
};

