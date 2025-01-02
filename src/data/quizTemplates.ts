export interface QuizTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  questions: {
    type: "multiple-choice" | "constructed-response";
    question: string;
    options?: string[];
    acceptableAnswers: string[];
  }[];
}

export const quizTemplates: QuizTemplate[] = [
  {
    id: "universal-circular-motion",
    name: "Universal Circular Motion",
    category: "Physics",
    description: "Practice Universal Circular Motion",
    questions: [
      {
        type: "multiple-choice",
        question:
          "If a car is traveling in uniform circular motion, which statement is true about its acceleration?",
        options: [
          "It must be increasing its speed",
          "It must be decreasing its speed",
          "It has no acceleration since its speed is constant",
          "It has centripetal acceleration toward the center of the circle",
        ],
        acceptableAnswers: [
          "It has centripetal acceleration toward the center of the circle",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "The centripetal acceleration of an object moving in uniform circular motion is proportional to:",
        options: ["v/r", "v²/r", "r/v", "r/v²"],
        acceptableAnswers: ["v²/r"],
      },
      {
        type: "constructed-response",
        question:
          "A 0.5 kg object moves in a horizontal circular path with radius 0.25 m at a constant speed of 4.0 m/s. What is the magnitude of its centripetal acceleration? (Answer in m/s²)",
        acceptableAnswers: ["64"],
      },
      {
        type: "multiple-choice",
        question:
          "Which force provides the centripetal force for a car turning on a flat road?",
        options: ["Gravity", "Normal force", "Friction", "Air resistance"],
        acceptableAnswers: ["Friction"],
      },
      {
        type: "constructed-response",
        question:
          "A car travels at 15 m/s around a horizontal circular track with radius 45 m. What is the centripetal acceleration? (Answer in m/s²)",
        acceptableAnswers: ["5", "5.0"],
      },
      {
        type: "multiple-choice",
        question:
          "If an object moving in uniform circular motion suddenly loses its centripetal force, it will:",
        options: [
          "Stop immediately",
          "Continue in circular motion",
          "Move in a straight line tangent to the circle",
          "Fall straight down",
        ],
        acceptableAnswers: ["Move in a straight line tangent to the circle"],
      },
      {
        type: "constructed-response",
        question:
          "A toy train completes 10 laps of a circular track with diameter 1 meter in 100 seconds. What is its speed in m/s? (Use π = 3.14)",
        acceptableAnswers: ["0.314", ".314"],
      },
      {
        type: "multiple-choice",
        question:
          "The gravitational field strength (g) at a location where a 10-kilogram mass weighs 30 newtons is:",
        options: ["0.33 m/s²", "3.0 m/s²", "30 m/s²", "300 m/s²"],
        acceptableAnswers: ["3.0 m/s²"],
      },
      {
        type: "multiple-choice",
        question:
          "According to Newton's Law of Universal Gravitation, if the distance between two masses is doubled, the gravitational force between them becomes:",
        options: [
          "Twice as large",
          "Half as large",
          "One-fourth as large",
          "One-eighth as large",
        ],
        acceptableAnswers: ["One-fourth as large"],
      },
      {
        type: "constructed-response",
        question:
          "A satellite orbits Earth at an altitude of 380 km. Given that Earth's radius is 6370 km and g at Earth's surface is 9.81 m/s², what is the approximate gravitational field strength at the satellite's altitude? (Answer in m/s²)",
        acceptableAnswers: ["8.75", "8.8"],
      },
      {
        type: "constructed-response",
        question: "A point on a rotating disk travels 31.4 meters in 10 seconds. If the radius is 0.5 meters, how many revolutions did it make? (Use π = 3.14)",
        acceptableAnswers: ["10"]
      },
      {
        type: "multiple-choice",
        question: "The speed of an object in uniform circular motion is:",
        options: [
          "Always increasing",
          "Always decreasing",
          "Constant in magnitude but changing in direction",
          "Zero since it returns to its starting point"
        ],
        acceptableAnswers: ["Constant in magnitude but changing in direction"]
      },
      {
        type: "constructed-response",
        question: "A carousel with radius 3 meters makes one complete revolution every 12 seconds. What is its speed in m/s? (Use π = 3.14)",
        acceptableAnswers: ["1.57", "1.6"]
      },
      {
        type: "multiple-choice",
        question: "The formula for the circumference of a circle is:",
        options: [
          "πr",
          "2πr",
          "πr²",
          "2πr²"
        ],
        acceptableAnswers: ["2πr"]
      },
      {
        type: "constructed-response",
        question: "An object makes 30 revolutions in one minute. What is its frequency in Hz?",
        acceptableAnswers: ["0.5", ".5"]
      },
      {
        type: "constructed-response",
        question: "A wheel with diameter 1 meter rotates 20 times in 5 seconds. What is its speed in m/s? (Use π = 3.14)",
        acceptableAnswers: ["12.56", "12.6"]
      },
      {
        type: "multiple-choice",
        question: "For an object in uniform circular motion, which quantity remains constant?",
        options: [
          "Velocity",
          "Speed",
          "Acceleration",
          "Direction"
        ],
        acceptableAnswers: ["Speed"]
      },
      {
        type: "constructed-response",
        question: "If a rotating object has a frequency of 2 Hz, what is its period in seconds?",
        acceptableAnswers: ["0.5", ".5"]
      },
      {
        type: "multiple-choice",
        question: "The distance traveled by an object in circular motion in one revolution is equal to:",
        options: [
          "The radius",
          "The diameter",
          "The circumference",
          "The area of the circle"
        ],
        acceptableAnswers: ["The circumference"]
      },
      {
        type: "constructed-response",
        question: "A point on a record player moves in a circle of radius 0.1 meters at 33.33 revolutions per minute. What is its speed in m/s? (Use π = 3.14)",
        acceptableAnswers: ["0.35", ".35"]
      },
      {
        type: "multiple-choice",
        question: "The formula v = d/t in circular motion refers to:",
        options: [
          "Instantaneous velocity",
          "Average velocity",
          "Angular velocity",
          "Speed along the circular path"
        ],
        acceptableAnswers: ["Speed along the circular path"]
      },
      {
        type: "constructed-response",
        question: "A satellite orbits Earth in a circular path with radius 8000 km. If it completes one orbit in 2 hours, what is its speed in km/h? (Use π = 3.14)",
        acceptableAnswers: ["25120", "25100"]
      },
      {
        type: "multiple-choice",
        question: "In uniform circular motion, the direction of velocity is:",
        options: [
          "Toward the center",
          "Away from the center",
          "Tangent to the circle",
          "Perpendicular to the radius"
        ],
        acceptableAnswers: ["Tangent to the circle"]
      },
      {
        type: "constructed-response",
        question: "A fan blade has radius 0.25 meters and rotates at 300 rpm (revolutions per minute). What is the speed of the tip in m/s? (Use π = 3.14)",
        acceptableAnswers: ["7.85", "7.9"],
      },
    ],
  },
  {
    id: "spanish-activities",
    name: "Spanish Activities & Hobbies",
    category: "Languages",
    description: "Practice Spanish vocabulary for activities and hobbies",
    questions: [
      {
        type: "constructed-response",
        question:
          'Translate "extracurricular activities" to Spanish: _____ _____',
        acceptableAnswers: [
          "actividades extracurriculares",
          "las actividades extracurriculares",
        ],
      },
      {
        type: "constructed-response",
        question: 'Translate "el ajedrez" to English: _____',
        acceptableAnswers: ["chess", "the chess"],
      },
      {
        type: "constructed-response",
        question: 'Translate "club" to Spanish: _____',
        acceptableAnswers: ["club", "el club"],
      },
      {
        type: "constructed-response",
        question: 'Translate "athletic club" to Spanish: _____ _____',
        acceptableAnswers: [
          "club atletico",
          "club atlético",
          "el club atletico",
          "el club atlético",
        ],
      },
      {
        type: "constructed-response",
        question: 'Translate "el equipo" to English: _____',
        acceptableAnswers: ["team", "the team"],
      },
      {
        type: "constructed-response",
        question: 'Translate "photography" to Spanish: _____',
        acceptableAnswers: [
          "fotografia",
          "fotografía",
          "la fotografia",
          "la fotografía",
        ],
      },
      {
        type: "constructed-response",
        question: 'Translate "el fotógrafo" to English: _____',
        acceptableAnswers: ["photographer", "the photographer"],
      },
      {
        type: "constructed-response",
        question: 'Translate "young people" to Spanish: _____',
        acceptableAnswers: ["jovenes", "jóvenes", "los jovenes", "los jóvenes"],
      },
      {
        type: "constructed-response",
        question: 'Translate "el miembro" to English: _____',
        acceptableAnswers: ["member", "the member"],
      },
      {
        type: "constructed-response",
        question: 'Translate "to be a member" to Spanish: _____ _____',
        acceptableAnswers: ["ser miembro"],
      },
      {
        type: "constructed-response",
        question: 'Translate "el pasatiempo" to English: _____',
        acceptableAnswers: ["pastime", "the pastime", "hobby", "the hobby"],
      },
      {
        type: "constructed-response",
        question: 'Translate "practice" to Spanish: _____',
        acceptableAnswers: [
          "practica",
          "práctica",
          "la practica",
          "la práctica",
        ],
      },
      {
        type: "constructed-response",
        question: 'Translate "la reunión" to English: _____',
        acceptableAnswers: ["meeting", "the meeting"],
      },
      {
        type: "constructed-response",
        question: 'Translate "cheerleader" to Spanish (masculine): _____',
        acceptableAnswers: ["animador", "el animador"],
      },
      {
        type: "constructed-response",
        question: 'Translate "cheerleader" to Spanish (feminine): _____',
        acceptableAnswers: ["animadora", "la animadora"],
      },
      {
        type: "constructed-response",
        question: 'Translate "martial arts" to Spanish: _____ _____',
        acceptableAnswers: ["artes marciales", "las artes marciales"],
      },
      {
        type: "constructed-response",
        question: 'Translate "hockey" to Spanish: _____',
        acceptableAnswers: ["hockey", "el hockey"],
      },
      {
        type: "constructed-response",
        question: 'Translate "swimming" to Spanish: _____',
        acceptableAnswers: [
          "natacion",
          "natación",
          "la natacion",
          "la natación",
        ],
      },
      {
        type: "constructed-response",
        question: 'Translate "la banda" to English: _____',
        acceptableAnswers: ["band", "the band"],
      },
      {
        type: "constructed-response",
        question: 'Translate "dancer" to Spanish (masculine): _____',
        acceptableAnswers: [
          "bailarin",
          "bailarín",
          "el bailarin",
          "el bailarín",
        ],
      },
      {
        type: "constructed-response",
        question: 'Translate "dancer" to Spanish (feminine): _____',
        acceptableAnswers: ["bailarina", "la bailarina"],
      },
      {
        type: "constructed-response",
        question: 'Translate "song" to Spanish: _____',
        acceptableAnswers: ["cancion", "canción", "la cancion", "la canción"],
      },
      {
        type: "constructed-response",
        question: 'Translate "singer" to Spanish (masculine): _____',
        acceptableAnswers: ["cantante", "el cantante"],
      },
      {
        type: "constructed-response",
        question: 'Translate "singer" to Spanish (feminine): _____',
        acceptableAnswers: ["cantante", "la cantante"],
      },
      {
        type: "constructed-response",
        question: 'Translate "choir" to Spanish: _____',
        acceptableAnswers: ["coro", "el coro"],
      },
      {
        type: "constructed-response",
        question: 'Translate "musician" to Spanish (masculine): _____',
        acceptableAnswers: ["musico", "músico", "el musico", "el músico"],
      },
      {
        type: "constructed-response",
        question: 'Translate "musician" to Spanish (feminine): _____',
        acceptableAnswers: ["musica", "música", "la musica", "la música"],
      },
      {
        type: "constructed-response",
        question: 'Translate "orchestra" to Spanish: _____',
        acceptableAnswers: ["orquesta", "la orquesta"],
      },
      {
        type: "constructed-response",
        question: 'Translate "voice" to Spanish: _____',
        acceptableAnswers: ["voz", "la voz"],
      },
      {
        type: "constructed-response",
        question: 'Translate "los voces" to English: _____',
        acceptableAnswers: ["voices", "the voices"],
      },
      {
        type: "constructed-response",
        question: 'Translate "to attend" to Spanish: _____',
        acceptableAnswers: ["asistir"],
      },
      {
        type: "constructed-response",
        question: 'Translate "to win/to earn" to Spanish: _____',
        acceptableAnswers: ["ganar"],
      },
      {
        type: "constructed-response",
        question: 'Translate "grabar" to English: _____',
        acceptableAnswers: ["to record", "record"],
      },
      {
        type: "constructed-response",
        question: 'Translate "to participate" to Spanish: _____',
        acceptableAnswers: ["participar"],
      },
      {
        type: "constructed-response",
        question: 'Translate "to take lessons" to Spanish: _____ _____',
        acceptableAnswers: ["tomar lecciones"],
      },
      {
        type: "constructed-response",
        question: 'Translate "volver" to English: _____',
        acceptableAnswers: ["to return", "return"],
      },
      {
        type: "constructed-response",
        question:
          'Translate "to create a Web page" to Spanish: _____ _____ _____ _____',
        acceptableAnswers: ["crear una pagina web", "crear una página web"],
      },
      {
        type: "constructed-response",
        question: 'Translate "to be online" to Spanish: _____ _____ _____',
        acceptableAnswers: ["estar en linea", "estar en línea"],
      },
      {
        type: "constructed-response",
        question: 'Translate "hacer una búsqueda" to English: _____',
        acceptableAnswers: [
          "to make a search",
          "make a search",
          "to search",
          "search",
        ],
      },
      {
        type: "constructed-response",
        question:
          'Translate "to surf the Web" to Spanish: _____ _____ _____ _____',
        acceptableAnswers: ["navegar en la red", "navegar en la Red"],
      },
      {
        type: "constructed-response",
        question:
          'Translate "to visit chat rooms" to Spanish: _____ _____ _____ _____',
        acceptableAnswers: ["visitar salones de chat"],
      },
      {
        type: "constructed-response",
        question: 'Translate "entre" to English: _____',
        acceptableAnswers: [
          "between",
          "among",
          "among/between",
          "between/among",
        ],
      },
      {
        type: "constructed-response",
        question: 'Translate "interest" to Spanish: _____',
        acceptableAnswers: ["interes", "interés", "el interes", "el interés"],
      },
      {
        type: "constructed-response",
        question: 'Translate "opportunity" to Spanish: _____',
        acceptableAnswers: ["oportunidad", "la oportunidad"],
      },
      {
        type: "constructed-response",
        question: 'Translate "las oportunidades" to English: _____',
        acceptableAnswers: ["opportunities", "the opportunities"],
      },
    ],
  },
];

export const categories = Array.from(
  new Set(quizTemplates.map((template) => template.category))
);
