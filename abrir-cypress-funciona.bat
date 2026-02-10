@echo off
echo Configurando PATH...
set PATH=%PATH%;C:\Program Files\nodejs\
cd /d "%~dp0"
echo Abrindo Cypress...
call node_modules\.bin\cypress.cmd open
pause



