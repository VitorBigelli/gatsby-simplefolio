import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Vitor Bigelli', // e.g: 'Name | Developer'
  lang: 'pt', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Vitor Bigelli',
  subtitle: 'Full-Stack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Programador desde os 16 anos, possuo graduação técnica em Informática para Internet pela ETEC de Itanhaém e Nanodegrees pela Udacity em Desenvolvimento Front-End e React. Atualmente sou Desenvolvedor Full-Stack e Pesquisador Cientista na Nindoo AI.',
  paragraphTwo:
    'Entusiasta da Inteligência Artificial e apaixonado por aprender e ensinar, acredito na tecnologia como ferramenta para construir um mundo melhor.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project_1.png',
    title: 'Raras Q&A',
    info: 'at Nindoo AI',
    info2:
      'Desenvolvimento Full-Stack do Web App do maior grafo relacionado a doenças raras. Raras.org é uma iniciativa de ciência aberta para trazer avanços na inteligência artificial e encontrar respostas para doenças raras.',
    url: 'http://beta.raras.org/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_2.png',
    title: 'DeepWild',
    info: 'at Nindoo AI',
    info2:
      'Desenvolvimento Full-Stack do Web App DeepWild, uma ferramenta que auxilia na conservação e monitoramento de espécies selvagens. Ela utiliza uma inteligência artificial que identifica e classifica os animais por meio de fotos e vídeos. ',
    url: 'https://www.deepwild.com.br/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_3.png',
    title: 'Caption Editor - SanarFlix',
    info: 'at Nindoo AI',
    info2:
      'Desenvolvimento Full-Stack do Web App de edição de legendas da plataforma de stream de medicina SanarFlix.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'bigellivitor@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'http://twitter.com/bigellivitor',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vitor-bigelli-559380150/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/VitorBigelli',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
