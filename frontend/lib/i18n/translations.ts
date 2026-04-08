export type Lang = 'pt' | 'en'

const translations = {
  pt: {
    nav: {
      sobre: 'Sobre',
      stack: 'Stack',
      servicos: 'Serviços',
      projetos: 'Projetos',
      experiencia: 'Experiência',
      contato: 'Contato',
      contratar: 'Contratar',
    },

    hero: {
      chip_fullstack: 'Fullstack Developer',
      chip_ia: 'IA & Automação',
      chip_disponivel: 'Disponível para projetos',
      heading1: 'Desenvolvedor',
      heading2: 'Fullstack',
      subtitle:
        'Desde 2021 construindo APIs escaláveis, chatbots inteligentes, agentes de IA e automações com WhatsApp. Transformo ideias em produtos digitais de alto impacto.',
      cta_projetos: 'Ver projetos',
      cta_contato: 'Entrar em contato',
      stat1_value: '5+',
      stat1_label: 'Anos de experiência',
      stat2_value: '30+',
      stat2_label: 'Projetos entregues',
      stat3_value: '10+',
      stat3_label: 'Tecnologias dominadas',
    },

    sobre: {
      overline: 'Sobre mim',
      heading1: 'Fullstack com foco em',
      heading2: 'resultados reais',
      p1: 'Sou desenvolvedor fullstack desde 2021, atuando de forma protagonista em projetos que vão de landing pages a sistemas complexos com inteligência artificial. Tenho experiência sólida em back-end com',
      p1_tech: 'Laravel, Node.js e NestJS',
      p1_mid: 'e front-end com',
      p1_tech2: 'React.js, Next.js e Vue.js',
      p2: 'Meu diferencial está na capacidade de unir desenvolvimento tradicional com o que há de mais moderno em',
      p2_highlight: 'automação e IA',
      p2_end:
        '. Desenvolvo agentes inteligentes, integro LLMs a fluxos de negócio reais e automatizo processos que antes consumiam horas de trabalho humano.',
      p3: 'Já trabalhei com e-commerces, CRMs, sistemas de pagamento, automações via WhatsApp e plataformas web completas — sempre com foco em qualidade, escalabilidade e entrega de valor real ao cliente.',
      card1_title: 'Agentes de IA',
      card1_desc:
        'Desenvolvimento de agentes inteligentes com integração a LLMs como GPT-4 e Claude para automação de processos complexos.',
      card2_title: 'Integração com OpenAI',
      card2_desc:
        'APIs de IA integradas a sistemas reais: chatbots, classificadores, geradores de conteúdo e assistentes virtuais.',
      card3_title: 'Automação de Ponta a Ponta',
      card3_desc:
        'Fluxos inteligentes que conectam WhatsApp, CRMs, e-commerces e sistemas internos sem fricção.',
      card4_title: 'Engenharia de Prompts',
      card4_desc:
        'Prompts estratégicos que maximizam a precisão e consistência de modelos de linguagem em produção.',
    },

    stack: {
      overline: 'Tecnologias',
      heading: 'Stack que domino',
      subtitle:
        'Ferramentas e tecnologias que uso para construir produtos escaláveis e inteligentes.',
      badge: 'Diferencial',
      cat_backend: 'Back-end',
      cat_frontend: 'Front-end',
      cat_db: 'Banco de Dados',
      cat_devops: 'DevOps & Infra',
      cat_ia: 'Inteligência Artificial',
      cat_integracoes: 'Integrações',
    },

    servicos: {
      overline: 'Serviços',
      heading: 'O que posso fazer por você',
      subtitle:
        'Do back-end robusto ao front-end impactante — com IA como diferencial em cada solução.',
      cta: 'Solicitar orçamento',
      s1_title: 'Agentes & Chatbots com IA',
      s1_desc:
        'Desenvolvimento de agentes inteligentes integrados a LLMs (GPT-4, Claude) para atendimento, suporte e automação de fluxos de negócio.',
      s2_title: 'APIs Escaláveis',
      s2_desc:
        'Construção de APIs REST e integração entre sistemas com Node.js, Laravel e NestJS. Alta performance e fácil manutenção.',
      s3_title: 'Automação com WhatsApp',
      s3_desc:
        'Fluxos automatizados via WhatsApp para atendimento, notificações, cobrança e marketing usando IA generativa.',
      s4_title: 'E-commerces & Pagamentos',
      s4_desc:
        'Lojas virtuais completas com integrações de pagamento (Stripe, Mercado Pago), controle de estoque e painel administrativo.',
      s5_title: 'Sistemas Internos & CRMs',
      s5_desc:
        'Plataformas sob medida para gestão de equipes, clientes e processos. Dashboards inteligentes e relatórios em tempo real.',
      s6_title: 'Automação de Processos',
      s6_desc:
        'Identifico gargalos e automatizo rotinas com IA, integrando ferramentas existentes e reduzindo trabalho manual.',
    },

    projetos: {
      overline: 'Projetos',
      heading: 'Cases entregues',
      subtitle:
        'Soluções que geraram impacto real — automação, IA, e-commerce e sistemas sob medida.',
      p1_title: 'Agente de Atendimento com IA',
      p1_desc:
        'Chatbot inteligente para atendimento ao cliente com integração GPT-4, memória de contexto e escalonamento humano. Redução de 70% no volume de suporte manual.',
      p1_cat: 'IA & Automação',
      p2_title: 'Plataforma E-commerce',
      p2_desc:
        'Loja virtual completa com checkout integrado ao Mercado Pago, painel admin, controle de estoque e relatórios em tempo real.',
      p2_cat: 'E-commerce',
      p3_title: 'CRM com Automação de Vendas',
      p3_desc:
        'Sistema de gestão de clientes com pipeline de vendas, automação de follow-up via WhatsApp e dashboards analíticos.',
      p3_cat: 'Sistema Interno',
      p4_title: 'Automação de Fluxos com IA',
      p4_desc:
        'Sistema que processa documentos com OCR + LLM, classifica informações automaticamente e dispara ações no ERP da empresa.',
      p4_cat: 'IA & Automação',
      p5_title: 'Sistema de Pagamentos Recorrentes',
      p5_desc:
        'Plataforma de assinaturas com Stripe, controle de planos, trial automático, webhooks e painel financeiro completo.',
      p5_cat: 'Pagamentos',
      p6_title: 'API Gateway Multi-tenant',
      p6_desc:
        'Gateway de APIs com autenticação JWT multi-tenant, rate limiting, logs centralizados e documentação automática via Swagger.',
      p6_cat: 'Back-end',
    },

    experiencia: {
      overline: 'Trajetória',
      heading: 'Experiência profissional',
      e1_period: '2024 — Presente',
      e1_role: 'Desenvolvedor Fullstack & Especialista em IA',
      e1_company: 'Freelance / Projetos Próprios',
      e1_desc:
        'Desenvolvimento de agentes de IA, automações com WhatsApp, integrações com OpenAI e sistemas completos para clientes de diversos segmentos. Foco em soluções que combinam tecnologia tradicional com inteligência artificial.',
      e2_period: '2023 — 2024',
      e2_role: 'Desenvolvedor Fullstack',
      e2_company: 'Empresa de Tecnologia',
      e2_desc:
        'Construção de plataformas web completas, CRMs customizados e sistemas de pagamento. Liderança técnica em projetos de e-commerce com alto volume de transações.',
      e3_period: '2022 — 2023',
      e3_role: 'Desenvolvedor Back-end',
      e3_company: 'Startup SaaS',
      e3_desc:
        'Desenvolvimento de APIs REST escaláveis, microsserviços e integrações com serviços de terceiros. Implementação de automações que reduziram tempo de processamento em 60%.',
      e4_period: '2021 — 2022',
      e4_role: 'Desenvolvedor Web',
      e4_company: 'Agência Digital',
      e4_desc:
        'Criação de landing pages, e-commerces e sistemas internos. Primeiros projetos com automação de processos e chatbots simples para atendimento ao cliente.',
    },

    contato: {
      overline: 'Contato',
      heading1: 'Vamos construir algo',
      heading2: 'incrível juntos?',
      subtitle:
        'Estou disponível para projetos freelance, consultorias e oportunidades de trabalho. Se você precisa de um desenvolvedor fullstack com expertise em IA e automação, vamos conversar.',
      btn_whatsapp: 'Chamar no WhatsApp',
      btn_email: 'Enviar e-mail',
      status: 'Disponível para novos projetos',
      info1_label: 'Resposta média',
      info1_value: '< 2 horas',
      info2_label: 'Tipo de projeto',
      info2_value: 'Freelance / CLT',
      info3_label: 'Modalidade',
      info3_value: 'Remoto (100%)',
      info4_label: 'Foco atual',
      info4_value: 'IA & Automação',
    },

    footer: {
      rights: 'Todos os direitos reservados.',
      built: 'Desenvolvido com Next.js + IA.',
    },
  },

  en: {
    nav: {
      sobre: 'About',
      stack: 'Stack',
      servicos: 'Services',
      projetos: 'Projects',
      experiencia: 'Experience',
      contato: 'Contact',
      contratar: 'Hire Me',
    },

    hero: {
      chip_fullstack: 'Fullstack Developer',
      chip_ia: 'AI & Automation',
      chip_disponivel: 'Available for projects',
      heading1: 'Fullstack',
      heading2: 'Developer',
      subtitle:
        'Since 2021 building scalable APIs, intelligent chatbots, AI agents and WhatsApp automations. I turn ideas into high-impact digital products.',
      cta_projetos: 'View projects',
      cta_contato: 'Get in touch',
      stat1_value: '5+',
      stat1_label: 'Years of experience',
      stat2_value: '30+',
      stat2_label: 'Projects delivered',
      stat3_value: '10+',
      stat3_label: 'Technologies mastered',
    },

    sobre: {
      overline: 'About me',
      heading1: 'Fullstack focused on',
      heading2: 'real results',
      p1: 'I am a fullstack developer since 2021, playing a leading role in projects ranging from landing pages to complex systems with artificial intelligence. I have solid back-end experience with',
      p1_tech: 'Laravel, Node.js and NestJS',
      p1_mid: 'and front-end with',
      p1_tech2: 'React.js, Next.js and Vue.js',
      p2: 'My differentiator is the ability to combine traditional development with the most modern in',
      p2_highlight: 'automation and AI',
      p2_end:
        '. I build intelligent agents, integrate LLMs into real business workflows, and automate processes that used to consume hours of human work.',
      p3: 'I have worked with e-commerces, CRMs, payment systems, WhatsApp automations and complete web platforms — always focused on quality, scalability and delivering real value to clients.',
      card1_title: 'AI Agents',
      card1_desc:
        'Development of intelligent agents integrated with LLMs like GPT-4 and Claude to automate complex processes.',
      card2_title: 'OpenAI Integration',
      card2_desc:
        'AI APIs integrated into real systems: chatbots, classifiers, content generators and virtual assistants.',
      card3_title: 'End-to-End Automation',
      card3_desc:
        'Intelligent flows connecting WhatsApp, CRMs, e-commerces and internal systems without friction.',
      card4_title: 'Prompt Engineering',
      card4_desc:
        'Strategic prompts that maximize the accuracy and consistency of language models in production.',
    },

    stack: {
      overline: 'Technologies',
      heading: 'Stack I master',
      subtitle: 'Tools and technologies I use to build scalable and intelligent products.',
      badge: 'Differentiator',
      cat_backend: 'Back-end',
      cat_frontend: 'Front-end',
      cat_db: 'Databases',
      cat_devops: 'DevOps & Infra',
      cat_ia: 'Artificial Intelligence',
      cat_integracoes: 'Integrations',
    },

    servicos: {
      overline: 'Services',
      heading: 'What I can do for you',
      subtitle: 'From robust back-end to impactful front-end — with AI as the differentiator.',
      cta: 'Request a quote',
      s1_title: 'AI Agents & Chatbots',
      s1_desc:
        'Development of intelligent agents integrated with LLMs (GPT-4, Claude) for customer service, support and business flow automation.',
      s2_title: 'Scalable APIs',
      s2_desc:
        'REST API development and system integration with Node.js, Laravel and NestJS. High performance and easy maintenance.',
      s3_title: 'WhatsApp Automation',
      s3_desc:
        'Automated flows via WhatsApp for customer service, notifications, billing and marketing using generative AI.',
      s4_title: 'E-commerce & Payments',
      s4_desc:
        'Complete online stores with payment integrations (Stripe, Mercado Pago), inventory control and admin panel.',
      s5_title: 'Internal Systems & CRMs',
      s5_desc:
        'Custom platforms for team, client and process management. Intelligent dashboards and real-time reports.',
      s6_title: 'Process Automation',
      s6_desc:
        'I identify bottlenecks and automate routines with AI, integrating existing tools and reducing manual work.',
    },

    projetos: {
      overline: 'Projects',
      heading: 'Delivered cases',
      subtitle: 'Solutions that generated real impact — automation, AI, e-commerce and custom systems.',
      p1_title: 'AI Customer Service Agent',
      p1_desc:
        'Intelligent chatbot for customer support with GPT-4 integration, context memory and human escalation. 70% reduction in manual support volume.',
      p1_cat: 'AI & Automation',
      p2_title: 'E-commerce Platform',
      p2_desc:
        'Complete online store with Mercado Pago checkout, admin panel, inventory control and real-time reports.',
      p2_cat: 'E-commerce',
      p3_title: 'CRM with Sales Automation',
      p3_desc:
        'Client management system with sales pipeline, WhatsApp follow-up automation and analytics dashboards.',
      p3_cat: 'Internal System',
      p4_title: 'AI Workflow Automation',
      p4_desc:
        'System that processes documents with OCR + LLM, classifies information automatically and triggers actions in the company ERP.',
      p4_cat: 'AI & Automation',
      p5_title: 'Recurring Payments System',
      p5_desc:
        'Subscription platform with Stripe, plan management, automatic trial, webhooks and complete financial dashboard.',
      p5_cat: 'Payments',
      p6_title: 'Multi-tenant API Gateway',
      p6_desc:
        'API gateway with multi-tenant JWT authentication, rate limiting, centralized logs and automatic Swagger documentation.',
      p6_cat: 'Back-end',
    },

    experiencia: {
      overline: 'Career',
      heading: 'Professional experience',
      e1_period: '2024 — Present',
      e1_role: 'Fullstack Developer & AI Specialist',
      e1_company: 'Freelance / Own Projects',
      e1_desc:
        'Development of AI agents, WhatsApp automations, OpenAI integrations and complete systems for clients in various segments. Focus on solutions combining traditional technology with artificial intelligence.',
      e2_period: '2023 — 2024',
      e2_role: 'Fullstack Developer',
      e2_company: 'Tech Company',
      e2_desc:
        'Building complete web platforms, custom CRMs and payment systems. Technical leadership in high-volume e-commerce projects.',
      e3_period: '2022 — 2023',
      e3_role: 'Back-end Developer',
      e3_company: 'SaaS Startup',
      e3_desc:
        'Development of scalable REST APIs, microservices and third-party integrations. Automation implementation that reduced processing time by 60%.',
      e4_period: '2021 — 2022',
      e4_role: 'Web Developer',
      e4_company: 'Digital Agency',
      e4_desc:
        'Creating landing pages, e-commerces and internal systems. First projects with process automation and simple chatbots for customer service.',
    },

    contato: {
      overline: 'Contact',
      heading1: "Let's build something",
      heading2: 'amazing together?',
      subtitle:
        "I'm available for freelance projects, consulting and job opportunities. If you need a fullstack developer with AI and automation expertise, let's talk.",
      btn_whatsapp: 'Message on WhatsApp',
      btn_email: 'Send an email',
      status: 'Available for new projects',
      info1_label: 'Average response',
      info1_value: '< 2 hours',
      info2_label: 'Project type',
      info2_value: 'Freelance / Full-time',
      info3_label: 'Work mode',
      info3_value: 'Remote (100%)',
      info4_label: 'Current focus',
      info4_value: 'AI & Automation',
    },

    footer: {
      rights: 'All rights reserved.',
      built: 'Built with Next.js + AI.',
    },
  },
} as const

// Tipo genérico para suportar ambos os idiomas
export type Translations = {
  [K in keyof typeof translations.pt]: {
    [P in keyof (typeof translations.pt)[K]]: string
  }
}

export default translations
