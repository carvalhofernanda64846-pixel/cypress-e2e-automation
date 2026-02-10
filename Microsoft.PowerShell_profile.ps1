# Perfil do PowerShell - Carrega Node.js automaticamente
$env:PATH = [Environment]::GetEnvironmentVariable("Path", [EnvironmentVariableTarget]::User) + ";" + [Environment]::GetEnvironmentVariable("Path", [EnvironmentVariableTarget]::Machine)



