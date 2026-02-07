# 📚 Comandos Git Essenciais

Guia rápido para subir projetos no GitHub.

## 🚀 Primeira vez (projeto novo)

```bash
# 1. Inicializar Git
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Fazer commit
git commit -m "mensagem do que você fez"

# 4. Conectar ao GitHub (substitua pela URL do seu repositório)
git remote add origin https://github.com/seu-usuario/nome-repo.git

# 5. Renomear branch para main
git branch -M main

# 6. Enviar para GitHub
git push -u origin main
```

## 🔄 Atualizar projeto existente

```bash
# 1. Ver o que mudou
git status

# 2. Adicionar mudanças
git add .

# 3. Fazer commit
git commit -m "descrição das mudanças"

# 4. Enviar para GitHub
git push
```

## 📝 Mensagens de Commit (boas práticas)

Use prefixos para organizar:

```bash
git commit -m "feat: adiciona nova funcionalidade"
git commit -m "fix: corrige bug no login"
git commit -m "docs: atualiza README"
git commit -m "refactor: melhora código"
git commit -m "test: adiciona testes"
```

## 🔍 Comandos úteis

```bash
# Ver histórico de commits
git log

# Ver status dos arquivos
git status

# Ver diferenças
git diff

# Desfazer mudanças (antes de add)
git checkout -- arquivo.txt

# Desfazer add (mas manter mudanças)
git reset HEAD arquivo.txt
```

## ⚠️ Dicas importantes

1. **Sempre faça `git status` antes** para ver o que vai commitar
2. **Mensagens claras**: descreva o que mudou
3. **Commit frequente**: pequenos commits são melhores
4. **Não commite**: `node_modules`, arquivos de senha, arquivos temporários

## 🆘 Problemas comuns

### "fatal: not a git repository"
```bash
git init
```

### "Please tell me who you are"
```bash
git config user.name "Seu Nome"
git config user.email "seu-email@exemplo.com"
```

### "Updates were rejected"
```bash
git pull origin main
git push
```

---

**Dica**: Use `git status` sempre que tiver dúvida!

