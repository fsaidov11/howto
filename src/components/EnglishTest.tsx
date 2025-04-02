
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, BarChart } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  subject: 'grammar' | 'vocabulary' | 'reading';
  concept: string;
}

const initialQuestions: Question[] = [
  {
    id: 1,
    question: "Choose the correct word to complete the sentence: 'I ______ to the store yesterday.'",
    options: ["go", "went", "have gone", "goes"],
    correct: 1,
    difficulty: "beginner",
    subject: "grammar",
    concept: "past simple tense"
  },
  {
    id: 2,
    question: "What is the plural form of 'mouse'?",
    options: ["mouses", "mices", "mice", "mouse"],
    correct: 2,
    difficulty: "beginner",
    subject: "grammar",
    concept: "irregular plurals"
  },
  {
    id: 3,
    question: "Fill in the blank: 'She ______ her homework before watching TV.'",
    options: ["finish", "finished", "has finished", "finishes"],
    correct: 2,
    difficulty: "intermediate",
    subject: "grammar",
    concept: "perfect tenses"
  },
  {
    id: 4,
    question: "Which word is a synonym for 'happy'?",
    options: ["Sad", "Joyful", "Angry", "Tired"],
    correct: 1,
    difficulty: "beginner",
    subject: "vocabulary",
    concept: "synonyms"
  },
  {
    id: 5,
    question: "Choose the correct preposition: 'He is interested ______ learning new languages.'",
    options: ["on", "in", "at", "by"],
    correct: 1,
    difficulty: "intermediate",
    subject: "grammar",
    concept: "prepositions"
  },
  {
    id: 6,
    question: "What is the correct form? 'If I ______ you, I would apologize.'",
    options: ["am", "was", "were", "had been"],
    correct: 2,
    difficulty: "advanced",
    subject: "grammar",
    concept: "conditionals"
  },
  {
    id: 7,
    question: "Which sentence is grammatically correct?",
    options: [
      "She don't like coffee.",
      "She doesn't likes coffee.",
      "She doesn't like coffee.",
      "She not like coffee.",
    ],
    correct: 2,
    difficulty: "beginner",
    subject: "grammar",
    concept: "present simple negatives"
  },
  {
    id: 8,
    question: "Choose the correct article: 'I saw ______ elephant at the zoo.'",
    options: ["a", "an", "the", "no article"],
    correct: 1,
    difficulty: "beginner",
    subject: "grammar",
    concept: "articles"
  },
  {
    id: 9,
    question: "What is the past tense of 'teach'?",
    options: ["teached", "taught", "teach", "teacheded"],
    correct: 1,
    difficulty: "intermediate",
    subject: "vocabulary",
    concept: "irregular verbs"
  },
  {
    id: 10,
    question: "Which word fits? 'He is ______ than his brother.'",
    options: ["more tall", "tallest", "taller", "tall"],
    correct: 2,
    difficulty: "intermediate",
    subject: "grammar",
    concept: "comparatives"
  },
  {
    id: 11,
    question: "Identify the correct sentence:",
    options: [
      "There is much apples on the table.",
      "There are many apples on the table.",
      "There is a lot apples on the table.",
      "There are a lot apple on the table.",
    ],
    correct: 1,
    difficulty: "intermediate",
    subject: "grammar",
    concept: "countable/uncountable nouns"
  },
  {
    id: 12,
    question: "Choose the correct answer: 'They have lived in this house ______ 10 years.'",
    options: ["since", "for", "from", "during"],
    correct: 1,
    difficulty: "intermediate",
    subject: "grammar",
    concept: "prepositions of time"
  },
  {
    id: 13,
    question: "What is the comparative form of 'good'?",
    options: ["gooder", "better", "more good", "the good"],
    correct: 1,
    difficulty: "beginner",
    subject: "grammar",
    concept: "irregular comparatives"
  },
  {
    id: 14,
    question: "Which sentence uses the correct punctuation?",
    options: [
      "Its a beautiful day, isn't it?",
      "It's a beautiful day isn't it?",
      "It's a beautiful day, isn't it?",
      "Its a beautiful day isn't it?",
    ],
    correct: 2,
    difficulty: "intermediate", 
    subject: "grammar",
    concept: "punctuation"
  },
  {
    id: 15,
    question: "Choose the correct form: 'By the time she arrived, they ______.'",
    options: ["had left", "left", "have left", "were leaving"],
    correct: 0,
    difficulty: "advanced",
    subject: "grammar",
    concept: "past perfect tense"
  },
];

const EnglishTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes
  const [testStarted, setTestStarted] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    level: "beginner"
  });

  useEffect(() => {
    let timer: number | undefined;
    if (testStarted && !showResults && timeRemaining > 0) {
      timer = window.setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && !showResults) {
      setShowResults(true);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [testStarted, showResults, timeRemaining]);

  const handleStartTest = () => {
    if (userInfo.name && userInfo.email) {
      setTestStarted(true);
    } else {
      alert("Пожалуйста, заполните свое имя и email");
    }
  };

  const handleAnswer = (selectedOption: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = selectedOption;
    setUserAnswers(newAnswers);

    if (currentQuestion + 1 < initialQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === initialQuestions[index].correct) {
        score++;
      }
    });
    return score;
  };

  const getPerformanceBySector = () => {
    const sectors = {
      grammar: { correct: 0, total: 0 },
      vocabulary: { correct: 0, total: 0 },
      reading: { correct: 0, total: 0 }
    };

    initialQuestions.forEach((question, index) => {
      const subject = question.subject;
      sectors[subject].total++;
      
      if (userAnswers[index] === question.correct) {
        sectors[subject].correct++;
      }
    });

    return sectors;
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const progress = ((currentQuestion + 1) / initialQuestions.length) * 100;
  const score = calculateScore();
  const performanceBySector = getPerformanceBySector();

  const handleUserInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const sendResultsEmail = () => {
    // In a real application, this would make an API call to the backend
    // to send an email with the test results
    alert("Результаты теста были отправлены на ваш email и команде HowTo.School");
  };

  const determineEnglishLevel = () => {
    const percentage = (score / initialQuestions.length) * 100;
    if (percentage >= 80) return "Advanced (C1-C2)";
    if (percentage >= 60) return "Upper-Intermediate (B2)";
    if (percentage >= 40) return "Intermediate (B1)";
    if (percentage >= 20) return "Pre-Intermediate (A2)";
    return "Beginner (A1)";
  };

  if (!testStarted) {
    return (
      <section className="py-20 px-4 relative" id="english-test">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
            Диагностический тест по английскому языку
          </h2>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-[#E5DEFF]">
                Заполните информацию, чтобы начать тест
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-[#D3E4FD] block mb-2" htmlFor="name">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border border-white/20 rounded bg-white/5 text-white"
                    value={userInfo.name}
                    onChange={handleUserInfoChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="text-[#D3E4FD] block mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-white/20 rounded bg-white/5 text-white"
                    value={userInfo.email}
                    onChange={handleUserInfoChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="text-[#D3E4FD] block mb-2" htmlFor="level">
                    Ваш уровень английского
                  </label>
                  <select
                    id="level"
                    name="level"
                    className="w-full p-2 border border-white/20 rounded bg-white/5 text-white"
                    value={userInfo.level}
                    onChange={handleUserInfoChange}
                  >
                    <option value="beginner">Начальный (A1-A2)</option>
                    <option value="intermediate">Средний (B1-B2)</option>
                    <option value="advanced">Продвинутый (C1-C2)</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-4 text-[#F2FCE2]">
                <p className="mb-2">Тест содержит 15 вопросов разной сложности:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Грамматика</li>
                  <li>Лексика</li>
                  <li>Чтение</li>
                </ul>
              </div>
              
              <div className="mb-6 text-[#FDE1D3]">
                <p>На выполнение теста отводится 10 минут. Ваши результаты помогут нам определить ваш текущий уровень и составить индивидуальный план обучения.</p>
              </div>
              
              <Button
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                onClick={handleStartTest}
              >
                Начать тест
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 relative" id="english-test">
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Диагностический тест по английскому языку
        </h2>

        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardContent className="p-6">
            {!showResults ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-[#E5DEFF]">
                    Вопрос {currentQuestion + 1} из {initialQuestions.length}
                  </div>
                  <div className="text-[#FDE1D3]">
                    Осталось времени: {formatTime(timeRemaining)}
                  </div>
                </div>
                
                <Progress value={progress} className="mb-8" />

                <div className="p-4 bg-white/5 rounded-lg mb-6">
                  <div className="text-xs text-[#D3E4FD] mb-1">
                    {initialQuestions[currentQuestion].difficulty === "beginner" 
                      ? "Начальный" 
                      : initialQuestions[currentQuestion].difficulty === "intermediate" 
                        ? "Средний" 
                        : "Продвинутый"} • {
                      initialQuestions[currentQuestion].subject === "grammar" 
                        ? "Грамматика" 
                        : initialQuestions[currentQuestion].subject === "vocabulary" 
                          ? "Лексика" 
                          : "Чтение"
                    }
                  </div>
                  <h3 className="text-xl font-semibold text-[#E5DEFF] whitespace-pre-wrap">
                    {initialQuestions[currentQuestion].question}
                  </h3>
                </div>

                <div className="space-y-4">
                  {initialQuestions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start text-left hover:bg-white/10 text-[#D3E4FD]"
                      onClick={() => handleAnswer(index)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </>
            ) : (
              <div className={`${showAnalysis ? "hidden" : "block"}`}>
                <div className="text-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Результат теста" 
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-2 border-primary"
                  />
                  
                  <h3 className="text-2xl font-bold mb-4 text-[#FDE1D3]">
                    Ваш результат: {score} из {initialQuestions.length} ({Math.round((score / initialQuestions.length) * 100)}%)
                  </h3>

                  <div className="text-xl text-[#E5DEFF] mb-4">
                    Ваш уровень: {determineEnglishLevel()}
                  </div>

                  <div className="mb-8 p-4 bg-white/5 rounded-lg text-left">
                    <h4 className="text-[#E5DEFF] font-semibold mb-2">Результаты по разделам:</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="text-[#D3E4FD]">Грамматика:</span>
                        <span className="text-[#F2FCE2]">
                          {performanceBySector.grammar.correct} из {performanceBySector.grammar.total} 
                          ({Math.round((performanceBySector.grammar.correct / performanceBySector.grammar.total) * 100) || 0}%)
                        </span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-[#D3E4FD]">Лексика:</span>
                        <span className="text-[#F2FCE2]">
                          {performanceBySector.vocabulary.correct} из {performanceBySector.vocabulary.total}
                          ({Math.round((performanceBySector.vocabulary.correct / performanceBySector.vocabulary.total) * 100) || 0}%)
                        </span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-[#D3E4FD]">Чтение:</span>
                        <span className="text-[#F2FCE2]">
                          {performanceBySector.reading.correct} из {performanceBySector.reading.total}
                          ({Math.round((performanceBySector.reading.correct / performanceBySector.reading.total) * 100) || 0}%)
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <Button
                      className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                      onClick={() => setShowAnalysis(true)}
                    >
                      <BarChart className="w-4 h-4 mr-2" />
                      Подробный анализ
                    </Button>
                    
                    <Button
                      variant="outline" 
                      className="border-white/20 hover:bg-white/5 text-white"
                      onClick={sendResultsEmail}
                    >
                      Получить результаты на email
                    </Button>
                  </div>

                  <p className="text-[#F2FCE2] mb-4">
                    {score > initialQuestions.length * 0.7
                      ? "Отличный результат! Вы демонстрируете хорошее понимание английского языка."
                      : score > initialQuestions.length * 0.4
                      ? "Хороший результат! Есть некоторые области, которые требуют дополнительной практики."
                      : "У вас есть хорошая основа, но мы рекомендуем дополнительные занятия для улучшения ваших навыков."}
                  </p>

                  <Button
                    variant="outline" 
                    className="border-white/20 hover:bg-white/5 text-white w-full"
                    onClick={() => window.location.href = "/contact"}
                  >
                    Записаться на консультацию
                  </Button>
                </div>
              </div>
            )}
            
            {showResults && showAnalysis && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-[#E5DEFF]">Подробный анализ</h3>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-white/20 hover:bg-white/5 text-white"
                    onClick={() => setShowAnalysis(false)}
                  >
                    Назад к результатам
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {initialQuestions.map((question, index) => (
                    <div key={index} className="p-4 rounded-lg bg-white/5">
                      <div className="flex justify-between mb-2">
                        <span className="text-xs text-[#D3E4FD]">
                          Вопрос {index + 1} • {
                            question.difficulty === "beginner" 
                              ? "Начальный" 
                              : question.difficulty === "intermediate" 
                                ? "Средний" 
                                : "Продвинутый"} • {
                            question.subject === "grammar" 
                              ? "Грамматика" 
                              : question.subject === "vocabulary" 
                                ? "Лексика" 
                                : "Чтение"
                          }
                        </span>
                        {userAnswers[index] === question.correct ? (
                          <span className="flex items-center text-green-400">
                            <Check className="w-4 h-4 mr-1" /> Верно
                          </span>
                        ) : (
                          <span className="flex items-center text-red-400">
                            <X className="w-4 h-4 mr-1" /> Неверно
                          </span>
                        )}
                      </div>
                      
                      <p className="text-[#E5DEFF] font-medium mb-3">{question.question}</p>
                      
                      <div className="space-y-2">
                        {question.options.map((option, optIndex) => (
                          <div 
                            key={optIndex} 
                            className={`p-2 rounded text-sm ${
                              optIndex === question.correct
                                ? "bg-green-500/20 border border-green-500/50 text-green-200"
                                : optIndex === userAnswers[index] && optIndex !== question.correct
                                  ? "bg-red-500/20 border border-red-500/50 text-red-200"
                                  : "bg-white/5 text-[#D3E4FD]"
                            }`}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-3 text-xs text-[#F2FCE2]">
                        <p>Концепция: {question.concept}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                    onClick={sendResultsEmail}
                  >
                    Получить детальный анализ на email
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EnglishTest;
