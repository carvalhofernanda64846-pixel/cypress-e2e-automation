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

Este projeto possui uma esteira de CI/CD integrada via GitHub Actions, executando testes regressivos automatizados a cada novo deploy, garantindo a integridade das regras de negócio críticas.

## CI/CD Pipeline

Este projeto possui uma **esteira de CI/CD automatizada** com GitHub Actions que:

- Executa todos os testes automaticamente a cada push
- Valida o código em um ambiente controlado
- Gera relatórios dos testes
- Garante que apenas código funcional seja integrado

O workflow está configurado em [`.github/workflows/main.yml`](.github/workflows/main.yml)

## Tecnologias

- Cypress
- Node.js
- GitHub Actions (CI/CD)

---

⭐ Desenvolvido seguindo boas práticas de QA Automation
