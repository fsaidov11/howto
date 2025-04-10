
import { Users, Clock, BookOpen, Award, Zap, Heart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Индивидуальный подход",
      description: "Программа обучения адаптируется под ваши цели, уровень и особенности восприятия"
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "Гибкость обучения",
      description: "Удобное расписание и формат занятий, подстраиваемся под ваш график"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-primary" />,
      title: "Практический подход",
      description: "Фокус на реальном использовании языка и решении задач вместо зубрежки"
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "Опытные преподаватели",
      description: "Команда с многолетним опытом подготовки к международным экзаменам"
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Быстрый результат",
      description: "Эффективные методики обучения для достижения целей в сжатые сроки"
    },
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Поддержка 24/7",
      description: "Всегда на связи для помощи и консультаций по любым вопросам"
    }
  ];

  return (
    <div className="py-24 bg-background" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
            Почему выбирают нас
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto font-montserrat">
            Мы закрываем все боли, связанные с изучением английского языка и подготовкой к экзаменам
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-200 hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 font-montserrat">
                  {feature.title}
                </h3>
                <p className="text-white/80 font-montserrat">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
