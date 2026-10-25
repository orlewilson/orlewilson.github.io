# orlewilson.github.io

Portfólio profissional de **Orlewilson Bentes Maia**: Qualidade de Software, Educação e Inovação.

Site estático feito com [Astro](https://astro.build/) e [Tailwind CSS](https://tailwindcss.com/), a partir do template [AstroWind](https://github.com/arthelokyo/astrowind) (licença MIT). A estrutura e os textos seguem a apresentação em `apresentacao/portfolio-profissional-v2.pptx`.

## Páginas

| Endereço                        | Conteúdo                                                                    |
| ------------------------------- | --------------------------------------------------------------------------- |
| `/`                             | Capa, Quem Sou Eu, eixos de atuação, trajetória, reconhecimentos            |
| `/expertise/education/`         | Docência, palestras, treinamentos, além da sala de aula, prêmios, na mídia  |
| `/expertise/entrepreneurship/`  | Mentorias e reconhecimentos                                                 |
| `/expertise/innovation/`        | Pesquisa e P&D, consultorias, orientações, publicações                      |
| `/expertise/software-quality/`  | Atuação na indústria e caso de resultado                                    |
| `/services/`                    | Serviços e casos e resultados                                               |
| `/contact/`                     | Canais de contato e formatos de colaboração                                 |

`/about/`, `/experiences/` e `/expertise/` redirecionam para seções da página inicial (veja `redirects` em `astro.config.ts`).

## Onde editar o conteúdo

**Textos e dados do perfil**, em `src/data/`:

| Arquivo           | Conteúdo                                                        |
| ----------------- | --------------------------------------------------------------- |
| `profile.ts`      | Nome, frase, texto de perfil, foto, e-mail, Lattes, redes       |
| `metrics.ts`      | Números da faixa do "Quem Sou Eu" (+20 anos, +2.000 pessoas…)   |
| `expertise.ts`    | Os 4 eixos (resumo, frase, caso e resultado) e os 4 serviços    |
| `education.ts`    | Formação acadêmica                                              |
| `experience.ts`   | Experiência profissional                                        |
| `awards.ts`       | Prêmios e indicações da página inicial                          |
| `institutions.ts` | Nomes das instituições das disciplinas                          |

**Itens das listas**, um arquivo Markdown por item, em `src/content/`:

| Pasta       | Conteúdo                                                                                  | Aparece em                  |
| ----------- | ----------------------------------------------------------------------------------------- | --------------------------- |
| `classes/`  | Disciplinas, uma subpasta por instituição                                                 | Educação › Docência         |
| `courses/`  | Cursos e treinamentos corporativos                                                        | Educação › Treinamentos     |
| `events/`   | Eventos, uma subpasta por tipo (palestra, oficina, mentoria, premiação, entrevista…)      | Educação e Empreendedorismo |
| `projects/` | Projetos: P&D (`ceteli/`), consultorias (`consultoria/`) e orientações (`uninorte/`)      | Inovação                    |

Os campos de cada tipo estão em `src/content.config.ts`. As imagens ficam em `src/assets/images/` e são otimizadas no build. Para adicionar um item, copie um arquivo parecido da mesma pasta e ajuste os campos.

**Menu e rodapé:** `src/navigation.ts`. **Título e descrição do site:** `src/config.yaml`.

## Como gerar o site

O build roda em Docker, sem precisar de Node.js instalado:

```bash
./docker-menu.sh
```

O menu faz o build da imagem e sobe o container. O site fica em <http://localhost:8080>. O mesmo pode ser feito direto com:

```bash
docker compose up -d --build astrowind
```

Depois de cada build, recarregue a página com **Ctrl+Shift+R** para o navegador não usar a versão em cache.

Com Node.js 22 ou mais recente instalado, também é possível rodar localmente:

| Comando           | O que faz                                       |
| ----------------- | ----------------------------------------------- |
| `npm install`     | Instala as dependências                         |
| `npm run dev`     | Servidor de desenvolvimento em `localhost:4321` |
| `npm run build`   | Gera o site em `./dist/`                        |
| `npm run check`   | Verifica tipos, ESLint e Prettier               |

## Créditos

Template [AstroWind](https://github.com/arthelokyo/astrowind), de [arthelokyo](https://arthelokyo.com), sob a licença MIT (`LICENSE.md`).
