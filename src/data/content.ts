/**
 * Contenido del sitio del Dr. José Baldeón.
 * Sintetizado y reescrito a partir de su web oficial (josebaldeon.com),
 * sus libros, charlas y perfiles públicos.
 *
 * OJO — pendientes por confirmar con José (marcados con `// TODO`):
 *  - Testimonios reales (los actuales son de ejemplo).
 *  - Enlaces reales de Hotmart por cada libro.
 *  - Foto profesional en alta resolución.
 *  - Tarifa exacta de consulta y número de colegiatura (CPsP).
 */

export const site = {
  nombre: 'Dr. José Baldeón',
  rol: 'Psicoterapeuta familiar y de pareja',
  tesis: 'El desamor enferma, el amor sana.',
  // Números reales tomados de su web oficial
  whatsappConsultas: '51979386830',
  // Un solo número de contacto en toda la web (pedido del cliente).
  whatsappComunidades: '51979386830',
  email: 'jobaldeon@gmail.com', // TODO: confirmar correo de contacto público
  ciudad: 'Lima, Perú',
  colegiatura: '', // TODO: número de colegiatura C.Ps.P. (pendiente de José)
  // TODO: reemplazar por su enlace real de tienda/perfil Hotmart
  hotmartUrl: 'https://hotmart.com/es',
  social: {
    youtube: 'https://www.youtube.com/channel/UCThekrbYU0AIjslEPAJVGCw',
    facebook: 'https://www.facebook.com/josebaldeonvaldivia/',
    web: 'https://josebaldeon.com',
  },
}

// Prefija la base correcta para assets de /public (funciona en dominio y subcarpeta).
export const asset = (p: string) => import.meta.env.BASE_URL + p

export const waLink = (numero: string, mensaje: string) =>
  `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`

export const hero = {
  eyebrow: 'Psicoterapeuta · Maestro · Escritor',
  titulo: 'El desamor enferma,\nel amor sana.',
  bajada:
    'Acompaño a personas, parejas y familias a sanar sus heridas y reescribir su historia desde el amor. Terapia presencial en Lima y online en todo el mundo.',
  ctaPrimario: 'Agenda tu consulta',
  ctaSecundario: 'Conoce su método',
}

// Su filosofía central (textual). Aparece como pieza destacada y sus frases
// se reparten por toda la web.
export const manifiesto = {
  destacado: 'El desamor enferma, el amor sana.',
  cuerpo:
    'Detrás de toda personalidad disfuncional siempre hay una historia de desamor, y delante de toda recuperación nunca debe faltar una historia reescrita con amor. El amor es el antibiótico natural para combatir todas las infecciones traumáticas del alma humana. No existe medicina más grande para sanar nuestras heridas internas que la potencia terapéutica del amor.',
  autor: 'Dr. José Baldeón Valdivia',
}

// Fragmentos textuales del manifiesto, para usar como citas en cada página.
export const frases = {
  desamor: 'Detrás de toda personalidad disfuncional siempre hay una historia de desamor.',
  recuperacion:
    'Delante de toda recuperación nunca debe faltar una historia reescrita con amor.',
  antibiotico:
    'El amor es el antibiótico natural para combatir todas las infecciones traumáticas del alma humana.',
  medicina:
    'No existe medicina más grande para sanar nuestras heridas internas que la potencia terapéutica del amor.',
}

export const stats = [
  { valor: '+20', etiqueta: 'años acompañando familias' },
  { valor: '11', etiqueta: 'libros publicados' },
  { valor: 'TENCA', etiqueta: 'su propio método terapéutico' },
  { valor: 'Lima + online', etiqueta: 'atención nacional e internacional' },
]

export const sobre = {
  titulo: 'Un terapeuta que cree en el poder sanador del amor',
  parrafos: [
    'José Baldeón es psicólogo y psicoterapeuta familiar y de pareja, además de maestro, escritor y conferencista. Con más de veinte años de experiencia, ha acompañado a cientos de parejas y familias a reencontrarse.',
    'Estudió Psicología en la Pontificia Universidad Católica del Perú, tiene un Diplomado en Familia (Universidad de la Sabana, Colombia) y una Maestría en Terapia Familiar Sistémica (Universidad Autónoma de Barcelona). Su formación clínica integra la terapia Gestalt, el Análisis Transaccional y los métodos Gottman y EFT para parejas.',
    'Es director general de Nuevas Sendas, fundador de COLATEP y presidente de AETSIP. Su trabajo combina rigor clínico con una calidez profundamente humana: no el académico distante, sino el mentor que camina a tu lado.',
  ],
  credenciales: [
    'Psicología — PUCP (Perú)',
    'Maestría en Terapia Familiar Sistémica — UAB (Barcelona)',
    'Diplomado en Familia — U. de la Sabana (Colombia)',
    'Formación en Gestalt, Análisis Transaccional, Gottman y EFT',
    'Director general de Nuevas Sendas',
    'Fundador y director de COLATEP (Confraternidad Latinoamericana de Terapeutas y Escuelas Especialistas en Pareja)',
    'Miembro de RELATES (red europeo-latinoamericana de escuelas sistémicas)',
  ],
}

export const metodo = {
  sigla: 'TENCA',
  titulo: 'Terapia Narrativa Centrada en el Amor',
  intro:
    'Cada persona y cada pareja viven dentro de una historia. Cuando esa historia está escrita desde el dolor, enferma; cuando se reescribe desde el amor, sana. Ese es el corazón del método que José ha desarrollado a lo largo de décadas.',
  pilares: [
    {
      titulo: 'Narrativa',
      texto:
        'Tu historia no es tu condena. Juntos identificamos el relato que te tiene atrapado y lo reescribimos con un final distinto.',
    },
    {
      titulo: 'Centrada en el amor',
      texto:
        'El amor no es solo un sentimiento: es una capacidad que se aprende y se sana. Es el eje de todo el proceso terapéutico.',
    },
    {
      titulo: 'Sistémica',
      texto:
        'Nadie sana en el vacío. Trabajamos los vínculos —pareja, familia, historia— porque ahí es donde nacen y se curan las heridas.',
    },
  ],
  mapa: {
    titulo: 'El Mapa de las 7 Leyes del Amor',
    texto:
      'Una guía práctica creada por José para parejas que quieren reconectar: siete principios que ordenan la vida en común y devuelven la cercanía. Es la base de su programa "Sanando matrimonios heridos".',
  },
}

export const comunidades = [
  {
    nombre: 'Abrazando mi sanidad interior',
    para: 'Para ti',
    taller: 'Sanando mi niño interior herido: haciendo las paces con mi pasado',
    texto:
      'Un proceso para sanar las heridas de la infancia que aún condicionan tu vida adulta y convertirte en una persona estable, libre y feliz.',
    icono: 'heart-handshake',
  },
  {
    nombre: 'Conexión conyugal',
    para: 'Para tu pareja',
    taller: 'Reconectando mi vida conyugal: el Mapa de las 7 Leyes del Amor',
    texto:
      'Un espacio para parejas que quieren volver a encontrarse, recuperar la intimidad y construir una relación que sostiene en lugar de desgastar.',
    icono: 'users',
  },
  {
    nombre: 'Crianza amorosa',
    para: 'Para tu familia',
    taller: 'Formando la identidad de mis hijos: construir su identidad es mi responsabilidad',
    texto:
      'Herramientas para criar desde el amor y la firmeza, acompañando a tus hijos a construir una identidad sólida y segura.',
    icono: 'mood-kid',
  },
]

// Videos reales de sus 2 canales de YouTube (IDs verificados). Al hacer clic
// se abre el video en su canal — eso suma vistas a su YouTube.
export const youtube2 = 'https://www.youtube.com/@PROGRAMALABELLEZADESANAR-xv1oq'

export const videoSeries = [
  {
    nombre: 'La Belleza de Amar',
    para: 'Para las familias',
    texto: 'Su programa de TV online: crianza, pareja y vida familiar en lenguaje sencillo.',
    canal: site.social.youtube,
    videos: [
      { id: 'OqSA_F5ImBA', titulo: 'Más abrazos y menos gritos: educando hijos sanos' },
      { id: 'yy7Sk47yeMM', titulo: 'Los 5 hábitos de una familia altamente saludable' },
      { id: 'bYqFfE_LobY', titulo: 'La gran tarea de los padres: ¿provisión o formación?' },
      { id: 'Jia1Gya5XHE', titulo: 'Padres trabajólicos, hijos huérfanos' },
      { id: 'oDNQGtOFWH8', titulo: 'Dejar de abrazar es también maltratar' },
      { id: 'c0TsL58q9bM', titulo: 'Amor parental saludable: ternura y disciplina' },
    ],
  },
  {
    nombre: 'Pareja y crecimiento',
    para: 'Para ti y tu relación',
    texto: 'Charlas sobre vínculos, soledad, identidad y sanación personal.',
    canal: site.social.youtube,
    videos: [
      { id: '9Gt4NtVEscw', titulo: 'Me siento sola, aun cuando tengo pareja' },
      { id: '__bWoKJyYlU', titulo: 'La soledad: la epidemia de nuestro siglo' },
      { id: 'zxu6sWmSbqc', titulo: 'La mujer sabia: tres rasgos de un alma hermosa' },
      { id: 'X9X20j08g1g', titulo: 'Los 4 pilares de una verdadera masculinidad' },
      { id: 'j8O93ocQLrI', titulo: 'El espacio personal en la vida de pareja' },
      { id: 'lgMnr7GzmAY', titulo: 'Cuando el vivir duele: depresión y suicidio' },
    ],
  },
  {
    nombre: 'Entrevistas en medios',
    para: 'En la prensa',
    texto: 'Apariciones en radio y televisión sobre familia, pareja y salud emocional.',
    canal: site.social.youtube,
    videos: [
      { id: 'P6NCKKnvuoU', titulo: 'RPP: La crisis del nido vacío' },
      { id: 'iX0D0B7Z-rM', titulo: '¿Cómo afectan a los niños las discusiones de los padres?' },
      { id: 'KJeM55t9vx0', titulo: 'Adolescentes difíciles: análisis de “Adolescencia” (Netflix)' },
      { id: 'va62zacUxLE', titulo: 'Depresión y suicidio: análisis del film “Sube a mi nube”' },
    ],
  },
  {
    nombre: 'La Belleza de Sanar',
    para: 'Para profesionales',
    texto: 'Su programa para psicoterapeutas: clínica, método TENCA y abordajes terapéuticos.',
    canal: youtube2,
    videos: [
      { id: 'tVsIzQ8XnUY', titulo: 'TENCA: 20 principios clave' },
      { id: 'rUf-7Pw3Efk', titulo: 'La alianza terapéutica' },
      { id: 'cLslOXD4Xvo', titulo: 'Tres claves de un abordaje terapéutico eficaz' },
      { id: 'fGakmk7jzQ0', titulo: 'Parejas difíciles: del rencor a la terapia del perdón' },
      { id: 'atYdbynDFWI', titulo: 'El viaje del perdón (presentación del libro)' },
      { id: 'RTUZEwEw2ds', titulo: 'La belleza de amar (presentación del libro)' },
    ],
  },
]

// Títulos reales de su catálogo. Las descripciones son breves síntesis temáticas.
export const libros: { titulo: string; tema: string; tipo?: string; agotado?: boolean }[] = [
  { titulo: 'La belleza de amar', tema: 'El poder terapéutico del amor para sanar heridas.' },
  { titulo: 'No sé cómo amarte', tema: 'Aprender a amar cuando nadie nos enseñó cómo.' },
  { titulo: 'El viaje del perdón', tema: 'Soltar el rencor para volver a respirar en paz.' },
  { titulo: 'Yo, mi peor enemigo', tema: 'Hacer las paces con la voz que te sabotea.' },
  { titulo: '¿Por qué caminar si puedo volar?', tema: 'Romper los límites que tú mismo te pusiste.' },
  { titulo: 'Adolescentes difíciles', tema: 'Acompañar la adolescencia sin perder el vínculo.' },
  { titulo: 'Formando una identidad, construyendo un destino', tema: 'Ayudar a tus hijos a saber quiénes son.' },
  { titulo: 'La personalidad depresiva', tema: 'Comprender y abordar la tristeza que no se va.' },
  { titulo: 'Siete principios para ganar autoridad', tema: 'Liderar el hogar desde el respeto, no el miedo.', tipo: 'Curso' },
  { titulo: 'Cultura de valores', tema: 'Sembrar en casa lo que sostiene toda una vida.' },
  { titulo: 'Los niños en la agenda de Dios', tema: 'La mirada del cuidado y la trascendencia en la niñez.', agotado: true },
]

// TODO: reemplazar por testimonios reales y verificables.
export const testimonios = [
  {
    texto:
      'Estábamos a un paso de separarnos. Su acompañamiento nos devolvió la calma y las ganas de volver a intentarlo.',
    autor: 'Pareja en terapia',
    iniciales: 'PT',
  },
  {
    texto:
      'Por primera vez entendí de dónde venían mis heridas. Sentí calidez y profesionalismo en cada sesión.',
    autor: 'Paciente individual',
    iniciales: 'PI',
  },
  {
    texto:
      'Sus libros y charlas cambiaron la forma en que crío a mis hijos y me relaciono con mi familia.',
    autor: 'Madre de familia',
    iniciales: 'MF',
  },
]

export const pasosConsulta = [
  { n: 1, titulo: 'Escríbele por WhatsApp', texto: 'Cuéntale brevemente qué te trae y reserva tu cita con tu nombre, según disponibilidad.' },
  { n: 2, titulo: 'Confirma tu pago', texto: 'Sesiones de 50 minutos. Realizas el pago y envías tu comprobante por WhatsApp para confirmar.' },
  { n: 3, titulo: 'Completa tu ficha', texto: 'Llenas una breve ficha de ingreso al menos 24 horas antes de la primera sesión.' },
  { n: 4, titulo: 'Inicia tu proceso', texto: 'Recibes la dirección del consultorio (Lima) o el enlace de videollamada. Empezamos.' },
]

export const faqs = [
  {
    q: '¿Cómo agendo una cita?',
    a: 'Escribiéndole directamente por WhatsApp. Ahí coordinan el día y la hora según disponibilidad, y recibes todas las indicaciones.',
  },
  {
    q: '¿Atiende online y desde el extranjero?',
    a: 'Sí. Atiende de forma presencial en Lima y online por videollamada a nivel nacional e internacional.',
  },
  {
    q: '¿Cuánto dura cada sesión?',
    a: 'Cada sesión dura 50 minutos. El proceso y su frecuencia se conversan según tu caso.',
  },
  {
    q: '¿Qué métodos de pago aceptan?',
    a: 'Transferencia bancaria en Perú y medios para pagos internacionales (tarjeta y plataformas en línea). Los libros y programas se adquieren de forma segura por Hotmart.',
  },
  {
    q: '¿Cuánto cuesta una sesión?',
    a: 'La tarifa se confirma al agendar, según la modalidad (individual, pareja o familia). Escríbele por WhatsApp y te indican el detalle.',
  },
  {
    q: '¿Cuál es la política de cancelación?',
    a: 'Puedes reprogramar o cancelar con al menos 12 horas de anticipación; de lo contrario, se pierde el pago de la sesión.',
  },
  {
    q: '¿Las sesiones se graban?',
    a: 'Solo con tu autorización. La grabación es para tu beneficio y para el análisis del caso, de forma confidencial.',
  },
  {
    q: '¿Atienden niños, adolescentes y parejas?',
    a: 'Sí. Con niños, la primera sesión es con ambos padres; con adolescentes hay opción de sesión a solas; y en pareja se alternan sesiones individuales y conjuntas.',
  },
  {
    q: '¿Emiten informes para procesos legales?',
    a: 'No. El acompañamiento es terapéutico; no se emiten informes para procesos judiciales.',
  },
  {
    q: '¿Es confidencial?',
    a: 'Absolutamente. Todo lo conversado está protegido por el secreto profesional.',
  },
]

export const motivosConsulta = [
  'Terapia individual, de pareja y familiar',
  'Conflictos de pareja y crisis conyugales',
  'Ansiedad, depresión y duelos',
  'Trastornos de la personalidad (incl. límite / borderline)',
  'Adicciones, desde una mirada sistémica',
  'Crianza y acompañamiento de adolescentes',
]

export const primeraSesion = {
  titulo: '¿Qué pasa en la primera sesión?',
  texto:
    'Es un espacio para conocernos: cuentas tu situación sin juicio y, juntos, definimos hacia dónde quieres ir. La primera conversación es sin compromiso de continuar, en un entorno 100% confidencial.',
}

export const formacion = {
  eyebrow: 'Para profesionales',
  titulo: 'Formación para terapeutas',
  intro:
    'José no solo acompaña pacientes: también forma a psicoterapeutas en Latinoamérica. Si eres profesional o estudiante de salud mental, este es tu espacio.',
  items: [
    { nombre: 'Nuevas Sendas', texto: 'Centro de formación y atención en terapia familiar y de pareja que dirige José.' },
    { nombre: 'COLATEP', texto: 'Confraternidad Latinoamericana de Terapeutas y Escuelas Especialistas en Pareja, que fundó y dirige.' },
    { nombre: 'La Belleza de Sanar', texto: 'Su programa en YouTube para profesionales: clínica, método TENCA y abordajes terapéuticos.' },
  ],
  cta: 'Conoce el programa para terapeutas',
  // TODO: confirmar con José si hay un diplomado/programa formal con fechas y precio.
}

export const centro = {
  nombre: 'PsicoMunay',
  subtitulo: 'Centro de Psicoterapia Integral',
  tagline: 'Amar para sanar y sanar para amar',
  parrafos: [
    'PsicoMunay es un centro de atención psicoterapéutica dirigido por el Dr. José Baldeón. Munay es una palabra quechua que significa amar y, más que eso, el poder del amor; su segundo significado es voluntad, el poder de la voluntad. Ambas van de la mano, porque se ama con la voluntad más que con la emotividad.',
    'Trabajamos principalmente desde la Terapia Familiar Sistémica y, de forma particular, desde la Terapia Narrativa Centrada en el Amor (TENCA). Atención individual, conyugal y familiar.',
    'Nuestra tesis es que los vínculos insanos de desamor son los que enferman a la persona y a la familia; y que solo aprendiendo a vivir en vínculos sanos de amor se alcanza la plena sanidad. El amor sana nuestras heridas y nuestras relaciones.',
  ],
}

export const staff = [
  {
    nombre: 'Dr. José Baldeón',
    rol: 'Director · Psicoterapeuta familiar y de pareja',
    pais: 'Perú',
    uni: 'Maestría en Terapia Familiar Sistémica — UAB, Barcelona',
    esp: ['Terapia familiar y de pareja', 'Creador del método TENCA', 'Autor y conferencista'],
    frase: 'El desamor enferma, el amor sana.',
    foto: 'jose-sobre.webp',
  },
  {
    nombre: 'Diana Gutiérrez Walker',
    rol: 'Psicóloga',
    pais: 'Perú',
    uni: 'Universidad Autónoma de Barcelona, España',
    esp: ['Terapia de pareja', 'Magíster en terapia familiar sistémica', 'Método Gottman', 'Psicoinmunoneuroendocrinología (en curso)'],
    frase: 'En constante aprendizaje y búsqueda de herramientas para el bienestar integral del ser humano.',
    foto: 'staff/diana-gutierrez.webp',
  },
  {
    nombre: 'Luis Felipe Muro Mühlbauer',
    rol: 'Psicólogo',
    pais: 'Perú',
    uni: 'Universidad Privada San Martín de Porres, Perú',
    esp: ['Orientación vocacional', 'Talleres matrimoniales y escuela de padres', 'Creador del Método ORUM', 'Consultor internacional'],
    frase: 'Me considero una persona en constante aprendizaje; investigador e innovador en el campo vocacional.',
    foto: 'staff/luis-muro.webp',
  },
  {
    nombre: 'Andrea Déborah Indij',
    rol: 'Psicóloga',
    pais: 'Argentina',
    uni: 'Universidad Maimónides, Argentina',
    esp: ['Recuperación de víctimas de psicópatas integrados', 'Dependencias afectivas y codependencia', 'Terapeuta familiar sistémica', 'Posgrado en psicoanálisis'],
    frase: 'En permanente búsqueda de crecimiento profesional, orientada a la práctica clínica.',
    foto: 'staff/andrea-indij.webp',
  },
  {
    nombre: 'Miguel Ángel Ordaz',
    rol: 'Psicólogo',
    pais: 'México',
    uni: 'Universidad Autónoma de Durango, México',
    esp: ['Parejas, familias e individual', 'Adicciones, duelos y ansiedad', 'Depresión y control de impulsos', 'Trastornos de la personalidad'],
    frase: 'Un hombre honesto, empático y amoroso, comprometido con dar lo mejor a cada persona.',
    foto: 'staff/miguel-ordaz.webp',
  },
  {
    nombre: 'María Julia Ipiña',
    rol: 'Psicóloga',
    pais: 'Argentina',
    uni: 'Universidad Nacional de Córdoba, Argentina',
    esp: ['Terapia familiar sistémica', 'Contención y mediación en conflictos', 'Rehabilitación cognitiva en demencia', 'Clínica de adolescentes y adultos'],
    frase: 'Acompaño a la persona como una unidad biopsicosocial, desde la empatía y el respeto.',
    foto: 'staff/maria-ipina.webp',
  },
  {
    nombre: 'María Jimena Rosa Ramallo',
    rol: 'Psicóloga',
    pais: 'Argentina',
    uni: 'Universidad Nacional de Tucumán, Argentina',
    esp: ['Terapia familiar sistémica', 'Coautora del libro "Con los pies en la tierra"', 'Supervisora clínica', 'Jefa de centro de salud en Salta'],
    frase: 'Profesional comprometida; empatizo con el sufrimiento de mis pacientes para dar lo mejor.',
    foto: 'staff/jimena-ramallo.webp',
  },
  {
    nombre: 'Flavia Gisela Coletti',
    rol: 'Psicóloga',
    pais: 'Argentina',
    uni: 'Universidad Nacional de Tucumán, Argentina',
    esp: ['Terapia familiar sistémica', 'Salud sexual y procreación responsable', 'Psicología perinatal'],
    frase: 'Acompaño a niñas, niños y adolescentes en entornos seguros y confiables.',
    foto: 'staff/flavia-coletti.webp',
  },
  {
    nombre: 'Julia Rosa Villagaray F.',
    rol: 'Médico psiquiatra',
    pais: 'Perú',
    uni: 'Universidad Nacional Mayor de San Marcos, Perú',
    esp: ['Psiquiatría general e infanto-juvenil', 'Ansiedad, depresión y pánico', 'TDAH, TOC y bipolaridad', 'Tratamientos basados en evidencia'],
    frase: 'Comprometida con el bienestar integral a través de intervenciones basadas en la ciencia.',
    foto: 'staff/julia-villagaray.webp',
  },
]

export const nav = [
  { label: 'Inicio', to: '/' },
  { label: 'Sobre José', to: '/sobre' },
  { label: 'Centro', to: '/centro' },
  { label: 'Comunidades', to: '/comunidades' },
  { label: 'Charlas', to: '/charlas' },
  { label: 'Libros', to: '/libros' },
  { label: 'Consultas', to: '/consultas' },
]

// El blog vive aparte; aparece en el pie de página y en el inicio.
export const navExtra = [{ label: 'Blog', to: '/blog' }]
