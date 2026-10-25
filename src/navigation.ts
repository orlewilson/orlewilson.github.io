import { getPermalink } from './utils/permalinks';
import { profile } from './data/profile';
import { expertise } from './data/expertise';

const expertiseLinks = expertise.map(({ slug, title }) => ({
  text: title,
  href: getPermalink(`/expertise/${slug}`),
}));

export const headerData = {
  links: [
    {
      text: 'Início',
      href: getPermalink('/'),
    },
    {
      text: 'Atuação',
      links: expertiseLinks,
    },
    {
      text: 'Serviços',
      href: getPermalink('/services'),
    },
  ],

  actions: [
    {
      text: 'Contato',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  // Colunas do rodapé desabilitadas. Para reativar, descomente.
  links: [
    // {
    //   title: 'Atuação',
    //   links: expertiseLinks,
    // },
    // {
    //   title: 'Perfil',
    //   links: [
    //     { text: 'Quem sou eu', href: getPermalink('/#perfil') },
    //     { text: 'Trajetória', href: getPermalink('/#trajetoria') },
    //     { text: 'Currículo Lattes', href: profile.lattes },
    //     { text: 'Contato', href: getPermalink('/contact') },
    //   ],
    // },
  ],
  secondaryLinks: [],
  socialLinks: profile.socials.map(({ label, icon, href }) => ({ ariaLabel: label, icon, href })),
  footNote: `© ${new Date().getFullYear()} ${profile.name}. Todos os direitos reservados.`,
};
