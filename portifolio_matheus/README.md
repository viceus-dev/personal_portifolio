# Viceus Dev - Portifólio Pessoal

Meu portfólio desenvolvido para reunir projetos e garantir visibilidade seja para contratos de freelance ou até mesmo oportunidades de estágio/jr.

O objetivo deste projeto foi criar uma aplicação moderna, responsiva e de fácil uso, utilizando React, Vite e Tailwind CSS 4, priorizando a componentização e a separação entre dados e interface.

## Tecnologias

* React
* Vite
* Tailwind CSS 4
* JavaScript (ES6+)

## Estrutura do Projeto

```text
public/
├── docs/
└── images/
    └── icons/

src/
├── assets/
│   ├── fonts/
│   └── images/
└── components/
    ├── header/
    ├── main/
    ├── about/
    ├── projects/
    └── footer/
```

Cada seção da página foi desenvolvida como um componente independente, facilitando a manutenção e futuras expansões.(Novidades em Breve)

## Funcionalidades

* Interface totalmente responsiva
* Navegação em página única (Single Page)
* Seções independentes utilizando componentes React
* Organização simples para inclusão de novos projetos
* Deploy utilizando Netlify

## Decisões de implementação

Durante o desenvolvimento, busquei evitar informações duplicadas e facilitar futuras atualizações.

### Lista de projetos centralizada

Os projetos são armazenados em um único arquivo (`ProjectData.jsx`).

Cada objeto contém todas as informações necessárias para renderização do card:

* status
* título
* descrição
* tecnologias utilizadas
* link

Dessa forma, adicionar um novo projeto exige apenas incluir um novo objeto no array, sem alterar a interface.

```javascript
{
    status: "Desenvolvimento",
    title: "...",
    subtitle: "...",
    stack: [...],
    link: "..."
}
```

## Como executar

Clone o repositório:

```bash
git clone https://github.com/viceus-dev/personal_portifolio.git
```

Entre na pasta:

```bash
cd portifolio_matheus
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## Próximas melhorias

* Integração dos links reais dos projetos
* Animações estilizadas
* Internacionalização (Português/Inglês)
* Testes de componentes
* Otimização de imagens e componentes

## 📄 Licença
Projeto desenvolvido para fins de estudo e apresentação profissional.
