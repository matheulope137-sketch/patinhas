# 🐾 Patinhas Amigas - Plataforma de Adoção de Animais

Uma plataforma web moderna, acessível e responsiva desenvolvida para conectar cães e gatos resgatados a lares amorosos e responsáveis.

---

## ✨ Funcionalidades e Melhorias Implementadas

### 🎨 1. Design & Experiência do Usuário (UI/UX)
- **Design System Moderno:** Paleta de cores acolhedora com tons de terracota, verde esmeralda e neutros elegantes, tipografia com a fonte *Plus Jakarta Sans*.
- **Modo Claro / Escuro (Dark Mode):** Alternador no cabeçalho com detecção e persistência automática de tema no `localStorage`.
- **Totalmente Responsivo:** Experiência fluida em smartphones, tablets e desktops, com menu hambúrguer interativo para dispositivos móveis.
- **Microinterações e Animações:** Efeitos suaves de elevação em cards, transições nos botões, modais com efeito de desfoque de fundo (*backdrop blur*).

### 🔍 2. Sistema Avançado de Filtros e Busca
- **Busca em tempo real:** Pesquisa instantânea por nome do pet ou palavras-chave na descrição.
- **Filtros Combinados:**
  - **Espécie:** Todos, Cães e Gatos.
  - **Porte:** Pequeno, Médio e Grande.
  - **Idade:** Filhotes, Adultos e Sêniores.
  - **Sexo:** Machos e Fêmeas.
- **Contador Dinâmico:** Exibe a quantidade exata de patinhas encontradas com os filtros atuais.
- **Sistema de Favoritos com LocalStorage:** Salve seus animais favoritos clicando no coração dos cards e filtre para ver apenas os seus preferidos a qualquer momento.

### 🐶 3. Cards Ricos e Modal de Detalhes
- **Ficha Completa do Pet:** Visualização de fotos reais em alta definição, status de saúde (vacinado, castrado, vermifugado), sexo, porte e temperamento.
- **História de Resgate:** Cada pet conta com uma história emocionante no modal de detalhes.
- **Adoção Rápida:** Botão "Quero Adotar" nos cards ou no modal que rola suavemente até o formulário e já pré-seleciona o pet escolhido.

### 📋 4. Formulário Inteligente de Adoção
- **Validação em Tempo Real:** Feedback visual com mensagens amigáveis para campos obrigatórios (nome, e-mail com regex, telefone, seleção do pet).
- **Máscara Automática de Telefone:** Formatação automática para números brasileiros com DDD no padrão celular `(XX) XXXXX-XXXX`.
- **Confirmação e Histórico:** Armazena os pedidos enviados localmente e oferece botão direto para continuar a conversa pelo WhatsApp com mensagem pronta.

### 🤝 5. Apoio, Solidariedade e Dúvidas
- **Doação via Chave PIX:** Botão interativo para copiar a chave PIX com 1 clique e feedback visual.
- **Orientações para Voluntariado e Doações Materiais:** Informações sobre itens necessários e acolhimento como Lar Temporário.
- **Perguntas Frequentes (FAQ):** Acordeão interativo para sanar dúvidas comuns de futuros tutores.

---

## 📁 Estrutura de Arquivos

```
patinhas/
├── index.html            # Estrutura semântica e acessível da página
├── css/
│   └── style.css         # Folha de estilos moderna com variáveis CSS e Dark Mode
├── js/
│   └── app.js            # Lógica interativa da aplicação (filtros, modais, formulários)
├── assets/
│   ├── favicon.svg       # Ícone vetorial da patinha
│   └── images/           # Fotos reais dos animais em alta qualidade
│       ├── thor.jpg
│       ├── mia.jpg
│       ├── bolinha.jpg
│       ├── luna.jpg
│       ├── max.jpg
│       ├── nina.jpg
│       ├── mel.jpg
│       ├── pipoca.jpg
│       └── fred.jpg
└── README.md             # Documentação do projeto
```

---

## 🚀 Como Executar o Projeto

Como o projeto é construído em HTML5, CSS3 e JavaScript puro (Vanilla JS), ele não necessita de nenhuma instalação pesada ou servidor backend complexo para ser executado:

1. **Abrir diretamente no navegador:**
   - Dê um duplo clique no arquivo [index.html](file:///c:/Users/MatheusRochaLopes/Desktop/patinhas/index.html) ou arraste-o para qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

2. **Utilizando um servidor local (opcional):**
   - Com Python:
     ```bash
     python -m http.server 8000
     ```
     Depois, acesse `http://localhost:8000` no seu navegador.
   - Com a extensão **Live Server** no VS Code:
     Basta clicar com o botão direito no `index.html` e selecionar **"Open with Live Server"**.

---

## 💡 Tecnologias Utilizadas

- **HTML5 Semântico:** Tags semânticas (`header`, `main`, `section`, `article`, `footer`, `dialog/modal`), acessibilidade com atributos ARIA.
- **CSS3 Moderno:** Flexbox, CSS Grid, Custom Properties (Variáveis CSS), Media Queries responsivas, Gradientes e Glassmorphism.
- **JavaScript (ES6+):** Manipulação de DOM limpa e reativa, LocalStorage API, Clipboard API, Regex para máscaras e validações, sem dependências externas.
