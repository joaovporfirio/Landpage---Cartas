# Jogo de Cartas Educativo

Um jogo de cartas interativo para aprendizado de idiomas com 26 cartas, cada uma contendo título, descrição, imagem e áudio para pronúncia.

## 📋 Características

- **26 cartas educativas** (A-Z) com palavras em inglês
- **Design responsivo** que funciona em desktop, tablet e mobile
- **Fundo neutro** para destacar as cartas coloridas
- **Reprodução de áudio** para aprender pronúncia
- **Animações suaves** e transições modernas
- **Fallback inteligente** usando Web Speech API quando arquivos de áudio não estão disponíveis

## 🚀 Como Usar

### Opção 1: Abrir diretamente no navegador

1. Abra o arquivo `index.html` em qualquer navegador moderno
2. As cartas serão carregadas automaticamente
3. Clique no botão "Ouvir pronúncia" em qualquer carta para ouvir o áudio

### Opção 2: Usar um servidor local

```bash
# Usando Python 3
python3 -m http.server 8000

# Ou usando Node.js
npx http-server -p 8000
```

Depois acesse: `http://localhost:8000`

## 📁 Estrutura do Projeto

```
card-game/
├── index.html          # Página principal
├── styles.css          # Estilos e design
├── script.js           # Lógica e funcionalidades
├── README.md           # Este arquivo
├── images/             # Pasta para imagens das cartas
│   ├── apple.jpg
│   ├── book.jpg
│   └── ... (26 imagens no total)
└── audio/              # Pasta para arquivos de áudio
    ├── apple.mp3
    ├── book.mp3
    └── ... (26 áudios no total)
```

## 🎨 Personalização

### Adicionar suas próprias imagens

1. Coloque suas imagens na pasta `images/`
2. Nomeie os arquivos conforme definido no `script.js` (ex: `apple.jpg`, `book.jpg`)
3. Formatos suportados: JPG, PNG, WebP, GIF

### Adicionar seus próprios áudios

1. Coloque seus arquivos de áudio na pasta `audio/`
2. Nomeie os arquivos conforme definido no `script.js` (ex: `apple.mp3`, `book.mp3`)
3. Formatos suportados: MP3, WAV, OGG

### Modificar as cartas

Edite o array `cardsData` no arquivo `script.js`:

```javascript
const cardsData = [
    {
        id: 1,
        title: "Apple",              // Título em inglês
        titlePT: "Maçã",             // Título em português
        description: "Uma fruta...",  // Descrição
        image: "images/apple.jpg",    // Caminho da imagem
        audio: "audio/apple.mp3"      // Caminho do áudio
    },
    // ... adicione mais cartas
];
```

### Alterar cores e estilos

Edite o arquivo `styles.css` para personalizar:

- **Cores do header**: Altere o `linear-gradient` em `header`
- **Cores dos botões**: Altere o `linear-gradient` em `.audio-button`
- **Fundo da página**: Altere o `background` em `body`
- **Tamanho das cartas**: Ajuste `grid-template-columns` em `.cards-grid`

## 🎯 Funcionalidades Implementadas

### Reprodução de Áudio

- Clique no botão "Ouvir pronúncia" para reproduzir o áudio
- O botão muda de cor durante a reprodução
- Apenas um áudio toca por vez
- Fallback automático para síntese de voz se o arquivo não existir

### Design Responsivo

- Layout em grade adaptável
- Funciona em telas de todos os tamanhos
- Animações suaves de entrada
- Efeitos hover nas cartas

### Acessibilidade

- Estrutura HTML semântica
- Contraste adequado de cores
- Botões com estados visuais claros
- Suporte a teclado

## 🔧 Requisitos Técnicos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- JavaScript habilitado
- Suporte a HTML5 Audio (para arquivos de áudio)
- Suporte a Web Speech API (para fallback de síntese de voz)

## 📝 Notas Importantes

### Sobre os arquivos de áudio

Os arquivos de áudio **não estão incluídos** neste projeto. Você tem duas opções:

1. **Adicionar seus próprios arquivos de áudio**: Grave ou baixe arquivos MP3 com a pronúncia correta e coloque na pasta `audio/`

2. **Usar a síntese de voz automática**: O sistema usa automaticamente a Web Speech API do navegador quando os arquivos não existem

### Sobre as imagens

As imagens também **não estão incluídas**. Você pode:

1. **Adicionar suas próprias imagens**: Coloque imagens coloridas e detalhadas na pasta `images/`

2. **Usar os placeholders**: O sistema mostra automaticamente um placeholder colorido com a primeira letra da palavra em português

## 🎓 Sugestões de Uso Educacional

- **Aprendizado de vocabulário**: Ideal para crianças e iniciantes em inglês
- **Prática de pronúncia**: Ouça e repita as palavras
- **Jogo de memória**: Use as cartas para criar jogos de associação
- **Flashcards digitais**: Perfeito para revisão rápida

## 🌐 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente para fins educacionais.

## 🤝 Contribuições

Sinta-se à vontade para modificar e adaptar este projeto às suas necessidades!

---

**Desenvolvido com ❤️ para educação e aprendizado de idiomas**

