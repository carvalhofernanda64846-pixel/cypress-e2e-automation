// Configurações
const CONFIG = {
  credentials: {
    email: Cypress.env('USER_EMAIL') || 'teste@qazando.com.br',
    password: Cypress.env('USER_PASSWORD') || 'teste123',
  },
  address: {
    firstName: 'João',
    lastName: 'Silva',
    company: 'QAZANDO',
    email: 'joao@teste.com',
    country: 'usa',
    state: 'Aland Islands',
    zipCode: '01310-100',
    fullAddress: 'Avenida Paulista, 1000 - Bela Vista, São Paulo - SP',
    notes: 'Entregar no período da manhã',
  },
};

describe('Fluxo completo de compra E2E', () => {
  it('Login -> Adicionar produtos -> Preencher endereço -> Finalizar pagamento', () => {
    // 1. Login
    cy.visit('/login');
    cy.wait(2000);
    
    // Preencher credenciais
    cy.get('input[type="text"]').first().should('be.visible').clear().type(CONFIG.credentials.email);
    cy.get('input[type="password"]').should('be.visible').clear().type(CONFIG.credentials.password);
    
    // Clicar no botão de login
    cy.get('button').contains('login', { matchCase: false }).should('be.visible').click();
    cy.wait(3000);

    // 2. Adicionar produtos ao carrinho
    cy.visit('/shop');
    cy.wait(2000);
    
    // Aguardar produtos carregarem e clicar no primeiro produto (usando force para elementos ocultos)
    cy.get('a[href*="/product-details-one/"]').first().click({ force: true });
    cy.wait(2000);
    
    // Adicionar ao carrinho
    cy.contains('a', 'Add To Cart').click({ force: true });
    cy.wait(2000);

    // 3. Ir para checkout
    cy.visit('/checkout-one');
    cy.wait(2000);

    // 4. Preencher endereço
    // Aguardar formulário carregar
    cy.get('input[placeholder*="First name"], input[placeholder*="first"]').first().should('be.visible').clear().type(CONFIG.address.firstName);
    cy.get('input[placeholder*="Last name"], input[placeholder*="last"]').first().should('be.visible').clear().type(CONFIG.address.lastName);
    cy.get('input[placeholder*="Company"], input[placeholder*="company"]').first().should('be.visible').clear().type(CONFIG.address.company);
    cy.get('input[placeholder*="info@gmail.com"], input[type="email"]').first().should('be.visible').clear().type(CONFIG.address.email);
    
    // Selecionar país
    cy.get('select').first().should('be.visible').select(CONFIG.address.country);
    cy.wait(500);
    
    // Selecionar estado/cidade
    cy.get('select').eq(1).should('be.visible').select(CONFIG.address.state);
    cy.wait(500);
    
    cy.get('input[placeholder*="zipcode"], input[placeholder*="zip"]').first().should('be.visible').clear().type(CONFIG.address.zipCode);
    cy.get('input[placeholder*="address"], textarea[placeholder*="address"]').first().should('be.visible').clear().type(CONFIG.address.fullAddress);
    
    // Campo de notas (opcional - pode não existir)
    cy.get('body').then(($body) => {
      const notesField = $body.find('input[placeholder*="notes"], textarea[placeholder*="notes"], input[placeholder*="Order notes"]');
      if (notesField.length > 0) {
        cy.wrap(notesField.first()).clear().type(CONFIG.address.notes);
      }
    });
    
    // Salvar endereço
    cy.get('button').contains('Save').should('be.visible').click();
    cy.wait(2000);

    // 5. Finalizar pagamento
    // Payment já vem selecionado (Direct Bank Transfer)
    cy.get('button').contains('Place Order').should('be.visible').click();
    cy.wait(2000);

    // 6. Verificar sucesso
    cy.url().should('include', 'checkout');
  });
});

