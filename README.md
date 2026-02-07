# 🧪 Testes End-to-End (E2E) - QAZANDO Shop E-Commerce

[![Cypress](https://img.shields.io/badge/Cypress-13.17.0-brightgreen)](https://www.cypress.io/)
[![Node.js](https://img.shields.io/badge/Node.js-16%2B-green)](https://nodejs.org/)

Automação de testes E2E completa para o site [automationpratice.com.br](https://www.automationpratice.com.br), desenvolvida com **Cypress** seguindo as melhores práticas de QA.

## 📋 Sobre o Projeto

Este projeto contém testes automatizados que validam o fluxo completo de compra em um e-commerce, desde o login até a finalização do pedido. Os testes foram desenvolvidos com foco em:

- ✅ **Robustez**: Seletores flexíveis e tolerantes a mudanças
- ✅ **Manutenibilidade**: Código limpo e bem documentado
- ✅ **Confiabilidade**: Tratamento de elementos ocultos e carregamento assíncrono
- ✅ **Boas Práticas**: Seguindo padrões de QA sênior

## 🚀 Pré-requisitos

- **Node.js** versão 16 ou superior
- **npm** ou **yarn**
- **Git** (para clonar o repositório)

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. Instale as dependências:
```bash
npm install
```

## ⚙️ Configuração

### Opção 1: Variáveis de Ambiente (Recomendado)

Crie um arquivo `cypress.env.json` na raiz do projeto:

```json
{
  "USER_EMAIL": "seu-email@exemplo.com",
  "USER_PASSWORD": "sua-senha"
}
```

**⚠️ Importante**: Adicione `cypress.env.json` ao `.gitignore` para não commitar credenciais.

### Opção 2: Editar o Arquivo de Teste

Edite o arquivo `cypress/teste-e2e/checkout-flow.cy.js` e ajuste as credenciais:

```javascript
const CONFIG = {
  credentials: {
    email: 'seu-email@exemplo.com',
    password: 'sua-senha',
  },
  // ...
};
```

## 🧪 Executar Testes

### Modo Interativo (Recomendado para desenvolvimento)

Abre o Cypress Test Runner com interface gráfica:

```bash
npm run cy:open
```

### Modo Headless (CI/CD)

Executa os testes sem interface gráfica:

```bash
npm test
```

### Modo Headed (Com navegador visível)

Executa os testes mostrando o navegador:

```bash
npm run test:headed
```

## 📊 Fluxo de Teste

O teste automatizado cobre o seguinte fluxo completo:

```
1. 🔐 Login
   └─ Acessa página de login
   └─ Preenche credenciais
   └─ Valida autenticação

2. 🛒 Adicionar Produtos
   └─ Navega para a loja
   └─ Seleciona um produto
   └─ Adiciona ao carrinho

3. 📝 Checkout
   └─ Acessa página de checkout
   └─ Preenche dados de endereço:
      • Nome completo
      • Empresa
      • Email
      • País e Estado
      • CEP e endereço completo
      • Notas adicionais (opcional)

4. 💳 Finalizar Pagamento
   └─ Seleciona método de pagamento
   └─ Confirma o pedido
   └─ Valida conclusão
```

## 📁 Estrutura do Projeto

```
.
├── cypress/
│   ├── teste-e2e/                    # Testes E2E
│   │   └── checkout-flow.cy.js        # Teste principal do fluxo de compra
│   ├── fixtures/                      # Dados de teste
│   │   └── example.json
│   ├── support/                       # Comandos customizados e configurações
│   │   ├── commands.js
│   │   └── e2e.js
│   ├── videos/                        # Vídeos dos testes (gitignored)
│   └── screenshots/                   # Screenshots de falhas (gitignored)
├── cypress.config.js                  # Configuração do Cypress
├── cypress.env.example.json          # Exemplo de variáveis de ambiente
├── package.json                       # Dependências e scripts
└── README.md                          # Este arquivo
```

## 🎯 Funcionalidades Testadas

- ✅ Autenticação de usuário
- ✅ Navegação na loja
- ✅ Seleção e adição de produtos ao carrinho
- ✅ Preenchimento de formulário de checkout
- ✅ Seleção de método de pagamento
- ✅ Finalização de pedido

## 🔧 Tecnologias Utilizadas

- **[Cypress](https://www.cypress.io/)** - Framework de testes E2E
- **[Node.js](https://nodejs.org/)** - Runtime JavaScript
- **[npm](https://www.npmjs.com/)** - Gerenciador de pacotes

## 📝 Comandos Úteis

```bash
# Executar um teste específico
npx cypress run --spec "cypress/teste-e2e/checkout-flow.cy.js"

# Executar em navegador específico
npx cypress run --browser chrome
npx cypress run --browser firefox
npx cypress run --browser edge

# Executar com interface gráfica
npm run cy:open

# Verificar instalação do Cypress
npx cypress verify
```

## 📸 Evidências de Teste

Após a execução, você encontrará:

- **Vídeos**: `cypress/videos/` - Gravação completa de cada execução
- **Screenshots**: `cypress/screenshots/` - Capturas em caso de falhas

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido seguindo as melhores práticas de QA Automation.

## 📞 Suporte

Para dúvidas ou problemas, abra uma [issue](https://github.com/seu-usuario/seu-repositorio/issues) no repositório.

---

⭐ Se este projeto foi útil, considere dar uma estrela!
