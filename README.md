# Posto de Molas Bandeirante

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Font Awesome 6.5.0](https://img.shields.io/badge/Font%20Awesome-6.5.0-528DD7?logo=fontawesome&logoColor=white)

Site institucional desenvolvido para apresentar os serviços, estrutura e informações de contato do Posto de Molas Bandeirante, uma empresa especializada em manutenção e componentes para veículos pesados.

## Visão geral

Este projeto é um website estático com páginas voltadas à apresentação da empresa, incluindo:

- Página inicial com apresentação da marca e conteúdo institucional
- Página de serviços com destaque para suspensão, freios, feixes de molas e manutenção
- Página sobre a empresa e estrutura operacional
- Página de contato com informações de comunicação
- Página de privacidade e sitemap

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Font Awesome 6.5.0 para ícones, carregado via CDN
- Arquivos estáticos locais (imagens, áudio e folhas de estilo)

## Estrutura do projeto

```text
.
├── audio/
├── css/
├── img/
├── js/
├── contato.html
├── estrutura.html
├── index.html
├── privacidade.html
├── servicos.html
├── sitemap.xml
├── sobre.html
├── htaccess
└── docs/
	├── architecture.md
	├── installation.md
	├── requirements.md
	├── roadmap.md
	├── technologies.md
	└── workflow.md
```

## Funcionalidades principais

- Navegação entre páginas institucionais
- Menu responsivo
- Carrossel de imagens na página inicial
- Reprodução de áudio institucional
- Seção de serviços e estrutura da empresa
- Formulário de contato e links para redes sociais

## Como executar localmente

1. Clone este repositório.
2. Acesse a pasta do projeto.
3. Abra o arquivo `index.html` em um navegador.

> Não há dependências externas de build ou instalação adicionais para execução local deste projeto estático.

Para simular um ambiente web local, também é possível utilizar qualquer servidor HTTP simples. A regra em `htaccess` é destinada a servidores Apache e redireciona acessos pela porta 80 para HTTPS.

## Uso

Abra `index.html` para acessar a página inicial e use o menu para navegar entre as páginas institucionais. O conteúdo de serviços, imagens, áudio e links de contato é apresentado diretamente no navegador.

## Documentação

A documentação complementar está disponível na pasta `docs/`:

- [Arquitetura](docs/architecture.md)
- [Instalação e execução](docs/installation.md)
- [Requisitos](docs/requirements.md)
- [Roadmap](docs/roadmap.md)
- [Tecnologias](docs/technologies.md)
- [Workflow](docs/workflow.md)

## Screenshots

Não há uma pasta de screenshots dedicada no repositório. As imagens e demais mídias utilizadas pelo site estão organizadas em `img/` e `audio/`.

## Licença

Este projeto não possui um arquivo de licença definido no repositório.
