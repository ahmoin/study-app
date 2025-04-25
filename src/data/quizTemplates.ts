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
        question:
          "A point on a rotating disk travels 31.4 meters in 10 seconds. If the radius is 0.5 meters, how many revolutions did it make? (Use π = 3.14)",
        acceptableAnswers: ["10"],
      },
      {
        type: "multiple-choice",
        question: "The speed of an object in uniform circular motion is:",
        options: [
          "Always increasing",
          "Always decreasing",
          "Constant in magnitude but changing in direction",
          "Zero since it returns to its starting point",
        ],
        acceptableAnswers: ["Constant in magnitude but changing in direction"],
      },
      {
        type: "constructed-response",
        question:
          "A carousel with radius 3 meters makes one complete revolution every 12 seconds. What is its speed in m/s? (Use π = 3.14)",
        acceptableAnswers: ["1.57", "1.6"],
      },
      {
        type: "multiple-choice",
        question: "The formula for the circumference of a circle is:",
        options: ["πr", "2πr", "πr²", "2πr²"],
        acceptableAnswers: ["2πr"],
      },
      {
        type: "constructed-response",
        question:
          "An object makes 30 revolutions in one minute. What is its frequency in Hz?",
        acceptableAnswers: ["0.5", ".5"],
      },
      {
        type: "constructed-response",
        question:
          "A wheel with diameter 1 meter rotates 20 times in 5 seconds. What is its speed in m/s? (Use π = 3.14)",
        acceptableAnswers: ["12.56", "12.6"],
      },
      {
        type: "multiple-choice",
        question:
          "For an object in uniform circular motion, which quantity remains constant?",
        options: ["Velocity", "Speed", "Acceleration", "Direction"],
        acceptableAnswers: ["Speed"],
      },
      {
        type: "constructed-response",
        question:
          "If a rotating object has a frequency of 2 Hz, what is its period in seconds?",
        acceptableAnswers: ["0.5", ".5"],
      },
      {
        type: "multiple-choice",
        question:
          "The distance traveled by an object in circular motion in one revolution is equal to:",
        options: [
          "The radius",
          "The diameter",
          "The circumference",
          "The area of the circle",
        ],
        acceptableAnswers: ["The circumference"],
      },
      {
        type: "constructed-response",
        question:
          "A point on a record player moves in a circle of radius 0.1 meters at 33.33 revolutions per minute. What is its speed in m/s? (Use π = 3.14)",
        acceptableAnswers: ["0.35", ".35"],
      },
      {
        type: "multiple-choice",
        question: "The formula v = d/t in circular motion refers to:",
        options: [
          "Instantaneous velocity",
          "Average velocity",
          "Angular velocity",
          "Speed along the circular path",
        ],
        acceptableAnswers: ["Speed along the circular path"],
      },
      {
        type: "constructed-response",
        question:
          "A satellite orbits Earth in a circular path with radius 8000 km. If it completes one orbit in 2 hours, what is its speed in km/h? (Use π = 3.14)",
        acceptableAnswers: ["25120", "25100"],
      },
      {
        type: "multiple-choice",
        question: "In uniform circular motion, the direction of velocity is:",
        options: [
          "Toward the center",
          "Away from the center",
          "Tangent to the circle",
          "Perpendicular to the radius",
        ],
        acceptableAnswers: ["Tangent to the circle"],
      },
      {
        type: "constructed-response",
        question:
          "A fan blade has radius 0.25 meters and rotates at 300 rpm (revolutions per minute). What is the speed of the tip in m/s? (Use π = 3.14)",
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
  {
    id: "purple-hibiscus",
    name: "Purple Hibiscus by Chimamanda Ngozi Adichie",
    category: "Literature",
    description:
      "Test your understanding of Purple Hibiscus's themes, characters, and literary devices",
    questions: [
      {
        type: "multiple-choice",
        question:
          "Which literary device is represented by the purple hibiscus flowers in the novel?",
        options: ["Personification", "Symbolism", "Hyperbole", "Onomatopoeia"],
        acceptableAnswers: ["Symbolism"],
      },
      {
        type: "multiple-choice",
        question: "Who serves as a foil to Papa Eugene in the novel?",
        options: ["Jaja", "Father Amadi", "Aunty Ifeoma", "Papa-Nnukwu"],
        acceptableAnswers: ["Aunty Ifeoma"],
      },
      {
        type: "constructed-response",
        question:
          "Explain how Jaja's refusal to receive communion on Palm Sunday represents both characterization and conflict in the novel.",
        acceptableAnswers: [
          "It shows Jaja's growing defiance against his father's religious authority and marks the beginning of the family's transformation",
          "The incident demonstrates Jaja's character development and creates direct conflict with Papa's strict Catholic control",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "Which recurring motif represents freedom and authenticity in the novel?",
        options: [
          "Palm fronds",
          "Purple hibiscus",
          "Church bells",
          "Traditional songs",
        ],
        acceptableAnswers: ["Purple hibiscus"],
      },
      {
        type: "constructed-response",
        question:
          "How does the contrast between Papa Eugene's house in Enugu and Aunty Ifeoma's house in Nsukka reflect the novel's themes?",
        acceptableAnswers: [
          "Eugene's house represents oppression and silence while Ifeoma's represents freedom and expression",
          "The houses contrast order and control with chaos and freedom",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "What does Mama's constant polishing of her figurines symbolize?",
        options: [
          "Her wealth and status",
          "Her love of cleanliness",
          "Her attempt to maintain perfection under abuse",
          "Her religious devotion",
        ],
        acceptableAnswers: ["Her attempt to maintain perfection under abuse"],
      },
      {
        type: "constructed-response",
        question:
          "Analyze how Amaka's criticism of Kambili and Jaja as 'abnormal' reveals important character dynamics and family conflicts.",
        acceptableAnswers: [
          "It highlights the contrast between the cousins' upbringings and shows how Eugene's control has affected his children's social development",
          "The criticism reveals the effects of Eugene's oppressive parenting and the differences between the two families",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "Which type of conflict is most prominent in Papa-Nnukwu's relationship with Eugene?",
        options: [
          "Man vs. Nature",
          "Man vs. Society",
          "Man vs. Self",
          "Man vs. Man",
        ],
        acceptableAnswers: ["Man vs. Man"],
      },
      {
        type: "constructed-response",
        question:
          "How does Father Amadi's relationship with Kambili contribute to her character development?",
        acceptableAnswers: [
          "He helps her find her voice and confidence while showing her a gentler form of Catholicism",
          "He represents a contrast to Eugene's harsh religious authority and helps Kambili develop self-expression",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "What does the story of Jaja of Opobo contribute to the novel's themes?",
        options: [
          "It provides historical context only",
          "It parallels Jaja's rebellion against authority",
          "It describes Nigerian culture",
          "It explains the origin of Jaja's name",
        ],
        acceptableAnswers: ["It parallels Jaja's rebellion against authority"],
      },
      {
        type: "constructed-response",
        question:
          "How does Amaka's reaction to Kambili's painting experience reflect the novel's themes of religion and control?",
        acceptableAnswers: [
          "It shows how Kambili's religious experience has been controlled and centered around whiteness, while Amaka embraces a more culturally inclusive Christianity",
          "The interaction reveals how Papa's control has limited Kambili's religious and cultural expression compared to her cousin's more liberated experience",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "What does the family's different approaches to night prayer reveal about the theme of religious expression?",
        options: [
          "Only Aunty Ifeoma's family is truly religious",
          "Papa's way is the only correct way to pray",
          "Different forms of Catholic worship can coexist",
          "Prayer should always be structured and scheduled",
        ],
        acceptableAnswers: ["Different forms of Catholic worship can coexist"],
      },
      {
        type: "constructed-response",
        question:
          "Analyze how the schedules Papa creates serve as both a symbol and a plot device in the novel.",
        acceptableAnswers: [
          "The schedules symbolize Papa's rigid control while driving conflict between the cousins and highlighting the differences between the two households",
          "They represent Papa's oppressive control while creating tension between the families and showing the contrast between freedom and constraint",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "How does Aunty Ifeoma's response to Amaka's criticism of her cousins demonstrate her character?",
        options: [
          "She shows complete agreement with Amaka",
          "She balances freedom of expression with respect for others",
          "She silences Amaka completely",
          "She sides with Kambili and Jaja",
        ],
        acceptableAnswers: [
          "She balances freedom of expression with respect for others",
        ],
      },
      {
        type: "constructed-response",
        question:
          "Explain how the story of Jaja of Opobo influences Jaja's character development and future actions.",
        acceptableAnswers: [
          "The story inspires Jaja's later defiance by providing an example of standing up against oppressive authority",
          "It serves as a catalyst for Jaja's rebellion by showing him the historical precedent of resistance to control",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "What does Kambili's stutter represent in terms of character development?",
        options: [
          "A medical condition only",
          "A symbol of her physical weakness",
          "A manifestation of her suppressed voice and freedom",
          "A way to gain sympathy from others",
        ],
        acceptableAnswers: [
          "A manifestation of her suppressed voice and freedom",
        ],
      },
      {
        type: "constructed-response",
        question:
          "How does Papa-Nnukwu's illness reveal the changing dynamics in Jaja's character?",
        acceptableAnswers: [
          "Jaja shows growing independence by caring more about his grandfather's health than Papa's potential reaction",
          "His concern for Papa-Nnukwu demonstrates his breaking free from Papa's control and religious restrictions",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "Which theme is most prominent in the contrast between Amaka and Kambili's social interactions?",
        options: [
          "Religious differences",
          "Economic status",
          "The effects of parental control on development",
          "Academic achievement",
        ],
        acceptableAnswers: ["The effects of parental control on development"],
      },
      {
        type: "constructed-response",
        question:
          "Analyze how Aunty Ifeoma's household serves as both a foil and catalyst for change in the novel.",
        acceptableAnswers: [
          "Her home represents freedom and authentic expression, contrasting with Papa's rigid control while inspiring change in Jaja and Kambili",
          "The household demonstrates an alternative way of living that challenges Papa's authority and encourages the children's growth",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "How does the novel's treatment of religion reflect broader themes of colonialism and traditionalism?",
        options: [
          "It completely rejects Christianity",
          "It shows only traditional beliefs as valid",
          "It demonstrates the tension between Western and African religious expressions",
          "It ignores religious conflicts entirely",
        ],
        acceptableAnswers: [
          "It demonstrates the tension between Western and African religious expressions",
        ],
      },
      {
        type: "constructed-response",
        question:
          "What does the motif of silence and speech reveal about the Achike family?",
        acceptableAnswers: [
          "The motif of silence and speech reveals that the Achike family is very isolated and have little communication between each other",
        ],
      },
      {
        type: "constructed-response",
        question: "How does Adichie use motifs to reveal Kambili's conflicts?",
        acceptableAnswers: [
          "Adichie uses motifs like silence, and red to reveal Kambili's internal conflicts between her loyalty to her father and her struggle to find her own voice",
        ],
      },
      {
        type: "constructed-response",
        question: "What purpose does religion serve in Purple Hibiscus?",
        acceptableAnswers: [
          "Religion is the foundation of Papa's strictness, abuse and high expectations for his family",
        ],
      },
      {
        type: "constructed-response",
        question:
          "What does Adichie's use of the red motif illuminate about a theme of Purple Hibiscus?",
        acceptableAnswers: [
          "Adichie's use of the red motif demonstrates the freedom Kambili internally wishes she can have, but cannot have",
        ],
      },
      {
        type: "constructed-response",
        question:
          "What is the relationship between the use of foils and motifs in Purple Hibiscus?",
        acceptableAnswers: [
          "Foils, like Kambili and Amaka, reinforce the motif of silence and speech to highlight the impact a controlling environment has on one’s agency",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "Which sentence demonstrates the most precise use of 'authentic'?",
        options: [
          "The restaurant claimed to serve authentic Italian cuisine",
          "Her authentic passion for teaching inspired her students",
          "The museum displayed authentic artifacts from ancient Egypt",
          "He tried to maintain an authentic social media presence",
        ],
        acceptableAnswers: [
          "Her authentic passion for teaching inspired her students",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence best captures the meaning of 'contribute'?",
        options: [
          "Her research contributed significantly to cancer treatment",
          "Each employee contributed to the holiday fund",
          "The spices contributed to the dish's flavor",
          "Regular exercise contributes to better health",
        ],
        acceptableAnswers: [
          "Her research contributed significantly to cancer treatment",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence uses 'demeanor' most effectively?",
        options: [
          "The doctor's calm demeanor reassured the worried patients",
          "His friendly demeanor made him popular at work",
          "She noticed a change in his demeanor",
          "Their professional demeanor impressed the clients",
        ],
        acceptableAnswers: [
          "The doctor's calm demeanor reassured the worried patients",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence captures the deepest sense of 'despair'?",
        options: [
          "She felt despair after losing her lifelong business",
          "The team's loss led to despair among fans",
          "He expressed despair about the test results",
          "Financial troubles caused their despair",
        ],
        acceptableAnswers: [
          "She felt despair after losing her lifelong business",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence uses 'distressed' most effectively?",
        options: [
          "The mother was distressed by her child's fever",
          "The distressed wood gave the furniture character",
          "He became distressed about the deadline",
          "They found the distressed animal in the park",
        ],
        acceptableAnswers: ["The mother was distressed by her child's fever"],
      },
      {
        type: "multiple-choice",
        question:
          "Which sentence demonstrates the most precise use of 'exacerbate'?",
        options: [
          "Stress can exacerbate existing health conditions",
          "Poor planning would exacerbate the problem",
          "The heat might exacerbate the situation",
          "His comments could exacerbate tensions",
        ],
        acceptableAnswers: ["Stress can exacerbate existing health conditions"],
      },
      {
        type: "multiple-choice",
        question: "Which sentence uses 'impede' most effectively?",
        options: [
          "Heavy traffic impeded emergency vehicles from reaching the scene",
          "Bad weather impeded their travel plans",
          "Language barriers impeded communication",
          "The fence impeded their view",
        ],
        acceptableAnswers: [
          "Heavy traffic impeded emergency vehicles from reaching the scene",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence best illustrates the concept of 'strain'?",
        options: [
          "The long hours put a strain on family relationships",
          "The rope showed signs of strain",
          "Financial strain affected their decisions",
          "She felt the strain of overwork",
        ],
        acceptableAnswers: [
          "The long hours put a strain on family relationships",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence uses 'undermine' most effectively?",
        options: [
          "Lack of evidence undermined the prosecution's case",
          "Constant criticism undermined his confidence",
          "Poor maintenance undermined the building's structure",
          "Budget cuts undermined the program",
        ],
        acceptableAnswers: [
          "Lack of evidence undermined the prosecution's case",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence captures the deepest sense of 'vulnerable'?",
        options: [
          "The elderly are particularly vulnerable during heat waves",
          "The company was vulnerable to cyber attacks",
          "Young children are vulnerable to peer pressure",
          "The coast is vulnerable to flooding",
        ],
        acceptableAnswers: [
          "The elderly are particularly vulnerable during heat waves",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence uses 'benevolent' most effectively?",
        options: [
          "The benevolent donor provided scholarships for students in need",
          "She had a benevolent smile",
          "The organization made benevolent gestures",
          "His benevolent nature made him popular",
        ],
        acceptableAnswers: [
          "The benevolent donor provided scholarships for students in need",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence demonstrates the best use of 'defiant'?",
        options: [
          "The protesters remained defiant despite facing arrest",
          "He gave a defiant look",
          "Her defiant attitude caused problems",
          "The child was defiant about bedtime",
        ],
        acceptableAnswers: [
          "The protesters remained defiant despite facing arrest",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence illustrates 'discord' most effectively?",
        options: [
          "Political discord prevented the bill from passing",
          "There was discord among team members",
          "Family discord ruined the holiday",
          "The meeting ended in discord",
        ],
        acceptableAnswers: [
          "Political discord prevented the bill from passing",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence uses 'evoke' most effectively?",
        options: [
          "The old photograph evoked memories of childhood summers",
          "His speech evoked strong emotions",
          "The music evoked different feelings",
          "The scent evoked the past",
        ],
        acceptableAnswers: [
          "The old photograph evoked memories of childhood summers",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "Which sentence demonstrates the most precise use of 'extort'?",
        options: [
          "The criminals tried to extort money by threatening the business",
          "He attempted to extort a confession",
          "They would extort payments from local shops",
          "She tried to extort favors",
        ],
        acceptableAnswers: [
          "The criminals tried to extort money by threatening the business",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence uses 'ingrain' most effectively?",
        options: [
          "Early education helps ingrain good study habits",
          "The coach tried to ingrain proper technique",
          "Parents ingrain values in their children",
          "Practice can ingrain new skills",
        ],
        acceptableAnswers: ["Early education helps ingrain good study habits"],
      },
      {
        type: "multiple-choice",
        question: "Which sentence demonstrates the best use of 'intercede'?",
        options: [
          "The mediator interceded before the conflict escalated",
          "She interceded on behalf of her friend",
          "The teacher had to intercede in the argument",
          "He interceded to prevent a fight",
        ],
        acceptableAnswers: [
          "The mediator interceded before the conflict escalated",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence uses 'patronize' most effectively?",
        options: [
          "Local residents continued to patronize small businesses during the crisis",
          "His patronizing tone offended everyone",
          "They patronized the new restaurant",
          "She felt patronized by his comments",
        ],
        acceptableAnswers: [
          "Local residents continued to patronize small businesses during the crisis",
        ],
      },
      {
        type: "multiple-choice",
        question:
          "Which sentence demonstrates the most precise use of 'reconcile'?",
        options: [
          "The accountant needed to reconcile the financial statements",
          "They tried to reconcile their differences",
          "She couldn't reconcile her beliefs with the evidence",
          "The couple hoped to reconcile after their fight",
        ],
        acceptableAnswers: [
          "The accountant needed to reconcile the financial statements",
        ],
      },
      {
        type: "multiple-choice",
        question: "Which sentence uses 'subdue' most effectively?",
        options: [
          "The police had to subdue the violent suspect",
          "They managed to subdue the fire",
          "Medicine helped subdue the pain",
          "She tried to subdue her emotions",
        ],
        acceptableAnswers: ["The police had to subdue the violent suspect"],
      },
    ],
  },
  {
    "id": "spanish-driving-terms-quiz",
    "name": "Spanish Driving Terms Quiz",
    "category": "languages",
    "description": "constructed-response quiz to practice using spanish driving vocabulary in context",
    "questions": [
      {
        "type": "constructed-response",
        "question": "usa la palabra 'la avenida' en una oración.",
        "acceptableAnswers": [
          "mi casa está en la avenida principal.",
          "caminamos por la avenida hasta llegar al parque."
        ]
      },
      {
        "type": "constructed-response",
        "question": "describe lo que hace un 'conductor'.",
        "acceptableAnswers": [
          "un conductor maneja un vehículo.",
          "el conductor lleva a los pasajeros a su destino."
        ]
      },
      {
        "type": "constructed-response",
        "question": "¿qué haces cuando ves un 'semáforo' en rojo?",
        "acceptableAnswers": [
          "me detengo.",
          "paro el carro.",
          "no cruzo la calle."
        ]
      },
      {
        "type": "constructed-response",
        "question": "usa 'cruzar' en una oración.",
        "acceptableAnswers": [
          "voy a cruzar la calle cuando no haya tráfico.",
          "mi abuela necesita ayuda para cruzar la avenida."
        ]
      },
      {
        "type": "constructed-response",
        "question": "¿qué te puede dar un policía si estacionas mal?",
        "acceptableAnswers": [
          "me puede poner una multa.",
          "me da una multa por estacionar mal."
        ]
      },
      {
        "type": "constructed-response",
        "question": "usa la palabra 'izquierdo' en una oración.",
        "acceptableAnswers": [
          "dobla a la izquierda en la esquina.",
          "el semáforo está en el lado izquierdo."
        ]
      },
      {
        "type": "constructed-response",
        "question": "¿qué significa '¡basta!' y cuándo lo usarías?",
        "acceptableAnswers": [
          "significa '¡suficiente!' y lo uso cuando quiero que alguien pare de hacer algo.",
          "lo digo cuando estoy molesto y quiero que alguien se detenga."
        ]
      },
      {
        "type": "constructed-response",
        "question": "¿qué significa 'estar seguro' y por qué es importante al manejar?",
        "acceptableAnswers": [
          "significa estar convencido de algo. es importante estar seguro antes de cruzar una calle.",
          "necesito estar seguro de que no viene un carro antes de cruzar."
        ]
      },
      {
        "type": "constructed-response",
        "question": "usa 'peligroso' en una oración relacionada con manejar.",
        "acceptableAnswers": [
          "es peligroso manejar rápido en la lluvia.",
          "cruzar sin mirar es muy peligroso."
        ]
      },
      {
        "type": "constructed-response",
        "question": "¿qué harías si el puente está cerrado?",
        "acceptableAnswers": [
          "buscaría otra ruta.",
          "no cruzaría el puente."
        ]
      },
      {
        "type": "constructed-response",
        "question": "usa 'el camión' en una oración.",
        "acceptableAnswers": [
          "el camión transporta mercancía pesada.",
          "vi un camión rojo en la carretera."
        ]
      },
      {
        "type": "constructed-response",
        "question": "¿cómo llegas a la escuela desde tu casa? menciona 'la carretera'.",
        "acceptableAnswers": [
          "tomo la carretera principal para llegar a la escuela.",
          "manejo por la carretera hasta la siguiente salida."
        ]
      },
      {
        "type": "constructed-response",
        "question": "describe qué hay en una 'cuadra'.",
        "acceptableAnswers": [
          "en la cuadra hay casas y una tienda.",
          "la escuela está a una cuadra de mi casa."
        ]
      },
      {
        "type": "constructed-response",
        "question": "usa 'la esquina' en una indicación.",
        "acceptableAnswers": [
          "gira a la derecha en la esquina.",
          "la tienda está en la esquina."
        ]
      },
      {
        "type": "constructed-response",
        "question": "¿qué puedes ver en una 'plaza'?",
        "acceptableAnswers": [
          "en la plaza hay una fuente y muchas personas.",
          "me gusta caminar por la plaza los domingos."
        ]
      },
      {
        "type": "constructed-response",
        "question": "usa 'la fuente' en una oración.",
        "acceptableAnswers": [
          "los niños juegan cerca de la fuente.",
          "la fuente está en el centro de la plaza."
        ]
      },
      {
        "type": "constructed-response",
        "question": "usa 'el peatón' en una oración sobre seguridad.",
        "acceptableAnswers": [
          "el peatón debe cruzar en el cruce de calles.",
          "los conductores deben respetar al peatón."
        ]
      },
      {
        "type": "constructed-response",
        "question": "¿qué necesitas para manejar legalmente?",
        "acceptableAnswers": [
          "necesito un permiso de manejar.",
          "debo tener el permiso de manejar para conducir."
        ]
      },
      {
        "type": "constructed-response",
        "question": "usa 'el policía' en una situación de tráfico.",
        "acceptableAnswers": [
          "el policía dirige el tráfico en la mañana.",
          "un policía me ayudó cuando me perdí."
        ]
      },
      {
        "type": "constructed-response",
        "question": "¿qué haces cuando ves una 'señal de parada'?",
        "acceptableAnswers": [
          "me detengo completamente.",
          "paro el coche en la señal de parada."
        ]
      },
      {
        "type": "constructed-response",
        "question": "usa 'ancho' en una descripción de la calle.",
        "acceptableAnswers": [
          "esta calle es muy ancha.",
          "necesitamos una avenida más ancha para el tráfico."
        ]
      },
      {
        "type": "constructed-response",
        "question": "usa 'de acuerdo' en una conversación.",
        "acceptableAnswers": [
          "sí, estoy de acuerdo contigo.",
          "de acuerdo, vamos por esa ruta."
        ]
      },
      {
        "type": "constructed-response",
        "question": "¿qué haces cuando tienes que esperar mucho tráfico?",
        "acceptableAnswers": [
          "tengo paciencia y espero.",
          "me relajo mientras espero que avance el tráfico."
        ]
      },
      {
        "type": "constructed-response",
        "question": "usa 'complicado' en una situación de manejo.",
        "acceptableAnswers": [
          "manejar en esta ciudad es complicado.",
          "el tráfico en hora pico es muy complicado."
        ]
      },
      {
        "type": "constructed-response",
        "question": "usa 'derecho' para dar direcciones.",
        "acceptableAnswers": [
          "sigue derecho hasta el semáforo.",
          "camina derecho por tres cuadras."
        ]
      },
      {
        "type": "constructed-response",
        "question": "usa 'despacio' como una advertencia.",
        "acceptableAnswers": [
          "maneja despacio en la zona escolar.",
          "camina despacio, está resbaloso."
        ]
      },
      {
        "type": "constructed-response",
        "question": "usa 'la estatua' en una descripción.",
        "acceptableAnswers": [
          "hay una estatua en medio de la plaza.",
          "la estatua representa a un héroe nacional."
        ]
      },
      {
        "type": "constructed-response",
        "question": "¿qué significa 'quitar' en el contexto del tráfico?",
        "acceptableAnswers": [
          "quitar un coche mal estacionado.",
          "el policía va a quitar el obstáculo del camino."
        ]
      },
      {
        "type": "constructed-response",
        "question": "usa 'estrecho' para describir una calle.",
        "acceptableAnswers": [
          "la calle es muy estrecha para dos carros.",
          "el camino estrecho es difícil de manejar."
        ]
      }
    ]
  }  
];

export const categories = Array.from(
  new Set(quizTemplates.map((template) => template.category)),
);
