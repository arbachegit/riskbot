class TrackingManager {
  constructor() {
    this.sessionData = this.initializeSession();
    this.startSession();
  }

  initializeSession() {
    return {
      session_id: `sess_${Date.now()}`,
      user_info: {
        name: "",
        email: "",
        company: "",
        first_access: new Date().toISOString(),
        last_access: new Date().toISOString()
      },
      interactions: {
        buttons: {},
        links: {},
        form_inputs: {}
      },
      metrics: {
        total_session_time: "",
        total_interactions: 0,
        most_clicked_button: "",
        most_visited_link: "",
        session_start: new Date().toISOString(),
        device_info: this.getDeviceInfo()
      }
    };
  }

  startSession() {
    // Carregar dados do usuário do localStorage se existirem
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsed = JSON.parse(userData);
      this.sessionData.user_info = {
        ...this.sessionData.user_info,
        ...parsed
      };
    }
  }

  trackInteraction(elementId, type, details = {}) {
    const timestamp = new Date().toISOString();
    const interaction = {
      timestamp,
      interaction_type: type,
      ...details
    };

    // Determinar categoria do elemento
    if (elementId.includes('btn')) {
      if (!this.sessionData.interactions.buttons[elementId]) {
        this.sessionData.interactions.buttons[elementId] = {
          clicks: [],
          last_interaction: ""
        };
      }
      this.sessionData.interactions.buttons[elementId].clicks.push(interaction);
      this.sessionData.interactions.buttons[elementId].last_interaction = timestamp;
    } else if (elementId.includes('link')) {
      if (!this.sessionData.interactions.links[elementId]) {
        this.sessionData.interactions.links[elementId] = {
          clicks: [],
          last_interaction: ""
        };
      }
      this.sessionData.interactions.links[elementId].clicks.push(interaction);
      this.sessionData.interactions.links[elementId].last_interaction = timestamp;
    } else if (elementId.includes('input')) {
      if (!this.sessionData.interactions.form_inputs[elementId]) {
        this.sessionData.interactions.form_inputs[elementId] = {
          interactions: [],
          last_interaction: ""
        };
      }
      this.sessionData.interactions.form_inputs[elementId].interactions.push(interaction);
      this.sessionData.interactions.form_inputs[elementId].last_interaction = timestamp;
    }

    this.sessionData.metrics.total_interactions++;
    this.saveSession();
  }

  getDeviceInfo() {
    return {
      device_type: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(navigator.userAgent) ? 'mobile' : 'desktop',
      browser: navigator.userAgent,
      os: navigator.platform,
      screen_resolution: `${window.screen.width}x${window.screen.height}`
    };
  }

  saveSession() {
    // Salvar no localStorage temporariamente
    localStorage.setItem('session_tracking', JSON.stringify(this.sessionData));
    
    // Enviar para o servidor (implementar depois)
    this.sendToServer();
  }

  async sendToServer() {
    // Implementar envio para o servidor
    try {
      const response = await fetch('https://sua-api.com/tracking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.sessionData)
      });
      
      if (!response.ok) {
        console.warn('Falha ao enviar dados de tracking');
      }
    } catch (error) {
      console.error('Erro ao enviar tracking:', error);
    }
  }
}

// Criar instância global
window.tracker = new TrackingManager(); 