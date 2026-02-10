# 🚀 Passo a Passo - Enviar Projeto para GitHub

## 📋 Pré-requisito

Você já criou o repositório no GitHub? Se sim, vamos conectar!

## 🎯 Método Mais Fácil: GitHub Desktop

### 1. Instalar GitHub Desktop
- Baixe em: https://desktop.github.com/
- Instale normalmente

### 2. Conectar ao Repositório
1. Abra o GitHub Desktop
2. Clique em **"File"** → **"Add Local Repository"**
3. Clique em **"Choose..."** e selecione a pasta: `C:\Users\carva\OneDrive\Desktop\testes`
4. Se aparecer "This directory does not appear to be a Git repository", clique em **"create a repository"**
5. Preencha:
   - **Name**: (deixe como está)
   - **Description**: "Testes E2E com Cypress para fluxo de compra completo"
   - **Local path**: (já deve estar preenchido)
   - **Initialize this repository with a README**: ❌ **NÃO marque** (já temos README)
6. Clique em **"Create Repository"**

### 3. Fazer Commit
1. No GitHub Desktop, você verá todos os arquivos na lista
2. Na parte inferior, escreva uma mensagem: `feat: adiciona testes E2E com Cypress`
3. Clique em **"Commit to main"**

### 4. Publicar no GitHub
1. Clique no botão **"Publish repository"** (canto superior direito)
2. Marque **"Keep this code private"** se quiser privado (ou desmarque para público)
3. Selecione o repositório que você criou no GitHub
4. Clique em **"Publish repository"**
5. ✅ **Pronto!** Seu código está no GitHub!

---

## 💻 Método Avançado: Git Bash

Se preferir usar linha de comando:

### 1. Abrir Git Bash
- Procure "Git Bash" no menu iniciar
- OU clique com botão direito na pasta do projeto → "Git Bash Here"

### 2. Executar Comandos

```bash
# Navegar até a pasta (se necessário)
cd /c/Users/carva/OneDrive/Desktop/testes

# Inicializar Git
git init

# Adicionar arquivos
git add .

# Fazer commit
git commit -m "feat: adiciona testes E2E com Cypress para fluxo de compra completo"

# Conectar ao GitHub (SUBSTITUA pela URL do seu repositório)
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# Renomear branch
git branch -M main

# Enviar para GitHub
git push -u origin main
```

### 3. Onde encontrar a URL do repositório?
1. Acesse seu repositório no GitHub
2. Clique no botão verde **"Code"**
3. Copie a URL que aparece (ex: `https://github.com/seu-usuario/seu-repo.git`)
4. Cole no comando acima substituindo `SEU-USUARIO/SEU-REPOSITORIO`

---

## ❓ Precisa de Ajuda?

Se encontrar algum erro:
- **"git: command not found"** → Instale o Git: https://git-scm.com/download/win
- **"repository not found"** → Verifique se a URL do repositório está correta
- **"authentication failed"** → Você precisará fazer login no Git (GitHub Desktop faz isso automaticamente)

---

## ✅ Depois de Enviar

Acesse seu repositório no GitHub e verifique:
- ✅ Todos os arquivos estão lá
- ✅ O README.md está bonito
- ✅ Não há arquivos sensíveis (node_modules, vídeos, etc.)

