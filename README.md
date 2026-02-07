# 🧪 Testes E2E - Cypress

Testes automatizados end-to-end para o site [automationpratice.com.br](https://www.automationpratice.com.br) usando Cypress.

## O que faz

Testa o fluxo completo de compra:
- Login
- Adicionar produto ao carrinho
- Preencher endereço
- Finalizar pagamento

## Como usar

### Instalar
```bash
npm install
```

### Configurar credenciais

Crie o arquivo `cypress.env.json`:
```json
{
  "USER_EMAIL": "seu-email@exemplo.com",
  "USER_PASSWORD": "sua-senha"
}
```

### Executar testes

```bash
# Interface gráfica (recomendado)
npm run cy:open

# Modo headless
npm test
```

## Estrutura

```
cypress/
├── teste-e2e/
│   └── checkout-flow.cy.js    # Teste principal
├── fixtures/
└── support/
```

## Tecnologias

- Cypress
- Node.js

---

⭐ Desenvolvido seguindo boas práticas de QA Automation
