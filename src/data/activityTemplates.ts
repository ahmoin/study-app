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
];
