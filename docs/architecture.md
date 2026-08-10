# Arquitetura do projeto

Este repositório é um site estático sem backend, banco de dados, framework de aplicação ou processo de build.

## Visão geral

A aplicação é composta por páginas HTML independentes na raiz do repositório, estilizadas por uma folha CSS compartilhada e enriquecidas por um arquivo JavaScript compartilhado. Os recursos visuais e de áudio são mantidos como arquivos estáticos.

## Componentes principais

- Páginas HTML: `index.html`, `sobre.html`, `estrutura.html`, `servicos.html`, `contato.html` e `privacidade.html`
- CSS: `css/estilos.min.css`, com estilos compartilhados e layout responsivo
- JavaScript: `js/scripts.min.js`, com menu, carrosséis, navegação de serviços e interações da interface
- Assets estáticos: imagens em `img/`, áudio em `audio/` e sitemap em `sitemap.xml`
- Integração externa: Font Awesome 6.5.0 carregado por CDN para ícones
- Configuração de hospedagem: `htaccess` com redirecionamento HTTP para HTTPS em Apache

## Fluxo de uso

1. O servidor entrega os arquivos estáticos, aplicando a regra de HTTPS do `htaccess` quando executado em Apache.
2. O navegador carrega a página HTML, a folha de estilos, o JavaScript e os assets referenciados.
3. O usuário acessa a página inicial e navega pelas páginas institucionais por meio do menu.
4. O JavaScript controla interações como menu responsivo, carrosséis e seleção de serviços.
