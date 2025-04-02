
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
  difficulty: 'easy' | 'medium' | 'hard';
  subject: 'algebra' | 'geometry' | 'arithmetic';
  concept: string;
}

const initialQuestions: Question[] = [
  {
    id: 1,
    question: "Решите уравнение: 2x + 5 = 15",
    options: ["x = 5", "x = 10", "x = 7.5", "x = 5.5"],
    correct: 0,
    difficulty: "easy",
    subject: "algebra",
    concept: "linear equations"
  },
  {
    id: 2,
    question: "Найдите площадь квадрата со стороной 6 см",
    options: ["30 см²", "36 см²", "24 см²", "12 см²"],
    correct: 1,
    difficulty: "easy",
    subject: "geometry",
    concept: "area of shapes"
  },
  {
    id: 3,
    question: "Сколько будет 15% от 80?",
    options: ["12", "8", "15", "10"],
    correct: 0,
    difficulty: "easy",
    subject: "arithmetic",
    concept: "percentages"
  },
  {
    id: 4,
    question: "Упростите выражение: 2(3x - 4) + 5x",
    options: ["11x - 8", "11x - 4", "6x - 8", "11x + 8"],
    correct: 0,
    difficulty: "medium",
    subject: "algebra",
    concept: "algebraic expressions"
  },
  {
    id: 5,
    question: "Найдите значение выражения: 3³ × 3²",
    options: ["243", "81", "27", "729"],
    correct: 0,
    difficulty: "medium",
    subject: "arithmetic",
    concept: "exponents"
  },
  {
    id: 6,
    question: "Найдите периметр равностороннего треугольника со стороной 8 см",
    options: ["24 см", "32 см", "16 см", "64 см"],
    correct: 0,
    difficulty: "easy",
    subject: "geometry",
    concept: "perimeter"
  },
  {
    id: 7,
    question: "Решите систему уравнений: { x + y = 7\n{ x - y = 3",
    options: ["x = 5, y = 2", "x = 2, y = 5", "x = 4, y = 3", "x = 3, y = 4"],
    correct: 0,
    difficulty: "medium",
    subject: "algebra",
    concept: "systems of equations"
  },
  {
    id: 8,
    question: "Какое число нужно прибавить к числителю и знаменателю дроби 3/4, чтобы получить дробь 4/5?",
    options: ["1", "5", "4", "2"],
    correct: 0,
    difficulty: "hard",
    subject: "arithmetic",
    concept: "fractions"
  },
  {
    id: 9,
    question: "Найдите объем куба с ребром 5 см",
    options: ["125 см³", "25 см³", "75 см³", "100 см³"],
    correct: 0,
    difficulty: "medium",
    subject: "geometry",
    concept: "volume"
  },
  {
    id: 10,
    question: "Решите уравнение: x² - 9 = 0",
    options: ["x = ±3", "x = 3", "x = -3", "x = 9"],
    correct: 0,
    difficulty: "medium",
    subject: "algebra",
    concept: "quadratic equations"
  },
];

const MathTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes
  const [testStarted, setTestStarted] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    grade: "5"
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
      algebra: { correct: 0, total: 0 },
      geometry: { correct: 0, total: 0 },
      arithmetic: { correct: 0, total: 0 }
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

  if (!testStarted) {
    return (
      <section className="py-20 px-4 relative" id="math-test">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
            Диагностический тест по математике
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
                  <label className="text-[#D3E4FD] block mb-2" htmlFor="grade">
                    Класс
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    className="w-full p-2 border border-white/20 rounded bg-white/5 text-white"
                    value={userInfo.grade}
                    onChange={handleUserInfoChange}
                  >
                    {[5, 6, 7, 8, 9, 10, 11].map((grade) => (
                      <option key={grade} value={grade}>
                        {grade} класс
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mb-4 text-[#F2FCE2]">
                <p className="mb-2">Тест содержит 10 вопросов разной сложности:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Алгебра</li>
                  <li>Геометрия</li>
                  <li>Арифметика</li>
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
    <section className="py-20 px-4 relative" id="math-test">
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Диагностический тест по математике
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
                    {initialQuestions[currentQuestion].difficulty === "easy" 
                      ? "Легкий" 
                      : initialQuestions[currentQuestion].difficulty === "medium" 
                        ? "Средний" 
                        : "Сложный"} • {
                      initialQuestions[currentQuestion].subject === "algebra" 
                        ? "Алгебра" 
                        : initialQuestions[currentQuestion].subject === "geometry" 
                          ? "Геометрия" 
                          : "Арифметика"
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

                  <div className="mb-8 p-4 bg-white/5 rounded-lg text-left">
                    <h4 className="text-[#E5DEFF] font-semibold mb-2">Результаты по разделам:</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="text-[#D3E4FD]">Алгебра:</span>
                        <span className="text-[#F2FCE2]">
                          {performanceBySector.algebra.correct} из {performanceBySector.algebra.total} 
                          ({Math.round((performanceBySector.algebra.correct / performanceBySector.algebra.total) * 100) || 0}%)
                        </span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-[#D3E4FD]">Геометрия:</span>
                        <span className="text-[#F2FCE2]">
                          {performanceBySector.geometry.correct} из {performanceBySector.geometry.total}
                          ({Math.round((performanceBySector.geometry.correct / performanceBySector.geometry.total) * 100) || 0}%)
                        </span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-[#D3E4FD]">Арифметика:</span>
                        <span className="text-[#F2FCE2]">
                          {performanceBySector.arithmetic.correct} из {performanceBySector.arithmetic.total}
                          ({Math.round((performanceBySector.arithmetic.correct / performanceBySector.arithmetic.total) * 100) || 0}%)
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
                      ? "Отличный результат! Вы демонстрируете хорошее понимание математических концепций."
                      : score > initialQuestions.length * 0.4
                      ? "Хороший результат! Есть некоторые области, которые требуют дополнительной практики."
                      : "У вас есть хорошая основа, но мы рекомендуем дополнительные занятия для улучшения ваших навыков."}
                  </p>

                  <Button
                    variant="outline" 
                    className="border-white/20 hover:bg-white/5 text-white w-full"
                    onClick={() => window.location.href = "#contact"}
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
                            question.difficulty === "easy" 
                              ? "Легкий" 
                              : question.difficulty === "medium" 
                                ? "Средний" 
                                : "Сложный"} • {
                            question.subject === "algebra" 
                              ? "Алгебра" 
                              : question.subject === "geometry" 
                                ? "Геометрия" 
                                : "Арифметика"
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

export default MathTest;
