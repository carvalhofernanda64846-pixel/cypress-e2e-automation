# 🚀 Guia de Configuração Git e GitHub

Siga estes passos para configurar o Git e fazer push do projeto para o GitHub.

## 1️⃣ Verificar Instalação do Git

Primeiro, verifique se o Git está instalado:

```bash
git --version
```

Se não estiver instalado, baixe em: https://git-scm.com/download/win

## 2️⃣ Configurar Git (Primeira vez)

Configure seu nome e email:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

## 3️⃣ Inicializar Repositório

Na pasta do projeto, execute:

```bash
git init
```

## 4️⃣ Adicionar Arquivos

Adicione todos os arquivos (exceto os ignorados pelo .gitignore):

```bash
git add .
```

## 5️⃣ Fazer Primeiro Commit

```bash
git commit -m "feat: adiciona testes E2E com Cypress para fluxo de compra completo"
```

## 6️⃣ Criar Repositório no GitHub

1. Acesse https://github.com
2. Clique em "New repository"
3. Dê um nome ao repositório (ex: `cypress-e2e-tests`)
4. **NÃO** marque "Initialize with README" (já temos um)
5. Clique em "Create repository"

## 7️⃣ Conectar ao GitHub

Após criar o repositório, o GitHub mostrará comandos. Use estes:

```bash
# Adicione o repositório remoto (substitua SEU-USUARIO e SEU-REPOSITORIO)
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# Renomeie a branch para main (se necessário)
git branch -M main

# Faça o push
git push -u origin main
```

## 8️⃣ Verificar

Acesse seu repositório no GitHub e verifique se todos os arquivos foram enviados.

## 📝 Comandos Úteis

```bash
# Ver status dos arquivos
git status

# Ver histórico de commits
git log

# Adicionar mudanças futuras
git add .
git commit -m "sua mensagem de commit"
git push

# Criar uma nova branch
git checkout -b feature/nova-funcionalidade
```

## ⚠️ Importante

- **NUNCA** commite o arquivo `cypress.env.json` (contém credenciais)
- O `.gitignore` já está configurado para ignorar arquivos sensíveis
- Sempre revise os arquivos antes de fazer commit: `git status`

