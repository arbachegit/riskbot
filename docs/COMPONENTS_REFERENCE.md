# Referência de Componentes

## Componentes Principais

### RiskBotProgressBar
- **Finalidade**: Exibe a barra superior com logo e título
- **Características**: 
  - Mostra o logo da KnowRisk
  - Exibe o título central
  - Mantém consistência visual da aplicação

### ScrollArrow
- **Finalidade**: Permite rolar para novas mensagens
- **Características**:
  - Aparece quando há conteúdo não visível
  - Animação suave ao rolar
  - Desaparece automaticamente quando não necessário

### ChatInterface
- **Finalidade**: Componente principal que gerencia toda a interface do chat
- **Características**:
  - Gerencia estados do chat
  - Controla fluxo de mensagens
  - Gerencia formulário de cadastro
  - Controla interações do usuário

### CharacterAvatars
- **Finalidade**: Gerencia a exibição dos avatares dos personagens
- **Características**:
  - Exibe avatar do RiskBot
  - Exibe avatar da Dani
  - Mantém consistência visual dos personagens

### PaperPlaneIcon
- **Finalidade**: Ícone de envio estilizado
- **Características**:
  - Animação ao enviar mensagens
  - Design minimalista
  - Feedback visual de ação

### HelpModal
- **Finalidade**: Modal de ajuda com a Dani
- **Características**:
  - Fornece informações de ajuda
  - Acessível em qualquer momento
  - Interface amigável e informativa

## Estados Principais

### Gerenciamento de Usuário
- `userData`: Armazena dados do usuário
- `showUserForm`: Controla exibição do formulário
- `conversationStarted`: Controla início da conversa

### Controle de Chat
- `messages`: Array de mensagens do chat
- `isTyping`: Controla animação de digitação
- `buttonClicked`: Controla interações com botões
- `showHelpModal`: Controla exibição do modal de ajuda

## Funcionalidades Principais

### Gerenciamento de Mensagens
- Adiciona mensagens ao chat
- Controla ordem e timing das mensagens
- Gerencia respostas e interações

### Controle de Formulário
- Valida dados do usuário
- Envia dados para API
- Gerencia erros e feedback

### Responsividade
- Adapta interface para mobile
- Gerencia diferentes layouts
- Otimiza interações touch 