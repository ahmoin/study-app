import type { Activity } from "@/types/quiz";

export const activityTemplates: Activity[] = [
  {
    id: "geometry-constructions",
    category: "Math",
    name: "Geometry Constructions",
    description: "Practice geometry constructions",
    variant: "four-choice",
    wordPairs: [
      {
        word: "What is a compass's main purpose?",
        translation:
          "locate points that are a certain distance away from a given point",
      },
      {
        word: "How do you explain why a triangle is equilateral?",
        translation:
          "point C was created by two circles with the same radii of the distance of AB and the center of A and B, AB = AC = BC, which is the definition of an equilateral triangle",
      },
      {
        word: "How do you copy an angle?",
        translation:
          "Create 1 arc that intersects both lines and then create another arc from one intersection point to the other.",
      },
      {
        word: "When creating perpendicular lines, make sure the arcs intersect?",
        translation:
          "Yes, the arcs must intersect to create the perpendicular lines.",
      },
      {
        word: "What is a circumscribed circle and how do we create circumcenter?",
        translation:
          "The circumscribed circle is a circle that passes through all the vertices of a triangle. To create the circumcenter, we need to find the intersection of the perpendicular bisectors of the sides of the triangle.",
      },
    ],
  },
  {
    id: "spanish-colors",
    name: "Spanish Colors",
    category: "Languages",
    description: "Practice Spanish color vocabulary",
    variant: "four-choice",
    wordPairs: [
      { word: "rojo", translation: "red" },
      { word: "azul", translation: "blue" },
      { word: "verde", translation: "green" },
      { word: "amarillo", translation: "yellow" },
      { word: "negro", translation: "black" },
      { word: "blanco", translation: "white" },
      { word: "gris", translation: "gray" },
      { word: "marrón", translation: "brown" },
      { word: "morado", translation: "purple" },
      { word: "rosado", translation: "pink" },
    ],
  },
  {
    id: "spanish-personal-care",
    name: "Spanish Personal Care & Grooming",
    category: "Languages",
    description:
      "Practice Spanish vocabulary related to personal care and grooming",
    variant: "four-choice",
    wordPairs: [
      { word: "acostarse", translation: "to go to bed" },
      { word: "afeitarse", translation: "to shave" },
      { word: "bañarse", translation: "to take a bath" },
      { word: "cepillarse", translation: "to brush" },
      { word: "cortarse el pelo", translation: "to cut one's hair" },
      { word: "despertarse", translation: "to wake up" },
      { word: "ducharse", translation: "to take a shower" },
      { word: "levantarse", translation: "to get up" },
      { word: "lavarse", translation: "to wash" },
      { word: "pedir prestado", translation: "to borrow" },
      { word: "pintarse", translation: "to paint" },
      { word: "ponerse", translation: "to put on" },
      { word: "preprararse", translation: "to get ready" },
      { word: "secarse", translation: "to dry" },
      { word: "vestirse", translation: "to get dressed" },
      { word: "el agua de colonia", translation: "cologne" },
      { word: "el cepillo", translation: "brush" },
      { word: "el cinturon", translation: "belt" },
      { word: "el desodorante", translation: "deodorant" },
      { word: "la ducha", translation: "shower" },
      { word: "el gel", translation: "gel" },
      { word: "las joyas", translation: "jewelry" },
      { word: "los labios", translation: "lips" },
      { word: "el maquillaje", translation: "make-up" },
      { word: "el peine", translation: "comb" },
      { word: "el pelo", translation: "hair" },
      { word: "el salon de belleza", translation: "beauty salon" },
      { word: "el secador", translation: "blow dryer" },
      { word: "la toalla", translation: "towel" },
      { word: "las uñas", translation: "nails" },
      { word: "arreglarse", translation: "to fix hair" },
    ],
  },
  {
    id: "spanish-shopping-terms",
    name: "Spanish Shopping Terms",
    category: "Languages",
    description: "Practice Spanish vocabulary related to shopping",
    variant: "four-choice",
    wordPairs: [
      { word: "la entrada", translation: "entrance" },
      { word: "la ganga", translation: "bargain" },
      { word: "el letrero", translation: "sign" },
      { word: "la liquidación", translation: "sale" },
      { word: "el mercado", translation: "market" },
      { word: "la salida", translation: "exit" },
      { word: "el cajero", translation: "cashier" },
      { word: "el cheque (personal)", translation: "personal check" },
      { word: "el cheque de viajero", translation: "traveler's check" },
      { word: "el cupón de regalo", translation: "gift certificate" },
      { word: "en efectivo", translation: "in cash" },
      { word: "el precio", translation: "price" },
      { word: "la marca", translation: "brand" },
      { word: "la talla", translation: "size" },
    ],
  },
  {
    id: "spanish-driving-terms",
    name: "Spanish Driving Terms",
    category: "languages",
    description:
      "practice spanish vocabulary related to driving and directions",
    variant: "four-choice",
    wordPairs: [
      { word: "la avenida", translation: "avenue" },
      { word: "el camión", translation: "truck" },
      { word: "la carretera", translation: "highway" },
      { word: "el conductor", translation: "driver" },
      { word: "el cruce de calles", translation: "intersection" },
      { word: "la cuadra", translation: "block" },
      { word: "la esquina", translation: "corner" },
      { word: "la estatua", translation: "statue" },
      { word: "la fuente", translation: "fountain" },
      { word: "el peatón", translation: "pedestrian" },
      { word: "el permiso de manejar", translation: "driver’s license" },
      { word: "la plaza", translation: "plaza" },
      { word: "el policía", translation: "police officer" },
      { word: "el puente", translation: "bridge" },
      { word: "poner una multa", translation: "to give a ticket" },
      { word: "el semáforo", translation: "stoplight" },
      { word: "la señal de parada", translation: "stop sign" },
      { word: "ancho, -a", translation: "wide" },
      { word: "¡basta!", translation: "enough!" },
      { word: "de acuerdo.", translation: "ok. agreed." },
      { word: "esperar", translation: "to wait" },
      { word: "estar seguro, -a", translation: "to be sure" },
      { word: "peligroso, -a", translation: "dangerous" },
      { word: "complicado, -a", translation: "complicated" },
      { word: "cruzar", translation: "to cross" },
      { word: "derecho", translation: "straight" },
      { word: "izquierdo", translation: "left" },
      { word: "despacio", translation: "slowly" },
      { word: "estrecho, -a", translation: "narrow" },
      { word: "quitar", translation: "to take away" },
    ],
  },
  {
    id: "spanish-conversational-connectors",
    name: "Spanish Conversational Connectors",
    category: "Languages",
    description: "Conversational connectors in Spanish",
    variant: "four-choice",
    wordPairs: [
      { word: "y", translation: "and" },
      { word: "pero", translation: "but" },
      { word: "o", translation: "or" },
      { word: "ni", translation: "nor" },
      { word: "para", translation: "for" },
      { word: "por", translation: "for" },
      { word: "así que", translation: "so" },
      { word: "todavía", translation: "yet" },
      { word: "aún", translation: "not yet" },
      { word: "por eso", translation: "that's why" },
      { word: "por lo visto", translation: "apparently" },
      { word: "ya que", translation: "since, now that" },
      { word: "por consiguiente", translation: "thus, therefore" },
      { word: "no creo que", translation: "I don't believe that" },
      { word: "para mí", translation: "for me, in my opinion" },
      { word: "que yo sepa", translation: "as far as I know" },
      { word: "además", translation: "moreover, additionally" },
      { word: "de todas formas", translation: "anyway" },
      { word: "aparte de", translation: "besides, except for" },
      { word: "tal como", translation: "such as" },
      { word: "a pesar de", translation: "in spite of" },
      { word: "aunque", translation: "even though" },
      { word: "en vez de", translation: "instead of" },
      { word: "sin embargo", translation: "nevertheless" },
      { word: "en concreto", translation: "specifically" },
      { word: "en pocas palabras", translation: "in a few words" },
      { word: "tan pronto como", translation: "as soon as" },
      { word: "primero que nada", translation: "first of all" },
      { word: "por último", translation: "finally" },
      { word: "mientras tanto", translation: "meanwhile" },
      { word: "hasta", translation: "until" },
      { word: "hasta que", translation: "before" },
      { word: "es decir", translation: "that is to say, in other words" },
      { word: "pues", translation: "since, well" },
      { word: "eso", translation: "that, like I said" },
      { word: "en fin", translation: "all in all" },
      { word: "o sea", translation: "in other words" },
      { word: "a ver", translation: "let's see" },
      { word: "digo", translation: "I mean, that is to say" },
      { word: "es que", translation: "the thing is" },
      { word: "bueno", translation: "well, good" },
    ],
  },

  {
  "id": "linux-commands-and-networking-ports-match",
  "name": "Linux Commands and Networking Ports Matching",
  "category": "Cybersecurity",
  "description": "Match Linux commands to their functions and networking ports to their protocols/services.",
  "variant": "four-choice",
  "wordPairs": [
    {
      "word": "cd",
      "translation": "Changes the current working directory."
    },
    {
      "word": "ls",
      "translation": "Lists files in a directory."
    },
    {
      "word": "ls -a",
      "translation": "Lists all files, including hidden ones."
    },
    {
      "word": "ls -l",
      "translation": "Lists files in a long format, showing details like permissions, ownership, and size."
    },
    {
      "word": "ls -R",
      "translation": "Lists the contents of directories recursively."
    },
    {
      "word": "rmdir",
      "translation": "Removes an empty directory."
    },
    {
      "word": "mkdir",
      "translation": "Creates a new directory."
    },
    {
      "word": "rm",
      "translation": "Removes files or directories."
    },
    {
      "word": "mv",
      "translation": "Moves or renames files and directories."
    },
    {
      "word": "cp",
      "translation": "Copies files and directories."
    },
    {
      "word": "cat",
      "translation": "Displays the contents of a file."
    },
    {
      "word": "grep",
      "translation": "Searches for patterns in files."
    },
    {
      "word": "touch",
      "translation": "Creates a new empty file or updates the timestamp of an existing file."
    },
    {
      "word": "nano",
      "translation": "A simple, easy-to-use text editor."
    },
    {
      "word": "vim",
      "translation": "A powerful, highly configurable text editor."
    },
    {
      "word": "history",
      "translation": "Displays a list of previously executed commands."
    },
    {
      "word": "pwd",
      "translation": "Prints the name of the current working directory."
    },
    {
      "word": "whoami",
      "translation": "Displays the effective username of the current user."
    },
    {
      "word": "head",
      "translation": "Displays the first few lines of a file."
    },
    {
      "word": "tail",
      "translation": "Displays the last few lines of a file."
    },
    {
      "word": "more",
      "translation": "Displays output one screen at a time."
    },
    {
      "word": "wc",
      "translation": "Counts lines, words, and characters in files."
    },
    {
      "word": "chmod",
      "translation": "Changes file permissions."
    },
    {
      "word": "chown",
      "translation": "Changes file ownership."
    },
    {
      "word": "ps",
      "translation": "Displays information about currently running processes."
    },
    {
      "word": "ps aux",
      "translation": "Displays all running processes on the system, including those of other users."
    },
    {
      "word": "uname",
      "translation": "Displays system information."
    },
    {
      "word": "date",
      "translation": "Displays or sets the system date and time."
    },
    {
      "word": "uptime",
      "translation": "Displays how long the system has been running."
    },
    {
      "word": "w",
      "translation": "Shows who is logged on and what they are doing."
    },
    {
      "word": "Port 20/21",
      "translation": "File Transfer Protocol (FTP)"
    },
    {
      "word": "Port 22",
      "translation": "Secure Shell (SSH)"
    },
    {
      "word": "Port 23",
      "translation": "Telnet remote login service"
    },
    {
      "word": "Port 25",
      "translation": "Simple Mail Transfer Protocol (SMTP)"
    },
    {
      "word": "Port 53",
      "translation": "Domain Name System (DNS)"
    },
    {
      "word": "Port 67/68",
      "translation": "Dynamic Host Configuration Protocol (DHCP)"
    },
    {
      "word": "Port 69",
      "translation": "Trivial File Transfer Protocol (TFTP)"
    },
    {
      "word": "Port 80",
      "translation": "Hypertext Transfer Protocol (HTTP)"
    },
    {
      "word": "Port 110",
      "translation": "Post Office Protocol version 3 (POP3)"
    },
    {
      "word": "Port 123",
      "translation": "Network Time Protocol (NTP)"
    },
    {
      "word": "Port 143",
      "translation": "Internet Message Access Protocol (IMAP)"
    },
    {
      "word": "Port 161/162",
      "translation": "Simple Network Management Protocol (SNMP)"
    },
    {
      "word": "Port 443",
      "translation": "HTTP Secure (HTTPS)"
    }
  ]
}
];
