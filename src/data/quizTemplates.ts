export interface QuizTemplate {
    id: string;
    name: string;
    category: string;
    description: string;
    questions: {
      type: 'multiple-choice' | 'constructed-response';
      question: string;
      options?: string[];
      acceptableAnswers: string[]; 
    }[];
  }
  

export const quizTemplates: QuizTemplate[] = [
  {
    id: 'spanish-activities',
    name: 'Spanish Activities & Hobbies',
    category: 'Languages',
    description: 'Practice Spanish vocabulary for activities and hobbies',
    questions: [
      {
        type: 'constructed-response',
        question: 'Translate "extracurricular activities" to Spanish: _____ _____',
        acceptableAnswers: ['actividades extracurriculares', 'las actividades extracurriculares']
      },
      {
        type: 'constructed-response',
        question: 'Translate "el ajedrez" to English: _____',
        acceptableAnswers: ['chess', 'the chess']
      },
      {
        type: 'constructed-response',
        question: 'Translate "club" to Spanish: _____',
        acceptableAnswers: ['club', 'el club']
      },
      {
        type: 'constructed-response',
        question: 'Translate "athletic club" to Spanish: _____ _____',
        acceptableAnswers: ['club atletico', 'club atlético', 'el club atletico', 'el club atlético']
      },
      {
        type: 'constructed-response',
        question: 'Translate "el equipo" to English: _____',
        acceptableAnswers: ['team', 'the team']
      },
      {
        type: 'constructed-response',
        question: 'Translate "photography" to Spanish: _____',
        acceptableAnswers: ['fotografia', 'fotografía', 'la fotografia', 'la fotografía']
      },
      {
        type: 'constructed-response',
        question: 'Translate "el fotógrafo" to English: _____',
        acceptableAnswers: ['photographer', 'the photographer']
      },
      {
        type: 'constructed-response',
        question: 'Translate "young people" to Spanish: _____',
        acceptableAnswers: ['jovenes', 'jóvenes', 'los jovenes', 'los jóvenes']
      },
      {
        type: 'constructed-response',
        question: 'Translate "el miembro" to English: _____',
        acceptableAnswers: ['member', 'the member']
      },
      {
        type: 'constructed-response',
        question: 'Translate "to be a member" to Spanish: _____ _____',
        acceptableAnswers: ['ser miembro']
      },
      {
        type: 'constructed-response',
        question: 'Translate "el pasatiempo" to English: _____',
        acceptableAnswers: ['pastime', 'the pastime', 'hobby', 'the hobby']
      },
      {
        type: 'constructed-response',
        question: 'Translate "practice" to Spanish: _____',
        acceptableAnswers: ['practica', 'práctica', 'la practica', 'la práctica']
      },
      {
        type: 'constructed-response',
        question: 'Translate "la reunión" to English: _____',
        acceptableAnswers: ['meeting', 'the meeting']
      },
      {
        type: 'constructed-response',
        question: 'Translate "cheerleader" to Spanish (masculine): _____',
        acceptableAnswers: ['animador', 'el animador']
      },
      {
        type: 'constructed-response',
        question: 'Translate "cheerleader" to Spanish (feminine): _____',
        acceptableAnswers: ['animadora', 'la animadora']
      },
      {
        type: 'constructed-response',
        question: 'Translate "martial arts" to Spanish: _____ _____',
        acceptableAnswers: ['artes marciales', 'las artes marciales']
      },
      {
        type: 'constructed-response',
        question: 'Translate "hockey" to Spanish: _____',
        acceptableAnswers: ['hockey', 'el hockey']
      },
      {
        type: 'constructed-response',
        question: 'Translate "swimming" to Spanish: _____',
        acceptableAnswers: ['natacion', 'natación', 'la natacion', 'la natación']
      },
      {
        type: 'constructed-response',
        question: 'Translate "la banda" to English: _____',
        acceptableAnswers: ['band', 'the band']
      },
      {
        type: 'constructed-response',
        question: 'Translate "dancer" to Spanish (masculine): _____',
        acceptableAnswers: ['bailarin', 'bailarín', 'el bailarin', 'el bailarín']
      },
      {
        type: 'constructed-response',
        question: 'Translate "dancer" to Spanish (feminine): _____',
        acceptableAnswers: ['bailarina', 'la bailarina']
      },
      {
        type: 'constructed-response',
        question: 'Translate "song" to Spanish: _____',
        acceptableAnswers: ['cancion', 'canción', 'la cancion', 'la canción']
      },
      {
        type: 'constructed-response',
        question: 'Translate "singer" to Spanish (masculine): _____',
        acceptableAnswers: ['cantante', 'el cantante']
      },
      {
        type: 'constructed-response',
        question: 'Translate "singer" to Spanish (feminine): _____',
        acceptableAnswers: ['cantante', 'la cantante']
      },
      {
        type: 'constructed-response',
        question: 'Translate "choir" to Spanish: _____',
        acceptableAnswers: ['coro', 'el coro']
      },
      {
        type: 'constructed-response',
        question: 'Translate "musician" to Spanish (masculine): _____',
        acceptableAnswers: ['musico', 'músico', 'el musico', 'el músico']
      },
      {
        type: 'constructed-response',
        question: 'Translate "musician" to Spanish (feminine): _____',
        acceptableAnswers: ['musica', 'música', 'la musica', 'la música']
      },
      {
        type: 'constructed-response',
        question: 'Translate "orchestra" to Spanish: _____',
        acceptableAnswers: ['orquesta', 'la orquesta']
      },
      {
        type: 'constructed-response',
        question: 'Translate "voice" to Spanish: _____',
        acceptableAnswers: ['voz', 'la voz']
      },
      {
        type: 'constructed-response',
        question: 'Translate "los voces" to English: _____',
        acceptableAnswers: ['voices', 'the voices']
      },
      {
        type: 'constructed-response',
        question: 'Translate "to attend" to Spanish: _____',
        acceptableAnswers: ['asistir']
      },
      {
        type: 'constructed-response',
        question: 'Translate "to win/to earn" to Spanish: _____',
        acceptableAnswers: ['ganar']
      },
      {
        type: 'constructed-response',
        question: 'Translate "grabar" to English: _____',
        acceptableAnswers: ['to record', 'record']
      },
      {
        type: 'constructed-response',
        question: 'Translate "to participate" to Spanish: _____',
        acceptableAnswers: ['participar']
      },
      {
        type: 'constructed-response',
        question: 'Translate "to take lessons" to Spanish: _____ _____',
        acceptableAnswers: ['tomar lecciones']
      },
      {
        type: 'constructed-response',
        question: 'Translate "volver" to English: _____',
        acceptableAnswers: ['to return', 'return']
      },
      {
        type: 'constructed-response',
        question: 'Translate "to create a Web page" to Spanish: _____ _____ _____ _____',
        acceptableAnswers: ['crear una pagina web', 'crear una página web']
      },
      {
        type: 'constructed-response',
        question: 'Translate "to be online" to Spanish: _____ _____ _____',
        acceptableAnswers: ['estar en linea', 'estar en línea']
      },
      {
        type: 'constructed-response',
        question: 'Translate "hacer una búsqueda" to English: _____',
        acceptableAnswers: ['to make a search', 'make a search', 'to search', 'search']
      },
      {
        type: 'constructed-response',
        question: 'Translate "to surf the Web" to Spanish: _____ _____ _____ _____',
        acceptableAnswers: ['navegar en la red', 'navegar en la Red']
      },
      {
        type: 'constructed-response',
        question: 'Translate "to visit chat rooms" to Spanish: _____ _____ _____ _____',
        acceptableAnswers: ['visitar salones de chat']
      },
      {
        type: 'constructed-response',
        question: 'Translate "entre" to English: _____',
        acceptableAnswers: ['between', 'among', 'among/between', 'between/among']
      },
      {
        type: 'constructed-response',
        question: 'Translate "interest" to Spanish: _____',
        acceptableAnswers: ['interes', 'interés', 'el interes', 'el interés']
      },
      {
        type: 'constructed-response',
        question: 'Translate "opportunity" to Spanish: _____',
        acceptableAnswers: ['oportunidad', 'la oportunidad']
      },
      {
        type: 'constructed-response',
        question: 'Translate "las oportunidades" to English: _____',
        acceptableAnswers: ['opportunities', 'the opportunities']
      }
    ]
  }
];

export const categories = Array.from(
  new Set(quizTemplates.map(template => template.category))
); 