import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const milestones = [
  {
    title: "Определение уровня знаний",
    description: "Начальная оценка ваших навыков английского языка",
  },
  {
    title: "Постановка целей",
    description: "Определение конкретных целей и сроков обучения",
  },
  {
    title: "Индивидуальная программа обучения",
    description: "Разработка персонализированного плана занятий",
  },
  {
    title: "Практика заданий",
    description: "Интенсивная подготовка к экзаменам",
  },
  {
    title: "Подготовка к экзамену",
    description: "Изучение математических концептов и практика задач",
  },
  {
    title: "Достижение результата",
    description: "Успешная сдача теста и четкое понимание",
  },
];

const Roadmap = () => {
  return (
      <section className="py-20 px-4 overflow-hidden bg-gradient-to-b from-background to-background/90" id="roadmap">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white font-montserrat">
            Ваш путь к успеху
          </h2>
          <p className="text-white/80 text-center mb-16 max-w-2xl mx-auto">
            Мы разработали четкую методику, которая гарантированно приведет вас к желаемому результату
          </p>

          <div className="relative">
            {/* Removed the horizontal gradient line here */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                  <div
                      key={index}
                      className={cn(
                          "relative p-6 rounded-lg border border-white/10 bg-background/50 backdrop-blur-sm",
                          "transform transition-all duration-300 hover:scale-105 hover:border-primary/50"
                      )}
                  >
                    <div className="absolute -top-3 left-6">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-2 mt-4 text-white font-montserrat">
                      {milestone.title}
                    </h3>
                    <p className="text-white/80">
                      {milestone.description}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default Roadmap;
