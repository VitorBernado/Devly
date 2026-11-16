# Documentação do App Devly

## Visão geral

O Devly é uma landing page estilo "link in bio" / "linktree" voltada para apresentação pessoal de um desenvolvedor ou criador de conteúdo. A página reúne:

- uma apresentação com nome e bio
- uma área de links úteis
- ícones para redes sociais
- um sistema de tema claro/escuro
- uma identidade visual moderna e elegante

O projeto é totalmente estático, sem framework, sem dependências externas de build e sem banco de dados. Ele funciona apenas com HTML, CSS e JavaScript.

---

## Objetivo da aplicação

O app tem como principal intenção centralizar diferentes caminhos de contato e acesso em um único lugar. Em vez de espalhar links em vários canais, ele oferece uma página única que funciona como cartão de visita digital.

Exemplos de uso:

- portfólio pessoal
- perfil de desenvolvedor
- página de redes sociais
- promoção de cursos, e-books e eventos
- canal de divulgação pessoal

---

## Tecnologias utilizadas

### HTML
O arquivo `index.html` estrutura toda a interface da página:

- cabeçalho
- perfil principal
- lista de links
- ícones sociais
- rodapé

### CSS
O arquivo `style.css` cuida de:

- layout responsivo
- cores e tema
- fontes
- espaçamento e alinhamento
- botões e cards
- animações
- estilos do tema claro e escuro

### JavaScript
O arquivo `script.js` tem uma função simples, responsável por trocar o tema visual da página:

- `changeTheme()`
- alterna a classe `light-theme` no `body`
- atualiza o estado do botão de switch via `aria-pressed`

---

## Estrutura de arquivos

```text
Devly/
├── assets/
│   ├── bg-dark-mobile.png
│   ├── bg-light-mobile.png
│   ├── book-icon-dark.svg
│   ├── book-icon-light.svg
│   ├── compass-icon-dark.svg
│   ├── compass-icon-light.svg
│   ├── dev-icon-dark.svg
│   ├── dev-icon-light.svg
│   ├── github-icon-dark.svg
│   ├── github-icon-light.svg
│   ├── instragram-icon-dark.svg
│   ├── instragram-icon-light.svg
│   ├── linkedin-icon-dark.svg
│   ├── linkedin-icon-light.svg
│   ├── moon-dark-mode.svg
│   ├── moon-light-mode.svg
│   ├── nlw-icon-dark.svg
│   ├── nlw-icon-light.svg
│   ├── profile.png
│   ├── soon.svg
│   ├── sun-dark-mode.svg
│   ├── sun-light-mode.svg
│   ├── target-dark-mode.svg
│   ├── target-light-mode.svg
│   ├── youtube-icon-dark.svg
│   └── youtube-icon-light.svg
├── index.html
├── script.js
├── style.css
├── DOCUMENTACAO.md
└── README.md (se existir no futuro)
```

---

## Como a página funciona

### 1. Estrutura principal
A página é montada em `index.html` e contém seções bem definidas:

#### Cabeçalho
- logotipo/texto "Devly"
- botão para alternar tema

#### Perfil
- imagem de perfil
- texto de apresentação
- nome da pessoa
- username
- descrição curta

#### Links
- lista de cards com ações
- cada item representa um link importante para o usuário
- cada cartão contém:
  - ícone
  - título
  - descrição pequena
  - seta indicativa

#### Redes sociais
- conjunto de ícones clicáveis
- servem como atalhos para redes e plataformas

#### Rodapé
- mensagem final
- assinatura do criador

---

## Fluxo de interação

### Alternância de tema
O botão localizado no topo da página ativa o modo claro/escuro.

Como isso acontece:

1. o usuário clica no botão
2. a função `changeTheme()` é executada
3. o JavaScript faz um `toggle` na classe `light-theme` no elemento `body`
4. o CSS reconfigura as variáveis do tema

O efeito é imediato e visualmente agradável.

### Ações dos links
Os itens da lista de links são links com `href="#"` no código atual. Isso significa que ainda não estão conectados a páginas reais. Para usar em produção, basta trocar o `href` por URLs reais.

Exemplo:

```html
<a href="https://www.linkedin.com/in/seu-perfil" target="_blank"> ... </a>
```

---

## Estilos e design

### Cores
A identidade visual usa paleta escura por padrão, com tons roxos, cinzas e pretos. O tema claro altera essas variáveis para uma combinação mais clara e suave.

### Tema claro/escuro
Os valores são declarados em `:root` e sobrescritos em `.light-theme`.

Exemplo:

```css
:root {
  --color-text-primary: #f4f1f7;
  --base-bg: #0f0b14;
}

.light-theme {
  --color-text-primary: #302a39;
  --base-bg: #f8f6f0;
}
```

Isso torna o código fácil de manter e personalizar.

### Responsividade
O CSS inclui media query para telas maiores:

```css
@media (min-width: 1024px) {
  body {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
```

Isso permite que a página se adapte a desktop e mobile.

---

## Como personalizar o app

### 1. Trocar nome e bio
Abra o `index.html` e localize os elementos:

- `.profile-name`
- `.profile-username`
- `.profile-bio`

Edite o texto diretamente.

Exemplo:

```html
<h1 class="profile-name">Seu Nome</h1>
<p class="profile-username">@seuusuario</p>
<p class="profile-bio">
  Que bom ter você aqui.<br />
  Escolha um link e vamos nos conectar.
</p>
```

### 2. Alterar links
Nos cards de links, troque os `href="#"` por URLs reais.

```html
<a href="https://github.com/seuusuario" target="_blank">
```

### 3. Ajustar redes sociais
Os ícones sociais também estão em `index.html`. Ajuste os links conforme sua presença online.

### 4. Trocar a imagem de perfil
A imagem atual é referenciada em:

```html
<img src="./assets/profile.png" alt="Foto de perfil" />
```

Substitua o arquivo `assets/profile.png` por outra imagem, mantendo proporções compatíveis.

### 5. Personalizar textos dos cards
Cada card possui título e descrição dentro do HTML. Edite esses textos para refletir seus próprios conteúdos.

---

## Como rodar o projeto

Como o app é estático, não há instalação de dependências.

### Opção 1: abrir diretamente no navegador
Basta abrir o arquivo `index.html` em qualquer navegador.

### Opção 2: usar um servidor local
Se preferir, rode um servidor simples em pasta do projeto:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

---

## Pontos fortes do projeto

- Simples de entender
- Fácil de alterar
- Leve e rápido
- Sem dependências complexas
- Visual moderno
- Excelente como página pessoal

---

## Limitações atuais

- os links ainda estão vazios (`href="#"`)
- não há integração com redes sociais reais
- não existe backend ou dados dinâmicos
- não há autenticação ou armazenamento de dados
- a página é focada em apresentação visual e não em lógica de negócio

Essas limitações são comuns em páginas front-end estáticas e podem ser facilmente ampliadas no futuro.

---

## Melhorias possíveis

Aqui estão algumas ideias para evoluir o app:

1. adicionar links reais para GitHub, LinkedIn e portfolio
2. incluir SEO básico com meta tags
3. criar uma versão em React ou Next.js
4. adicionar um menu mobile mais sofisticado
5. suportar temas personalizados via escolha do usuário
6. criar uma área de projetos e artigos
7. integrar analytics e métricas de clique

---

## Resumo em uma frase

O Devly é uma página pessoal moderna, elegante e fácil de customizar, ideal para apresentar um profissional, um criador de conteúdo ou um desenvolvedor em um único lugar.

---

## Conclusão

Este projeto é uma excelente base para uma página de perfil digital. Ele mostra como construir uma interface bonita com HTML, CSS e JavaScript sem perder simplicidade. O código está bem organizado, fácil de entender e ideal para quem está começando na criação de páginas front-end.

Se você quiser, futuramente pode transformar esse projeto em:

- uma landing page profissional
- um portfólio completo
- uma página de marca pessoal
- um clone de Linktree com mais recursos
