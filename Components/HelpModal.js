// NOTA: O aviso do Babel in-browser é esperado em desenvolvimento
// Este projeto foi configurado para funcionar diretamente no navegador
// sem necessidade de build ou instalação de dependências,
// permitindo deploy direto no GitHub Pages.
// 
// Para melhor performance em outros ambientes de produção,
// considerar migrar para uma build com @babel/cli e npm.

const HelpModal = ({ showHelpModal, setShowHelpModal, CHARACTERS, setIsTyping, addMessage, buttonClicked, setMessages }) => {
  React.useEffect(() => {
    if (showHelpModal) {
      // Rastrear uso do modal quando ele é aberto
      window.idTracker.track('help-modal-overlay');
    }
  }, [showHelpModal]);

  // Modificar os elementos para rastrear seus IDs
  const trackAndReturn = (id, element) => {
    window.idTracker.track(id);
    return element;
  };

  if (!showHelpModal) return null;

  return React.createElement(
    'div',
    {
      id: "help-modal-overlay",
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center modal-overlay",
      style: { zIndex: 2000 },
      onClick: (e) => {
        if (e.target === e.currentTarget) {
          setShowHelpModal(false);
        }
      }
    },
    trackAndReturn('help-modal-content',
      React.createElement(
        'div',
        {
          id: "help-modal-content",
          className: "bg-white p-6 rounded-lg w-full max-w-md mx-4 relative modal-content",
          onClick: (e) => {
            e.preventDefault();
            e.stopPropagation();
          }
        },
        [
          React.createElement(
            'button',
            {
              id: "modal-Xclose-btn",
              key: "close-button",
              onClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowHelpModal(false);
              },
              className: "modal-close-button absolute top-3 right-3",
              'aria-label': "Fechar modal"
            },
            React.createElement(
              'svg',
              {
                key: "close-icon",
                xmlns: "http://www.w3.org/2000/svg",
                className: "close-icon",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "#4A5568",
                style: {
                  pointerEvents: 'none',
                  width: '24px',
                  height: '24px',
                  strokeWidth: '3'
                }
              },
              React.createElement('path', {
                key: "close-path",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 3,
                d: "M6 18L18 6M6 6l12 12"
              })
            )
          ),
          React.createElement(
            'div',
            {
              id: "help-modal-inner-content",
              key: "content",
              className: "flex flex-col w-full"
            },
            [
              React.createElement(
                'div',
                {
                  id: "help-modal-header",
                  key: "header",
                  className: "flex items-start mb-4"
                },
                [
                  React.createElement('img', {
                    id: "help-modal-avatar",
                    key: "avatar",
                    src: CHARACTERS.Dani.image,
                    alt: "Dani avatar",
                    className: "w-12 h-12 rounded-full border-2 border-pink-200"
                  }),
                  React.createElement(
                    'h3',
                    {
                      id: "help-modal-title",
                      key: "title",
                      className: "text-xl font-bold ml-4"
                    },
                    "Como posso te ajudar?"
                  )
                ]
              ),
              React.createElement(
                'ul',
                {
                  id: "help-modal-options-list",
                  key: "list",
                  className: "list-disc pl-4 space-y-2 text-sm text-gray-700"
                },
                [
                  React.createElement(
                    'button',
                    {
                      id: "help-modal-main-button",
                      key: "help-button",
                      onClick: () => {
                        setIsTyping(true);
                        setShowHelpModal(false);
                        setTimeout(() => {
                          setIsTyping(false);
                          addMessage(
                            "Dani",
                            React.createElement(
                              'div',
                              // Key para identificar o conteúdo da mensagem
                              { key: "message-content" },
                              [
                                React.createElement('span', { key: "text-1" }, "Este bot foi criado para te ajudar a "),
                                React.createElement('strong', { key: "strong-1" }, "explorar o mundo da IA"),
                                React.createElement('span', { key: "text-2" }, " de forma simples e objetiva. Aqui você encontrará "),
                                React.createElement('strong', { key: "strong-2" }, "conteúdos atualizados semanalmente"),
                                React.createElement('span', { key: "text-3" }, " e poderá "),
                                React.createElement('strong', { key: "strong-3" }, "testar suas habilidades ferramentas feitas por IA em:"),
                                React.createElement('br', { key: "br-1" }),
                                React.createElement('div', {
                                  key: "text-4",
                                  className: "flex items-center gap-2"
                                }, [
                                  React.createElement('span', {
                                    key: "inovacao-text",
                                    className: "text-gray-700"
                                  }, "1. INOVAÇÃO"),
                                  React.createElement(
                                    'button',
                                    {
                                      key: "inovacao-button",
                                      className: "border-2 border-gray-400 bg-gray-100 text-gray-400 font-medium py-1 px-3 rounded-lg text-left cursor-not-allowed",
                                      disabled: true,
                                      title: "Em desenvolvimento"
                                    },
                                    "produção"
                                  )
                                ]),
                                React.createElement('br', { key: "br-2" }),
                                React.createElement('div', {
                                  key: "text-5",
                                  className: "flex items-center gap-2"
                                }, [
                                  React.createElement('span', {
                                    key: "ambidestria-text",
                                    className: "text-gray-700"
                                  }, "2. AMBIDESTRIA"),
                                  React.createElement(
                                    'button',
                                    {
                                      key: "ambidestria-button",
                                      className: "border-2 border-black bg-transparent text-gray-700 font-medium py-1 px-3 rounded-lg text-left transition-colors duration-200 hover:bg-gray-100",
                                      onClick: () => window.open("https://arbachegit.github.io/ambidestriaInova/", "_blank")
                                    },
                                    "acessar"
                                  )
                                ]),
                                React.createElement('br', { key: "br-3" }),
                                React.createElement('div', {
                                  key: "text-6",
                                  className: "flex items-center gap-2"
                                }, [
                                  React.createElement('span', {
                                    key: "ia-text",
                                    className: "text-gray-700"
                                  }, "3. IA"),
                                  React.createElement(
                                    'button',
                                    {
                                      key: "ia-button",
                                      className: "border-2 border-gray-400 bg-gray-100 text-gray-400 font-medium py-1 px-3 rounded-lg text-left cursor-not-allowed",
                                      disabled: true,
                                      title: "Em desenvolvimento"
                                    },
                                    "produção"
                                  )
                                ])
                              ]
                            )
                          );
                          // Verifica se o botão de ajuda já foi clicado
                          if (!buttonClicked) {
                            setIsTyping(true);
                            setTimeout(() => {
                              setIsTyping(false);
                              setMessages(prev => [...prev, {
                                id: "riskbot-intro-message",
                                character: "RiskBot",
                                text: React.createElement(
                                  'div',
                                  { key: "riskbot-message" },
                                  [
                                    React.createElement('span', { key: "text-1" }, "Descubra "),
                                    React.createElement('strong', { key: "strong-1" }, "conteúdos"),
                                    React.createElement('span', { key: "text-2" }, " e "),
                                    React.createElement('strong', { key: "strong-2" }, "testes feitos por IA"),
                                    React.createElement('span', { key: "text-3" }, ", perfeitos para quem quer explorar "),
                                    React.createElement('strong', { key: "strong-3" }, "inovação"),
                                    React.createElement('span', { key: "text-4" }, " e mergulhar no mundo da "),
                                    React.createElement('strong', { key: "strong-4" }, "IA"),
                                    React.createElement('span', { key: "text-5" }, " com insights e "),
                                    React.createElement('strong', { key: "strong-5" }, "atualizações constantes"),
                                    React.createElement('span', { key: "text-6" }, "!")
                                  ]
                                ),
                                showButton: true,
                                buttonWasClicked: false
                              }]);
                            }, 2000);
                          }
                        }, 2000);
                      },
                      className: "border-2 border-gray-700 bg-transparent hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-lg text-left w-full transition-colors duration-200"
                    },
                    "O que eu e o RiskBot faremos?"
                  ),
                  React.createElement(
                    'li',
                    { 
                      id: "help-modal-option-1",
                      key: "li-1" 
                    },
                    [
                      React.createElement('span', { key: "text-1" }, "Faça o "),
                      React.createElement('strong', { key: "strong-1" }, "Teste de Ambidestria"),
                      React.createElement('span', { key: "text-2" }, " para avaliar suas habilidades")
                    ]
                  ),
                  React.createElement(
                    'li',
                    { 
                      id: "help-modal-option-2",
                      key: "li-2" 
                    },
                    [
                      React.createElement('span', { key: "text-1" }, "Acesse nossos "),
                      React.createElement('strong', { key: "strong-1" }, "materiais semanais"),
                      React.createElement('span', { key: "text-2" }, " para se manter atualizado")
                    ]
                  ),
                  React.createElement(
                    'li',
                    { 
                      id: "help-modal-option-3",
                      key: "li-3" 
                    },
                    [
                      React.createElement('span', { key: "text-1" }, "Use o botão "),
                      React.createElement('strong', { key: "strong-1" }, '"Quer Ajuda?"'),
                      React.createElement('span', { key: "text-2" }, " para me chamar a qualquer momento")
                    ]
                  )
                ]
              )
            ]
          )
        ]
      )
    )
  );
};

// Exportar o componente para uso global
window.HelpModal = HelpModal; 