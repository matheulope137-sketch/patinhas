/**
 * PATINHAS - PROJETO ADOTE UM AMIGO
 * Lógica da Aplicação (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. BANCO DE DADOS DOS PETS
  // ==========================================
  const animais = [
    {
      id: 1,
      nome: "Thor",
      especie: "Cachorro",
      sexo: "Macho",
      idade: "2 anos",
      faixaEtaria: "adulto",
      porte: "Grande",
      emoji: "🐕",
      foto: "assets/images/thor.jpg",
      descricao: "Brincalhão, cheio de energia e muito carinhoso. Adora passear no parque e correr ao ar livre.",
      historia: "Thor foi resgatado em uma avenida movimentada. Depois de receber cuidados veterinários e muito amor temporário, ele está 100% pronto para encontrar sua família definitiva que ame aventuras.",
      temperamento: ["Brincalhão", "Sociável", "Ativo", "Leal"],
      vacinado: true,
      castrado: true,
      vermifugado: true
    },
    {
      id: 2,
      nome: "Mia",
      especie: "Gato",
      sexo: "Fêmea",
      idade: "1 ano",
      faixaEtaria: "adulto",
      porte: "Pequeno",
      emoji: "🐈",
      foto: "assets/images/mia.jpg",
      descricao: "Calma, ronronante e independente. Ama se aninhar no colo em dias frescos e é perfeita para apartamentos.",
      historia: "Mia foi encontrada com apenas 2 meses perto de uma praça. Ela é muito dócil, usa a caixa de areia com perfeição e se dá muito bem com outros felinos.",
      temperamento: ["Carinhosa", "Tranquila", "Independente"],
      vacinado: true,
      castrado: true,
      vermifugado: true
    },
    {
      id: 3,
      nome: "Bolinha",
      especie: "Cachorro",
      sexo: "Macho",
      idade: "5 anos",
      faixaEtaria: "adulto",
      porte: "Pequeno",
      emoji: "🐩",
      foto: "assets/images/bolinha.jpg",
      descricao: "Super dócil, paciente e muito companheiro. Ideal para lares tranquilos e famílias com crianças.",
      historia: "Bolinha vivia com uma idosa que precisou se mudar para um abrigo e não pôde levá-lo. Ele é educado, não late à toa e adora cochilar aos pés do sofá.",
      temperamento: ["Dócil", "Calmo", "Companheiro", "Amigável"],
      vacinado: true,
      castrado: true,
      vermifugado: true
    },
    {
      id: 4,
      nome: "Luna",
      especie: "Gato",
      sexo: "Fêmea",
      idade: "3 meses",
      faixaEtaria: "filhote",
      porte: "Pequeno",
      emoji: "😺",
      foto: "assets/images/luna.jpg",
      descricao: "Filhotinha curiosa e esperta que adora perseguir bolinhas de papel e explorar cada cantinho.",
      historia: "Luna nasceu em nosso lar temporário após sua mãe ser resgatada grávida. É brincalhona, curiosa e adora carinho no queixo.",
      temperamento: ["Curiosa", "Brincalhona", "Afetuosa"],
      vacinado: true,
      castrado: false, // filhote, castração garantida pela ONG
      vermifugado: true
    },
    {
      id: 5,
      nome: "Max",
      especie: "Cachorro",
      sexo: "Macho",
      idade: "4 anos",
      faixaEtaria: "adulto",
      porte: "Médio",
      emoji: "🐶",
      foto: "assets/images/max.jpg",
      descricao: "Inteligente, obediente e protetor. Já atende a comandos básicos como sentar, dar a pata e passear na guia.",
      historia: "Max foi abandonado em uma chácara e resgatado desnutrido. Hoje está recuperado, forte, cheio de gratidão e pronto para proteger e alegrar seu novo lar.",
      temperamento: ["Inteligente", "Protetor", "Fiel", "Obediente"],
      vacinado: true,
      castrado: true,
      vermifugado: true
    },
    {
      id: 6,
      nome: "Nina",
      especie: "Gato",
      sexo: "Fêmea",
      idade: "7 anos",
      faixaEtaria: "senior",
      porte: "Médio",
      emoji: "🐱",
      foto: "assets/images/nina.jpg",
      descricao: "Gatinha sênior majestosa, tranquila e muito meiga. Gosta de passar o dia observando a janela.",
      historia: "Adotar um pet adulto/sênior é um ato de amor puro! Nina não estraga móveis, já tem sua personalidade definida e oferece carinho sem pedir nada em troca.",
      temperamento: ["Sábia", "Silenciosa", "Amorosa"],
      vacinado: true,
      castrado: true,
      vermifugado: true
    },
    {
      id: 7,
      nome: "Mel",
      especie: "Cachorro",
      sexo: "Fêmea",
      idade: "1 ano",
      faixaEtaria: "adulto",
      porte: "Médio",
      emoji: "🐕‍🦺",
      foto: "assets/images/mel.jpg",
      descricao: "Olhar doce e coração gigante. Convive harmoniosamente com outros cachorros e ama fazer novos amigos.",
      historia: "Mel foi resgatada ainda jovem e vive muito bem em matilha. Aprende comandos rápidos e adora receber cafuné na barriga.",
      temperamento: ["Doce", "Sociável", "Acolhedora"],
      vacinado: true,
      castrado: true,
      vermifugado: true
    },
    {
      id: 8,
      nome: "Pipoca",
      especie: "Cachorro",
      sexo: "Macho",
      idade: "4 meses",
      faixaEtaria: "filhote",
      porte: "Pequeno",
      emoji: "🐾",
      foto: "assets/images/pipoca.jpg",
      descricao: "Pura alegria em quatro patas! Pula como uma pipoquinha quando vê alguém se aproximando.",
      historia: "Pipoca foi resgatado com seus irmãozinhos e agora está prontinho para levar alegria sem fim para a sua casa.",
      temperamento: ["Hiperativo", "Brincalhão", "Alegre"],
      vacinado: true,
      castrado: false,
      vermifugado: true
    },
    {
      id: 9,
      nome: "Fred",
      especie: "Gato",
      sexo: "Macho",
      idade: "3 anos",
      faixaEtaria: "adulto",
      porte: "Médio",
      emoji: "🐈‍⬛",
      foto: "assets/images/fred.jpg",
      descricao: "Gato charmoso, elegante e companheiro para todas as horas de leitura ou home office.",
      historia: "Fred é o companheiro perfeito de trabalho remoto: senta ao lado do teclado apenas para te fazer companhia e pedir carinho.",
      temperamento: ["Companheiro", "Curioso", "Afetuoso"],
      vacinado: true,
      castrado: true,
      vermifugado: true
    }
  ];

  // ==========================================
  // 2. CONTROLE DE FAVORITOS (LOCALSTORAGE)
  // ==========================================
  let favoritos = JSON.parse(localStorage.getItem('patinhas_favoritos')) || [];

  function toggleFavorito(petId) {
    const id = parseInt(petId, 10);
    if (favoritos.includes(id)) {
      favoritos = favoritos.filter(favId => favId !== id);
    } else {
      favoritos.push(id);
    }
    localStorage.setItem('patinhas_favoritos', JSON.stringify(favoritos));
    renderizarPets();
  }

  // ==========================================
  // 3. SELETORES DO DOM
  // ==========================================
  const petsGrid = document.getElementById('grade-animais');
  const inputBusca = document.getElementById('busca');
  const selectEspecie = document.getElementById('filtro-especie');
  const selectPorte = document.getElementById('filtro-porte');
  const selectIdade = document.getElementById('filtro-idade');
  const selectSexo = document.getElementById('filtro-sexo');
  const btnLimparFiltros = document.getElementById('limpar-filtros');
  const btnApenasFavoritos = document.getElementById('btn-favoritos-filtro');
  const resultsCounter = document.getElementById('contador-resultados');

  const selectAnimalInteresse = document.getElementById('animal-interesse');
  const modal = document.getElementById('modal');
  const modalDetalhes = document.getElementById('detalhes-animal');
  const btnFecharModal = document.getElementById('fechar-modal');

  let filtrarApenasFavoritos = false;

  // ==========================================
  // 4. RENDERIZAÇÃO DOS CARDS DE PETS
  // ==========================================
  function renderizarPets() {
    const termo = inputBusca.value.trim().toLowerCase();
    const especie = selectEspecie.value;
    const porte = selectPorte.value;
    const idade = selectIdade.value;
    const sexo = selectSexo.value;

    const filtrados = animais.filter(pet => {
      const matchNomeOuDesc = pet.nome.toLowerCase().includes(termo) ||
                              pet.descricao.toLowerCase().includes(termo);
      const matchEspecie = especie === 'todos' || pet.especie === especie;
      const matchPorte = porte === 'todos' || pet.porte === porte;
      const matchIdade = idade === 'todos' || pet.faixaEtaria === idade;
      const matchSexo = sexo === 'todos' || pet.sexo === sexo;
      const matchFavorito = !filtrarApenasFavoritos || favoritos.includes(pet.id);

      return matchNomeOuDesc && matchEspecie && matchPorte && matchIdade && matchSexo && matchFavorito;
    });

    resultsCounter.innerHTML = `Mostrando <strong>${filtrados.length}</strong> de ${animais.length} animais disponíveis`;

    petsGrid.innerHTML = '';

    if (filtrados.length === 0) {
      petsGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🐾🔍</div>
          <h3 class="empty-title">Nenhum pet encontrado</h3>
          <p class="empty-desc">Tente ajustar os filtros ou pesquisar por outro termo.</p>
          <button class="btn btn-secondary btn-sm" id="btn-reset-empty">Limpar Filtros</button>
        </div>
      `;
      const resetBtn = document.getElementById('btn-reset-empty');
      if (resetBtn) {
        resetBtn.addEventListener('click', limparFiltros);
      }
      return;
    }

    filtrados.forEach(pet => {
      const isFav = favoritos.includes(pet.id);
      const card = document.createElement('article');
      card.className = 'pet-card';

      card.innerHTML = `
        <div class="card-img-wrapper">
          ${pet.foto 
            ? `<img src="${pet.foto}" alt="Foto de ${pet.nome}" loading="lazy" onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'card-emoji-placeholder\\'>${pet.emoji}</div>';">` 
            : `<div class="card-emoji-placeholder">${pet.emoji}</div>`
          }
          <span class="card-species-badge">${pet.especie === 'Cachorro' ? '🐶 Cão' : '🐱 Gato'}</span>
          <button class="favorite-btn ${isFav ? 'favorited' : ''}" data-fav-id="${pet.id}" title="${isFav ? 'Remover dos favoritos' : 'Favoritar este pet'}">
            ${isFav ? '❤️' : '🤍'}
          </button>
        </div>

        <div class="pet-card-body">
          <div class="pet-header-info">
            <h3 class="pet-name">${pet.nome}</h3>
            <span class="pet-sex">${pet.sexo === 'Macho' ? '♂ Macho' : '♀ Fêmea'}</span>
          </div>

          <div class="pet-tags">
            <span class="tag-badge">${pet.idade}</span>
            <span class="tag-badge">Porte ${pet.porte}</span>
            ${pet.castrado ? '<span class="tag-badge special">Castrado</span>' : ''}
            ${pet.vacinado ? '<span class="tag-badge special">Vacinado</span>' : ''}
          </div>

          <p class="pet-desc">${pet.descricao}</p>

          <div class="pet-card-actions">
            <button class="btn btn-outline btn-sm btn-detalhes" data-id="${pet.id}">
              ℹ️ Detalhes
            </button>
            <button class="btn btn-primary btn-sm btn-quero-adotar-card" data-pet-id="${pet.id}">
              🐾 Adotar
            </button>
          </div>
        </div>
      `;

      petsGrid.appendChild(card);
    });
  }

  function limparFiltros() {
    inputBusca.value = '';
    selectEspecie.value = 'todos';
    selectPorte.value = 'todos';
    selectIdade.value = 'todos';
    selectSexo.value = 'todos';
    filtrarApenasFavoritos = false;
    btnApenasFavoritos.classList.remove('active');
    btnApenasFavoritos.innerHTML = '❤️ Ver Favoritos';
    renderizarPets();
  }

  // ==========================================
  // 5. PREENCHIMENTO DO SELECT DE ADOÇÃO
  // ==========================================
  function preencherSelectAdocao() {
    selectAnimalInteresse.innerHTML = '<option value="">Selecione o pet que tocou seu coração...</option>';
    animais.forEach(pet => {
      const option = document.createElement('option');
      option.value = pet.id;
      option.textContent = `${pet.nome} (${pet.especie} - ${pet.porte}, ${pet.idade})`;
      selectAnimalInteresse.appendChild(option);
    });
  }

  // ==========================================
  // 6. MODAL DE DETALHES DO PET
  // ==========================================
  function abrirModalDetalhes(petId) {
    const pet = animais.find(p => p.id === parseInt(petId, 10));
    if (!pet) return;

    modalDetalhes.innerHTML = `
      ${pet.foto 
        ? `<img class="modal-pet-img" src="${pet.foto}" alt="${pet.nome}">` 
        : `<div class="card-emoji-placeholder" style="border-radius:12px;margin-bottom:20px;height:240px;">${pet.emoji}</div>`
      }
      
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 8px;">
        <h2 style="font-size:2rem; font-weight:800; color:var(--primary);">${pet.nome}</h2>
        <span style="font-size:1.1rem; font-weight:700; color:var(--text-muted);">${pet.sexo === 'Macho' ? '♂ Macho' : '♀ Fêmea'}</span>
      </div>

      <div class="modal-grid-details">
        <div class="modal-detail-item">
          <span>Espécie</span>
          <strong>${pet.especie}</strong>
        </div>
        <div class="modal-detail-item">
          <span>Idade</span>
          <strong>${pet.idade}</strong>
        </div>
        <div class="modal-detail-item">
          <span>Porte</span>
          <strong>${pet.porte}</strong>
        </div>
      </div>

      <div style="margin: 16px 0;">
        <h4 style="font-size:1rem; font-weight:800; margin-bottom:6px;">História de Resgate:</h4>
        <p style="color:var(--text-secondary); font-size:0.95rem; line-height:1.6;">${pet.historia}</p>
      </div>

      <div style="margin: 16px 0;">
        <h4 style="font-size:1rem; font-weight:800; margin-bottom:6px;">Temperamento & Personalidade:</h4>
        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          ${pet.temperamento.map(t => `<span class="tag-badge" style="font-size:0.8rem; padding:4px 10px;">${t}</span>`).join('')}
        </div>
      </div>

      <div class="modal-health-tags">
        <span class="health-pill">✓ Vacinado (${pet.vacinado ? 'Em dia' : 'Pendente'})</span>
        <span class="health-pill">✓ ${pet.castrado ? 'Castrado' : 'Castração garantida'}</span>
        <span class="health-pill">✓ Vermifugado</span>
      </div>

      <div style="margin-top: 24px; display:flex; gap:12px;">
        <button class="btn btn-primary btn-block btn-adotar-modal" data-pet-id="${pet.id}">
          🐾 Quero Adotar o ${pet.nome}
        </button>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function fecharModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ==========================================
  // 7. AÇÃO DE ADOTAR (CARD OU MODAL)
  // ==========================================
  function iniciarAdocao(petId) {
    fecharModal();
    selectAnimalInteresse.value = petId;
    
    // Rola suavemente até o formulário
    const secaoForm = document.getElementById('quero-adotar');
    if (secaoForm) {
      secaoForm.scrollIntoView({ behavior: 'smooth' });
    }

    // Dá um destaque visual momentâneo no select
    selectAnimalInteresse.focus();
    selectAnimalInteresse.style.borderColor = 'var(--primary)';
    selectAnimalInteresse.style.boxShadow = '0 0 0 4px rgba(232, 99, 27, 0.25)';
    setTimeout(() => {
      selectAnimalInteresse.style.borderColor = '';
      selectAnimalInteresse.style.boxShadow = '';
    }, 2000);
  }

  // ==========================================
  // 8. EVENT LISTENERS PARA GRID & MODAL
  // ==========================================
  petsGrid.addEventListener('click', (e) => {
    // Botão Favorito
    const favBtn = e.target.closest('.favorite-btn');
    if (favBtn) {
      toggleFavorito(favBtn.dataset.favId);
      return;
    }

    // Botão Detalhes
    const detalhesBtn = e.target.closest('.btn-detalhes');
    if (detalhesBtn) {
      abrirModalDetalhes(detalhesBtn.dataset.id);
      return;
    }

    // Botão Adotar
    const adotarBtn = e.target.closest('.btn-quero-adotar-card');
    if (adotarBtn) {
      iniciarAdocao(adotarBtn.dataset.petId);
      return;
    }
  });

  modalDetalhes.addEventListener('click', (e) => {
    const adotarBtnModal = e.target.closest('.btn-adotar-modal');
    if (adotarBtnModal) {
      iniciarAdocao(adotarBtnModal.dataset.petId);
    }
  });

  btnFecharModal.addEventListener('click', fecharModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      fecharModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      fecharModal();
    }
  });

  // ==========================================
  // 9. EVENTOS DE FILTROS
  // ==========================================
  inputBusca.addEventListener('input', renderizarPets);
  selectEspecie.addEventListener('change', renderizarPets);
  selectPorte.addEventListener('change', renderizarPets);
  selectIdade.addEventListener('change', renderizarPets);
  selectSexo.addEventListener('change', renderizarPets);

  if (btnLimparFiltros) {
    btnLimparFiltros.addEventListener('click', limparFiltros);
  }

  if (btnApenasFavoritos) {
    btnApenasFavoritos.addEventListener('click', () => {
      filtrarApenasFavoritos = !filtrarApenasFavoritos;
      btnApenasFavoritos.classList.toggle('active', filtrarApenasFavoritos);
      btnApenasFavoritos.innerHTML = filtrarApenasFavoritos 
        ? '❤️ Mostrando Favoritos' 
        : '🤍 Ver Favoritos';
      renderizarPets();
    });
  }

  // ==========================================
  // 10. MÁSCARA DE TELEFONE BRASILEIRO
  // ==========================================
  const inputTelefone = document.getElementById('telefone');
  if (inputTelefone) {
    inputTelefone.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '');
      if (v.length > 11) v = v.substring(0, 11);
      
      if (v.length > 10) {
        // Celular (11 dígitos): (XX) XXXXX-XXXX
        v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
      } else if (v.length > 5) {
        // Fixo ou celular digitando: (XX) XXXX-XXXX
        v = v.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
      } else if (v.length > 2) {
        v = v.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
      }
      e.target.value = v;
    });
  }

  // ==========================================
  // 11. VALIDAÇÃO E ENVIO DO FORMULÁRIO
  // ==========================================
  const formAdocao = document.getElementById('form-adocao');
  const toastSuccess = document.getElementById('mensagem-ok');

  function validarCampo(campoId, erroId, condicao) {
    const campo = document.getElementById(campoId);
    const erro = document.getElementById(erroId);
    if (!condicao) {
      campo.classList.add('error');
      if (erro) erro.classList.add('visible');
      return false;
    } else {
      campo.classList.remove('error');
      if (erro) erro.classList.remove('visible');
      return true;
    }
  }

  if (formAdocao) {
    formAdocao.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefone = document.getElementById('telefone').value.replace(/\D/g, '');
      const petId = selectAnimalInteresse.value;
      const moradia = document.getElementById('tipo-moradia') ? document.getElementById('tipo-moradia').value : 'casa';
      const mensagem = document.getElementById('mensagem').value.trim();

      const nomeValido = validarCampo('nome', 'erro-nome', nome.length >= 3);
      const emailValido = validarCampo('email', 'erro-email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
      const telefoneValido = validarCampo('telefone', 'erro-telefone', telefone.length >= 10);
      const petValido = validarCampo('animal-interesse', 'erro-animal', petId !== '');

      if (nomeValido && emailValido && telefoneValido && petValido) {
        const petEscolhido = animais.find(p => p.id === parseInt(petId, 10));

        // Salvar pedido no localStorage (histórico)
        const pedidos = JSON.parse(localStorage.getItem('patinhas_pedidos')) || [];
        const novoPedido = {
          data: new Date().toISOString(),
          nome,
          email,
          telefone,
          pet: petEscolhido ? petEscolhido.nome : 'Não especificado',
          moradia,
          mensagem
        };
        pedidos.push(novoPedido);
        localStorage.setItem('patinhas_pedidos', JSON.stringify(pedidos));

        // Mensagem de sucesso estilizada com detalhes
        toastSuccess.innerHTML = `
          <div class="toast-header">
            <span>🎉</span> Parabéns, ${nome}! Pedido de Adoção Enviado com Sucesso!
          </div>
          <p style="margin-bottom:12px;">
            Recebemos seu interesse em adotar <strong>${petEscolhido ? petEscolhido.nome : 'seu amigo'}</strong>.
            Nossa equipe de voluntários entrará em contato pelo telefone <strong>${document.getElementById('telefone').value}</strong> em até 48 horas.
          </p>
          <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:14px;">
            <a href="https://api.whatsapp.com/send?phone=5511999999999&text=${encodeURIComponent(`Olá Patinhas Amigas! Acabei de enviar um formulário pelo site demonstrando interesse em adotar o pet ${petEscolhido ? petEscolhido.nome : ''}. Meu nome é ${nome}.`)}" target="_blank" class="btn btn-secondary btn-sm" style="background:#25d366;color:#fff;">
              💬 Falar no WhatsApp Agora
            </a>
          </div>
        `;
        toastSuccess.classList.add('visible');
        formAdocao.reset();
        toastSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        toastSuccess.classList.remove('visible');
      }
    });

    // Limpa erro ao digitar
    ['nome', 'email', 'telefone', 'animal-interesse'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => {
          el.classList.remove('error');
          const erro = document.getElementById(`erro-${id.replace('animal-interesse', 'animal')}`);
          if (erro) erro.classList.remove('visible');
        });
      }
    });
  }

  // ==========================================
  // 12. FAQ ACORDEÃO
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Fecha outros itens
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // ==========================================
  // 13. COPIAR CHAVE PIX COM 1 CLIQUE
  // ==========================================
  const btnCopiarPix = document.getElementById('btn-copiar-pix');
  const chavePixTexto = document.getElementById('chave-pix-texto');
  if (btnCopiarPix && chavePixTexto) {
    btnCopiarPix.addEventListener('click', () => {
      navigator.clipboard.writeText(chavePixTexto.innerText.trim()).then(() => {
        const originalText = btnCopiarPix.innerHTML;
        btnCopiarPix.innerHTML = '✓ Copiado!';
        btnCopiarPix.style.backgroundColor = 'var(--success)';
        btnCopiarPix.style.color = '#fff';
        setTimeout(() => {
          btnCopiarPix.innerHTML = originalText;
          btnCopiarPix.style.backgroundColor = '';
          btnCopiarPix.style.color = '';
        }, 2500);
      });
    });
  }

  // ==========================================
  // 14. DARK MODE / LIGHT MODE TOGGLE
  // ==========================================
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('patinhas_theme') || 'light';

  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeToggle) themeToggle.textContent = '☀️';
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('patinhas_theme', 'light');
        themeToggle.textContent = '🌙';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('patinhas_theme', 'dark');
        themeToggle.textContent = '☀️';
      }
    });
  }

  // ==========================================
  // 15. MENU MOBILE & HEADER SCROLL
  // ==========================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Fechar ao clicar em um link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Botão Voltar ao Topo
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================
  // 16. INICIALIZAÇÃO
  // ==========================================
  preencherSelectAdocao();
  renderizarPets();

});
