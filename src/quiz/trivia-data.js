import he from "he";

let triviaData = [
  {
    category: "Science: Mathematics",
    type: "multiple",
    difficulty: "medium",
    question: "In the hexadecimal system, what number comes after 9?",
    correct_answer: "The Letter A",
    incorrect_answers: ["10", "The Number 0", "16"],
  },
  {
    category: "Science: Mathematics",
    type: "multiple",
    difficulty: "hard",
    question: "What is the derivative of Acceleration with respect to time?",
    correct_answer: "Jerk",
    incorrect_answers: ["Shift", "Bump", "Slide"],
  },
  {
    category: "Science: Mathematics",
    type: "multiple",
    difficulty: "hard",
    question: "What is the approximate value of mathematical constant e?",
    correct_answer: "2.72",
    incorrect_answers: ["3.14", "1.62", "1.41"],
  },
  {
    category: "Science: Mathematics",
    type: "multiple",
    difficulty: "easy",
    question: "In Roman Numerals, what does XL equate to?",
    correct_answer: "40",
    incorrect_answers: ["60", "15", "90"],
  },
  {
    category: "Science: Mathematics",
    type: "multiple",
    difficulty: "easy",
    question: "How many sides does a heptagon have?",
    correct_answer: "7",
    incorrect_answers: ["8", "6", "5"],
  },
  {
    category: "Science: Mathematics",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these numbers is closest to the total number of possible states for an army standard Enigma Machine?",
    correct_answer: "1.58 x 10^20",
    incorrect_answers: ["1.58 x 10^22", "1.58 x  10^18", "1.58 x 10^24"],
  },
  {
    category: "Science: Mathematics",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which greek mathematician ran through the streets of Syracuse naked while shouting &quot;Eureka&quot; after discovering the principle of displacement?",
    correct_answer: "Archimedes",
    incorrect_answers: ["Euclid", "Homer", "Eratosthenes"],
  },
  {
    category: "Science: Mathematics",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following famous mathematicians died in a duel at the age of 20?",
    correct_answer: "Galois",
    incorrect_answers: ["Abel", "Euler", "Gauss"],
  },
  {
    category: "Science: Mathematics",
    type: "multiple",
    difficulty: "medium",
    question: "How many books are in Euclid&#039;s Elements of Geometry?",
    correct_answer: "13",
    incorrect_answers: ["8", "10", "17"],
  },
  {
    category: "Science: Mathematics",
    type: "multiple",
    difficulty: "hard",
    question:
      "The notion of a &quot;set that contains all sets which do not contain themselves&quot; is a paradoxical idea attributed to which English philospher?",
    correct_answer: "Bertrand Russel",
    incorrect_answers: [
      "Francis Bacon",
      "John Locke",
      "Alfred North Whitehead",
    ],
  },
];

triviaData = triviaData.map((item) => {
  return {
    ...item,
    question: he.decode(item.question),
    correct_answer: he.decode(item.correct_answer),
    incorrect_answers: item.incorrect_answers.map((incorrect) =>
      he.decode(incorrect)
    ),
  };
});

export default triviaData;
