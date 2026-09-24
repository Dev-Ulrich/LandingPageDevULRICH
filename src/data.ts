export type Project = {
  number: string
  category: string
  title: string
  description: string
  href: string
  tags: string[]
  visual: string
  mark: string
  gallery: string[]
}

export const github = 'https://github.com/Dev-Ulrich'
export const linkedin = 'https://www.linkedin.com/in/victorulrichcosta/'
export const whatsappNumber = '5511970820009'
export const whatsappMessage =
  'Olá, Victor! Encontrei seu site e gostaria de solicitar um orçamento.'
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

export const aluraCertificateUrl =
  'https://cursos.alura.com.br/user/victorulrich07/fullCertificate/ef3f9f20da547f1c6128c894fbeaa24f'
export const fiapValidationUrl = 'https://on.fiap.com.br/validar-certificado/'

export const education = [
  {
    institution: 'FIAP',
    title: 'Análise e Desenvolvimento de Sistemas',
    status: 'Em andamento',
    description: 'Graduação',
  },
  {
    institution: 'FIEB',
    title: 'Técnico em Informática',
    status: 'Concluído em 2025',
    description: 'Fundação Instituto de Educação de Barueri',
    diploma: {
      url: 'https://fieb.edu.br/DiplomaDigital/VisualizarArquivo/6c55042e07692b019a199fa961d9f25a94e71201.pdf',
      validationUrl: 'https://fieb.edu.br/DiplomaDigital',
      code: 'DD-22BF-909D-9F81-4184',
    },
  },
]

export const certifications = [
  {
    title: 'Front End',
    hours: 80,
    date: '24/04/2026',
    code: '335CD2665D29FDC5871813513119EFF4',
    symbol: '</>',
  },
  {
    title: 'Desenvolvimento .NET',
    hours: 60,
    date: '31/03/2026',
    code: 'DAE8A1FCE951A3F06FB5087E376F7760',
    symbol: '.NET',
  },
  {
    title: 'DevOps',
    hours: 60,
    date: '26/03/2026',
    code: '298F7BC972BE6B1646B080488D402A2D',
    symbol: '∞',
  },
  {
    title: 'Formação Social e Sustentabilidade',
    hours: 80,
    date: '04/03/2026',
    code: '425e2629bc0364ab6fb9464b0774f989',
    symbol: '◎',
  },
]

export const projects: Project[] = [
  {
    number: '01',
    category: 'Projeto acadêmico · React + TypeScript',
    title: 'EcoVolt',
    description:
      'Projeto em equipe que incentiva hábitos sustentáveis com desafios, ranking e recompensas.',
    href: `${github}/EcoVoltRepositoryFE`,
    tags: ['React', 'TypeScript', 'Frontend'],
    visual: 'ecovolt',
    mark: 'ECO / VOLT',
    gallery: [
      '/images/ecovolt-1.webp',
      '/images/ecovolt-2.webp',
      '/images/ecovolt-3.webp',
      '/images/ecovolt-4.webp',
    ],
  },
  {
    number: '02',
    category: 'Sistema administrativo · TypeScript',
    title: 'Jornada Ativa',
    description:
      'Interface administrativa para organizar atividades e simplificar a gestão.',
    href: `${github}/Jornada-Ativa`,
    tags: ['TypeScript', 'Web app', 'Interface'],
    visual: 'jornada',
    mark: 'JORNADA / ATIVA',
    gallery: [
      '/images/jornada-ativa-1.webp',
      '/images/jornada-ativa-2.webp',
      '/images/jornada-ativa-3.webp',
      '/images/jornada-ativa-4.webp',
    ],
  },
]

export type Service = { name: string; price: string; description?: string }

export const webServices: Service[] = [
  {
    name: 'Landing page simples',
    description:
      'Uma página objetiva para apresentar seu serviço e receber contatos.',
    price: 'A partir de R$ 400',
  },
  {
    name: 'Landing page personalizada',
    description:
      'Layout e seções feitos para a identidade e o objetivo do seu negócio.',
    price: 'A partir de R$ 600',
  },
  {
    name: 'Site institucional de 3 a 5 páginas',
    price: 'A partir de R$ 1.400',
  },
  {
    name: 'Site institucional de 6 a 8 páginas',
    price: 'Sob orçamento',
  },
  {
    name: 'Portfólio profissional',
    price: 'A partir de R$ 700',
  },
  {
    name: 'Correção ou alteração em site',
    price: 'A partir de R$ 50',
  },
  {
    name: 'Implementação de tela em React',
    price: 'A partir de R$ 150/tela',
  },
  {
    name: 'Integração simples com API',
    price: 'A partir de R$ 200',
  },
]

export const supportServices: Service[] = [
  { name: 'Suporte remoto — primeira hora', price: 'R$ 70' },
  { name: 'Visita técnica presencial', price: 'A partir de R$ 100' },
  { name: 'Configuração de impressora', price: 'A partir de R$ 80' },
  { name: 'Instalação/configuração de software', price: 'A partir de R$ 50' },
  { name: 'Configuração de Windows/drivers', price: 'A partir de R$ 80' },
  { name: 'Otimização de computador', price: 'A partir de R$ 99' },
  { name: 'Configuração Wi‑Fi/roteador', price: 'A partir de R$ 100' },
  { name: 'Configuração de e-mail/Office', price: 'A partir de R$ 50' },
  { name: 'Consultoria de TI', price: 'A partir de R$ 80/h' },
]

export const faqItems = [
  {
    question: 'Quanto custa criar um site?',
    answer:
      'Landing pages a partir de R$ 400. O valor final depende do escopo.',
  },
  {
    question: 'Quanto tempo leva para criar um site?',
    answer:
      'Definimos o prazo no orçamento, de acordo com as entregas e sua urgência.',
  },
  {
    question: 'Você atende presencialmente?',
    answer:
      'Atendo remotamente em todo o Brasil e também presencialmente em São Paulo conforme disponibilidade e região.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer:
      'Via Pix. Em projetos maiores, podemos combinar pagamento por etapas.',
  },
  {
    question: 'Você faz alterações em sites que já existem?',
    answer:
      'Sim. Avalio o site e a tecnologia para propor correções, novas telas ou integrações.',
  },
]
