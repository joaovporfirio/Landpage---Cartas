// Dados das cartas - 26 cartas de exemplo (A-Z)
const cardsData = [
    {
        id: 1,
        title: "1 - ADINKRAHENE",
        description: "The meaning and philosophical significance of Adinkrahene " +
                    "Adinkrahene means “King of the Adinkra symbols.” It is a symbol for authority, " +
                    "leadership, and charisma. Means “highest, best, or king,” and is a symbol of " +
                    "excellence.",
        image: "/adinkra-tri/images/card01.jpeg",
        audio: "audio/apple.mp3"
    },
    {
        id: 2,
        title: "2 - AKOMA NTOASO",
        description: "Os  corações ligados ou unidos. Símbolo da "+
                    "comunhão e unidade no pensamento e na "+
                    "ação ",
        image: "images/book.jpg",
        audio: "audio/book.mp3"
    },
    {
        id: 3,
        title: "3 - ANANSE NTONTAN",
        description: "Símbolo da sabedoria, esperteza, "+
                     "criatividade e da complexidade da vida ",
        image: "images/cat.jpg",
        audio: "audio/cat.mp3"
    },
    {
        id: 4,
        title: "4 - AYA",
        description: "Símbolo de resistência, desafio às "+
                     " dificuldades, força física, perseverança,"+ 
                     " independência e competência ",
        image: "images/dog.jpg",
        audio: "audio/dog.mp3"
    },
    {
        id: 5,
        title: "5 - BI NKA BI",
        description: "Basicamente, esse Adinkra significa que "+
                    "não devemos ofender uns aos outros e que "+
                    "cada um deve ter a liberdade ao "+
                    "desempenhar seus deveres. Dessa forma, o "+
                    "ideograma vai contra a fofoca, chantagem, "+
                    "calúnia, provocação, trapaça, suborno e "+
                    "corrupção, além de outros vícios sociais que "+
                    "podem gerar conflitos. E assim, retardar o "+
                    "crescimento da sociedade. ",
        image: "images/elephant.jpg",
        audio: "audio/elephant.mp3"
    },
    {
        id: 6,
        title: "6 - DONO",
        description: "O tambor falante da axila. Símbolo da "+
                    "invocaçã, do elogio da boa vontade e do "+
                    "ritmo",
        image: "images/elephant.jpg",
        audio: "audio/elephant.mp3"
    },
    {
        id: 7,
        title: "7 - DUAFE",
        description: "Duafe é um símbolo ancestral africano que "+
                    "representa o pente de madeira, e é associado "+
                    "a características femininas como beleza "+
                    "natural, limpeza, amor e cuidado:",
        image: "images/elephant.jpg",
        audio: "audio/elephant.mp3"
    },
    {
        id: 8,
        title: "8 - FAFANTO",
        description: "A borboleta. Símbolo da ternura, "+
                    "delicadeza, honestidade e fragilidade",
        image: "images/elephant.jpg",
        audio: "audio/elephant.mp3"
    },
    {
        id: 9,
        title: "9 - HWEMUDUA",
        description: "Basicamente, o significado desse Adinkra é "+
                    "que quando algo é bem examinado, seu "+
                    "conteúdo é bem conhecido. Ou seja, é "+
                    "necessário fazer um exame mais detalhado "+
                    "e crítico em todos os aspectos da vida, para "+
                    "ter o verdadeiro conhecimento. ",
        image: "images/elephant.jpg",
        audio: "audio/elephant.mp3"
    },
    {
        id: 10,
        title: "10 - KOJO BAIDEN",
        description: "Kojo Baiden se traduz como 'raios'. Seus "+
                    "raios representando o sol e as estrelas são "+
                    "representados como os cílios inferiores dos "+
                    "olhos ou raios de luz. Este símbolo protetor"+ 
                    "incorpora a ideia de que somos todos um "+
                    "com o universo, tudo está conectado e Deus "+
                    "vê e conhece todas as coisas.",
        image: "images/elephant.jpg",
        audio: "audio/elephant.mp3"
    },
    {
        id: 11,
        title: "11 - KURONTI NE AKWAMU ou KONTIRE NE AKWAM ",
        description: "Símbolo da democracia, da dualidade da "+
                    "essência da vida interdependência e da "+
                    "complementariedade",
        image: "images/elephant.jpg",
        audio: "audio/elephant.mp3"
    },
    {
        id: 12,
        title: "12 - MATE MASIE",
        description: "Em suma, esse Adinkra simboliza a "+
                    "sabedoria e o conhecimento, mas o uso do "+
                    "conhecimento com prudência. De acordo "+
                    "com o povo Akan, pessoas inteligentes e "+
                    "sábias são aquelas que ouvem algo e o "+
                    "guarda para lembrar no futuro. ",
        image: "images/elephant.jpg",
        audio: "audio/elephant.mp3"
    },
    {
        id: 13,
        title: "13 - MPUANNUM",
        description: "Símbolo do ofício espiritual, da lealdade e "+
                    "da habilidade",
        image: "images/elephant.jpg",
        audio: "audio/elephant.mp3"
    },
    {
        id: 14,
        title: "14 - NKONSONKONSON",
        description: "Símbolo das relações humanas. Símbolo da "+
                    "unidade, interdependência, fraternidade e "+
                    "cooperação ",
        image: "images/elephant.jpg",
        audio: "audio/elephant.mp3"
    },
    {
        id: 15,
        title: "15 - NKYIMKYIM",
        description: "Basicamente, esse símbolo do Adinkra "+
                    "significa voltas e reviravoltas. Ou seja, a "+
                    "vida não é uma linha reta, portanto, para "+
                    "haver uma vida prudente é necessário um "+
                    "equilíbrio entre um zig e um zag. ",
        image: "images/elephant.jpg",
        audio: "audio/elephant.mp3"
    },
    {
        id: 16,
        title: "16 - NSAA",
        description: "Um cobertor tecido a mão. Símbolo de "+
                    "excelência, originalidade e autenticidade",
        image: "images/elephant.jpg",
        audio: "audio/elephant.mp3"
    },
    {
        id: 17,
        title: "17 - NYAME BIRBI WO SORO",
        description: "Símbolo da esperança e da aspiração",
        image: "images/elephant.jpg",
        audio: "audio/elephant.mp3"
    },
    {
        id: 18,
        title: "18 - NYAME DUA",
        description: "A árvore ou o altar de Deus. Simbolo da "+
                    "presença de Deus e de sua proteção.",
        image: "images/elephant.jpg",
        audio: "audio/elephant.mp3"
    },
    {
        id: 19,
        title: "19 - NYANSAPOW",
        description: "É um símbolo Adinkra que significa "+
        "\"É o Sábio quem desata o nó da sabedoria\"",
        image: "images/elephant.jpg",
        audio: "audio/elephant.mp3"
    },
    {
        id: 20,
        title: "20 - ODO NYERA FIE KWAN ",
        description: "Símbolo do amor, da devoção e da fidelidade ",
        image: "images/elephant.jpg",
        audio: "audio/elephant.mp3"
    },
    {
        id: 21,
        title: "21 - OKODEE MMOWERE",
        description: "Símboloda força, da coragem e do poder, "+
                    "baseado na naturesa e no comportamento ",
        image: "images/elephant.jpg",
        audio: "audio/elephant.mp3"
    },
    {
        id: 22,
        title: "22 - PEMPAMSIE",
        description: "Símbolo de prontidão, persistência, "+
                    "resistência, bravura e coragem ",
        image: "images/elephant.jpg",
        audio: "audio/elephant.mp3"
    },
    {
        id: 23,
        title: "23 - SANKOFA",
        description: "Símbolo da Sabedoria de aprender com o "+
                    "passado para construir o futuro ",
        image: "images/elephant.jpg",
        audio: "audio/elephant.mp3"
    },{
        id: 24,
        title: "24 - SUNSUM",
        description: "A alma. Símbolo da pureza espiritual e da "+
                        "santidade",
        image: "images/elephant.jpg",
        audio: "audio/elephant.mp3"
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
        <div class="card" style="background-image: url('${card.image}');">
            <div class="overlay"></div>
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
        //speakText(title);
    });
}

// Função fallback usando Web Speech API
function speakText(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US'; // Idioma inglês
        utterance.rate = 1; // Velocidade um pouco mais lenta
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

datefooter = function() {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    if (yearElement) {
        yearElement.textContent = currentYear + " - Todos os direitos reservados.";
        yearElement.setAttribute('datetime', currentYear);
    }
};

document.addEventListener('DOMContentLoaded', datefooter);