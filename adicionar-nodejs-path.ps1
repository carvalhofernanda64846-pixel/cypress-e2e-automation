# Script para adicionar Node.js ao PATH permanentemente
# EXECUTE COMO ADMINISTRADOR!

Write-Host "Adicionando Node.js ao PATH do sistema..." -ForegroundColor Green

$nodePath = "C:\Program Files\nodejs\"
$currentPath = [Environment]::GetEnvironmentVariable("Path", [EnvironmentVariableTarget]::Machine)

# Verifica se já está no PATH
if ($currentPath -like "*$nodePath*") {
    Write-Host "Node.js já está no PATH!" -ForegroundColor Yellow
} else {
    # Adiciona ao PATH
    $newPath = $currentPath + ";" + $nodePath
    [Environment]::SetEnvironmentVariable("Path", $newPath, [EnvironmentVariableTarget]::Machine)
    Write-Host "Node.js adicionado ao PATH com sucesso!" -ForegroundColor Green
    Write-Host "Reinicie o PowerShell para aplicar as mudanças." -ForegroundColor Cyan
}



