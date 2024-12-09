// Objeto para armazenar os IDs e suas contagens
let idUsageTracker = {
  // Elementos principais
  "root": { count: 0, description: "Elemento raiz onde o React renderiza toda a aplicação" },
  "modal-Xclose-btn": { count: 0, description: "Botão para fechar o modal de ajuda da Dani" },
  "start-journey-btn": { count: 0, description: "Botão para iniciar a jornada/conversa com o RiskBot" },
  "ajuda-dani-btn": { count: 0, description: "Botão flutuante para abrir o modal de ajuda da Dani" },
  
  // Modal de Ajuda
  "help-modal-overlay": { count: 0, description: "Container principal do modal que cobre toda a tela" },
  "help-modal-content": { count: 0, description: "Container do conteúdo principal do modal" },
  "help-modal-inner-content": { count: 0, description: "Container interno que organiza o conteúdo do modal" },
  "help-modal-header": { count: 0, description: "Seção superior do modal" },
  "help-modal-avatar": { count: 0, description: "Imagem do avatar da Dani no modal" },
  "help-modal-title": { count: 0, description: "Título principal do modal" },
  "help-modal-options-list": { count: 0, description: "Lista de opções disponíveis no modal" },
  "help-modal-main-button": { count: 0, description: "Botão principal de ação no modal" },
  "help-modal-option-1": { count: 0, description: "Primeira opção da lista do modal" },
  "help-modal-option-2": { count: 0, description: "Segunda opção da lista do modal" },
  "help-modal-option-3": { count: 0, description: "Terceira opção da lista do modal" }
};

// Função para incrementar a contagem de uso de um ID
const trackIdUsage = (id) => {
  if (idUsageTracker[id]) {
    idUsageTracker[id].count++;
    // Salva no localStorage para persistência
    localStorage.setItem('idUsageTracker', JSON.stringify(idUsageTracker));
  }
};

// Função para obter as estatísticas de uso
const getIdUsageStats = () => {
  return idUsageTracker;
};

// Função para resetar as contagens
const resetIdUsageStats = () => {
  Object.keys(idUsageTracker).forEach(id => {
    idUsageTracker[id].count = 0;
  });
  localStorage.setItem('idUsageTracker', JSON.stringify(idUsageTracker));
};

// Carregar dados salvos do localStorage ao inicializar
const loadSavedStats = () => {
  const saved = localStorage.getItem('idUsageTracker');
  if (saved) {
    idUsageTracker = JSON.parse(saved);
  }
};

// Exportar as funções para uso global
window.idTracker = {
  track: trackIdUsage,
  getStats: getIdUsageStats,
  reset: resetIdUsageStats,
  load: loadSavedStats
};

// Carregar estatísticas salvas ao inicializar
loadSavedStats(); 