export type Locale = 'en' | 'es' | 'pt'

export const DEFAULT_LOCALE: Locale = 'en'

export type TranslationDict = Record<string, any>

export const en: TranslationDict = {
  common: {
    app_name: 'LatamBoard',
    home: 'Home',
    tasks: 'Tasks',
    about: 'About',
    contribute: 'Contribute',
    our_website: 'Our Website',
    join_discord: 'Join our Discord',
    contact_email: 'contacto@surus.dev',
    loading: 'Loading…',
    error_generic: 'Something went wrong. Try again.',
  },
  landing: {
    hero_title: 'LatamBoard',
    hero_subtitle:
      "The community-driven platform for evaluating AI models on Spanish and Portuguese benchmarks. Advancing AI excellence across Latin America through transparent, rigorous evaluation.",
    source_prefix: 'Source:',
    source_link: 'Hugging Face dataset',
    load_failed: 'Failed to load leaderboard data',
    cta_button: 'See the results',
    columns: {
      model_name: 'model_name',
      overall_latam_score: 'overall_latam_score',
      spanish_score: 'spanish_score',
      portuguese_score: 'portuguese_score',
    },
  },
  tests: {
    title: 'Tasks',
    loading: 'Loading tasks…',
    repo: 'Repository',
    key: 'Key',
    shots: 'shots',
    failed_meta: 'Failed to load tasks metadata',
    dataset: 'Dataset',
  },
  filters: {
    title: 'Filters',
    active: 'active',
    overall_performance: 'Overall Performance',
    overall_latam_score: 'Overall LATAM Score',
    benchmarks: 'Benchmarks',
    show_main_scores: 'Show Main Scores',
    clear_all: 'Clear All',
  },
  contribute: {
    ready_to_contribute: 'Ready to Contribute?',
    community_description: 'This project belongs to the community. If you want to help build the standards that will define AI for Latin America, the first step is simple:',
    join_discord: 'Join our Discord',
    join_discussion: 'Join the discussion for:',
    models_to_test: 'Models to Test',
    models_description: 'propose, submit, and discuss which models should be benchmarked.',
    benchmarks_progress: 'Benchmarks in Progress',
    benchmarks_description: 'help shape the datasets and tasks that will define what "good" looks like in Spanish and Portuguese.',
    development_space: 'Development Space',
    development_description: 'collaborate on infrastructure, tools, and methodology that keep the leaderboard open and transparent.',
    community_voice: 'Community Voice',
    community_voice_description: 'bring your perspective as a researcher, developer, or practitioner to make sure our benchmarks reflect real regional needs.',
    where_work_happens: 'This is where the work happens.',
    ideas_to_standards: 'Where ideas become benchmarks, and benchmarks become standards.',
    coming_soon: 'Coming Soon',
    opensource_announcement: 'Next week, we open-source the repository.',
    follow_announcement: 'Follow us for the announcement and be ready to build with us from day one.',
  },
  about: {
    title: 'About LatamBoard',
    p1:
      "LatamBoard is a community initiative dedicated to establishing task-oriented, transparent evaluation standards for AI systems serving Latin America. We're helping build the engine to measure real work, not just language fluency.",
    p2:
      "LatamBoard is more than a ranking system, it's the foundation for establishing our region as a global AI innovation hub. Whether you're a researcher, developer, or AI enthusiast, there's a place for you in building these evaluation standards.",
    mission_title: 'Our Mission',
    mission_p:
      'We create rigorous, region-specific, task-oriented benchmarks, in Spanish and Portuguese and across LATAM industries, so researchers, developers, and companies can train, choose, and ship models that actually move the needle in production.',
    why_title: 'Why This Matters',
    culture_sub: 'From Culture to Capability',
    culture_p1:
      "AI evaluation has been dominated by English-centric benchmarks that fail to capture the nuanced performance requirements of Latin American markets. We're changing that by creating rigorous, region-specific evaluation standards that empower our community to build and choose AI solutions with confidence.",
    culture_p2:
      "Capturing regional idiosyncrasies is essential but not sufficient. The main bottleneck is evaluation: without precise, task-level signals, models can't reliably learn instructions, follow constraints, or deliver production outcomes.",
    signals_sub: 'Signals for Learning (and RL)',
    signals_p:
      'As training shifts toward reinforcement and feedback-driven methods, we need clear, auditable success criteria. Our benchmarks are designed so their results can serve as training/validation signals—making "what good looks like" explicit for LATAM tasks.',
    bridge_sub: 'Bridging the Evaluation Gap',
    bridge_p:
      "High-quality evaluations in Spanish and Portuguese are scarce, especially for concrete tasks. That gap blocks informed decisions and slows model progress for real LATAM use cases.",
    how_title: 'How We Evaluate Models',
    how_p: 'We run publicly accessible benchmarks based on multiple forks of lm-evaluation-harness, focusing on:',
    how_li1: 'Task definitions with acceptance criteria (what counts as success).',
    how_li2: 'Reproducible setups (versioned configs, seeds, and data).',
    how_li3: 'Outcome-first scoring (task success plus supporting metrics appropriate to each task).',
    how_li4: "Transparent reports (what the benchmark covers—and what it doesn't).",
    evolving_title: 'Evolving Standards',
    evolving_li1: 'Phase 1: Comprehensive language understanding benchmarks.',
    evolving_li2:
      'Phase 2: Real-world task evaluation (e.g., translation, transcription, summarization, instruction following, and structured outputs).',
    evolving_li3:
      'Phase 3: Community-contributed benchmarks and specialized datasets, with feedback formats suitable for training and RL workflows.',
    community_title: 'Community Collaboration',
    aips_sub: 'For AI Product Managers (AI PMs)',
    aips_p: 'Translate business outcomes into benchmarks and training signals. Define what "good" means so models can be steered toward real KPIs.',
    research_sub: 'For Researchers & Universities',
    research_p: 'Contribute benchmarks, methodologies, and datasets. Help set academic standards that align with real regional needs.',
    devs_sub: 'For Model Developers',
    devs_p:
      'Showcase model performance on region-specific tasks. Get actionable insight into strengths, weaknesses, and where to focus further training.',
    companies_sub: 'For Companies & Practitioners',
    companies_p:
      'Access reliable performance data to guide implementation. Propose your actual tasks—we\'ll help express them as clear benchmarks with acceptance criteria.',
    commit_title: 'Our Commitment',
    commit_li1: 'Open Science: Benchmarks, code, and results are public by default.',
    commit_li2: 'Academic Rigor: Transparent methodology and careful scope—no leaderboard theater.',
    commit_li3: 'Regional Focus: Built around LATAM languages and the tasks that drive productivity.',
    commit_li4: 'Community Ownership: We maintain the infrastructure; the community shapes the standards.',
    future_title: "Help Build Latin America's AI Future",
    future_p:
      "LatamBoard is more than a ranking, it's the evaluation layer that lets our region train and deploy systems that solve real problems.",
    ready_title: 'Ready to contribute?',
    ready_p:
      'LatamBoard is proudly supported by compute infrastructure from Surus, with development and methodology contributions from the broader LATAM AI community.',
  },
}

export const es: TranslationDict = {
  common: {
    app_name: 'LatamBoard',
    home: 'Inicio',
    tasks: 'Tareas',
    about: 'Acerca de',
    contribute: 'Contribuir',
    our_website: 'Nuestro sitio web',
    join_discord: 'Únete a nuestro Discord',
    contact_email: 'contacto@surus.dev',
    loading: 'Cargando…',
    error_generic: 'Algo salió mal. Intenta de nuevo.',
  },
  landing: {
    hero_title: 'LatamBoard',
    hero_subtitle:
      'Plataforma comunitaria para evaluar modelos de IA en español y portugués. Impulsando la excelencia en IA en América Latina con evaluación rigurosa y transparente.',
    source_prefix: 'Fuente:',
    source_link: 'Dataset en Hugging Face',
    load_failed: 'Error al cargar los datos del leaderboard',
    cta_button: 'Ver los resultados',
    columns: {
      model_name: 'model_name',
      overall_latam_score: 'overall_latam_score',
      spanish_score: 'spanish_score',
      portuguese_score: 'portuguese_score',
    },
  },
  tests: {
    title: 'Tareas',
    loading: 'Cargando tareas…',
    repo: 'Repositorio',
    key: 'Clave',
    shots: 'disparos',
    failed_meta: 'Error al cargar los metadatos de tareas',
    dataset: 'Dataset',
  },
  filters: {
    title: 'Filtros',
    active: 'activos',
    overall_performance: 'Rendimiento General',
    overall_latam_score: 'Puntaje General LATAM',
    benchmarks: 'Evaluaciones',
    show_main_scores: 'Mostrar Puntuaciones Principales',
    clear_all: 'Limpiar Todo',
  },
  contribute: {
    ready_to_contribute: '¿Listo para Contribuir?',
    community_description: 'Este proyecto pertenece a la comunidad. Si querés ayudar a construir los estándares que definirán la IA para América Latina, el primer paso es simple:',
    join_discord: 'Únete a nuestro Discord',
    join_discussion: 'Únete a la discusión para:',
    models_to_test: 'Modelos a Evaluar',
    models_description: 'Proponer, enviar y discutir qué modelos deberían ser evaluados.',
    benchmarks_progress: 'Benchmarks en Progreso',
    benchmarks_description: 'Ayudar a dar forma a los datasets y tareas que definirán qué significa "bueno" en español y portugués.',
    development_space: 'Espacio de Desarrollo',
    development_description: 'Colaborar en infraestructura, herramientas y metodología que mantengan el leaderboard abierto y transparente.',
    community_voice: 'Voz de la Comunidad',
    community_voice_description: 'Traer tu perspectiva como investigador, desarrollador o profesional para asegurar que nuestros benchmarks reflejen las necesidades reales de la región.',
    where_work_happens: 'Aquí es donde sucede el trabajo.',
    ideas_to_standards: 'Donde las ideas se convierten en benchmarks, y los benchmarks se convierten en estándares.',
    coming_soon: 'Próximamente',
    opensource_announcement: 'La próxima semana, abrimos el repositorio.',
    follow_announcement: 'Síguenos para el anuncio y prepárate para construir con nosotros desde el primer día.',
  },
  about: {
    title: 'Sobre LatamBoard',
    p1:
      "LatamBoard es una iniciativa comunitaria dedicada a establecer estándares de evaluación transparentes y orientados a tareas para sistemas de IA en América Latina. Estamos ayudando a construir un motor que mide trabajo real, no solo fluidez lingüística.",
    p2:
      "LatamBoard es más que un sistema de rankings, es la base para posicionar a nuestra región como un hub global de innovación en IA. Seas investigador, desarrollador o entusiasta de la IA, hay un lugar para vos en la construcción de estos estándares de evaluación.",
    mission_title: 'Nuestra Misión',
    mission_p:
      'Creamos benchmarks rigurosos, específicos para la región y orientados a tareas, en español y portugués y a través de industrias de LATAM, para que investigadores, desarrolladores y empresas puedan entrenar, elegir y desplegar modelos que realmente marquen la diferencia en producción.',
    why_title: 'Por qué Importa',
    culture_sub: 'De la Cultura a la Capacidad',
    culture_p1:
      "La evaluación en IA ha estado dominada por benchmarks centrados en el inglés que no capturan los requisitos de desempeño matizados de los mercados latinoamericanos.",
    culture_p2:
      "Estamos cambiando eso al crear estándares rigurosos y específicos para la región que empoderan a nuestra comunidad a construir y elegir soluciones de IA con confianza.",
    signals_sub: 'Señales para el Aprendizaje (y RL)',
    signals_p:
      'Capturar las idiosincrasias regionales es esencial, pero no suficiente. El principal cuello de botella es la evaluación en aplicaciones reales: sin señales precisas a nivel de tarea, los modelos no pueden aprender de forma confiable, seguir restricciones o entregar resultados productivos. A medida que el entrenamiento se desplaza hacia métodos de refuerzo y basados en retroalimentación, necesitamos criterios de éxito claros y auditables. Nuestros benchmarks están diseñados para que sus resultados sirvan como señales de entrenamiento/validación, haciendo explícito qué representa “hacerlo bien” en tareas de LATAM.',
    bridge_sub: 'Cerrando la Brecha de Evaluación',
    bridge_p:
      "Las evaluaciones de alta calidad en español y portugués son escasas, especialmente para tareas concretas. Esa brecha bloquea decisiones informadas y ralentiza el progreso de los modelos en casos de uso reales de LATAM.",
    how_title: 'Cómo Evaluamos Modelos',
    how_p: 'Ejecutamos benchmarks de acceso público basados en múltiples forks de lm-evaluation-harness, con foco en:',
    how_li1: 'Definiciones de tareas con criterios de aceptación (qué cuenta como éxito).',
    how_li2: 'Entornos reproducibles (configs versionadas, semillas y datos).',
    how_li3: 'Evaluación orientada a resultados (éxito en la tarea más métricas de apoyo apropiadas para cada caso).',
    how_li4: "Reportes transparentes (qué cubre el benchmark, y qué no).",
    evolving_title: 'Estándares en Evolución',
    evolving_li1: 'Fase 1: Benchmarks integrales de comprensión del lenguaje.',
    evolving_li2:
      'Fase 2: Evaluación de tareas del mundo real (ej. traducción, transcripción, resumen, seguimiento de instrucciones y salidas estructuradas).',
    evolving_li3:
      'Fase 3: Benchmarks y datasets especializados aportados por la comunidad, con formatos de retroalimentación adecuados para entrenamiento y flujos de RL.',
    community_title: 'Colaboración Comunitaria',
    aips_sub: 'Para Product Managers de IA (AI PMs)',
    aips_p: 'Traducir resultados de negocio en benchmarks y señales de entrenamiento. Definir qué significa “bueno” para guiar los modelos hacia KPIs reales.',
    research_sub: 'Para Investigadores y Universidades',
    research_p: 'Contribuir con benchmarks, metodologías y datasets. Ayudar a establecer estándares académicos alineados con necesidades reales de la región.',
    devs_sub: 'Para Desarrolladores de Modelos',
    devs_p:
      'Mostrar el desempeño de los modelos en tareas específicas de la región. Obtener información accionable sobre fortalezas, debilidades y dónde enfocar más entrenamiento.',
    companies_sub: 'Para Empresas y Profesionales',
    companies_p:
      'Acceder a datos de desempeño confiables para guiar la implementación. Proponer tus tareas reales: te ayudamos a expresarlas como benchmarks claros con criterios de aceptación.',
    commit_title: 'Nuestro Compromiso',
    commit_li1: 'Ciencia Abierta: Benchmarks, código y resultados son públicos por defecto.',
    commit_li2: 'Rigor Académico: Metodología transparente y alcance cuidadoso—sin “teatro de leaderboards”.',
    commit_li3: 'Enfoque Regional: Construido alrededor de los idiomas y tareas de LATAM que impulsan la productividad.',
    commit_li4: 'Propiedad Comunitaria: Mantenemos la infraestructura; la comunidad define los estándares.',
    future_title: "Ayudá a Construir el Futuro de la IA en LATAM",
    future_p:
      "LatamBoard es más que un ranking, es la capa de evaluación que permite a nuestra región entrenar y desplegar sistemas que resuelvan problemas reales.",
    ready_title: '¿Listo para contribuir?',
    ready_p:
      'LatamBoard cuenta con el apoyo de infraestructura de cómputo de Surus, junto con contribuciones de desarrollo y metodología de la comunidad de IA de LATAM.',
  },
}

export const pt: TranslationDict = {
  common: {
    app_name: 'LatamBoard',
    home: 'Início',
    tasks: 'Tarefas',
    about: 'Sobre',
    contribute: 'Contribuir',
    our_website: 'Nosso site',
    join_discord: 'Entre no nosso Discord',
    contact_email: 'contacto@surus.dev',
    loading: 'Carregando…',
    error_generic: 'Algo deu errado. Tente novamente.',
  },
  landing: {
    hero_title: 'LatamBoard',
    hero_subtitle:
      'Plataforma comunitária para avaliar modelos de IA em espanhol e português. Promovendo excelência em IA na América Latina com avaliação rigorosa e transparente.',
    source_prefix: 'Fonte:',
    source_link: 'Dataset no Hugging Face',
    load_failed: 'Falha ao carregar os dados do leaderboard',
    cta_button: 'Ver os resultados',
    columns: {
      model_name: 'model_name',
      overall_latam_score: 'overall_latam_score',
      spanish_score: 'spanish_score',
      portuguese_score: 'portuguese_score',
    },
  },
  tests: {
    title: 'Tarefas',
    loading: 'Carregando tarefas…',
    repo: 'Repositório',
    key: 'Chave',
    shots: 'exemplos',
    failed_meta: 'Falha ao carregar metadados das tarefas',
    dataset: 'Dataset',
  },
  filters: {
    title: 'Filtros',
    active: 'ativos',
    overall_performance: 'Desempenho Geral',
    overall_latam_score: 'Pontuação Geral LATAM',
    benchmarks: 'Avaliações',
    show_main_scores: 'Mostrar Pontuações Principais',
    clear_all: 'Limpar Tudo',
  },
  contribute: {
    ready_to_contribute: 'Pronto para Contribuir?',
    community_description: 'Este projeto pertence à comunidade. Se você quer ajudar a construir os padrões que definirão a IA para a América Latina, o primeiro passo é simples:',
    join_discord: 'Entre no nosso Discord',
    join_discussion: 'Participe da discussão para:',
    models_to_test: 'Modelos para Testar',
    models_description: 'Propor, enviar e discutir quais modelos devem ser avaliados.',
    benchmarks_progress: 'Benchmarks em Progresso',
    benchmarks_description: 'Ajudar a moldar os datasets e tarefas que definirão o que é "bom" em espanhol e português.',
    development_space: 'Espaço de Desenvolvimento',
    development_description: 'Colaborar em infraestrutura, ferramentas e metodologia que mantenham o leaderboard aberto e transparente.',
    community_voice: 'Voz da Comunidade',
    community_voice_description: 'Trazer sua perspectiva como pesquisador, desenvolvedor ou profissional para garantir que nossos benchmarks reflitam as necessidades reais da região.',
    where_work_happens: 'É aqui que o trabalho acontece.',
    ideas_to_standards: 'Onde ideias se tornam benchmarks, e benchmarks se tornam padrões.',
    coming_soon: 'Em Breve',
    opensource_announcement: 'Na próxima semana, abrimos o repositório.',
    follow_announcement: 'Siga-nos para o anúncio e esteja pronto para construir conosco desde o primeiro dia.',
  },
  about: {
    title: 'Sobre o LatamBoard',
    p1:
      'O LatamBoard é uma iniciativa comunitária dedicada a estabelecer padrões de avaliação orientados a tarefas e transparentes para sistemas de IA na América Latina. Medimos trabalho real, não apenas fluência.',
    p2:
      'Mais que um ranking, é a base para tornar a região um polo global de inovação em IA. Pesquisadores, desenvolvedores e entusiastas são bem-vindos para construir esses padrões.',
    mission_title: 'Nossa missão',
    mission_p:
      'Criamos benchmarks rigorosos, regionais e orientados a tarefas, em espanhol e português e em setores da LATAM, para que modelos sejam treinados e escolhidos com impacto real.',
    why_title: 'Por que isso importa',
    culture_sub: 'Da cultura à capacidade',
    culture_p1:
      'A avaliação em IA é dominada por benchmarks em inglês que não capturam as necessidades latino-americanas. Estamos mudando isso com padrões rigorosos e regionais.',
    culture_p2:
      'Capturar especificidades regionais é essencial, mas não basta. O gargalo é a avaliação: sem sinais claros por tarefa, modelos não seguem instruções nem entregam resultados.',
    signals_sub: 'Sinais para aprendizado (e RL)',
    signals_p:
      'Com o avanço de métodos baseados em reforço e feedback, precisamos de critérios de sucesso auditáveis. Nossos benchmarks podem servir de sinais de treino/validação.',
    bridge_sub: 'Reduzindo a lacuna de avaliação',
    bridge_p:
      'Faltam avaliações de qualidade em espanhol e português, sobretudo para tarefas concretas. Isso dificulta decisões e o progresso.',
    how_title: 'Como avaliamos modelos',
    how_p: 'Executamos benchmarks públicos baseados em forks do lm-evaluation-harness, focando em:',
    how_li1: 'Definições de tarefa com critérios de aceitação.',
    how_li2: 'Configurações reprodutíveis (versionamento, seeds e dados).',
    how_li3: 'Métricas orientadas ao resultado.',
    how_li4: 'Relatórios transparentes (o que cobre e o que não).',
    evolving_title: 'Padrões em evolução',
    evolving_li1: 'Fase 1: compreensão de linguagem.',
    evolving_li2: 'Fase 2: tarefas do mundo real (tradução, transcrição, resumo, instruções e saídas estruturadas).',
    evolving_li3: 'Fase 3: benchmarks da comunidade e datasets especializados, com formatos úteis para treino e RL.',
    community_title: 'Colaboração da comunidade',
    aips_sub: 'Para PMs de IA',
    aips_p: 'Traduza resultados de negócio em benchmarks e sinais de treinamento.',
    research_sub: 'Para pesquisadores e universidades',
    research_p: 'Contribua com benchmarks, metodologias e datasets alinhados às necessidades reais.',
    devs_sub: 'Para desenvolvedores de modelos',
    devs_p: 'Mostre desempenho em tarefas regionais e obtenha insights acionáveis.',
    companies_sub: 'Para empresas e profissionais',
    companies_p: 'Acesse dados confiáveis para guiar implementações. Proponha suas tarefas reais.',
    commit_title: 'Nosso compromisso',
    commit_li1: 'Ciência aberta: benchmarks, código e resultados públicos.',
    commit_li2: 'Rigor acadêmico: metodologia transparente; sem encenação.',
    commit_li3: 'Foco regional: línguas e tarefas que geram produtividade.',
    commit_li4: 'Protagonismo comunitário: a comunidade define os padrões.',
    future_title: 'Ajude a construir o futuro da IA na LATAM',
    future_p: 'Mais que ranking, somos a camada de avaliação para soluções reais.',
    ready_title: 'Pronto para contribuir?',
    ready_p: 'Com apoio de infraestrutura da Surus e da comunidade LATAM de IA.',
  },
}

export const translations: Record<Locale, TranslationDict> = { en, es, pt }


