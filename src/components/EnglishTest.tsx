import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

const questions = [
  {
    question: "Choose the correct word to complete the sentence: 'I ______ to the store yesterday.'",
    options: ["go", "went", "have gone", "goes"],
    correct: 1,
  },
  {
    question: "What is the plural form of 'mouse'?",
    options: ["mouses", "mices", "mice", "mouse"],
    correct: 2,
  },
  {
    question: "Fill in the blank: 'She ______ her homework before watching TV.'",
    options: ["finish", "finished", "has finished", "finishes"],
    correct: 2,
  },
  {
    question: "Which word is a synonym for 'happy'?",
    options: ["Sad", "Joyful", "Angry", "Tired"],
    correct: 1,
  },
  {
    question: "Choose the correct preposition: 'He is interested ______ learning new languages.'",
    options: ["on", "in", "at", "by"],
    correct: 1,
  },
  {
    question: "What is the correct form? 'If I ______ you, I would apologize.'",
    options: ["am", "was", "were", "had been"],
    correct: 2,
  },
  {
    question: "Which sentence is grammatically correct?",
    options: [
      "She don't like coffee.",
      "She doesn't likes coffee.",
      "She doesn't like coffee.",
      "She not like coffee.",
    ],
    correct: 2,
  },
  {
    question: "Choose the correct article: 'I saw ______ elephant at the zoo.'",
    options: ["a", "an", "the", "no article"],
    correct: 1,
  },
  {
    question: "What is the past tense of 'teach'?",
    options: ["teached", "taught", "teach", "teacheded"],
    correct: 1,
  },
  {
    question: "Which word fits? 'He is ______ than his brother.'",
    options: ["more tall", "tallest", "taller", "tall"],
    correct: 2,
  },
  {
    question: "Identify the correct sentence:",
    options: [
      "There is much apples on the table.",
      "There are many apples on the table.",
      "There is a lot apples on the table.",
      "There are a lot apple on the table.",
    ],
    correct: 1,
  },
  {
    question: "Choose the correct answer: 'They have lived in this house ______ 10 years.'",
    options: ["since", "for", "from", "during"],
    correct: 1,
  },
  {
    question: "What is the comparative form of 'good'?",
    options: ["gooder", "better", "more good", "the good"],
    correct: 1,
  },
  {
    question: "Which sentence uses the correct punctuation?",
    options: [
      "Its a beautiful day, isn't it?",
      "It's a beautiful day isn't it?",
      "It's a beautiful day, isn't it?",
      "Its a beautiful day isn't it?",
    ],
    correct: 2,
  },
  {
    question: "Choose the correct form: 'By the time she arrived, they ______.'",
    options: ["had left", "left", "have left", "were leaving"],
    correct: 0,
  },
];

const EnglishTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
      <section className="py-20 px-4" id="test">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
            Проверьте свой уровень английского
          </h2>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              {!showResults ? (
                  <>
                    <Progress value={progress} className="mb-8" />

                    <h3 className="text-xl font-semibold mb-6 text-white">
                      {questions[currentQuestion].question}
                    </h3>

                    <div className="space-y-4">
                      {questions[currentQuestion].options.map((option, index) => (
                          <Button
                              key={index}
                              variant="outline"
                              className="w-full justify-start text-left hover:bg-white/10"
                              onClick={() => handleAnswer(index)}
                          >
                            {option}
                          </Button>
                      ))}
                    </div>
                  </>
              ) : (
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      Ваш результат: {Math.round((score / questions.length) * 100)}%
                    </h3>

                    <p className="text-white/80 mb-8">
                      {score > questions.length * 0.7
                          ? "Отличный результат! Вы готовы к продвинутому уровню."
                          : "Хороший старт! Давайте улучшим ваши навыки вместе."}
                    </p>

                    <Button
                        className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                        onClick={() => window.location.href = "#contact"}
                    >
                      Записаться на консультацию
                    </Button>
                  </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
  );
};

export default EnglishTest;