# Devly

Uma landing page moderna e elegante para apresentar um perfil pessoal, portfolio ou canal digital em um único lugar. O projeto foi criado como uma página de links pessoais, com visual refinado, responsivo e com suporte a tema claro e escuro.

## ✨ Demonstração

O app funciona como uma página de apresentação com:

- foto de perfil
- nome e username
- bio curta
- lista de links importantes
- redes sociais
- botão para alternar entre tema claro e escuro

## 🧩 Funcionalidades

- Layout responsivo para desktop e mobile
- Tema escuro e claro
- Arquitetura simples e leve
- Sem dependências externas de build
- Fácil personalização de textos, links e imagens
- Visual com estilo premium e minimalista

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## 📁 Estrutura do projeto

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
│   └── youtube-icon-dark.svg
├── index.html
├── style.css
├── script.js
├── DOCUMENTACAO.md
├── README.md
└── assets/
```

## ▶️ Como executar

Como o projeto é estático, basta abrir o arquivo `index.html` no navegador.

### Opção 1: abrir diretamente

- clique duas vezes no arquivo `index.html`
- ou abra pelo navegador

### Opção 2: usar um servidor local

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## 🎨 Como personalizar

### Alterar nome e apresentação
No arquivo `index.html`, edite os textos da seção principal:

```html
<h1 class="profile-name">Mary Brito</h1>
<p class="profile-username">@maykbrito</p>
<p class="profile-bio">
  Que bom ter você aqui.<br />
  Escolha um link e vamos nos conectar.
</p>
```

### Alterar links
Troque os `href="#"` por links reais:

```html
<a href="https://github.com/seuusuario" target="_blank">
```

### Alterar imagem de perfil
Substitua o arquivo `assets/profile.png` por outra imagem com o mesmo formato ou ajuste o tamanho no CSS.

### Alterar cores ou tema
O CSS usa variáveis no `:root` e no `.light-theme`, então é fácil ajustar a identidade visual.

## 📌 Observações

O projeto funciona como base para um perfil profissional ou pessoal. Ele está pronto para receber ajustes e personalizações conforme a identidade da pessoa ou marca que estiver sendo apresentada.

## 🚀 Melhorias futuras

- links reais para redes sociais e portfolio
- seção de projetos
- área de artigos ou blog
- suporte a mais temas personalizados
- integração com APIs ou backend
- versão em React/Next.js

## 📄 Documentação

A documentação detalhada do projeto está disponível em:

- [DOCUMENTACAO.md](./DOCUMENTACAO.md)

## 🧑‍💻 Autor

Projeto criado como base para apresentação de perfil pessoal e links de acesso.
