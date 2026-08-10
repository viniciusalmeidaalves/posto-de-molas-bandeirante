# Workflow do projeto

## Organização atual

O projeto é mantido como um conjunto de páginas HTML na raiz, uma folha de estilos e um arquivo JavaScript compartilhados, além de assets locais.

## Processo de manutenção

- Atualizações de conteúdo podem ser feitas diretamente nos arquivos HTML.
- Estilos podem ser ajustados em `css/estilos.min.css`.
- Interações podem ser revisadas em `js/scripts.min.js`.
- Novas imagens e mídias devem ser adicionadas nas pastas correspondentes.

## Fluxo de atualização

1. Identificar a página ou asset relacionado ao conteúdo que será alterado.
2. Atualizar o HTML correspondente; ajustar `css/estilos.min.css` ou `js/scripts.min.js` somente quando a mudança exigir alteração visual ou de interação.
3. Abrir a página inicial e as páginas afetadas em um navegador para verificar navegação, layout responsivo, imagens, áudio e links.
4. Atualizar o sitemap ou a documentação quando a estrutura pública do site mudar.
5. Publicar os arquivos estáticos na hospedagem configurada.

## Observações

Não há pipeline de CI/CD, testes automatizados ou gerenciador de dependências definido neste repositório. A verificação atual é manual, feita no navegador.
