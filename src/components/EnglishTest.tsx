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
  // Add more questions here
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